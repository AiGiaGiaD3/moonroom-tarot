# Moonroom 1.2 — đưa lên GitHub Pages

Bản web tĩnh đã build sẵn. Không cần API key, backend hay cài Node để triển khai.

## Triển khai nhanh

1. Giải nén Moonroom-GitHub-Pages-v1.2.zip trên máy tính.
2. Trong tài khoản GitHub AiGiaGiaD3, tạo repository mới tên `moonroom-tarot`, chọn Public để dùng GitHub Pages với gói Free. Có thể chọn tên khác.
3. Chọn **Add file → Upload files**, tải các file và thư mục BÊN TRONG gói đã giải nén lên repo, rồi Commit changes. File `index.html` phải nằm ngay ở gốc repo, cùng cấp với `assets/` và `cards/`. Không tải nguyên file ZIP thay cho nội dung website.
4. Vào **Settings → Pages → Build and deployment**. Chọn **Source: Deploy from a branch**, **Branch: main**, thư mục **/(root)** rồi **Save**. Nếu nhánh mặc định có tên khác, chọn nhánh chứa các file vừa tải lên.
5. Chờ GitHub hoàn tất triển khai, sau đó mở địa chỉ hiển thị trong Settings → Pages. Với tên repo gợi ý, địa chỉ dự kiến là `https://aigiagiad3.github.io/moonroom-tarot/` (chưa được triển khai trong gói này).

Có thể bỏ qua `SOURCE.zip` và README khi tải website; chúng chỉ để lưu mã nguồn và hướng dẫn. Giữ nguyên thư mục `cards` và `assets`. File `.nojekyll` có thể bị ẩn trong trình quản lý file; nếu cần, dùng **Add file → Create new file**, đặt tên `.nojekyll` và lưu.

Hướng dẫn chính thức: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Các thành phần

- `index.html`, `assets/`: giao diện đã build.
- `cards/`: đủ 78 ảnh bài, lưu cùng website.
- `card-attributions.json`: nguồn và thông tin quyền sử dụng ảnh.
- `favicon.svg`: biểu tượng website.
- `SOURCE.zip`: mã nguồn React/TypeScript, khóa phiên bản dependencies, kiểm thử và hướng dẫn build.

## Bản 1.2 đã thay đổi gì?

Rà lại lời dẫn, tiêu đề và nút theo tiếng Việt tự nhiên. “Bước vào phòng bài” thành “Ngồi vào bàn Tarot”; “Phòng bài” thành “Bàn Tarot”. Các phần mở đầu, nhìn lại ba lá, ghi chú và dùng AI đều đã sửa. Giữ đủ 78 lá, chiều xuôi, chọn 3 lá, tự quan sát trước khi xem ý nghĩa, nhật ký và sao chép nội dung sang AI tùy chọn.

Chuyển ứng dụng thành website tĩnh, bỏ phần máy chủ và tích hợp dành riêng cho nơi lưu trữ cũ. Đường dẫn tương đối hoạt động dưới thư mục repo GitHub Pages.

## Dữ liệu của người dùng

Nhật ký nằm trong trình duyệt, không gửi lên repo và không đồng bộ giữa thiết bị. Khi chuyển từ địa chỉ Moonroom cũ sang GitHub Pages, nhật ký cũ KHÔNG tự chuyển sang. Hãy tải các phiên cần giữ ở trang cũ; file JSON là bản lưu để đọc, bản này chưa có chức năng nhập lại JSON. Xóa dữ liệu trình duyệt sẽ xóa nhật ký.

Sao chép để đọc cùng AI không tự gửi dữ liệu đi. Người dùng tự chọn thông tin, sao chép và dán vào dịch vụ AI họ muốn. Google Fonts có thể được tải qua mạng; nếu không tải được, giao diện dùng font dự phòng. Ảnh bài nằm trong gói, không phụ thuộc đường dẫn ảnh ngoài.

Mở website qua HTTPS của GitHub Pages. Nhấp đúp index.html bằng file:// không phải cách chạy được hỗ trợ.

## Kiểm tra đã hoàn tất

- TypeScript và build production thành công.
- Kiểm thử 78 lá, xào bài, mã kiểm tra và chia sẻ thông tin có lựa chọn: đạt.
- Trình duyệt: mở từ đường dẫn con /moonroom/, ảnh hiển thị, đi qua rút/lật/đọc bài và lưu nhật ký: đạt.
- Chưa triển khai lên GitHub; chưa kiểm thử trên iPhone thực tế.
