"use client";

import { useEffect, useState } from "react";

export default function EventFlyerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group font-label-caps text-label-caps inline-flex cursor-pointer items-center gap-2 rounded-sm border border-accent-gold/90 bg-accent-gold px-6 py-3.5 tracking-widest text-hero-bg ring-1 ring-accent-gold/60 shadow-xl shadow-amber-300/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent-gold hover:bg-accent-gold hover:ring-accent-gold/75 hover:shadow-xl hover:shadow-amber-300/50 active:translate-y-0 active:shadow-md active:shadow-amber-300/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-hero-bg"
      >
        <span className="material-symbols-outlined text-[18px] transition-transform duration-300 ease-out group-hover:translate-x-0.5">
          campaign
        </span>
        Ver próxima charla
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] bg-black/70"
          role="dialog"
          aria-modal="true"
          aria-label="Flyer del evento"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative z-10 flex min-h-full items-center justify-center p-4">
            <div
              className="relative w-full max-w-2xl rounded-sm border border-accent-gold/40 bg-hero-bg p-6 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 text-accent-gold transition hover:text-white"
                aria-label="Cerrar flyer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <p className="font-label-caps text-label-caps mb-2 text-accent-gold">
                Actividad destacada
              </p>
              <h3 className="font-display-md text-2xl text-on-surface">
                Atrapados: apuestas online y conductas compulsivas
              </h3>
              <p className="font-body-md text-body-md mt-3 text-on-surface-variant">
                Charla abierta y gratuita para familias, docentes y vecinos.
              </p>

              {/* Espacio reservado para futura imagen/flyer del evento */}

              <div className="mt-5 space-y-3 rounded-sm border border-accent-gold/30 bg-card-surface p-4 text-left">
                <div className="grid grid-cols-[88px_1fr] gap-3">
                  <p className="font-body-md text-body-md text-left text-accent-gold">
                    Fecha:
                  </p>
                  <p className="font-body-md text-body-md text-left text-white">
                    Jueves 14 de mayo de 2026
                  </p>
                </div>
                <div className="grid grid-cols-[88px_1fr] gap-3">
                  <p className="font-body-md text-body-md text-left text-accent-gold">
                    Hora:
                  </p>
                  <p className="font-body-md text-body-md text-left text-white">
                    17:00 hs
                  </p>
                </div>
                <div className="grid grid-cols-[88px_1fr] gap-3">
                  <p className="font-body-md text-body-md text-left text-accent-gold">
                    Lugar:
                  </p>
                  <p className="font-body-md text-body-md text-left text-white">
                    Shopping Los Gallegos — 2° piso, nivel cines — Mar del Plata
                  </p>
                </div>
                <div className="grid grid-cols-[88px_1fr] gap-3">
                  <p className="font-body-md text-body-md text-left text-accent-gold">
                    Entrada:
                  </p>
                  <p className="font-body-md text-body-md text-left text-white">
                    libre y gratuita
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
