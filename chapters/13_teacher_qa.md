# Phụ lục C. Đối chiếu hướng dẫn QA của giảng viên

Nguồn đối chiếu: [QA Replies 2627-1](https://docs.google.com/spreadsheets/d/11UDWf52DitCDrV386WkYK0ZySqTGQSCRnEwQ37u9uyQ/edit) - Nhóm học chương trình Chuẩn, trình bày báo cáo bằng tiếng Việt.

- **[M1 dòng 7](https://docs.google.com/spreadsheets/d/11UDWf52DitCDrV386WkYK0ZySqTGQSCRnEwQ37u9uyQ/edit#gid=0&range=A7:B7) (URL cố định qua các mốc nộp)**: Giữ nguyên địa chỉ `https://nguyenquocdat06-ai.github.io/arxiv-harvester-book/` khi cập nhật báo cáo từ mốc 73 bài tiến độ lên bộ đầy đủ 25.000 bài.
- **[M1 dòng 13-17](https://docs.google.com/spreadsheets/d/11UDWf52DitCDrV386WkYK0ZySqTGQSCRnEwQ37u9uyQ/edit#gid=0&range=A13:B17) (Benchmark nhiều phiên Colab CPU-only)**: Toàn bộ 5 lượt chạy full M2 (mỗi lượt 5.000 bài, không gối giờ, `reused=0`, cùng `code_hash=cf2de7a1...`) được chạy trên Google Colab CPU-only và tổng hợp qua `src/crawler/benchmark_sessions.py`.
- **[M1 dòng 19](https://docs.google.com/spreadsheets/d/11UDWf52DitCDrV386WkYK0ZySqTGQSCRnEwQ37u9uyQ/edit#gid=0&range=A19:B19) (Giữ & fallback `.bbl`)**: Downloader giữ lại `.bbl`, và parser giải mã `\bibitem` trong `<root>.bbl` hoặc bibliography được khai báo khi thiếu `.bib`.
- **[M1 dòng 20-21](https://docs.google.com/spreadsheets/d/11UDWf52DitCDrV386WkYK0ZySqTGQSCRnEwQ37u9uyQ/edit#gid=0&range=A20:B21) (Nguồn ngày `ref_submission_date`)**: Chấp nhận `publicationDate` từ S2 hoặc ngày lấy qua arXiv ID và lưu rõ provenance.
- **[M1 dòng 17, 22](https://docs.google.com/spreadsheets/d/11UDWf52DitCDrV386WkYK0ZySqTGQSCRnEwQ37u9uyQ/edit#gid=0&range=A17:B22) (Cấu trúc 2 chương chính M1/M2 & mục con kỹ thuật)**: Book giữ đúng cấu trúc 2 phần M1/M2 kèm thảo luận và 4 phụ lục.
