# arXiv Harvester — Báo cáo Milestone 1 và 2

**Ngày cập nhật: 06/11/2026.** Đây là báo cáo triển khai và kết quả trên snapshot hiện có của nhóm. Book trình bày đầy đủ phương pháp, công thức thống kê, ví dụ thuật toán thực thi, phân tích lỗi, cách tái lập và phần công việc chưa hoàn tất. Phạm vi dữ liệu vẫn là **73 paper/119 version**, không phải toàn bộ 25,000 paper được giao.

## Tóm tắt

M1 phân giải paper/revision, tải nguồn theo version, lọc TeX/Bib và lấy references. M2 duyệt compilation path, dựng hierarchy, chuẩn hóa nội dung, hợp nhất references và khử trùng qua version. Các store được kiểm tra schema, khóa và graph; version empty hoặc lỗi được theo dõi thay vì bỏ khỏi coverage.

Snapshot được dựng từ 8 lô backup đã kiểm tra checksum. Audit nguồn xác minh 118/119 version. Parser có 81 success, 31 partial, 5 empty và 2 lỗi. Kết quả năm bảng hợp lệ về cấu trúc nhưng chưa xử lý hoàn tất snapshot. References API error và benchmark M2 Colab CPU-only còn thiếu được công bố trong từng chương.

## Cách đọc báo cáo

- **M1:** phạm vi và discovery → source audit/size → references → validation → số đo crawler.
- **M2:** gathering/hierarchy và coverage từng paper → normalization/dedup → số đo parser.
- **Phụ lục:** môi trường/lệnh tái lập, đối chiếu yêu cầu và thứ tự hoàn thiện.

Các bảng và biểu đồ được sinh khi Book thực thi notebook. Ví dụ TeX/BibTeX được đánh dấu là tổng hợp và chạy từ source ghim; chúng không được tính vào thống kê corpus. Input công khai chỉ chứa số liệu tổng hợp và nhãn P001…; corpus, ID/text từng paper, Parquet và log gốc được nhóm giữ riêng.

## Trạng thái và link nộp

**URL Book cố định:** https://nguyenquocdat06-ai.github.io/arxiv-harvester-book/

[Repository báo cáo](https://github.com/NguyenQuocDat06-AI/arxiv-harvester-book) · [Source code M1–M2](https://github.com/NguyenQuocDat06-AI/arxiv-harvester/tree/develop) · [Đề đồ án](https://hcmus-cs-ta.github.io/lab-book/intro-ds/statement/)

Phần trình bày được hoàn thiện trên dữ liệu hiện có; việc đủ source/references toàn nhóm và benchmark cuối vẫn cần được hoàn thành bằng các lượt thực tế. Xem phụ lục đối chiếu để phân biệt yêu cầu đã có bằng chứng và phần còn thiếu. Nhóm thực hiện/xác nhận bước nộp link trên Moodle.

Công cụ trợ lý được dùng để hỗ trợ chuẩn bị code/báo cáo; nhóm cần đọc, kiểm tra và giải thích phần nộp.
