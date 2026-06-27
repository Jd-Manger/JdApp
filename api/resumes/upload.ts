import { handleUpload } from '@vercel/blob/client';

declare const process: { env: Record<string, string | undefined> };

const MAX_RESUME_BYTES = 25 * 1024 * 1024;
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/octet-stream',
];

const safePart = (value: unknown) =>
  String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 90) || 'item';

const json = (res: any, status: number, body: unknown) => {
  res.statusCode = status;
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(body));
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return json(res, 500, { error: 'BLOB_READ_WRITE_TOKEN is missing in Vercel environment variables.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const result = await handleUpload({
      request: req,
      body,
      token: process.env.BLOB_READ_WRITE_TOKEN,
      onBeforeGenerateToken: async (pathname, clientPayload, multipart) => {
        const payload = JSON.parse(clientPayload || '{}');
        const companyPrefix = `${safePart(payload.companyId)}-${safePart(payload.companyName)}`;
        const jdPrefix = `${safePart(payload.jdId)}-${safePart(payload.jdTitle)}`;
        const allowedPrefix = `clients/${companyPrefix}/jds/${jdPrefix}/resumes/`;

        if (!pathname.startsWith(allowedPrefix)) {
          throw new Error('Invalid resume upload destination.');
        }

        return {
          allowedContentTypes: ALLOWED_TYPES,
          maximumSizeInBytes: MAX_RESUME_BYTES,
          addRandomSuffix: false,
          allowOverwrite: false,
          validUntil: Date.now() + 10 * 60 * 1000,
          tokenPayload: JSON.stringify({
            companyId: payload.companyId,
            jdId: payload.jdId,
            fileKey: payload.fileKey,
            originalName: payload.originalName,
            multipart,
          }),
        };
      },
      onUploadCompleted: async () => {},
    });

    return json(res, 200, result);
  } catch (error) {
    return json(res, 400, {
      error: error instanceof Error ? error.message : 'Resume upload failed',
    });
  }
}
