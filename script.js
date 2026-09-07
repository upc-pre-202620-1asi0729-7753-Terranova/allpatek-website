const SCROLL_OFFSET = 24;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function $(selector, root = document) {
  return root.querySelector(selector);
}

function setMenuOpen(nav, menu, toggle, isOpen) {
  menu.classList.toggle("is-open", isOpen);
  nav.classList.toggle("is-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
}

function initNavbar() {
  const nav = $(".nav");
  const menu = $("#nav-menu");
  const toggle = $(".nav__toggle");
  if (!nav || !menu || !toggle) return;

  const paintOnScroll = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > SCROLL_OFFSET);
  };

  paintOnScroll();
  window.addEventListener("scroll", paintOnScroll, { passive: true });

  toggle.addEventListener("click", () => {
    setMenuOpen(nav, menu, toggle, !menu.classList.contains("is-open"));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(nav, menu, toggle, false));
  });
}

function isValidField(input) {
  const value = input.value.trim();
  if (!value) return false;
  if (input.type === "email") return EMAIL_PATTERN.test(value);
  return true;
}

function showFormStatus(statusEl, message, type) {
  statusEl.textContent = message;
  statusEl.className = `form__status form__status--${type}`;
}

function initContactForm() {
  const form = $("#contact-form");
  const statusEl = $(".form__status");
  if (!form || !statusEl) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = [...form.querySelectorAll("input")];
    let isValid = true;

    fields.forEach((input) => {
      const ok = isValidField(input);
      input.closest("label")?.classList.toggle("is-invalid", !ok);
      if (!ok) isValid = false;
    });

    if (!isValid) {
      showFormStatus(statusEl, "Completa todos los campos con datos válidos.", "error");
      return;
    }

    showFormStatus(statusEl, "Solicitud enviada. Te contactaremos con la propuesta técnica.", "ok");
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initContactForm();
});
