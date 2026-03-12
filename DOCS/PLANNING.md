# Dự án: VibeTin - Coding Phase Plan (Chi tiết)

## 1. Nguyên tắc triển khai
- **Luồng:** `feature/<task>` -> `develop` -> (Review) -> `main`.
- **Báo cáo:** Dev 1 làm xong báo Dev 2 test -> Dev 2 báo Leader (email) -> Leader merge.

## 2. Chi tiết các Task (Backlog)

| Task ID | Tên Task | Mô tả chi tiết | Trách nhiệm | Nhánh dự kiến |
| :--- | :--- | :--- | :--- | :--- |
| **T01** | Setup & Base | Cấu hình Next.js, folder structure, ESLint, Prettier | Dev 1 | `feature/init-project` |
| **T02** | Database Schema | Thiết kế PostgreSQL (User, Article, Tag, Category) | Dev 1 | `feature/db-schema` |
| **T03** | Auth Logic | Chức năng Đăng nhập, Đăng ký, JWT/Session | Dev 1 | `feature/auth` |
| **T04** | CMS Core | Dashboard quản trị, CRUD bài viết, Dynamic Blocks | Dev 1 | `feature/cms-admin` |
| **T05** | Frontend & SEO | Hiển thị bài viết, SEO Metadata, Responsive | Dev 1 | `feature/frontend` |
| **T06** | Test & Infra | Viết Unit Test, Dockerize, CI/CD Pipeline | Dev 2 | `feature/testing-infra` |
| **T07** | Deploy Prod | Cấu hình Google Cloud Run, Cloud SQL, Domain | Dev 2 | `feature/deploy-prod` |

## 3. Quy trình thực hiện (Nhắc nhở)
1. **Trước khi làm:** `git checkout develop` -> `git pull` -> `git checkout -b feature/<task-id>`
2. **Sau khi xong:** Push nhánh lên -> Tạo PR vào `develop` -> **Gửi email thông báo Leader review.**
3. **Kiểm thử:** Dev 2 nhận PR, chạy bộ test trong `TESTING/`. Nếu fail, trả về Dev 1 sửa. Nếu pass, Dev 2 báo Leader merge.
