/* ==========================================================
   页面交互：渲染技能/项目、导航高亮、滚动淡入、移动端菜单
   ========================================================== */
(function () {
  "use strict";

  /* ---------- 主题初始化：读取本地保存的偏好（立即执行，避免闪烁） ---------- */
  (function initTheme() {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") {
        document.documentElement.setAttribute("data-theme", saved);
      }
    } catch (e) { /* localStorage 不可用时保持默认浅色 */ }
  })();

  /* ---------- 深浅色主题切换 ---------- */
  function setupThemeToggle() {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;

    function applyTip(theme) {
      const tip = theme === "dark" ? "切换到浅色主题" : "切换到深色主题";
      btn.setAttribute("aria-label", tip);
      btn.setAttribute("title", tip);
    }
    applyTip(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");

    btn.addEventListener("click", function () {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* 忽略存储异常 */ }
      applyTip(next);
    });
  }

  /* ---------- 渲染技能方向 ---------- */
  function renderSkills() {
    const box = document.getElementById("skillList");
    if (!box || typeof SKILLS === "undefined") return;
    box.innerHTML = SKILLS.map(function (group) {
      const tags = group.items.map(function (item) {
        return '<span class="tag">' + item + "</span>";
      }).join("");
      return '<div class="skill-group"><h3>' + group.group + '</h3><div class="skill-tags">' + tags + "</div></div>";
    }).join("");
  }

  /* ---------- 渲染项目列表 ---------- */
  function renderProjects() {
    const list = document.getElementById("projectList");
    if (!list || typeof PROJECTS === "undefined") return;

    list.innerHTML = PROJECTS.map(function (p, i) {
      const no = String(i + 1).padStart(2, "0");
      const tech = (p.tech || []).map(function (t) {
        return '<span class="tag">' + t + "</span>";
      }).join("");
      return (
        '<article class="project reveal">' +
          '<figure class="project-media">' +
            '<img src="' + p.image + '" alt="' + p.name + ' 项目配图" loading="lazy">' +
          "</figure>" +
          '<div class="project-info">' +
            '<span class="project-no">' + no + " /</span>" +
            '<h3 class="project-title">' + p.name + "</h3>" +
            '<div class="project-meta"><span class="chip">' + p.category + "</span><span>" + p.date + " 完成</span></div>" +
            '<p class="project-desc">' + p.description + "</p>" +
            '<div class="project-tech">' + tech + "</div>" +
          "</div>" +
        "</article>"
      );
    }).join("");

    const count = document.getElementById("projectCount");
    if (count) count.textContent = "共 " + PROJECTS.length + " 个项目";
  }

  /* ---------- 滚动淡入 ---------- */
  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 顶部导航高亮当前章节 ---------- */
  function setupNavHighlight() {
    const links = document.querySelectorAll('.site-nav a[href^="#"]');
    if (!links.length || !("IntersectionObserver" in window)) return;

    const pairs = [];
    links.forEach(function (link) {
      const section = document.querySelector(link.getAttribute("href"));
      if (section) pairs.push({ section: section, link: link });
    });
    if (!pairs.length) return;

    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        pairs.forEach(function (p) { p.link.classList.remove("active"); });
        const hit = pairs.find(function (p) { return p.section === entry.target; });
        if (hit) hit.link.classList.add("active");
      });
    }, { rootMargin: "-40% 0px -55% 0px" });

    pairs.forEach(function (p) { io.observe(p.section); });
  }

  /* ---------- 移动端菜单 ---------- */
  function setupMenu() {
    const header = document.getElementById("siteHeader");
    const btn = document.getElementById("menuToggle");
    if (!header || !btn) return;

    btn.addEventListener("click", function () {
      const open = header.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // 点击导航后自动收起菜单
    header.querySelectorAll('.site-nav a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function () {
        header.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- 页脚年份 ---------- */
  function setYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupThemeToggle();
    renderSkills();
    renderProjects();
    setupMenu();
    setupNavHighlight();
    setupReveal();
    setYear();
  });
})();
