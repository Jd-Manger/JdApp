---
name: Executive Talent System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#23005c'
  on-tertiary-container: '#9466ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
  sidebar-width: 280px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system is engineered for a premium HR SaaS environment, focusing on clarity, efficiency, and professional trust. The brand personality is authoritative yet modern—positioning the platform as a high-performance tool for recruitment professionals. 

The visual style follows a **Corporate / Modern** aesthetic with **Minimalist** influences. It prioritizes high-contrast legibility against a sterile white environment, utilizing subtle depth to organize complex data. The emotional response should be one of "controlled productivity," where the interface recedes to let candidate data and job descriptions take center stage.

## Colors

The palette is anchored by a deep Navy (`#0F172A`) for primary text and navigation, providing a grounded, institutional feel. The clean White background is essential for maintaining the minimalist aesthetic and reducing cognitive load during long periods of use.

A soft Blue (`#3B82F6`) serves as the primary action color, while the Blue-to-Purple gradient is reserved for high-impact brand moments, such as "Create New JD" buttons or premium feature highlights. Status colors (Green, Yellow, Gray) are desaturated slightly to remain professional and avoid a "vibrant consumer" look.

## Typography

The design system utilizes **Inter** for all roles to leverage its exceptional legibility and systematic feel. Headlines use a tight letter-spacing and semi-bold weights to appear modern and "designed." 

Body copy is primarily set at 14px (`body-md`) for data-heavy views like tables and JD editors, ensuring a high information density without sacrificing readability. Labels use an uppercase transform and increased tracking to differentiate them from interactive text.

## Layout & Spacing

This design system employs a **Fluid Grid** with fixed-width constraints for readability. The layout is structured around a persistent sidebar on desktop, which collapses into a hamburger menu on mobile.

The spacing rhythm follows an 8px base unit. Data tables and card lists should utilize "stack-md" (16px) for internal padding to maintain a breathable, premium feel. On mobile, margins reduce to 16px to maximize horizontal space for text-heavy job descriptions.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 

1. **Base Layer:** The main canvas is `#FFFFFF`.
2. **Mid Layer:** Subtle `#F8FAFC` backgrounds are used for the sidebar and inactive card containers to create a "recessed" look.
3. **Top Layer:** Active cards and modals use a pure white surface with a "Soft Ambient Shadow" (0px 4px 20px rgba(15, 23, 42, 0.05)). This creates a "lifted" effect that signifies interactivity. 

Avoid heavy borders; use 1px strokes in a very light gray (`#E2E8F0`) only when necessary to define boundaries between similar white elements.

## Shapes

The design system uses a "Rounded" (0.5rem) baseline for standard elements like input fields and small buttons. However, **Cards** and primary containers are more pronounced at 12px-16px (`rounded-lg` and `rounded-xl`) to soften the professional tone and give it a "SaaS-native" look. Skill chips and status badges utilize a full pill-shape (999px) to distinguish them as discrete metadata units.

## Components

### Buttons
- **Primary:** Solid `#0F172A` with white text.
- **Action/Accent:** Linear gradient (Blue to Purple) for "Create" or "Publish" actions.
- **Ghost:** No background, `#64748B` text, appearing on hover with a `#F8FAFC` tint.

### Status Badges
- **Active:** Soft green background (`#DCFCE7`) with deep green text (`#166534`).
- **Draft:** Soft yellow background (`#FEF9C3`) with amber text (`#92400E`).
- **Archived:** Soft gray background (`#F1F5F9`) with slate text (`#475569`).

### Data Tables
Tables are borderless. The header row uses the `#F8FAFC` background and `label-md` typography. Rows transition to a very subtle blue tint on hover to assist with horizontal eye-tracking.

### Cards & Chips
Cards should have 24px internal padding. Skill chips are small, using a `#F1F5F9` background and `body-sm` text, providing a neutral "tag" look that doesn't compete with primary status badges.

### Input Fields
Inputs use a 1px border (`#E2E8F0`) and 8px rounded corners. Focus states should use a 2px `#3B82F6` ring with a slight offset.