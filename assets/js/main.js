// Mobile menu + footer year

(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const btn = document.getElementById("hamburger");
  const nav = document.getElementById("mobileNav");
  if (!btn || !nav) return;

  const setOpen = (open) => {
    btn.setAttribute("aria-expanded", String(open));
    nav.setAttribute("aria-hidden", String(!open));
    nav.classList.toggle("open", open);
  };

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  // Close when clicking a link
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
})();
