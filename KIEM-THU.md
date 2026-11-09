# Kiểm thử Moonroom 1.3

Ngày: 09/11/2026. Kiểm tra bản build production tại đường dẫn con `/moonroom/`.

## Đã đạt

- TypeScript strict và Vite production build.
- 78 lá duy nhất, nội dung diễn giải đầy đủ; 100 lượt xào giữ đủ 78 lá.
- Mã kiểm tra thứ tự bộ bài, các kiểm thử logic và lựa chọn thông tin chia sẻ có sẵn của bản gốc.
- Cả 78 lá thực sự có animation khi trải; khóa chọn trong khoảng chuyển động rồi tự mở lại.
- Chọn ba lá, lật đủ ba lá, chuyển sang trang sách.
- Ba trang giải nghĩa đúng lá đã chọn; điều khiển tab bằng chuột và bàn phím.
- Không tràn ngang ở 320, 375, 390, 768, 1024 và 1440 px trên màn đọc bài; màn chọn bài cũng không tràn.
- Vùng chạm lá bài tối thiểu đo được: 45.1 px ở màn 320 px, 54.8 px ở 375 px, 46.7 px ở 390 px.
- Mô phỏng cảm ứng điện thoại 375 × 812 px: chọn và lật bài thành công.
- Web Audio chưa khởi tạo khi chưa bật; nút bật tạo AudioContext chạy, nút tắt tạm ngừng AudioContext.
- Clipboard thực: sao chép đúng nội dung, hiệu ứng cổng chỉ xuất hiện sau thành công; bối cảnh riêng tư chỉ thêm khi người dùng chọn.
- Clipboard bị từ chối: hiển thị cách sao chép thủ công/tải TXT, không báo thành công và tắt hiệu ứng thành công cũ.
- Lưu nhật ký vào localStorage và tải file JSON.
- Tùy chọn giảm chuyển động lưu lại sau tải lại trang.
- Cài đặt giảm chuyển động của hệ điều hành: không chạy animation trải bài, lá bài chọn được ngay; không bị nút trong ứng dụng ghi đè.
- Các ảnh đang hiển thị tải thành công; không ghi nhận lỗi runtime trình duyệt trong luồng kiểm thử.

## Giới hạn kiểm tra

- Thực hiện bằng Chrome headless trên Windows, mô phỏng kích thước/cảm ứng. Chưa thử Safari/iPhone hay Android thật.
- Chưa đo FPS hoặc xác nhận độ mượt trên điện thoại cấu hình thấp; không cam kết FPS cố định. Hiệu ứng dùng transform/opacity, không thêm thư viện animation, có tùy chọn giảm chuyển động.
- Đã kiểm tra trạng thái Web Audio bằng chương trình; chưa thực hiện đánh giá nghe trên loa/tai nghe thực tế.
- Chưa triển khai lên website GitHub của người dùng.

## Chạy lại các kiểm thử logic từ SOURCE.zip

```sh
npm ci
npm run build
npx esbuild tests/core.test.ts tests/handoff.test.ts --bundle --platform=node --format=esm --outdir=test-output
node test-output/core.test.js
node test-output/handoff.test.js
```
