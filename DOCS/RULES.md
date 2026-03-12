# Quy tắc làm việc dự án VibeTin (Rules)

## 1. Chiến lược nhánh & Phân quyền (Branching Strategy & Permissions)
- `main`: Nhánh ổn định, chỉ dành cho việc deploy production. **Tuyệt đối không commit trực tiếp**. Chỉ Leader mới có quyền merge vào `main`.
- `develop`: Nhánh tích hợp chính. **Tuyệt đối không commit trực tiếp**. Mọi thành viên chỉ được tạo Merge Request (PR) từ nhánh tính năng (`feature/*`, `fix/*`) vào `develop`.
- `feature/<tên-tính-năng>` / `fix/<tên-lỗi>`: Nhánh làm việc riêng của Developer. Luôn tạo từ nhánh `develop`.

## 2. Quy trình làm việc (Workflow)
1. **Khởi tạo:** Luôn tạo nhánh mới từ `develop`: `git checkout -b feature/<tên> develop`.
2. **Làm việc:** Commit code vào nhánh tính năng.
3. **Merge Request:** Tạo PR từ nhánh tính năng vào `develop`.
4. **Review & Merge:** Gửi email báo cáo cho Leader để review. Chỉ sau khi Leader phê duyệt, Leader hoặc người được chỉ định mới được merge PR vào `develop`.

## 3. Quy tắc thư mục
- `DOCS/`: Tài liệu kỹ thuật, kế hoạch (`PLANNING.md`, `RULES.md`).
- `WORKFLOW/`: Quy trình vận hành và tài liệu hướng dẫn.
- `SOURCE/`: Mã nguồn dự án.
- `TESTING/`: Kịch bản kiểm thử.
- `INFRA/`: Cấu hình hệ thống.

## 5. Quy trình Review & Bàn giao (Review & Handoff)
- **Review:** Dev 2 thực hiện review và kiểm thử PR của Dev 1.
- **Nếu OK:** Dev 2 gửi email cho Leader (thông báo PR đã OK, đề nghị merge) và Dev 1 (nhắc nhở thực hiện task tiếp theo theo plan).
- **Nếu lỗi (Bug):** Dev 2 log issue trên GitHub, gửi email thông báo cho Dev 1 để sửa.
- **Thông báo PR:** Khi hoàn thành task và tạo PR, email gửi Leader bắt buộc bao gồm thông tin: **Nhánh nguồn (Source Branch)** và **Nhánh đích (Target Branch)**.
