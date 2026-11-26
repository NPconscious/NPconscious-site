import { animate, stagger } from "motion";

const CALM_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const cleanups: Array<() => void> = [];

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function cleanupMotion(): void {
  while (cleanups.length > 0) {
    const stop = cleanups.pop();
    if (stop) stop();
  }
}

function initScrollHeader(): void {
  const nav = document.getElementById("site-nav-pill");
  if (!nav) return;

  const update = () => {
    if (window.scrollY > 12) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  cleanups.push(() => window.removeEventListener("scroll", update));
}

function initMobileMenu(): void {
  const toggleBtn = document.getElementById("mobile-nav-toggle");
  const closeBtn = document.getElementById("mobile-nav-close");
  const drawer = document.getElementById("mobile-navigation");
  const overlay = document.getElementById("mobile-nav-overlay");

  if (!toggleBtn || !drawer || !overlay) return;

  const openMenu = () => {
    toggleBtn.setAttribute("aria-expanded", "true");
    drawer.classList.add("is-open");
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    closeBtn?.focus();
  };

  const closeMenu = () => {
    toggleBtn.setAttribute("aria-expanded", "false");
    drawer.classList.remove("is-open");
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const onToggle = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = toggleBtn.getAttribute("aria-expanded") === "true";
    if (isOpen) closeMenu();
    else openMenu();
  };

  const onClose = (e: Event) => {
    e.preventDefault();
    closeMenu();
    toggleBtn.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && toggleBtn.getAttribute("aria-expanded") === "true") {
      closeMenu();
      toggleBtn.focus();
    }
  };

  toggleBtn.addEventListener("click", onToggle);
  closeBtn?.addEventListener("click", onClose);
  overlay.addEventListener("click", onClose);
  document.addEventListener("keydown", onKeyDown);

  const drawerLinks = Array.from(drawer.querySelectorAll("a"));
  drawerLinks.forEach((link) => link.addEventListener("click", closeMenu));

  cleanups.push(() => {
    toggleBtn.removeEventListener("click", onToggle);
    closeBtn?.removeEventListener("click", onClose);
    overlay.removeEventListener("click", onClose);
    document.removeEventListener("keydown", onKeyDown);
    drawerLinks.forEach((link) => link.removeEventListener("click", closeMenu));
    document.body.style.overflow = "";
  });
}

function initHeroEntrance(): void {
  const heroItems = Array.from(document.querySelectorAll<HTMLElement>("[data-hero-reveal]"));
  if (heroItems.length === 0) return;

  if (prefersReducedMotion()) {
    heroItems.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  // Animate from a visible baseline (small vertical settle only, never hiding content)
  animate(
    heroItems,
    { opacity: [0.85, 1], y: [8, 0] },
    { duration: 0.45, delay: stagger(0.05), ease: CALM_EASE }
  );
}

function initSanctuary(): void {
  cleanupMotion();
  initScrollHeader();
  initMobileMenu();
  initHeroEntrance();
}

document.addEventListener("astro:before-swap", cleanupMotion);
document.addEventListener("astro:page-load", initSanctuary);
