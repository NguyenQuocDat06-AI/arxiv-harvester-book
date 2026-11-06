# arXiv Harvester — Milestone 1 và 2

**Bản nộp tiến độ ngày 06/11/2026.** Báo cáo dùng thống kê tổng hợp của snapshot Drive gồm **73 paper, 119 version**. Đây là phần dữ liệu hiện có, chưa phải toàn bộ 25.000 paper được giao cho nhóm.

| Nội dung | Kết quả |
|---|---:|
| Version nguồn được audit xác minh | 118/119 |
| Version có bản ghi parser | 119/119 |
| Version parse success | 81 |
| Cấu trúc năm bảng | Hợp lệ trên snapshot |
| Xử lý hoàn tất snapshot | Chưa đạt, xem partial/error trong M2 |

M1 còn references lỗi API và một version nguồn lỗi. M2 còn partial và root chưa xác minh. Số đo M1 từ lượt Colab đã lưu có phạm vi riêng; số đo M2 mới ở Windows CPU, chưa có benchmark M2 cuối trên Colab CPU-only.

Các bảng và biểu đồ được sinh khi Jupyter Book thực thi tám notebook. Repository báo cáo chỉ chứa số liệu tổng hợp và nhãn coverage P001…P073; không chứa ID/text nguồn từng paper, Parquet, manifest gốc hoặc log Drive. Các dữ liệu làm việc đó được nhóm giữ riêng.

[Source code M1–M2](https://github.com/NguyenQuocDat06-AI/arxiv-harvester/tree/develop) · [Đề đồ án](https://hcmus-cs-ta.github.io/lab-book/intro-ds/statement/)

Link Book được giữ để nhóm cập nhật khi có thêm nguồn và benchmark. Công cụ trợ lý được dùng để hỗ trợ chuẩn bị code/báo cáo; nhóm cần đọc, kiểm tra và giải thích phần nộp.
