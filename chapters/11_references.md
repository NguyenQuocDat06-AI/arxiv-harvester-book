# Tài liệu tham khảo

## Đề bài và tài liệu kỹ thuật

1. HCMUS CS Teaching Assistants. [Quy định và yêu cầu chung](https://hcmus-cs-ta.github.io/lab-book/intro-ds/statement/), [Milestone 1](https://hcmus-cs-ta.github.io/lab-book/intro-ds/statement/crawling/), [Milestone 2](https://hcmus-cs-ta.github.io/lab-book/intro-ds/statement/parsing/). Chuẩn đối chiếu nội dung và phép đo của báo cáo.
2. arXiv. [API User's Manual](https://info.arxiv.org/help/api/user-manual.html), [API Terms of Use](https://info.arxiv.org/help/api/tou.html), [Full-text harvesting](https://info.arxiv.org/help/bulk_data.html). Tham khảo discovery, endpoint và nhịp truy cập.
3. Allen Institute for AI. [Semantic Scholar Academic Graph API](https://api.semanticscholar.org/api-docs/graph). Tham khảo định danh, trường metadata và phân trang references.

## Các báo cáo cùng bài toán đã tham khảo về cách trình bày

Các nguồn dưới được đọc ngày 06/11/2026. Phần tham khảo là bố cục báo cáo, cách tách
phương pháp/thực nghiệm và cách chỉ rõ input của biểu đồ. Nội dung phân tích, ví dụ
và kết quả của Book này được viết từ source và dữ liệu của nhóm.

4. Nhóm `hcmus-arxiv-nhom1`. [arXiv Citation Pipeline — Group 1](https://hcmus-arxiv-nhom1.github.io/arxiv-book/), source tại [1542331](https://github.com/hcmus-arxiv-nhom1/arxiv-book/tree/1542331e3d7b8a7e5e0ad5f4ee9a082ed82a5208). Tham khảo cách chia overview, methodology, data statistics, performance và discussion; tách phạm vi phép đo khỏi trạng thái corpus.
5. Nhóm `ahtuan171`. [Khung báo cáo M1–M2](https://github.com/ahtuan171/arXiv-Project/tree/dd076d4dbc86d7b8abad54cf9b9bd8abeab80f0e/book). Tham khảo cách chia hai phần milestone và thứ tự các bước xử lý. Tại bản đã đọc, notebook chủ yếu là khung, không dùng làm bằng chứng kết quả hoàn tất.
6. Nhóm `tuandatedu`. [Notebook báo cáo M2](https://github.com/tuandatedu/arXir_project/blob/f2715ba852dd5992bbca3bf945ddfc4cad43fc8a/src/m2_parsing/report_m2.ipynb). Tham khảo cách notebook đọc file metrics riêng, phân biệt run mới/resume và trình bày standardization/dedup.
7. Nhóm `thinhelzan842`. [Các notebook thống kê và hiệu năng](https://github.com/thinhelzan842/intro-ds-arxiv-project/tree/cb5a2905290acb11febb15a1f00851a77106212f/docs/milestone1). Tham khảo thứ tự bảng chỉ tiêu, size trước/sau, version và RAM/đĩa. Các giá trị benchmark không được chuyển sang báo cáo của nhóm.

## Source và khả năng tái lập của nhóm

[Repository code, nhánh main](https://github.com/NguyenQuocDat06-AI/arxiv-harvester/tree/main) ·
[Đóng góp và lịch sử thành viên](https://github.com/NguyenQuocDat06-AI/arxiv-harvester/blob/main/CONTRIBUTIONS.md) ·
[Source dựng báo cáo](https://github.com/NguyenQuocDat06-AI/arxiv-harvester/blob/main/tools/build_public_submission_book.py).

Commit parser cho các ví dụ thực thi được ghim trong `requirements.txt`. Thông tin môi
trường của các lượt đo được hiển thị tại chương benchmark tương ứng. Công cụ trợ lý được
dùng để hỗ trợ chuẩn bị code và nội dung; nhóm chịu trách nhiệm kiểm tra và giải thích bản nộp.
