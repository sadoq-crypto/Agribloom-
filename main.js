document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".site-header nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll(".enquiry").forEach((wrap) => {
    const form = wrap.querySelector("form");
    const success = wrap.querySelector(".success");
    const again = wrap.querySelector(".success button");
    if (!form || !success) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.hidden = true;
      success.hidden = false;
    });
    if (again) {
      again.addEventListener("click", () => {
        success.hidden = true;
        form.hidden = false;
        form.reset();
      });
    }
  });

  document.querySelectorAll(".footer-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
