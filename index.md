# Tổng quan Đồ án (Milestone 1 & 2)

::::{div} ah-hero
:::{div} ah-hero-badges
<span class="ah-badge ah-badge--arxiv">arXiv Harvester • 25.000 Bài báo</span>
<span class="ah-badge ah-badge--brand">Nhập môn Khoa học Dữ liệu (Chương trình Chuẩn)</span>
<span class="ah-badge">Google Colab CPU-only</span>
<span class="ah-badge">Cập nhật: 2026-11-24</span>

:::

<div class="ah-hero-title">Thu thập Đa Phiên bản, Phân tích Cấu trúc Phân cấp &amp; Chuẩn hóa 25.000 Bài báo Khoa học arXiv</div>

<p class="ah-hero-lead">
Báo cáo kỹ thuật trình bày trọn vẹn thiết kế hệ thống, kết quả kiểm toán độc lập và số đo hiệu năng của toàn nhóm (<strong>5 thành viên × 5.000 arXiv ID</strong>, bao phủ <strong>41.498 phiên bản</strong>) qua hai giai đoạn <strong>Milestone 1 (Data Crawling)</strong> và <strong>Milestone 2 (Hierarchical Parsing, Normalization &amp; Deduplication)</strong> trên môi trường chuẩn <strong>Google Colab CPU-only</strong>.
</p>

:::{div} ah-hero-links
[Mã nguồn Pipeline (GitHub)](https://github.com/NguyenQuocDat06-AI/arxiv-harvester/tree/main)
[Bộ dữ liệu 6 Bảng Hugging Face (3,92 GiB)](https://huggingface.co/datasets/nquocdat06/arxiv-harvester-data)
[Đặc tả M1 — Crawling](https://hcmus-cs-ta.github.io/lab-book/intro-ds/statement/crawling/)
[Đặc tả M2 — Parsing](https://hcmus-cs-ta.github.io/lab-book/intro-ds/statement/parsing/)
:::
::::

## Chỉ số Kỹ thuật Trọng tâm (Executive KPIs)

::::{grid} 1 2 3 3
:gutter: 3

:::{grid-item-card}
:class-card: ah-kpi-card kpi-arxiv

<div class="ah-kpi-eyebrow">Quy mô Corpus Hợp nhất</div>
<div class="ah-kpi-metric">25.000 / 25.000</div>
<p class="ah-kpi-sub">Đủ 100% dải ID của 5 thành viên • <strong>0</strong> trùng lặp chéo • Lọc ảnh nhị phân giảm <strong>-89,30%</strong> dung lượng</p>

:::

:::{grid-item-card}
:class-card: ah-kpi-card

<div class="ah-kpi-eyebrow">Kiểm toán Nguồn Phiên bản (M1)</div>
<div class="ah-kpi-metric">41.487 / 41.498</div>
<p class="ah-kpi-sub">Đạt <strong>99,97%</strong> xác minh • <strong>38.554</strong> bản có TeX • <strong>2.764</strong> bản PDF-only / không TeX</p>

:::

:::{grid-item-card}
:class-card: ah-kpi-card kpi-teal

<div class="ah-kpi-eyebrow">Mạng lưới Trích dẫn S2 (M1)</div>
<div class="ah-kpi-metric">976.351</div>
<p class="ah-kpi-sub"><strong>0</strong> cạnh mồ côi • <strong>456.149</strong> cạnh đích arXiv chuẩn 6 cột (24.277 bài xác minh)</p>

:::

:::{grid-item-card}
:class-card: ah-kpi-card kpi-emerald

<div class="ah-kpi-eyebrow">Độ phủ Cây Cấu trúc TeX (M2)</div>
<div class="ah-kpi-metric">97,34%</div>
<p class="ah-kpi-sub"><strong>33.025</strong> <code>success</code> (85,66%) + <strong>4.503</strong> <code>partial</code> (11,68%) trên 38.554 bản TeX</p>

:::

:::{grid-item-card}
:class-card: ah-kpi-card

<div class="ah-kpi-eyebrow">Khử trùng 2 Tầng &amp; Kiểm chuẩn 5 Bảng</div>
<div class="ah-kpi-metric">-35,04% / -35,83%</div>
<p class="ah-kpi-sub"><code>elements</code>: <strong>15,01M</strong> • <code>hierarchy</code>: <strong>22,53M</strong> • <code>bibtex</code>: <strong>1,18M</strong> • <code>structural_valid = True</code></p>

:::

:::{grid-item-card}
:class-card: ah-kpi-card kpi-amber

<div class="ah-kpi-eyebrow">Hiệu năng Google Colab CPU-only</div>
<div class="ah-kpi-metric">0,7477 s/bài</div>
<p class="ah-kpi-sub">Tổng <strong>18.692,09s</strong> (5h 11p 32s, 5 phiên cold) • Peak RSS <strong>845,34 MiB</strong> • Output M2 <strong>3,93 GiB</strong></p>

:::
::::

:::{admonition} Liên kết Hệ sinh thái Sản phẩm Hoàn chỉnh (M1 → M2 → M3)
:class: seealso ah-ecosystem-box

Theo đúng hướng dẫn QA của giảng viên (M1 – STT 6 & 16), cuốn **Jupyter Book** này tập trung báo cáo chuyên sâu hai giai đoạn **Milestone 1 (Thu thập dữ liệu)** và **Milestone 2 (Phân tích cấu trúc & Chuẩn hóa)**. Toàn bộ kết quả của hai giai đoạn này tiếp tục làm nền tảng trực tiếp cho hệ sinh thái đầu ra cuối kỳ của nhóm:

- **Kho mã nguồn tích lũy duy nhất (M1 → M3, 8 lệnh CLI):** [`NguyenQuocDat06-AI/arxiv-harvester`](https://github.com/NguyenQuocDat06-AI/arxiv-harvester)
- **Bộ dữ liệu công khai 6 bảng Parquet trên Hugging Face (`38` shards / `39.359.210` dòng / `3,92 GiB`, `valid = True`):** [`nquocdat06/arxiv-harvester-data`](https://huggingface.co/datasets/nquocdat06/arxiv-harvester-data) (`papers`, `references`, `elements`, `hierarchy`, `bibtex`, `predictions`)
- **Phân tích thực nghiệm Milestone 3 (Reference Matching — 25 đặc trưng cổ điển khai thác cây Hierarchy M2, đạt trần `MRR@5 = 0,6907`, `Test-Manual = 0,8885`, `5-Fold CV S3 = 0,8530`):** Notebook [`docs/09_m3_feature_eda_and_matching.ipynb`](https://github.com/NguyenQuocDat06-AI/arxiv-harvester/blob/main/docs/09_m3_feature_eda_and_matching.ipynb)
:::

## Cấu trúc & Lộ trình Đọc Báo cáo

::::{grid} 1 1 3 3
:gutter: 3

:::{grid-item-card} Phần I — Milestone 1: Thu thập Dữ liệu
:link: chapters/00_m1_overview
:link-type: doc
:class-card: ah-nav-card

Khám phá dải ID & lịch sử phiên bản qua Atom/OAI-PMH (`oaipmh.arxiv.org`), tải mã nguồn TeX/Bib/BBL theo nhịp `≥ 3,0s`, lọc ảnh nhị phân ngay lúc giải nén (**-89,30%** dung lượng), thu thập trích dẫn Semantic Scholar và đo đủ 7 chỉ số hiệu năng crawler trên Colab CPU.
:::

:::{grid-item-card} Phần II — Milestone 2: Phân tích & Chuẩn hóa
:link: chapters/00_m2_overview
:link-type: doc
:class-card: ah-nav-card

Thuật toán Multi-file Gathering chống chu trình, dựng cây phân cấp `document → section → sentence/formula/figure/list`, chuẩn hóa toán LaTeX, hợp nhất trường BibTeX + đổi tên `\cite{}` xuyên phiên bản và benchmark 5 phiên cold.
:::

:::{grid-item-card} Phần III — Tổng hợp & Phụ lục
:link: chapters/12_discussion_and_conclusion
:link-type: doc
:class-card: ah-nav-card

Thảo luận kết quả 25.000 bài, giải phẫu Top 15 diagnostic (tách bạch số phiên bản và số lượt xuất hiện), quy trình tái lập thực nghiệm, ma trận đối chiếu đặc tả đề bài và giải trình chi tiết QA của giảng viên.
:::
::::

## Bảng Tổng hợp Chỉ tiêu Toàn nhóm (25.000 Bài báo)

| Hạng mục kiểm định | Chỉ số xác minh | Ghi chú kỹ thuật |
|:---|---:|:---|
| Tổng số bài báo hợp nhất (5 thành viên) | **25.000 / 25.000** | `0` trùng lặp chéo; hoàn tất `--resume` Colab CPU cho phân vùng `24120470` |
| Tổng số phiên bản & nguồn đã kiểm toán | **41.487 / 41.498** | `38.554` TeX xác minh (`92,91%`); `2.764` PDF-only/không TeX; `169` HTTP 404 |
| Giảm dung lượng nhờ lọc nhị phân khi giải nén (M1) | **-89,30%** | TB từ `9.944.811,28 byte` xuống `1.064.255,92 byte/bài`; tổng corpus sạch `22,72 GiB` |
| Mạng trích dẫn M1 (`working` / `course_export`) | **976.351 / 456.149** | `0` trích dẫn mồ côi; trung bình `38,92` trích dẫn/bài trên `24.277` bài S2 xác minh |
| Kết quả Parser M2 trên tập phiên bản có TeX | **37.528 / 38.554** | `33.025` `success` (`85,66%`) + `4.503` `partial` (`11,68%`, tổng `97,34%` parse được) |
| Quy mô 3 bảng M2 sau khử trùng xuyên phiên bản | **38.715.592 dòng** | `elements`: `15.006.000` (`-35,04%`); `hierarchy`: `22.532.299`; `bibtex`: `1.177.293` (`-35,83%`) |
| Kiểm chuẩn cấu trúc 5 bảng (`validate_project`) | **`True` (0 lỗi)** | Toàn vẹn khóa chính, khóa ngoại xuyên M1–M2 và cây DAG phân cấp trên SQLite ngoài bộ nhớ |
| Hiệu năng M2 trên Google Colab CPU-only | **18.692,09 giây** | `5h 11p 32s` (`0,7477 s/bài`, 5 phiên cold, `reused = 0`); Peak RSS `845,34 MiB` (TB `240,00 MiB`) |
| Dung lượng đầu ra Parquet (`M2` / `HF 6 bảng`) | **3,93 GiB / 3,92 GiB** | Đối chiếu chi tiết từng byte giữa các bậc lưu trữ ngay bên dưới |

```{note}
**Đối chiếu minh bạch dung lượng lưu trữ giữa các bậc đầu ra:**
- **`3,89 GiB`** (`4.179.768.447` byte): Tổng dung lượng `75.000` tệp Parquet M2 thuần (`elements`, `hierarchy`, `bibtex`) cộng gộp từ 5 phiên thành viên.
- **`3,93 GiB`** (`4.215.352.479` byte): Dung lượng thư mục `parsed/` hợp nhất toàn nhóm ở M2 do profiler ghi nhận (gồm 3 bảng Parquet hợp nhất kèm `manifest.json`, `stats.json` và `project_validation.json`).
- **`3,92 GiB`** (`4.012,62 MiB` / `38` shards): Dung lượng trọn bộ **6 bảng Parquet chuẩn Hugging Face** (`papers` `3,52 MiB`, `references` `74,23 MiB`, `elements` `2.443,69 MiB`, `hierarchy` `1.301,81 MiB`, `bibtex` `185,30 MiB`, `predictions` `4,06 MiB`) sau khi gộp thành các shard lớn chuẩn nén Snappy + *dictionary encoding*.
```

## Nhóm Thực hiện & Phân công Phụ trách

*(Đồng bộ chính xác với mục [`Team & Contributors`](https://github.com/NguyenQuocDat06-AI/arxiv-harvester/blob/main/README.md#team--contributors) trên kho mã nguồn chính)*

| Thành viên | MSSV | GitHub | Dải arXiv ID (5.000 bài/người) | Mảng triển khai chính |
|:---|:---:|:---|:---:|:---|
| **Nguyễn Quốc Đạt** | `24120282` | [@NguyenQuocDat06-AI](https://github.com/NguyenQuocDat06-AI) | `2412.18848 → 2501.02641` | Discovery, lịch sử phiên bản, request policy, tích hợp CI & tài liệu |
| **Nguyễn Đình Tuấn** | `24120237` | [@tuan0306](https://github.com/tuan0306) | `2502.03235 → 2502.08234` | Tải mã nguồn, HTTP Range resume/retry, kiểm kê nguồn, backup & mô hình M3 |
| **Trần Nguyên Tân** | `24120438` | [@nguyentan10052006-cmyk](https://github.com/nguyentan10052006-cmyk) | `2407.12839 → 2407.17838` | S2 batching, reference retry/enrich, provenance, tiền xử lý & gán nhãn M3 |
| **Dương Phan Minh Trí** | `24120470` | [@takryudor](https://github.com/takryudor) | `2406.17938 → 2407.02838` | Schema Parquet, gộp shard, parser LaTeX/BibTeX, kiểm chuẩn 5 bảng & đặc trưng M3 |
| **Trịnh Vỹ Triết** | `24120474` | [@AIVIETNAM-AIO-Triet-Descartes](https://github.com/AIVIETNAM-AIO-Triet-Descartes) | `2406.12938 → 2406.17937` | CLI runner, điều phối Colab/Kaggle, profiler, Jupyter Book, đóng gói HF & Poster A2 |
