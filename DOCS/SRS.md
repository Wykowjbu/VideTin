# SRS: VibeTin Portal (Software Requirements Specification)

## 1. Introduction
VibeTin is a high-performance, SEO-optimized Multi-content Portal (MCP) built for dynamic content management.

## 2. System Overview
- **Core Platform:** Next.js (Rendering & CMS Backend).
- **Database:** PostgreSQL (Post-relational schema).
- **Storage:** Google Cloud Storage (Media optimization).
- **Deployment:** Google Cloud Run (CI/CD via GitHub Actions).

## 3. User Roles
- **Admin/Editor-in-Chief:** Manage users, confirm content, publish.
- **Content Writer:** Draft content, use "Lego Editor".
- **Scout:** Research trends, provide content strategy.
- **System (Tech Team):** Maintain reliability, CI/CD, DB health.

## 4. Functional Requirements
### 4.1 CMS "Lego" Editor
- Must support dynamic blocks (Paragraph, Image, Video Embed, Table/Recipe/Top10).
- Automatic image optimization upon upload (GCS integration).
- Phân quyền (Role-based access): Only Editor can publish.

### 4.2 Frontend
- SEO-first rendering (Next.js SSR/ISR).
- High-speed delivery (CDN-ready caching).

## 5. Non-Functional Requirements
- **Performance:** Sub-2s page load.
- **SEO:** Dynamic meta-tags, auto-generated schema.org data.
- **Scalability:** Auto-scaling via Cloud Run.

## 6. Development Workflow
- **Tech Team:** Feature branch -> PR -> Discord Notification (#dev-logs) -> Merge.
- **Content Team:** Trend -> Draft (Pending) -> Review -> Published.
