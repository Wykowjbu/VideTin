# DEV1 Operational Strategy - VibeTin

## 1. Cơ sở dữ liệu (PostgreSQL)
- **Naming Convention:** `snake_case`, bảng luôn để số nhiều (VD: `posts`, `users`, `categories`).
- **Scalability (Tính mở rộng):** 
    - Với hệ thống "Lego Editor", bảng `posts` sẽ lưu trữ content chính, nhưng nội dung chi tiết sẽ lưu dạng JSONB trong cột `blocks_data`. Cách này giúp VibeTin thêm khối mới (Video, Recipe, v.v.) mà không cần thay đổi cấu trúc bảng (Schema).
- **ID:** Sử dụng UUID cho tất cả các bảng để đảm bảo tính bảo mật và dễ dàng đồng bộ giữa các môi trường.

## 2. Coding Standard
- **Language:** TypeScript Strict Mode (Bắt buộc).
- **API Strategy:** Dùng Next.js Server Actions (giúp code sạch, an toàn, không cần viết nhiều API endpoint thủ công).
- **Tooling:** ESLint & Prettier (theo cấu hình của dự án) để đảm bảo code đồng nhất.

## 3. Quy trình làm việc (Dev 1 Workflow)
- **"Docs-First":** Trước khi tạo một tính năng lớn hoặc thay đổi Schema DB, Dev 1 sẽ cập nhật tài liệu thiết kế (Design Doc) trong thư mục `DOCS/` và gửi email thông báo cho Team Lead (anh Huy).
- **Branching:** Nhánh `feature/*` phải sạch, message commit rõ ràng, tạo PR ngay khi có khung code (Draft PR).
- **Testing:** Code phải có unit test cho logic quan trọng trước khi PR.

## 4. Giao tiếp
- Mọi PR quan trọng phải có mô tả rõ ràng: Mục tiêu (Tại sao làm), Giải pháp (Làm thế nào), Ảnh chụp (nếu có UI).
- Thông báo cho Leader qua email ngay khi PR sẵn sàng.
