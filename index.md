# Báo cáo kỹ thuật: Thu thập và phân tích cấu trúc 25.000 bài báo arXiv

**Học phần:** Nhập môn Khoa học Dữ liệu (Chương trình Chuẩn) - Khoa Công nghệ Thông tin, Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM

**Quy mô thực nghiệm:** 25.000 bài báo (41.498 phiên bản, chia đều cho 5 thành viên) | **Môi trường đo kiểm:** Google Colab Standard CPU-only | **Cập nhật:** 2026-11-24

Báo cáo này trình bày thiết kế hệ thống, kết quả kiểm toán dữ liệu và thông số hiệu năng của nhóm qua hai giai đoạn **Milestone 1 (Thu thập dữ liệu đa phiên bản và mạng trích dẫn)** và **Milestone 2 (Phân tích cấu trúc phân cấp LaTeX, chuẩn hóa và khử trùng xuyên phiên bản)**. Toàn bộ bảng số liệu và biểu đồ trong các chương được tính toán trực tiếp khi biên dịch Jupyter Book.

- **Kho mã nguồn hệ thống (M1 - M3):** [https://github.com/NguyenQuocDat06-AI/arxiv-harvester](https://github.com/NguyenQuocDat06-AI/arxiv-harvester/tree/main)
- **Bộ dữ liệu công khai 6 bảng Parquet trên Hugging Face (3,92 GiB):** [https://huggingface.co/datasets/nquocdat06/arxiv-harvester-data](https://huggingface.co/datasets/nquocdat06/arxiv-harvester-data)
- **Notebook thực nghiệm Milestone 3 (Reference Matching):** [`docs/09_m3_feature_eda_and_matching.ipynb`](https://github.com/NguyenQuocDat06-AI/arxiv-harvester/blob/main/docs/09_m3_feature_eda_and_matching.ipynb)
- **Văn bản đặc tả học phần:** [Milestone 1 - Crawling](https://hcmus-cs-ta.github.io/lab-book/intro-ds/statement/crawling/) | [Milestone 2 - Parsing](https://hcmus-cs-ta.github.io/lab-book/intro-ds/statement/parsing/) | [Milestone 3 - Matching](https://hcmus-cs-ta.github.io/lab-book/intro-ds/statement/matching/)

## 1. Bảng tổng hợp kết quả thực nghiệm toàn nhóm

| Hạng mục kiểm định | Kết quả xác minh | Chi tiết kỹ thuật |
|:---|---:|:---|
| Tổng số bài báo hợp nhất (5 thành viên) | 25.000 / 25.000 | Không trùng lặp chéo; đã hoàn tất chạy bù `--resume` trên Colab CPU cho phân vùng 24120470 |
| Tổng số phiên bản và nguồn đã kiểm toán (M1) | 41.487 / 41.498 | 38.554 bản có TeX (92,91%); 2.764 bản chỉ có PDF hoặc thiếu `.tex`; 169 bản HTTP 404 |
| Giảm dung lượng nhờ lọc tệp nhị phân khi giải nén | -89,30% | Trung bình từ 9.944.811,28 byte xuống 1.064.255,92 byte/bài; kho nguồn sạch 22,72 GiB |
| Mạng lưới trích dẫn M1 (`working` / `references`) | 976.351 / 456.149 | 0 trích dẫn mồ côi; trung bình 38,92 trích dẫn/bài trên 24.277 bài S2 xác minh |
| Hiệu năng trình thu thập M1 trên Colab CPU-only | 8,06 - 8,35 giây/bài | Đỉnh bộ nhớ RAM 1.227,73 MiB (trung bình gia quyền 765,02 MiB); khám phá danh mục 2.094,9 giây |
| Kết quả phân tích cây cấu trúc M2 trên nguồn TeX | 37.528 / 38.554 | 33.025 bản `success` (85,66%) và 4.503 bản `partial` (11,68%), tổng cộng 97,34% dựng được cây |
| Quy mô 3 bảng M2 sau khử trùng xuyên phiên bản | 38.715.592 dòng | `elements`: 15.006.000 (-35,04%); `hierarchy`: 22.532.299; `bibtex`: 1.177.293 (-35,83%) |
| Kiểm chuẩn cấu trúc 5 bảng (`validate_project`) | `True` (0 lỗi) | Đối soát toàn vẹn khóa chính, khóa ngoại xuyên bảng và tính phi chu trình DAG bằng SQLite |
| Hiệu năng trình phân tích M2 trên Colab CPU-only | 18.692,09 giây | 5 giờ 11 phút 32 giây (0,7477 giây/bài, 5 phiên độc lập); Peak RSS 845,34 MiB (trung bình 240,00 MiB) |
| Dung lượng lưu trữ đầu ra (`parsed/` M2 / HF 6 bảng) | 3,93 GiB / 3,92 GiB | Đối chiếu chi tiết giữa các bậc đóng gói ngay bên dưới |

```{note}
**Đối chiếu dung lượng lưu trữ và liên kết sang Milestone 3:**
- **3,89 GiB** (4.179.768.447 byte): Tổng dung lượng 75.000 tệp Parquet thuần của M2 (`elements`, `hierarchy`, `bibtex`) cộng gộp từ 5 phiên thành viên.
- **3,93 GiB** (4.215.352.479 byte): Dung lượng thư mục `parsed/` hợp nhất toàn nhóm ở M2 (cộng thêm 35.584.032 byte của ba tệp JSON quản trị `manifest.json`, `stats.json`, `project_validation.json`).
- **3,92 GiB** (4.207.534.396 byte, 38 phân mảnh): Dung lượng trọn bộ 6 bảng Parquet xuất bản trên Hugging Face (`papers`, `references`, `elements`, `hierarchy`, `bibtex` và bảng `predictions` gồm 162.469 dòng của Milestone 3 với kết quả LightGBM Ranker đạt trần MRR@5 = 0,6907 trên tập Test) sau khi gộp thành các phân mảnh nén Snappy.
```

## 2. Nhóm thực hiện và phân công phụ trách

| Thành viên | MSSV | GitHub | Dải mã arXiv (5.000 bài/người) | Nội dung phụ trách chính |
|:---|:---:|:---|:---:|:---|
| **Nguyễn Quốc Đạt** | 24120282 | [@NguyenQuocDat06-AI](https://github.com/NguyenQuocDat06-AI) | 2412.18848 - 2501.02641 | Khám phá danh mục, lịch sử phiên bản, chính sách truy vấn, CI và tài liệu |
| **Nguyễn Đình Tuấn** | 24120237 | [@tuan0306](https://github.com/tuan0306) | 2502.03235 - 2502.08234 | Tải nguồn đa phiên bản, nối tiếp HTTP Range, kiểm toán nguồn, sao lưu và mô hình M3 |
| **Trần Nguyên Tân** | 24120438 | [@nguyentan10052006-cmyk](https://github.com/nguyentan10052006-cmyk) | 2407.12839 - 2407.17838 | Truy vấn lô Semantic Scholar, tải bù trích dẫn, tiền xử lý và gán nhãn M3 |
| **Dương Phan Minh Trí** | 24120470 | [@takryudor](https://github.com/takryudor) | 2406.17938 - 2407.02838 | Thiết kế schema Parquet, hợp nhất phân vùng, trình phân tích LaTeX/BibTeX và đặc trưng M3 |
| **Trịnh Vỹ Triết** | 24120474 | [@AIVIETNAM-AIO-Triet-Descartes](https://github.com/AIVIETNAM-AIO-Triet-Descartes) | 2406.12938 - 2406.17937 | Giao diện dòng lệnh, điều phối chạy Colab/Kaggle, đo tài nguyên, Jupyter Book và đóng gói HF |

## 3. Cấu trúc nội dung báo cáo

1. **Phần 1 - Milestone 1 (Thu thập dữ liệu)**: [Tổng quan M1](chapters/00_m1_overview.ipynb), [1.1. Khám phá danh mục và lịch sử phiên bản](chapters/01_discovery_and_versions.ipynb), [1.2. Tải nguồn và lọc tệp nhị phân](chapters/02_source_download_and_cleaning.ipynb), [1.3. Thu thập tài liệu tham khảo Semantic Scholar](chapters/03_reference_extraction.ipynb), [1.4. Mô hình 5 bảng và kiểm chuẩn](chapters/04_schema_and_data_quality.ipynb), [1.5. Đánh giá hiệu năng M1 trên Colab CPU](chapters/05_performance_benchmark.ipynb).
2. **Phần 2 - Milestone 2 (Phân tích và chuẩn hóa)**: [Tổng quan M2](chapters/00_m2_overview.ipynb), [2.1. Gom tệp nguồn và dựng cây phân cấp](chapters/06_parsing_and_hierarchy.ipynb), [2.2. Chuẩn hóa văn bản/toán học và khử trùng](chapters/07_standardization_and_deduplication.ipynb), [2.3. Đánh giá hiệu năng M2 trên Colab CPU](chapters/08_parser_benchmark.ipynb).
3. **Phần 3 - Tổng hợp và phụ lục**: [Thảo luận, phân tích lỗi và kết luận](chapters/12_discussion_and_conclusion.ipynb), [Phụ lục A: Tái lập thực nghiệm](chapters/09_reproducibility.ipynb), [Phụ lục B: Đối chiếu yêu cầu và giới hạn](chapters/10_requirements_and_limitations.ipynb), [Phụ lục C: Giải trình hướng dẫn QA](chapters/13_teacher_qa.md), [Tài liệu tham khảo](chapters/11_references.md).
