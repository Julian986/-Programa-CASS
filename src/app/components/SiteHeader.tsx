"use client";

import { useEffect, useState } from "react";

export type NavItem = { href: string; label: string };

export default function SiteHeader({ items }: { items: NavItem[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const mobileMenu = document.querySelector(".mobile-menu");
      const hamburgerButton = document.querySelector(".hamburger-button");
      if (!mobileMenuOpen || !mobileMenu || !hamburgerButton) return;
      if (!mobileMenu.contains(target) && !hamburgerButton.contains(target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("menu-open");
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-accent-gold/30 bg-hero-bg/90 px-6 py-4 backdrop-blur-md">
        <span className="material-symbols-outlined text-accent-gold" aria-hidden>
          psychology
        </span>
        <a
          href="#inicio"
          className="font-display-lg text-2xl font-black tracking-tighter text-accent-gold transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/60"
        >
          Programa CASS
        </a>
        <div className="relative flex items-center justify-end">
          <a
            href="#contacto"
            className="hidden text-accent-gold transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/60 md:inline-flex"
            aria-label="Ir a contacto"
          >
            <span className="material-symbols-outlined text-2xl">call</span>
          </a>

          <button
            type="button"
            className="hamburger-button relative z-[60] ml-3 flex h-10 w-10 flex-col items-center justify-center rounded-sm text-accent-gold transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/60 md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={
              mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
            }
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      <div
        id="mobile-nav-panel"
        className={`mobile-menu fixed left-0 top-0 z-40 flex h-full w-full flex-col bg-hero-bg transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="shrink-0 border-b border-accent-gold/20 px-6 pb-4 pt-[100px]">
          <p className="font-label-caps text-label-caps tracking-widest text-accent-gold">
            Navegación
          </p>
        </div>
        <nav className="min-h-0 flex-1 overflow-y-auto px-3 pb-8">
          <ul className="flex flex-col gap-0.5">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-body-md block rounded-sm px-3 py-3 text-on-surface transition-colors hover:bg-card-hover hover:text-accent-gold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
