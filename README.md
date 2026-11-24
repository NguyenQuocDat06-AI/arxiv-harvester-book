# Báo cáo kỹ thuật Jupyter Book M1 & M2 (25.000 bài báo)

- **Địa chỉ xuất bản cố định:** https://nguyenquocdat06-ai.github.io/arxiv-harvester-book/
- **Kho mã nguồn hệ thống (M1 - M3):** https://github.com/NguyenQuocDat06-AI/arxiv-harvester
- **Bộ dữ liệu 6 bảng Parquet trên Hugging Face (3,92 GiB):** https://huggingface.co/datasets/nquocdat06/arxiv-harvester-data

```bash
python -m pip install -r requirements.txt
jupyter-book build . --all -W
```

Mọi bảng thống kê và biểu đồ được sinh trực tiếp từ `report_summary.json` cùng mã nguồn thư viện `parser` tại thời điểm biên dịch Jupyter Book.
