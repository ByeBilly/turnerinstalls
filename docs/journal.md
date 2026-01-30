# Project Journal

## [2026-01-30] Image Consolidation and Refactor
- Consolidated all flooring images from various folders (`/public/images`, `/public/new_gen`, etc.) into a structured `/public/installspics/{prep, damage, finished, etc}` directory.
- Created `data/siteImages.ts` as the single source of truth for image assets.
- Refactored `Floor Preparation`, `Concrete Grinding`, and `Commercial` pages to use data-driven imagery.
- Introduced `ImageGrid` (Unacceptable vs Ready) and `BeforeAfterGallery` components for better storytelling.
- Verified build and pushed to main.

## [2026-01-XX] Initial Handover
- Prepared deployment documentation.

## [2026-01-30] Image Directory Semantics (User Definition)
- `/public/installspics/finished`: **Completed** installations. Projects that are 100% done.
- `/public/installspics/laying`: **In-Progress** shots. Used to show the "work happening" (e.g., cutting tables, glues, tools).
- `/public/installspics/prep`: **Subfloor Preparation**. Contains specific subfolders for `damage`, `floods`, `level`, `grinding`, etc.
- **Rule**: Gallery on Homepage should ONLY use `finished` images.
- **Rule**: "Laying" images are for process explanation sections.
