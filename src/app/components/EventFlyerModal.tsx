"use client";

import { useEffect, useState } from "react";

export default function EventFlyerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="font-label-caps text-label-caps inline-flex items-center gap-2 rounded-sm border border-accent-gold bg-accent-gold px-5 py-3 tracking-widest text-hero-bg transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/60"
      >
        <span className="material-symbols-outlined text-base">campaign</span>
        Ver charla destacada
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Flyer del evento"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl rounded-sm border border-accent-gold/40 bg-hero-bg p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 text-accent-gold transition hover:text-white"
              aria-label="Cerrar flyer"
              onClick={() => setOpen(false)}
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
                  Jueves 14 de mayo de 2025
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
      ) : null}
    </>
  );
}
