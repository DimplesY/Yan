# Resume Page Design

## Summary

Create a new online resume page at `/resume` for Yan Jie. This page should be independent from the existing home page, with no navigation entry added elsewhere in the site. The page is optimized for online reading rather than A4 printing or PDF export.

## Goals

- Present Yan Jie as a frontend engineer with strong engineering, visualization, and cross-platform delivery experience.
- Make the page feel like a crafted online dossier rather than a plain document dump.
- Preserve the site's existing dark visual language while making the resume page feel denser, sharper, and more editorial.
- Keep the content easy to maintain by separating structured resume data from page layout code.

## Non-Goals

- Do not replace the current `/` home page.
- Do not add a navigation link to the new page.
- Do not implement print-specific layout or PDF export.
- Do not build an admin editor or CMS-backed content flow.

## Approved Direction

The page will follow an editorial resume layout:

- A polished dark background with subtle atmospheric treatment instead of a flat dark canvas
- A centered document-like content column
- Strong hierarchy for name, role, contact details, and quantified achievements
- Long-form single-page scrolling with light motion and no heavy interactive behavior

## Information Architecture

The page is a single scrollable document with four primary sections.

### 1. Hero

Purpose: make the viewer understand who Yan Jie is within a few seconds.

Content priority:

1. `颜杰`
2. `前端工程师`
3. Experience and background summary such as `3年经验 / 软件工程 / 全日制本科 / 长沙`
4. Contact information: blog, GitHub, email, phone, WeChat
5. A short positioning statement summarizing engineering, visualization, and full-stack/cross-platform strengths

Layout:

- Desktop: split hero with identity on the left and contact/meta panel on the right
- Mobile: collapse into a single column with the meta panel following the title block

### 2. Skills

Purpose: quickly communicate breadth and depth without turning into a wall of text.

Structure:

- Core stack
- Engineering
- Full-stack / cross-platform
- Graphics and visualization
- Other strengths

Presentation:

- Each category is shown as a titled block with short, high-value bullet statements
- Important technical phrases can be highlighted inline, but the section should stay readable and restrained

### 3. Experience

Purpose: show career progression and business impact.

Structure:

- Render as a vertical timeline on larger screens
- Degrade into stacked cards on mobile

Each experience entry includes:

- Company name
- Role
- Date range
- One short business-context sentence
- Achievement bullets focused on problem, action, and measurable result

### 4. Projects

Purpose: turn past work into concrete evidence of architectural and delivery capability.

Structure:

- Three featured project cards stacked vertically
- Each card starts with project title, date range, and tech stack tags
- Follow with a one-sentence project definition
- Then list 4 to 6 impact-focused bullets

Visual emphasis:

- Quantified outcomes such as `40%`, `5x`, `55+ FPS`, `95%+`, `60fps`, and similar metrics should stand out visually

## Visual Direction

The page should feel intentional and premium, not generic.

### Color

- Reuse the site's dark base
- Add layered gradients and subtle texture or grid treatment in the background
- Use one restrained warm accent for metrics, dividers, and small highlights

### Typography

- Keep the existing font setup already used by the site
- Use clear contrast between sans headings, mono micro-labels, and body copy
- Numbers and technical tokens should feel deliberate, not randomly bolded

### Surface Design

- Main content should sit inside a centered, document-like frame
- Sections can be separated by thin rules, spacing rhythm, and subtle background surfaces
- Avoid overusing badges, pills, or large blocks of outlined UI chrome

## Motion and Interaction

- Reuse the site's light staggered entrance feel instead of introducing heavy animation systems
- Add subtle hover feedback for external links and contact items
- Keep project stack tags visually responsive but not interactive beyond hover polish
- No filters, accordions, carousels, or tabbed complexity

## Responsive Behavior

- The page must read comfortably on mobile first, not just shrink the desktop layout
- Hero changes from two columns to one column
- Experience timeline becomes a stacked flow on smaller screens
- Project stack tags wrap naturally without crushing body copy
- Overall content width remains constrained for reading comfort on large screens

## Content Modeling

Resume content should not be hardcoded as long prose directly inside the page component.

Recommended shape:

- A structured local data file for profile meta, skill groups, experiences, and projects
- Small presentational components that render these structures

This makes later content updates easy without rewriting layout markup.

## Implementation Boundaries

Expected files and responsibilities:

- `app/resume/page.tsx`
  - Route entry for the resume page
  - Assembles sections and metadata
- A local resume data module
  - Stores profile, skills, experiences, and project data
- Small section components or helpers
  - Keep the page readable and avoid one giant JSX file
- `app/globals.css`
  - Only minimal additions if shared styling utilities are needed

Implementation should follow the existing site patterns where they still fit, but the new page can introduce page-local styling structure if that keeps the layout clean.

## Accessibility

- Links must have clear labels and visible hover/focus treatment
- Section hierarchy should use real headings
- Decorative treatments must not reduce text contrast
- Contact information should remain easy to copy on mobile

## Validation

The implementation is considered complete when:

- `/resume` renders as a standalone route
- The home page remains unchanged as the default route
- The page is legible and polished on desktop and mobile
- The contact block and external links are present and functional
- The main achievements and metrics are visually scannable
- `pnpm lint` passes
- `pnpm build` passes

## Notes for Implementation Planning

- Favor data-driven rendering for repeated content blocks
- Keep animation simple and mostly CSS-based
- Avoid expanding the scope into print layout, CMS support, or homepage navigation changes
