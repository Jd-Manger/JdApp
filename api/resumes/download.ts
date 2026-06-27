import { get } from '@vercel/blob';

declare const process: { env: Record<string, string | undefined> };

const json = (res: any, status: number, body: unknown) => {
  res.statusCode = status;
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(body));
};

const cleanName = (value: unknown) =>
  String(value || 'resume')
    .replace(/[\\/:*?"<>|]+/g, '-')
    .slice(0, 120);

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') return json(res, 405, { error: 'Method not allowed' });
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return json(res, 500, { error: 'BLOB_READ_WRITE_TOKEN is missing in Vercel environment variables.' });
  }

  const pathname = String(req.query?.pathname || '');
  const filename = cleanName(req.query?.filename);

  if (!pathname.startsWith('clients/') || !pathname.includes('/jds/') || !pathname.includes('/resumes/')) {
    return json(res, 400, { error: 'Invalid resume path.' });
  }

  try {
    const blob = await get(pathname, { access: 'private', token: process.env.BLOB_READ_WRITE_TOKEN });
    if (!blob || blob.statusCode !== 200 || !blob.stream) return json(res, 404, { error: 'Resume not found.' });

    res.statusCode = 200;
    res.setHeader('content-type', blob.blob.contentType || 'application/octet-stream');
    res.setHeader('content-length', String(blob.blob.size));
    res.setHeader('content-disposition', `attachment; filename="${filename}"`);

    const reader = blob.stream.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
    res.end();
  } catch (error) {
    return json(res, 500, {
      error: error instanceof Error ? error.message : 'Resume download failed',
    });
  }
}
