/* _static/custom.js — Click-to-Sort (VN/EN numbers) & Quick Filter for arXiv Harvester Tables */
(() => {
  if (window.__ahBookInteractiveInit) return;
  window.__ahBookInteractiveInit = true;

  const collator = new Intl.Collator("vi", { numeric: true, sensitivity: "base" });

  const parseSmartNum = (raw) => {
    const s = (raw || "").trim().replace(/\u2212/g, "-");
    if (!s || s === "—" || s === "-" || s === "N/A") return null;
    if (/^\d{4}-\d{2}-\d{2}/.test(s)) return null;
    const m = s.match(/^[+-]?\d[\d.,]*/);
    if (!m) return null;
    if (/^\s*-\s*\d/.test(s.slice(m[0].length))) return null;
    let tok = m[0];
    if (tok.includes(".") && tok.includes(",")) {
      tok = tok.lastIndexOf(",") > tok.lastIndexOf(".")
        ? tok.replace(/\./g, "").replace(",", ".")
        : tok.replace(/,/g, "");
    } else if (tok.includes(",")) {
      tok = (tok.match(/,/g).length > 1) ? tok.replace(/,/g, "") : tok.replace(",", ".");
    } else if (/^[+-]?\d{1,3}(\.\d{3})+$/.test(tok)) {
      tok = tok.replace(/\./g, "");
    }
    const v = Number(tok);
    return Number.isFinite(v) ? v : null;
  };

  const enhanceTables = () => {
    document.querySelectorAll(".bd-article table.ah-styled-table, .bd-article table.dataframe, .bd-article table.table").forEach((tbl) => {
      if (tbl.dataset.ahEnhanced === "1" || !tbl.tHead || !tbl.tBodies.length) return;
      const tbody = tbl.tBodies[0];
      if (tbody.rows.length < 2) return;
      tbl.dataset.ahEnhanced = "1";

      const headers = Array.from(tbl.tHead.rows[tbl.tHead.rows.length - 1].cells);
      headers.forEach((th, colIdx) => {
        const numHits = Array.from(tbody.rows).filter((r) => {
          const cell = r.cells[colIdx];
          return cell && parseSmartNum(cell.textContent) !== null;
        }).length;
        if (colIdx > 0 && numHits >= Math.ceil(tbody.rows.length * 0.7)) {
          th.classList.add("ah-num");
          Array.from(tbody.rows).forEach((r) => r.cells[colIdx]?.classList.add("ah-num"));
        }

        th.classList.add("ah-sortable");
        th.dataset.ahSort = "none";
        th.title = "Nhấp để sắp xếp theo cột này";
        const icon = document.createElement("span");
        icon.className = "ah-sort-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = "⇅";
        th.appendChild(icon);

        th.addEventListener("click", () => {
          const asc = th.dataset.ahSort !== "asc";
          headers.forEach((h) => {
            h.dataset.ahSort = "none";
            const ic = h.querySelector(".ah-sort-icon");
            if (ic) ic.textContent = "⇅";
          });
          th.dataset.ahSort = asc ? "asc" : "desc";
          icon.textContent = asc ? "↑" : "↓";

          const rows = Array.from(tbody.rows);
          rows.sort((ra, rb) => {
            const ta = (ra.cells[colIdx]?.textContent || "").trim();
            const tb = (rb.cells[colIdx]?.textContent || "").trim();
            const na = parseSmartNum(ta), nb = parseSmartNum(tb);
            if (na === null && nb === null) return asc ? collator.compare(ta, tb) : collator.compare(tb, ta);
            if (na === null) return 1;
            if (nb === null) return -1;
            return asc ? na - nb : nb - na;
          });
          rows.forEach((r) => tbody.appendChild(r));
        });
      });

      const wrap = document.createElement("div");
      wrap.className = "ah-table-wrap";
      tbl.parentNode.insertBefore(wrap, tbl);
      if (tbody.rows.length >= 6) {
        const bar = document.createElement("div");
        bar.className = "ah-table-toolbar";
        const inp = document.createElement("input");
        inp.type = "search";
        inp.className = "ah-table-filter";
        inp.placeholder = `Lọc nhanh trong ${tbody.rows.length} dòng...`;
        inp.setAttribute("aria-label", "Lọc nhanh dòng trong bảng");
        const meta = document.createElement("span");
        meta.className = "ah-table-meta";
        meta.textContent = `${tbody.rows.length}/${tbody.rows.length} dòng • Nhấp tiêu đề cột để sắp xếp`;
        inp.addEventListener("input", () => {
          const q = inp.value.trim().toLowerCase();
          let shown = 0;
          Array.from(tbody.rows).forEach((r) => {
            const ok = !q || r.textContent.toLowerCase().includes(q);
            r.style.display = ok ? "" : "none";
            if (ok) shown += 1;
          });
          meta.textContent = `${shown}/${tbody.rows.length} dòng hiển thị`;
        });
        bar.append(inp, meta);
        wrap.appendChild(bar);
      }
      wrap.appendChild(tbl);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enhanceTables);
  } else {
    enhanceTables();
  }
})();
