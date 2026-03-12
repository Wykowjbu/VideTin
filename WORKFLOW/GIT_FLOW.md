# Quy trình Git Flow dự án VibeTin

Đây là quy trình làm việc bắt buộc cho tất cả thành viên trong team để đảm bảo tính ổn định của dự án.

## 1. Nguyên tắc cốt lõi
- **Tuyệt đối không commit trực tiếp** lên nhánh `main`.
- Mọi công việc phải được thực hiện trên nhánh riêng (`feature/*`, `fix/*`, `docs/*`).
- Nhánh `main` chỉ được phép nhận code từ `develop` thông qua PR đã được Leader duyệt.

## 2. Quy trình làm việc (Git Flow)
1. **Bắt đầu:** Tạo nhánh làm việc từ `develop`: `git checkout -b feature/<tên-tính-năng> develop`.
2. **Làm việc:** Commit code vào nhánh feature. Đặt tên commit theo chuẩn `feat:`, `fix:`, `docs:`.
3. **Tạo PR (Merge Request):** 
   - Khi hoàn thành task, tạo PR từ nhánh `feature/*` vào nhánh `develop`.
   - **Báo cáo:** Gửi email thông báo cho Leader để review.
4. **Review & Handoff:** 
   - Dev 2 review PR từ Dev 1.
   - Nếu Code "OK": Dev 2 gửi email thông báo cho Leader (để Merge) và Dev 1 (để làm task tiếp theo).
   - Nếu lỗi: Dev 2 log bug trên GitHub và gửi email báo Dev 1 sửa.
5. **Release (vào main):** Sau khi các tính năng trên `develop` đã được test kỹ và Leader đồng ý, Leader mới cho phép tạo PR từ `develop` lên `main` để deploy.

## 3. Báo cáo thay đổi
- Mọi thay đổi trong quy trình, rule, kế hoạch phải gửi email thông báo cho Leader và Dev 1.
- Mọi PR lên `develop` phải gửi email thông báo cho Leader.
