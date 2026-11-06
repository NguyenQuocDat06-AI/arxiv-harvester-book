# Jupyter Book M1–M2

Báo cáo tiến độ với số liệu tổng hợp. Input biểu đồ được giữ trong `report_summary.json`; dữ liệu gốc và bảng mã paper giữ riêng.

```bash
python -m pip install -r requirements.txt
jupyter-book build . --all -W
```

Workflow Pages thực thi lại notebook và sinh bảng/biểu đồ khi build. Snapshot chưa hoàn thành toàn corpus và chưa có benchmark M2 cuối trên Colab CPU-only.
