# Quy tắc làm việc dự án VibeTin (Rules)

## 1. Chiến lược nhánh (Branching Strategy)
Để đảm bảo code không bị xung đột, tất cả thành viên (Dev 1, Dev 2) tuân thủ:

- `main`: Nhánh ổn định, chỉ chứa code đã được deploy lên production (GCP).
- `develop`: Nhánh tích hợp, nơi các tính năng mới được gộp lại trước khi lên `main`.
- `feature/<tên-tính-năng>`: Nhánh cho tính năng mới.
- `fix/<tên-lỗi>`: Nhánh cho sửa lỗi.
- `docs/<tên-tài-liệu>`: Nhánh cho tài liệu.

## 2. Quy tắc thư mục
- `DOCS/`: Nơi lưu trữ tài liệu kỹ thuật, kế hoạch (`PLANNING.md`, `RULES.md`).
- `WORKFLOW/`: Quy trình vận hành và tài liệu hướng dẫn.
- `SOURCE/`: Mã nguồn dự án.
- `TESTING/`: Kịch bản kiểm thử.
- `INFRA/`: Cấu hình hệ thống.
