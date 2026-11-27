/* i18n: English is the default; Spanish is applied when the user selects ES */
const DEFAULT_LANG = "en_US";
const STORAGE_KEY = "allpatek-lang";

const MESSAGES = {
  en_US: {
    "meta.title": "ALLPATEK — Guaranteed agricultural production",
    "meta.description": "ALLPATEK — Guaranteed agricultural production from land to business.",
    "a11y.skip": "Skip to main content",
    "nav.aria": "Primary",
    "nav.home": "ALLPATEK home",
    "nav.menu": "Menu",
    "nav.menuAria": "Open menu",
    "nav.menuClose": "Close menu",
    "nav.services": "Services",
    "nav.how": "How it works",
    "nav.reviews": "Testimonials",
    "nav.plans": "Plans",
    "nav.team": "Team",
    "nav.contact": "Contact",
    "nav.cta": "Get Started",
    "lang.aria": "Language",
    "coming.meta": "ALLPATEK — Web platform",
    "coming.kicker": "Platform",
    "coming.title": "Access the ALLPATEK web platform",
    "coming.lead": "Explore plots, contracts, climate alerts, and milestone tracking.",
    "coming.back": "Back to landing",
    "coming.open": "Open web platform",

    "hero.title": "Guaranteed agricultural production, from land to your business",
    "hero.lead":
      "We connect buyers with farmers through managed plots, milestone-protected payments, and real-time traceability.",
    "hero.cta": "Quote a Plot",
    "hero.statsAria": "Key metrics",
    "hero.stat1": "Payments protected in escrow",
    "hero.stat2": "Risk of scam or financial fraud",
    "hero.stat3": "Hectares under traceable management",
    "hero.stat4": "Average unit cost savings",
    "services.title": "Guaranteed agricultural production, from land to your business",
    "services.lead":
      "We connect buyers with farmers through managed plots, milestone-protected payments, and real-time traceability.",
    "services.card1.title": "Plot and Land Selection",
    "services.card1.text":
      "Explore verified plots, filter by soil type, geographic zone, and crop capacity to customize your production plan.",
    "services.card2.title": "Real-Time Traceability and Inspection",
    "services.card2.text":
      "Access photographic reports, input notes, and field progress validated by both parties.",
    "services.card3.title": "Funds Protected in Escrow",
    "services.card3.text":
      "Your capital stays secure in a financial vault and is released progressively only as milestones are met.",
    "services.card4.title": "Smart Assistance and Climate Monitoring",
    "services.card4.text":
      "Receive early alerts for frost, drought, and pests backed by real-time weather data and agricultural intelligence to protect investment and secure supply.",
    "services.img1": "Agricultural plots in production",
    "services.img2": "Fields at sunset",
    "milestones.title": "Milestone Payment Guarantee",
    "milestones.lead": "Gradual release of escrow funds backed by direct field verification.",
    "milestones.m1.label": "Milestone 1",
    "milestones.m1.text": "Contract signing and lock of initial capital in secure escrow.",
    "milestones.m2.label": "Milestone 2",
    "milestones.m2.text": "Planting verification and release of funds for inputs.",
    "milestones.m3.label": "Milestone 3",
    "milestones.m3.text": "Growth inspection and real-time climate monitoring.",
    "milestones.m4.label": "Milestone 4",
    "milestones.m4.text": "Harvest validation and production quality approval.",
    "milestones.m5.label": "Milestone 5",
    "milestones.m5.text": "Final lot delivery and release of the remaining balance.",
    "reviews.title": "Trust Backed by Results",
    "reviews.lead":
      "Hear from buyers and producers who already secure their harvests, optimize costs, and guarantee payments with our traceability platform.",
    "reviews.kicker": "What people say about us",
    "reviews.stars": "4.5 out of 5 stars",
    "reviews.r1.text":
      "We cut acquisition times by 20% and secured supply without middlemen, optimizing operating costs and keeping full control over every production stage.",
    "reviews.r2.text":
      "We cut acquisition times by 20% and secured supply without middlemen, ensuring a stable cash flow and peace of mind from getting paid on time at each milestone.",
    "reviews.r3.text":
      "We cut acquisition times by 20% and secured supply without middlemen, using live climate alerts to prevent losses and keep deliveries always on time.",
    "plans.title": "Production Plans",
    "plans.lead": "Choose the crop scale and traceability tools that fit your supply needs.",
    "plans.perMonth": "/month",
    "plans.basic.name": "Basic",
    "plans.basic.f1": "1 active plot (up to 2 Ha)",
    "plans.basic.f2": "Escrow custody (4 milestones)",
    "plans.basic.f3": "Email support",
    "plans.basic.f4": "GPS-georeferenced photos",
    "plans.basic.cta": "Get Started",
    "plans.pro.name": "Pro",
    "plans.pro.badge": "Save $40",
    "plans.pro.f1": "Up to 10 active plots",
    "plans.pro.f2": "GPS evidence + field validation",
    "plans.pro.f3": "Legal PDF contracts",
    "plans.pro.f4": "Live climate alerts",
    "plans.pro.cta": "Request Demo",
    "plans.enterprise.name": "Enterprise",
    "plans.enterprise.f1": "Unlimited plots",
    "plans.enterprise.f2": "API integration",
    "plans.enterprise.f3": "Account manager",
    "plans.enterprise.f4": "Custom harvest reports",
    "plans.enterprise.cta": "Contact Sales",
    "productVideo.title": "About the Product",
    "productVideo.lead":
      "Watch how ALLPATEK connects buyers with farmers through managed plots, milestone-protected payments, and real-time harvest traceability.",
    "productVideo.iframeTitle": "ALLPATEK — About the Product",
    "team.title": "The Team Behind the Platform",
    "team.lead":
      "Engineers and specialists who make a secure, traceable, and scalable agricultural architecture possible.",
    "team.role": "Software Engineering",
    "team.carouselNav": "Team carousel navigation",
    "team.slide": "Slide {current} of {total}",
    "teamVideo.title": "About the Team",
    "teamVideo.lead":
      "Meet the engineers and specialists who design ALLPATEK to connect buyers with farmers through a secure, traceable, and scalable platform.",
    "teamVideo.iframeTitle": "ALLPATEK — About the Team",
    "teamVideo.youtubeLink": "Watch on YouTube",
    "teamVideo.streamLink": "Watch on Microsoft Stream",
    "contact.title": "Request Your Technical Proposal",
    "contact.lead": "Get the cost breakdown and escrow model in your inbox.",
    "contact.formTitle": "Request Information",
    "contact.formLead": "We will send you the cost breakdown and escrow model.",
    "contact.firstName": "First name",
    "contact.firstNamePh": "Enter your first name",
    "contact.lastName": "Last name",
    "contact.lastNamePh": "Enter your last name",
    "contact.email": "Email",
    "contact.emailPh": "Enter your email",
    "contact.phone": "Phone",
    "contact.phonePh": "Enter your phone number",
    "contact.submit": "Receive Information",
    "contact.sending": "Sending...",
    "contact.error": "Please fill in all fields with valid data.",
    "contact.ok": "Information requested successfully.",
    "contact.networkError": "There was a problem sending your information.",
    "footer.navAria": "Footer",
    "footer.nav": "Navigation",
    "footer.home": "Home",
    "footer.solutions": "Solutions",
    "footer.services": "Services",
    "footer.s1": "Plot Selection",
    "footer.s2": "Protected Funds",
    "footer.s3": "Real-Time Traceability",
    "footer.s4": "Climate Monitoring",
    "footer.contact": "Contact & Hours",
    "footer.address": "Av. Principal 123, Lima",
    "footer.hours": "Monday to Friday, 8:00 AM - 6:00 PM",
    "footer.follow": "Follow us",
    "footer.social.facebook": "ALLPATEK on Facebook",
    "footer.social.instagram": "ALLPATEK on Instagram",
    "footer.social.linkedin": "ALLPATEK on LinkedIn",
    "footer.social.youtube": "ALLPATEK on YouTube",
    "footer.rights": "© 2026 ALLPATEK. All rights reserved.",
    "footer.terms": "Terms and Conditions",
    "footer.privacy": "Privacy Policy",
    "footer.complaints": "Complaints Book",
  },
  es_419: {
    "meta.title": "ALLPATEK — Producción agrícola garantizada",
    "meta.description": "ALLPATEK — Producción agrícola garantizada, de la tierra al negocio.",
    "a11y.skip": "Saltar al contenido principal",
    "nav.aria": "Principal",
    "nav.home": "Inicio ALLPATEK",
    "nav.menu": "Menú",
    "nav.menuAria": "Abrir menú",
    "nav.menuClose": "Cerrar menú",
    "nav.services": "Servicios",
    "nav.how": "¿Cómo funciona?",
    "nav.reviews": "Testimonios",
    "nav.plans": "Planes",
    "nav.team": "Equipo",
    "nav.contact": "Contacto",
    "nav.cta": "Empieza Ahora",
    "lang.aria": "Idioma",
    "coming.meta": "ALLPATEK — Plataforma web",
    "coming.kicker": "Plataforma",
    "coming.title": "Accede a la plataforma web de ALLPATEK",
    "coming.lead": "Consulta parcelas, contratos, alertas climáticas y el seguimiento de hitos.",
    "coming.back": "Volver al landing",
    "coming.open": "Acceder a la plataforma",

    "hero.title": "Producción agrícola garantizada, de la tierra a tu negocio",
    "hero.lead":
      "Conectamos compradores con agricultores mediante parcelas gestionadas, pagos protegidos por hitos y trazabilidad en tiempo real.",
    "hero.cta": "Cotizar Parcela",
    "hero.statsAria": "Métricas clave",
    "hero.stat1": "Pagos protegidos en custodia",
    "hero.stat2": "Riesgo de estafa o fraude financiero",
    "hero.stat3": "Hectáreas bajo gestión trazable",
    "hero.stat4": "Ahorro promedio en costo unitario",
    "services.title": "Producción agrícola garantizada, de la tierra a tu negocio",
    "services.lead":
      "Conectamos compradores con agricultores mediante parcelas gestionadas, pagos protegidos por hitos y trazabilidad en tiempo real.",
    "services.card1.title": "Selección de Parcelas y Terrenos",
    "services.card1.text":
      "Explora parcelas verificadas, filtra por tipo de suelo, zona geográfica y capacidad de cultivo para personalizar tu plan de producción.",
    "services.card2.title": "Trazabilidad e Inspección en Tiempo Real",
    "services.card2.text":
      "Accede a reportes fotográficos, notas de insumos y avances de campo validados por ambas partes.",
    "services.card3.title": "Fondos Protegidos en Custodia",
    "services.card3.text":
      "Tu capital se mantiene seguro en una bóveda financiera y solo se libera progresivamente según los hitos cumplidos.",
    "services.card4.title": "Asistencia Inteligente y Monitoreo Climático",
    "services.card4.text":
      "Recibe alertas tempranas de heladas, sequías y plagas respaldadas por datos meteorológicos en tiempo real e inteligencia agrícola para proteger la inversión y asegurar el abastecimiento.",
    "services.img1": "Parcelas agrícolas en producción",
    "services.img2": "Campos al atardecer",
    "milestones.title": "Garantía de Pagos por Hitos",
    "milestones.lead":
      "Liberación gradual de fondos en custodia (escrow) respaldada por la verificación directa en campo.",
    "milestones.m1.label": "Hito 1",
    "milestones.m1.text": "Firma de contrato y bloqueo del capital inicial en custodia segura.",
    "milestones.m2.label": "Hito 2",
    "milestones.m2.text": "Verificación de siembra y liberación de fondos para insumos.",
    "milestones.m3.label": "Hito 3",
    "milestones.m3.text": "Inspección de desarrollo y monitoreo climático en tiempo real.",
    "milestones.m4.label": "Hito 4",
    "milestones.m4.text": "Validación de cosecha y aprobación de calidad de producción.",
    "milestones.m5.label": "Hito 5",
    "milestones.m5.text": "Entrega final del lote y liberación del saldo restante.",
    "reviews.title": "Confianza Respaldada por Resultados",
    "reviews.lead":
      "Conoce las experiencias de compradores y productores que ya aseguran sus cosechas, optimizan sus costos y garantizan sus pagos con nuestra plataforma de trazabilidad.",
    "reviews.kicker": "Qué se dice de nosotros",
    "reviews.stars": "4.5 de 5 estrellas",
    "reviews.r1.text":
      "Redujimos en 20% los tiempos de adquisición y aseguramos el suministro sin intermediarios, optimizando los costos operativos y manteniendo un control total sobre cada etapa de producción.",
    "reviews.r2.text":
      "Redujimos en 20% los tiempos de adquisición y aseguramos el suministro sin intermediarios, garantizando un flujo de caja estable y la tranquilidad de cobrar puntual al cumplir cada hito.",
    "reviews.r3.text":
      "Redujimos en 20% los tiempos de adquisición y aseguramos el suministro sin intermediarios, aprovechando las alertas climáticas en vivo para prevenir pérdidas y asegurar entregas siempre a tiempo.",
    "plans.title": "Planes de Producción",
    "plans.lead":
      "Escoja la escala de cultivo y las herramientas de trazabilidad ideales para su abastecimiento.",
    "plans.perMonth": "/mes",
    "plans.basic.name": "Básico",
    "plans.basic.f1": "1 Parcela activa (hasta 2 Ha)",
    "plans.basic.f2": "Custodia Escrow (4 hitos)",
    "plans.basic.f3": "Soporte por correo",
    "plans.basic.f4": "Fotos georreferenciadas con GPS",
    "plans.basic.cta": "Empezar Ahora",
    "plans.pro.name": "Pro",
    "plans.pro.badge": "Ahorra $40",
    "plans.pro.f1": "Hasta 10 Parcelas activas",
    "plans.pro.f2": "Evidencias GPS + validación en campo",
    "plans.pro.f3": "Contratos legales PDF",
    "plans.pro.f4": "Alertas climáticas en vivo",
    "plans.pro.cta": "Solicitar Demo",
    "plans.enterprise.name": "Empresarial",
    "plans.enterprise.f1": "Parcelas ilimitadas",
    "plans.enterprise.f2": "Integración API",
    "plans.enterprise.f3": "Gestor de cuenta",
    "plans.enterprise.f4": "Reportes personalizados de cosechas",
    "plans.enterprise.cta": "Contactar Ventas",
    "productVideo.title": "Sobre el Producto",
    "productVideo.lead":
      "Conoce cómo ALLPATEK conecta compradores con agricultores mediante parcelas gestionadas, pagos protegidos por hitos y trazabilidad de cosecha en tiempo real.",
    "productVideo.iframeTitle": "ALLPATEK — Sobre el Producto",
    "team.title": "El Equipo Detrás de la Plataforma",
    "team.lead":
      "Ingenieros y especialistas que hacen posible una arquitectura agrícola segura, trazable y escalable.",
    "team.role": "Ingeniería de Software",
    "team.carouselNav": "Navegación del carrusel del equipo",
    "team.slide": "Diapositiva {current} de {total}",
    "teamVideo.title": "Sobre el Equipo",
    "teamVideo.lead":
      "Conoce a los ingenieros y especialistas que diseñan ALLPATEK para conectar compradores con agricultores a través de una plataforma segura, trazable y escalable.",
    "teamVideo.iframeTitle": "ALLPATEK — Sobre el Equipo",
    "teamVideo.youtubeLink": "Ver en YouTube",
    "teamVideo.streamLink": "Ver en Microsoft Stream",
    "contact.title": "Solicita tu Propuesta Técnica",
    "contact.lead": "Recibe el desglose de costos y el modelo de custodia en tu correo.",
    "contact.formTitle": "Solicitar Información",
    "contact.formLead": "Te enviaremos el desglose de costos y el modelo de custodia.",
    "contact.firstName": "Nombres",
    "contact.firstNamePh": "Ingrese su nombre",
    "contact.lastName": "Apellidos",
    "contact.lastNamePh": "Ingrese sus apellidos",
    "contact.email": "Correo",
    "contact.emailPh": "Ingrese su correo",
    "contact.phone": "Teléfono",
    "contact.phonePh": "Ingrese su teléfono",
    "contact.submit": "Recibir Información",
    "contact.sending": "Enviando...",
    "contact.error": "Completa todos los campos con datos válidos.",
    "contact.ok": "¡Información solicitada con éxito!",
    "contact.networkError": "Hubo un problema al enviar la información.",
    "footer.navAria": "Pie de página",
    "footer.nav": "Navegación",
    "footer.home": "Inicio",
    "footer.solutions": "Soluciones",
    "footer.services": "Servicios",
    "footer.s1": "Selección de Parcelas",
    "footer.s2": "Fondos Protegidos",
    "footer.s3": "Trazabilidad en Tiempo Real",
    "footer.s4": "Monitoreo Climático",
    "footer.contact": "Contacto y Horarios",
    "footer.address": "Av. Principal 123, Lima",
    "footer.hours": "Lunes a Viernes, 8:00 - 18:00",
    "footer.follow": "Síguenos",
    "footer.social.facebook": "ALLPATEK en Facebook",
    "footer.social.instagram": "ALLPATEK en Instagram",
    "footer.social.linkedin": "ALLPATEK en LinkedIn",
    "footer.social.youtube": "ALLPATEK en YouTube",
    "footer.rights": "© 2026 ALLPATEK. Todos los derechos reservados.",
    "footer.terms": "Términos y Condiciones",
    "footer.privacy": "Política de Privacidad",
    "footer.complaints": "Libro de Reclamaciones",
  },
};

// Legal PDFs available in each language
const LEGAL_FILES = {
  en_US: {
    terms: "assets/legal/allpatek-terms-and-conditions-en.pdf",
    privacy: "assets/legal/allpatek-privacy-policy-en.pdf",
  },
  es_419: {
    terms: "assets/legal/allpatek-terminos-y-condiciones-es.pdf",
    privacy: "assets/legal/allpatek-politica-de-privacidad-es.pdf",
  },
};

let currentLang = DEFAULT_LANG;
const ATTRS = ["placeholder", "aria-label", "alt", "title", "content"];

function $(selector, root = document) {
  return root.querySelector(selector);
}

function t(key) {
  return MESSAGES[currentLang][key] || MESSAGES[DEFAULT_LANG][key] || key;
}

function applyTranslations(lang) {
  if (!Object.hasOwn(MESSAGES, lang)) return;
  currentLang = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
  document.documentElement.lang = lang === "es_419" ? "es-419" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  ATTRS.forEach((attr) => {
    document.querySelectorAll(`[data-i18n-${attr}]`).forEach((el) => {
      el.setAttribute(attr, t(el.getAttribute(`data-i18n-${attr}`)));
    });
  });

  // Point the legal links to the PDF in the active language
  document.querySelectorAll("[data-legal]").forEach((link) => {
    const file = LEGAL_FILES[lang][link.getAttribute("data-legal")];
    if (file) link.setAttribute("href", file);
  });

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    const active = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  const statusEl = $(".form__status");
  if (statusEl?.dataset.statusKey) {
    statusEl.textContent = t(statusEl.dataset.statusKey);
  }
}

function initI18n() {
  let saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch {}
  const lang = Object.hasOwn(MESSAGES, saved) ? saved : DEFAULT_LANG;
  applyTranslations(lang);

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyTranslations(btn.getAttribute("data-lang"));
    });
  });
}

/* Navbar */
const SCROLL_OFFSET = 24;

function setMenuOpen(nav, menu, toggle, isOpen) {
  menu.classList.toggle("is-open", isOpen);
  nav.classList.toggle("is-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("data-i18n-aria-label", isOpen ? "nav.menuClose" : "nav.menuAria");
  toggle.setAttribute("aria-label", t(isOpen ? "nav.menuClose" : "nav.menuAria"));
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

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !menu.classList.contains("is-open")) return;
    setMenuOpen(nav, menu, toggle, false);
    toggle.focus();
  });

  document.addEventListener("click", (event) => {
    if (!menu.classList.contains("is-open")) return;
    if (nav.contains(event.target)) return;
    setMenuOpen(nav, menu, toggle, false);
  });
}

/* Contact form */
const N8N_WEBHOOK_URL = "https://foyer-phonics-pyromania.ngrok-free.dev/webhook/733acc37-f55b-4749-b3b5-e9cd7ad7c334";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[\d\s().-]{7,20}$/;

function isValidField(input) {
  const value = input.value.trim();
  if (!value) return false;
  if (input.type === "email") return EMAIL_PATTERN.test(value);
  if (input.type === "tel") {
    const digits = value.replace(/\D/g, "");
    return PHONE_PATTERN.test(value) && digits.length >= 7 && digits.length <= 15;
  }
  if (input.type === "text") return value.length >= 2;
  return true;
}

function showFormStatus(statusEl, key, type) {
  statusEl.dataset.statusKey = key;
  statusEl.textContent = t(key);
  statusEl.className = `form__status form__status--${type}`;
}

function initContactForm() {
  const form = $("#contact-form");
  const statusEl = $(".form__status");
  const button = form?.querySelector('[type="submit"]');
  if (!form || !statusEl || !button) return;

  form.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      if (isValidField(input)) {
        input.closest("label")?.classList.remove("is-invalid");
        input.removeAttribute("aria-invalid");
        input.removeAttribute("aria-describedby");
      }
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const fields = [...form.querySelectorAll("input")];
    const fieldValidity = fields.map((input) => {
      const ok = isValidField(input);
      input.closest("label")?.classList.toggle("is-invalid", !ok);
      if (ok) {
        input.removeAttribute("aria-invalid");
        input.removeAttribute("aria-describedby");
      } else {
        input.setAttribute("aria-invalid", "true");
        input.setAttribute("aria-describedby", "contact-status");
      }
      return ok;
    });
    const isValid = fieldValidity.every(Boolean);

    if (!isValid) {
      fields[fieldValidity.indexOf(false)].focus();
      showFormStatus(statusEl, "contact.error", "error");
      return;
    }

    button.disabled = true;
    button.setAttribute("data-i18n", "contact.sending");
    button.textContent = t("contact.sending");
    statusEl.textContent = "";
    delete statusEl.dataset.statusKey;

    const payload = {
      nombres: form.nombres.value.trim(),
      apellidos: form.apellidos.value.trim(),
      correo: form.correo.value.trim(),
      telefono: form.telefono.value.trim(),
      fechaEnvio: new Date().toISOString(),
    };

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Error en la respuesta del servidor");

      showFormStatus(statusEl, "contact.ok", "ok");
      form.reset();
    } catch (error) {
      showFormStatus(statusEl, "contact.networkError", "error");
      console.error("Error:", error);
    } finally {
      button.disabled = false;
      button.setAttribute("data-i18n", "contact.submit");
      button.textContent = t("contact.submit");
    }
  });
}

/* ── Team step-carousel ─────────────────────────────────────── */
function initTeamCarousel() {
  const carousel = document.querySelector(".team-carousel");
  if (!carousel) return;

  const viewport = carousel.querySelector(".team-viewport");
  const track    = carousel.querySelector(".team-track");
  const dotsWrap = carousel.querySelector(".team-dots");
  const members  = [...track.querySelectorAll(".member")];
  const total    = members.length;
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reduceMotion = motionPreference.matches;

  let current   = 0;
  let autoTimer = null;
  let pointerInside = false;
  let focusInside = false;
  let dots      = [];

  carousel.setAttribute("tabindex", "0");

  /* ── helpers ── */
  function getStep() {
    const gap = parseInt(getComputedStyle(track).gap) || 24;
    return members[0].offsetWidth + gap;
  }

  function getMaxIndex() {
    const viewW = viewport.clientWidth;
    const step  = getStep();
    return Math.max(0, Math.ceil((total * step - (parseInt(getComputedStyle(track).gap) || 24) - viewW) / step));
  }

  function slideLabel(index, count) {
    return t("team.slide")
      .replace("{current}", String(index + 1))
      .replace("{total}", String(count));
  }

  /* ── dots ── */
  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = "";
    dots = [];
    const count = getMaxIndex() + 1;
    for (let i = 0; i < count; i++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "team-dot" + (i === current ? " is-active" : "");
      btn.setAttribute("aria-label", slideLabel(i, count));
      btn.setAttribute("aria-pressed", String(i === current));
      btn.addEventListener("click", () => { stopAuto(); goTo(i); startAuto(); });
      dotsWrap.appendChild(btn);
      dots.push(btn);
    }
  }

  function updateDots(idx) {
    const count = dots.length;
    dots.forEach((d, i) => {
      d.classList.toggle("is-active", i === idx);
      d.setAttribute("aria-label", slideLabel(i, count));
      d.setAttribute("aria-pressed", String(i === idx));
    });
  }

  /* ── navigation ── */
  function goTo(index) {
    const max = getMaxIndex();
    current = Math.max(0, Math.min(index, max));
    track.style.transform = `translateX(-${current * getStep()}px)`;
    updateDots(current);
  }

  function next() {
    goTo(current >= getMaxIndex() ? 0 : current + 1);
  }

  /* ── auto-play ── */
  function startAuto() {
    if (reduceMotion || pointerInside || focusInside || autoTimer) return;
    autoTimer = setInterval(next, 3200);
  }

  function stopAuto() {
    clearInterval(autoTimer);
    autoTimer = null;
  }

  carousel.addEventListener("mouseenter", () => {
    pointerInside = true;
    stopAuto();
  });
  carousel.addEventListener("mouseleave", () => {
    pointerInside = false;
    startAuto();
  });
  carousel.addEventListener("focusin", () => {
    focusInside = true;
    stopAuto();
  });
  carousel.addEventListener("focusout", (event) => {
    focusInside = carousel.contains(event.relatedTarget);
    startAuto();
  });
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      stopAuto();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      stopAuto();
      goTo(current - 1);
    }
  });

  let touchStartX = 0;
  viewport.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  viewport.addEventListener("touchend",   (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { stopAuto(); goTo(diff > 0 ? current + 1 : current - 1); startAuto(); }
  }, { passive: true });

  motionPreference.addEventListener("change", (event) => {
    reduceMotion = event.matches;
    if (reduceMotion) stopAuto();
    else startAuto();
  });

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { buildDots(); goTo(Math.min(current, getMaxIndex())); }, 160);
  });

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.addEventListener("click", () => buildDots());
  });

  buildDots();
  startAuto();
}

/* ── Active nav link (IntersectionObserver) ─────────────────── */
function initActiveNav() {
  const sections = [...document.querySelectorAll("section[id]")];
  const navLinks = [...document.querySelectorAll(".nav__links a[href^='#']")];
  if (!sections.length || !navLinks.length) return;

  function setActive(id) {
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "page");
      else        link.removeAttribute("aria-current");
    });
  }

  // Use IntersectionObserver: mark a section active when it crosses the top 40% of the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-96px 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

document.addEventListener("DOMContentLoaded", () => {
  initI18n();
  initNavbar();
  initContactForm();
  initTeamCarousel();
  initActiveNav();
});
