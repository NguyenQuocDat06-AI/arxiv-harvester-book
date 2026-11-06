# Phụ lục C. Đối chiếu hướng dẫn QA

Nguồn: [QA Replies 2627-1](https://docs.google.com/spreadsheets/d/11UDWf52DitCDrV386WkYK0ZySqTGQSCRnEwQ37u9uyQ/edit), đọc ngày 06/11/2026. Đây là phần đối chiếu các hướng dẫn
ảnh hưởng đến báo cáo; các phản hồi gốc xem tại từng liên kết.

- [M1 dòng 7](https://docs.google.com/spreadsheets/d/11UDWf52DitCDrV386WkYK0ZySqTGQSCRnEwQ37u9uyQ/edit#gid=0&range=A7:B7): nộp link Book theo mốc tiến độ; hoàn thiện đến hạn Poster và giữ URL. Trang đầu đã phân biệt hai mốc này.
- [M1 dòng 13–17](https://docs.google.com/spreadsheets/d/11UDWf52DitCDrV386WkYK0ZySqTGQSCRnEwQ37u9uyQ/edit#gid=0&range=A13:B17): benchmark cuối trên toàn dải, gồm retry/delay; được chia phiên Colab có log. Chương 5 và phụ lục A mô tả cách gộp.
- [M1 dòng 15](https://docs.google.com/spreadsheets/d/11UDWf52DitCDrV386WkYK0ZySqTGQSCRnEwQ37u9uyQ/edit#gid=0&range=A15:B15): chương trình Chuẩn dùng tiếng Việt. Nhóm đã xác nhận chương trình này.
- [M1 dòng 19](https://docs.google.com/spreadsheets/d/11UDWf52DitCDrV386WkYK0ZySqTGQSCRnEwQ37u9uyQ/edit#gid=0&range=A19:B19): thử chuyển `.bbl`, giữ nguồn khi chưa chuyển được. Chương 2 và 7 trình bày xử lý bổ trợ và giới hạn.
- [M1 dòng 20–21](https://docs.google.com/spreadsheets/d/11UDWf52DitCDrV386WkYK0ZySqTGQSCRnEwQ37u9uyQ/edit#gid=0&range=A20:B21): references được dùng ngày S2 hoặc ngày qua arXiv ID. Chương 3 ghi quy ước và provenance.
- [M1 dòng 17, 22](https://docs.google.com/spreadsheets/d/11UDWf52DitCDrV386WkYK0ZySqTGQSCRnEwQ37u9uyQ/edit#gid=0&range=A17:B22): hai chương chính M1/M2, thông tin thành viên và các mục kỹ thuật rõ ràng. URL các trang đã có được giữ.

## Phần chuẩn bị cho Milestone 3

[M3 dòng 2–3](https://docs.google.com/spreadsheets/d/11UDWf52DitCDrV386WkYK0ZySqTGQSCRnEwQ37u9uyQ/edit#gid=1061532440&range=A2:B3) quy định ít nhất 5 publication gán nhãn
cho mỗi thành viên; nhóm 5 người tương ứng ít nhất 25 publication. Pipeline dùng chung,
còn mỗi người trích output theo dải ID của mình để host trên Hugging Face cá nhân.

Đây là kế hoạch cho M3, không phải kết quả gán nhãn hoặc dataset cuối đã nộp. Dataset làm
việc chung hiện có vẫn phục vụ xử lý và kiểm tra trong nhóm.

## Bằng chứng hiện còn thiếu

Snapshot vẫn là 73 paper/119 version. Cần khép phần nguồn/references thiếu, xử lý các version
partial/error và thực hiện benchmark cuối trên Colab. Các cập nhật code theo QA không tự
thay đổi số liệu của những lượt lịch sử. Các ví dụ `.bbl` trong Book là dữ liệu tổng hợp.
