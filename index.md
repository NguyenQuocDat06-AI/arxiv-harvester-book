# arXiv Harvester - Báo cáo Milestone 1 và 2 (25.000 bài báo)

Báo cáo đồ án môn **Nhập môn Khoa học dữ liệu (chương trình Chuẩn)**, cập nhật ngày **2026-11-22** với kết quả **đầy đủ 25.000 bài báo / 41.498 version** của cả 5 thành viên chạy và đo hiệu năng trên **Google Colab CPU-only**.

## Tóm tắt kết quả toàn nhóm (25.000 bài)

| Chỉ tiêu | Kết quả đạt được |
|---|---:|
| Tổng số publication hợp nhất (5 thành viên, 0 trùng lặp) | **25.000 / 25.000** |
| Tổng số version & nguồn đã audit xác minh | **41.487 / 41.498** (TeX: 38,554; Empty: 2,764) |
| References M1 (`working` / `course arXiv`) | **976,351** (`0` mồ côi) / **456,149** |
| M2 parser trên version TeX xác minh | **33,025 `success` (85.66%)**, **4,503 `partial` (97.34% parse được)** |
| Tổng dòng 3 bảng M2 sau khử trùng | `elements`: **15,006,000** (-35.04%); `hierarchy`: **22,532,299**; `bibtex`: **1,177,293** (-35.83%) |
| Kiểm chuẩn cấu trúc 5 bảng toàn cục (`validate_project`) | **`structural_valid = True`** (`0` lỗi cấu trúc/khóa ngoại/chu trình) |
| Benchmark Google Colab CPU-only (5 phiên cold) | **18,692.09 giây** (**0.7477s/bài**), Peak RSS **845.34 MiB**, Output **3.93 GiB** |

## Thành viên và dải ID phụ trách

- **Nguyễn Quốc Đạt - 24120282** (`2412.18848 - 2501.02641`): discovery, metadata/version và tích hợp.
- **Nguyễn Đình Tuấn - 24120237** (`2502.03235 - 2502.08234`): tải, giải nén, lọc nguồn và audit.
- **Trần Nguyên Tân - 24120438** (`2407.12839 - 2407.17838`): references, Semantic Scholar và provenance.
- **Dương Phan Minh Trí - 24120470** (`2406.17938 - 2407.02838`): lưu trữ, schema, parser, chuẩn hóa và `--resume` Colab CPU.
- **Trịnh Vỹ Triết - 24120474** (`2406.12938 - 2406.17937`): runner, profiler, benchmark và dựng Book.

## Cấu trúc báo cáo

- **[Milestone 1: Thu thập dữ liệu](chapters/00_m1_overview.ipynb)**: Discovery, tải & kiểm toán nguồn, Semantic Scholar references, mô hình 5 bảng và đo crawler M1.
- **[Milestone 2: Phân tích cấu trúc và chuẩn hóa](chapters/00_m2_overview.ipynb)**: Gathering đa tệp, dựng hierarchy, chuẩn hóa LaTeX/Toán, trích `.bib`/`.bbl`, khử trùng 2 tầng và benchmark chính thức 25.000 bài trên Google Colab CPU-only.
- **[Thảo luận](chapters/12_discussion_and_conclusion.ipynb)** & các phụ lục: [Tái lập](chapters/09_reproducibility.ipynb), [Đối chiếu yêu cầu](chapters/10_requirements_and_limitations.ipynb), [Tài liệu tham khảo](chapters/11_references.md) và [QA giảng viên](chapters/13_teacher_qa.md).

**URL Book cố định:** https://nguyenquocdat06-ai.github.io/arxiv-harvester-book/ | [Repository source](https://github.com/NguyenQuocDat06-AI/arxiv-harvester/tree/main) | [Đề đồ án M2](https://hcmus-cs-ta.github.io/lab-book/intro-ds/statement/parsing/)
