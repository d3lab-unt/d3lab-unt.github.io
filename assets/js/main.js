document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("copyright-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
    var linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
  // News: countdown to upcoming events
  document.querySelectorAll(".news-countdown[data-event-date]").forEach(function (el) {
    var target = new Date(el.getAttribute("data-event-date"));
    var text = el.querySelector(".countdown-text");
    if (isNaN(target) || !text) return;
    var days = Math.ceil((target - new Date()) / 86400000);
    if (days > 1) {
      text.textContent = days + " days to go";
    } else if (days === 1) {
      text.textContent = "Starts tomorrow";
    } else if (days > -4) {
      text.textContent = "Happening now";
    } else {
      text.textContent = "Presented";
    }
  });

  // News page: category filter
  var filterBtns = document.querySelectorAll(".news-filter-btn");
  var items = document.querySelectorAll(".timeline-item");
  var emptyMsg = document.querySelector(".news-empty");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.getAttribute("data-filter");
      filterBtns.forEach(function (b) { b.classList.toggle("active", b === btn); });
      var shown = 0;
      items.forEach(function (item) {
        var match = filter === "all" || item.getAttribute("data-category") === filter;
        item.style.display = match ? "" : "none";
        if (match) shown++;
      });
      if (emptyMsg) emptyMsg.classList.toggle("d-none", shown > 0);
    });
  });
});
