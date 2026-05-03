export default function Home() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-accent-gold/30 bg-hero-bg/90 px-6 py-4 backdrop-blur-md">
        <button
          type="button"
          className="text-accent-gold transition-colors duration-300 hover:text-white focus:outline-none"
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="font-display-lg text-2xl font-black tracking-tighter text-accent-gold">
          CASS
        </div>
        <button
          type="button"
          className="text-accent-gold transition-colors duration-300 hover:text-white focus:outline-none"
          aria-label="Notas clínicas"
        >
          <span className="material-symbols-outlined">clinical_notes</span>
        </button>
      </header>

      <main className="content-wrapper mx-auto mb-section-padding flex w-full max-w-[1120px] grow flex-col items-center px-6 pb-section-padding pt-[100px] md:px-margin-edge">
        {/* Hero */}
        <section className="mb-section-padding mt-12 flex min-h-[618px] w-full flex-col items-center justify-center text-center">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-accent-gold">
            <span className="font-display-lg text-display-lg text-accent-gold">
              C
            </span>
          </div>
          <h1 className="font-display-lg mb-4 text-display-lg text-on-surface">
            Programa CASS
          </h1>
          <p className="font-headline-sm text-headline-sm mb-8 max-w-2xl text-tertiary">
            Investigación y Tratamiento de Conductas Adictivas Sin Sustancia
          </p>
          <div className="mb-8 h-px w-24 bg-accent-gold" aria-hidden />
          <p className="font-body-lg text-body-lg mx-auto max-w-3xl leading-relaxed text-on-surface-variant opacity-90">
            Un espacio dedicado a la comprensión profunda y el abordaje clínico
            de vanguardia para las adicciones conductuales. Combinamos el rigor
            académico con una atención compasiva y especializada.
          </p>
        </section>

        {/* Sobre el programa */}
        <section className="mb-section-padding w-full">
          <div className="flex flex-col gap-gutter md:flex-row">
            <div className="md:w-1/3">
              <h2 className="font-display-md text-display-md relative mb-6 text-on-surface">
                ¿Qué es el Programa CASS?
                <div
                  className="absolute -left-4 top-0 hidden h-full w-0.5 bg-accent-gold opacity-50 md:block"
                  aria-hidden
                />
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="font-body-md text-body-md mb-12 text-on-surface-variant">
                El Programa CASS es una iniciativa pionera centrada en el estudio
                y tratamiento de trastornos relacionados con juegos de azar, uso
                problemático de tecnología, videojuegos y otras conductas
                adictivas que no involucran sustancias químicas. Nuestro objetivo
                es restaurar el equilibrio y la salud mental a través de
                intervenciones basadas en la evidencia científica.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="flex flex-col items-start rounded-sm border-t border-accent-gold bg-card-surface p-6 transition-colors duration-300 hover:bg-card-hover">
                  <span className="material-symbols-outlined mb-4 text-3xl text-accent-gold">
                    science
                  </span>
                  <h3 className="font-label-caps text-label-caps mb-2 uppercase tracking-widest text-on-surface">
                    Investigación Clínica
                  </h3>
                </div>
                <div className="flex flex-col items-start rounded-sm border-t border-accent-gold bg-card-surface p-6 transition-colors duration-300 hover:bg-card-hover">
                  <span className="material-symbols-outlined mb-4 text-3xl text-accent-gold">
                    healing
                  </span>
                  <h3 className="font-label-caps text-label-caps mb-2 uppercase tracking-widest text-on-surface">
                    Tratamiento Especializado
                  </h3>
                </div>
                <div className="flex flex-col items-start rounded-sm border-t border-accent-gold bg-card-surface p-6 transition-colors duration-300 hover:bg-card-hover">
                  <span className="material-symbols-outlined mb-4 text-3xl text-accent-gold">
                    group
                  </span>
                  <h3 className="font-label-caps text-label-caps mb-2 uppercase tracking-widest text-on-surface">
                    Enfoque Interdisciplinario
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dirección */}
        <section className="mb-section-padding w-full">
          <div className="relative rounded-[0.25rem] border border-accent-gold/20 bg-card-surface p-8 md:p-12">
            <div
              className="absolute left-0 top-12 h-32 w-[3px] bg-accent-gold"
              aria-hidden
            />
            <div className="pl-6">
              <h2 className="font-label-caps text-label-caps mb-2 uppercase tracking-widest text-accent-gold">
                Dirección
              </h2>
              <h3 className="font-display-md text-display-md mb-6 text-on-surface">
                Dr. Alejandro Sánchez
              </h3>
              <p className="font-body-md text-body-md max-w-3xl text-on-surface-variant">
                Especialista en psiquiatría y experto reconocido internacionalmente
                en el campo de las adicciones conductuales. Con más de dos décadas
                de experiencia clínica y académica, el Dr. Sánchez lidera el
                Programa CASS con un compromiso inquebrantable hacia la excelencia
                médica, la investigación innovadora y el trato digno a cada
                paciente, integrando los últimos avances neurocientíficos con una
                perspectiva profundamente humana.
              </p>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="mb-section-padding w-full">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-display-md text-display-md mb-12 text-on-surface">
              Contacto
            </h2>
            <div className="grid w-full max-w-4xl grid-cols-1 gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined mb-4 text-4xl text-accent-gold">
                  location_on
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Sede Central
                  <br />
                  Buenos Aires, Argentina
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined mb-4 text-4xl text-accent-gold">
                  phone_iphone
                </span>
                <a
                  className="font-body-md text-body-md text-on-surface-variant transition-colors duration-300 hover:text-accent-gold"
                  href="https://wa.me/5492235220806"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +54 9 2235 22-0806
                </a>
                <a
                  className="font-label-caps text-label-caps mt-4 flex items-center gap-2 rounded-sm bg-accent-gold px-6 py-2 text-hero-bg transition-opacity hover:opacity-90"
                  href="https://wa.me/5492235220806"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  WhatsApp
                </a>
              </div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined mb-4 text-4xl text-accent-gold">
                  mail
                </span>
                <a
                  className="font-body-md text-body-md text-on-surface-variant transition-colors duration-300 hover:text-accent-gold"
                  href="mailto:info@programacass.org"
                >
                  info@programacass.org
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-accent-gold/20 bg-hero-bg">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-8 px-8 py-20">
          <div className="font-display-lg text-lg font-bold text-accent-gold">
            CASS
          </div>
          <nav
            className="flex flex-wrap justify-center gap-6"
            aria-label="Enlaces del pie"
          >
            <a
              className="font-display-md text-sm font-semibold italic text-accent-gold underline decoration-1 transition-colors hover:text-accent-gold"
              href="#"
            >
              Research
            </a>
            <a
              className="font-display-md text-sm font-semibold italic text-slate-500 underline decoration-1 transition-colors hover:text-accent-gold"
              href="#"
            >
              Clinical Team
            </a>
            <a
              className="font-display-md text-sm font-semibold italic text-slate-500 underline decoration-1 transition-colors hover:text-accent-gold"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-display-md text-sm font-semibold italic text-slate-500 underline decoration-1 transition-colors hover:text-accent-gold"
              href="#"
            >
              Contact
            </a>
          </nav>
          <p className="font-display-md text-center text-sm italic text-slate-500">
            © 2024 Programa CASS. Clinical Excellence & Academic Rigor.
          </p>
        </div>
      </footer>
    </>
  );
}
