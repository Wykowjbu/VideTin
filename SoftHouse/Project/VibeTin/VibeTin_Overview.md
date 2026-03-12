# Dự án VibeTin - Tổng quan

## 0. THÔNG TIN CHUNG
- **Công ty:** SoftHouse
- **Team Lead:** Nguyen Phan Huy

## 1. TỔNG QUAN DỰ ÁN
VibeTin là một nền tảng Cổng thông tin (Multi-content Portal) linh hoạt. Mục tiêu là xuất bản đa dạng nội dung: Bảng xếp hạng giải trí, Cẩm nang/Hướng dẫn, Tin tức công nghệ, đời sống, xã hội.
Ưu tiên: Tốc độ cực nhanh, chuẩn SEO, CMS linh hoạt như xếp hình Lego.

## 2. KIẾN TRÚC CÔNG NGHỆ (Tech Stack)
- Frontend & Backend: Next.js
- Database: PostgreSQL
- Media Storage: Google Cloud Storage
- Hosting & Scale: Google Cloud Run
- CI/CD: GitHub Actions

## 3. PHÂN BỔ NHÂN SỰ
### 💻 Phòng Kỹ Thuật (Tech Team - 2 người)
- Dev 1 (BA & Full-stack): Thiết kế DB, coding, bộ soạn thảo Admin.
- Dev 2 (DevOps & Tester): Cấu hình CI/CD, kiểm thử, tài liệu.

### ✍️ Phòng Nội Dung (Marketing Team - 1 người)
Kiêm nhiệm 3 vai trò:
- Scout: Săn tin, nghiên cứu trend.
- Content Writer: Viết bài, định dạng bài viết.
- Editor-in-Chief: Kiểm duyệt và xuất bản.

## 4. LUỒNG VẬN HÀNH
- Luồng Kỹ Thuật: Code -> GitHub -> Action -> Cloud Run.
- Luồng Nội Dung: Trend -> Write (Draft) -> Check (Pending) -> Publish.

## 5. TÍNH NĂNG CMS CỐT LÕI
- Dynamic Blocks (Khối động): Văn bản, Ảnh, Video, Danh sách.
- Tự động tối ưu Media qua GCS.
- Phân quyền (Writer/Editor).
