# Moonroom 1.3 — Những trang sách dưới ánh trăng

Bản nâng cấp từ Moonroom 1.2, dùng được trên GitHub Pages. Website đã build sẵn; không cần API key hoặc backend.

## Những gì đã thêm

- 78 lá bài bay từ tâm bàn, trải thành lưới. Lá đã chọn sáng lên và được đánh số; chọn đủ ba lá sẽ chuyển sang màn lật bài.
- Lật bài 3D hai mặt, quầng sáng và chuyển cảnh nhẹ.
- Minh họa vector một người xem bài khoác áo choàng, giấu mặt dưới mũ trùm, mở sách giữa hai ngọn nến. Trang sách và ký tự có chuyển động.
- Sách giải nghĩa ba trang: ảnh lá bài, ý nghĩa và câu hỏi xuất hiện lần lượt. Dùng tab, nút trước/sau hoặc phím mũi tên/Home/End để chuyển trang khi đang tập trung vào tab.
- Cổng phép thuật, tia sáng và tiếng chuông khi sao chép thành công. Sau đó có liên kết mở ChatGPT, Claude và Gemini; bạn vẫn tự dán và gửi.
- Âm nền nhẹ, chuông khi chọn/lật bài, tiếng lướt trang. Âm thanh được tạo bằng Web Audio, không cần tải file nhạc. Mặc định tắt; bật bằng nút trên đầu trang. Tự tạm ngừng khi tab bị ẩn.
- Nút giảm chuyển động và hỗ trợ cài đặt giảm chuyển động của thiết bị. Không có hiệu ứng nhấp nháy nhanh.
- Bố cục sách xếp dọc trên điện thoại; ô nhập chữ 16 px; các lá bài có vùng chạm từ khoảng 45 px ở độ rộng 320–390 px đã kiểm tra.

Giữ đủ 78 ảnh bài, nội dung diễn giải, nhật ký, tải phiên đọc, lựa chọn riêng tư khi sao chép và mã kiểm tra thứ tự bài.

## Chạy thử trên máy

Nếu đã cài Node.js, nhấp đúp `Xem-truoc.cmd` trên Windows. Giữ cửa sổ đó mở rồi truy cập http://127.0.0.1:4173. Nhấn Ctrl+C để dừng. Hoặc chạy `node preview.mjs` trong thư mục này.

Không mở `index.html` bằng cách nhấp đúp: website cần HTTP/HTTPS để tải module và dùng các chức năng trình duyệt.

## Cập nhật website GitHub Pages

1. Giải nén gói ZIP.
2. Thay `index.html`, `assets/`, `cards/`, `favicon.svg`, `card-attributions.json` và `.nojekyll` trong nơi đang lưu website bằng bản mới. File `index.html` phải ở gốc cùng cấp với `assets/` và `cards/`.
3. Lưu thay đổi và chờ website triển khai lại như cấu hình hiện có. Nếu trình duyệt còn hiện bản cũ, tải lại bỏ qua bộ nhớ đệm.

`SOURCE.zip`, các file hướng dẫn, `preview.mjs` và `Xem-truoc.cmd` chỉ để chạy thử/phát triển, không bắt buộc tải lên GitHub Pages. Bản này chưa được tự động triển khai lên tài khoản GitHub của bạn.

## Mã nguồn

`SOURCE.zip` chứa React/TypeScript, thư viện được khóa phiên bản, 78 ảnh và các kiểm thử logic. Giải nén rồi chạy:

```sh
npm ci
npm run dev
npm run build
```

`dist/` là website đã build. Vite dùng đường dẫn tương đối để hoạt động dưới thư mục repo.

## Nhật ký và riêng tư

Nhật ký dùng cùng khóa lưu trữ với bản 1.2; nâng cấp tại cùng địa chỉ không chủ động xóa nhật ký. Đổi tên miền/cổng/trình duyệt sẽ dùng vùng lưu trữ khác. Phiên đã lưu vẫn chỉ nằm trên thiết bị, không tự đồng bộ. Hãy tải các phiên quan trọng về trước khi thay đổi nơi chạy website.

Sao chép không tự gửi dữ liệu tới AI. Chỉ các trường riêng tư bạn chọn mới được đưa vào nội dung sao chép. Khi trình duyệt từ chối clipboard, có ô xem trước để sao chép thủ công và nút tải TXT.

Google Fonts có thể tải qua mạng; nếu không có mạng, giao diện dùng font dự phòng. Ảnh bài, minh họa, chuyển động và âm thanh không phụ thuộc dịch vụ bên ngoài.

## Kiểm thử

Xem `KIEM-THU.md`. Đã kiểm tra trên Chrome desktop với nhiều kích thước màn hình và mô phỏng cảm ứng/giảm chuyển động; chưa kiểm thử trên thiết bị iPhone/Android thật. Độ mượt thực tế tùy thiết bị; có chế độ chuyển động nhẹ.
