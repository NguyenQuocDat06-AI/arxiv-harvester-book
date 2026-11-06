# Báo cáo Jupyter Book M1–M2

Link nộp cố định: https://nguyenquocdat06-ai.github.io/arxiv-harvester-book/

```bash
python -m pip install -r requirements.txt
jupyter-book build . --all -W
```

Notebook đọc `report_summary.json` và sinh bảng/biểu đồ khi build. Các ví dụ tổng hợp import parser từ commit source ghim trong requirements. Build không gọi Drive, arXiv hoặc S2. Corpus và log gốc không nằm trong repository này.

Sửa `index.md`, notebook trong `chapters/` hoặc cập nhật thống kê có bằng chứng; build đạt rồi push `main`. Giữ nguyên tên tài khoản/repository và Pages để URL nộp không đổi. Không sửa trực tiếp HTML trong `_build/`.
