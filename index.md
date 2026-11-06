# arXiv Harvester — Thu thập và xử lý dữ liệu bài báo

Báo cáo đồ án **Nhập môn Khoa học dữ liệu**, Milestone 1 và 2. Cập nhật ngày 2026-11-06.

## Tóm tắt

Nhóm xây dựng pipeline thu thập metadata, nguồn LaTeX/BibTeX và references của bài báo arXiv,
sau đó phân tích cấu trúc theo version, chuẩn hóa nội dung và khử trùng. Báo cáo trình bày
thiết kế, kết quả kiểm tra, chi phí tài nguyên và các lỗi còn lại trên dữ liệu đã có.

Phạm vi đánh giá hiện tại là **73 paper và 119 version**, dựng từ
8 lô backup đã kiểm tra checksum. Dải được giao cho toàn nhóm gồm
25,000 paper. Kết quả snapshot và phép đo từng lượt được ghi riêng trong
các bảng để người đọc đối chiếu đúng phạm vi.

## Thành viên và phạm vi phụ trách

- **Nguyễn Quốc Đạt — 24120282:** discovery, metadata/version và tích hợp.
- **Nguyễn Đình Tuấn — 24120237:** tải, giải nén, lọc nguồn và audit.
- **Trần Nguyên Tân — 24120438:** references, Semantic Scholar và provenance.
- **Dương Phan Minh Trí — 24120470:** lưu trữ, schema, parser và chuẩn hóa dữ liệu.
- **Trịnh Vỹ Triết — 24120474:** runner, profiler, benchmark và dựng Book.

[Lịch sử và phần đóng góp của thành viên](https://github.com/NguyenQuocDat06-AI/arxiv-harvester/blob/main/CONTRIBUTIONS.md).

## Nội dung báo cáo

**[Milestone 1 — Thu thập dữ liệu](chapters/00_m1_overview.ipynb)** mở đầu bằng bảng chỉ tiêu,
rồi đi vào discovery, tải nguồn, references, schema và hiệu năng. Các trung bình và tỷ lệ
đều có tập tính và mẫu số.

**[Milestone 2 — Phân tích cấu trúc và chuẩn hóa](chapters/00_m2_overview.ipynb)** trình bày
coverage của parser, gathering/hierarchy, normalization/dedup và tài nguyên đo được.
Các ví dụ thuật toán tổng hợp được đánh dấu riêng với thống kê corpus.

**[Thảo luận và kết luận](chapters/12_discussion_and_conclusion.ipynb)** tổng hợp kết quả,
giới hạn và thứ tự hoàn thiện. Phụ lục cung cấp
[lệnh tái lập](chapters/09_reproducibility.ipynb),
[đối chiếu yêu cầu](chapters/10_requirements_and_limitations.ipynb) và
[tài liệu tham khảo](chapters/11_references.md).

## Dữ liệu và phép đo

Input công khai gồm thống kê tổng hợp và nhãn paper P001…; nguồn TeX/Bib, bảng mã, Parquet và
log gốc được giữ trong workspace của nhóm. Bảng và biểu đồ thống kê được notebook sinh khi
Book biên dịch. Có thể mở phần code thu gọn để kiểm tra công thức.

Snapshot chưa hoàn tất: còn nguồn/references lỗi, version partial và root chưa chọn được.
Số đo M1 là một lượt Colab CPU-only đã tạm dừng, phạm vi 14 paper; số đo M2 là lượt Windows
CPU trên 73 paper. Benchmark M2 cuối trên Colab CPU-only vẫn cần bổ sung.

## Liên kết

[Source code — main](https://github.com/NguyenQuocDat06-AI/arxiv-harvester/tree/main) ·
[Repository báo cáo](https://github.com/NguyenQuocDat06-AI/arxiv-harvester-book) ·
[Đề đồ án](https://hcmus-cs-ta.github.io/lab-book/intro-ds/statement/).

**URL Book cố định:** https://nguyenquocdat06-ai.github.io/arxiv-harvester-book/
