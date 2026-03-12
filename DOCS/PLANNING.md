# Dự án: VibeTin - Coding Phase Plan

## 1. Nguyên tắc triển khai
- **Mọi task đều phải tạo nhánh:** `git checkout -b feature/<tên-tính-năng> develop`.
- **Luồng tích hợp:** `feature/*` -> `develop` -> (Leader review) -> `main`.

## 2. Các giai đoạn thực hiện (Coding Phase)

| Giai đoạn | Nhiệm vụ | Nhánh dự kiến | Trách nhiệm |
| :--- | :--- | :--- | :--- |
| **Giai đoạn 1** | Setup Docker, Dev Environment & Base Next.js | `feature/base-setup` | Dev 1 |
| **Giai đoạn 2** | Database Schema (PostgreSQL) | `feature/db-schema` | Dev 1 |
| **Giai đoạn 3** | CMS Core & Admin Dashboard (Dynamic Blocks) | `feature/cms-core` | Dev 1 |
| **Giai đoạn 4** | Frontend, SEO, Page Layouts | `feature/frontend-ui` | Dev 1 |
| **Giai đoạn 5** | Testing (Unit/Integration) & Infra (CI/CD) | `feature/testing-infra` | Dev 2 |
| **Giai đoạn 6** | Deployment (GCP Cloud Run) | `feature/deploy-prod` | Dev 2 |

## 3. Quy trình thực hiện Task
1. Dev nhận task, tạo nhánh từ `develop`.
2. Code, test nội bộ.
3. Tạo PR từ `feature/*` sang `develop`.
4. Gửi email thông báo Leader review.
5. Leader merge vào `develop`.
