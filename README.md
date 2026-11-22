# Báo cáo Jupyter Book M1-M2 (25.000 bài báo)

URL xuất bản cố định: https://nguyenquocdat06-ai.github.io/arxiv-harvester-book/

```bash
python -m pip install -r requirements.txt
jupyter-book build . --all -W
```

Mọi bảng thống kê và biểu đồ được notebook sinh trực tiếp từ `report_summary.json` và chạy code parser thật trên ví dụ minh họa khi biên dịch Jupyter Book; không chứa corpus gốc, ID bài báo cá nhân, file Parquet hay log/secret.
