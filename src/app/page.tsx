export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      {/* Hero */}
      <header className="border-b border-cass-border px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14">
        <div className="mx-auto max-w-3xl">
          <p
            className="font-display text-center text-[0.65rem] font-normal uppercase tracking-[0.55em] text-cass-gold opacity-0 animate-fade-up sm:text-left"
            style={{ animationDelay: "0.05s" }}
          >
            CASS
          </p>
          <h1
            className="mt-4 text-center font-display text-[2.15rem] font-medium leading-[1.12] tracking-tight text-cass-cream opacity-0 animate-fade-up sm:text-left sm:text-5xl md:text-6xl"
            style={{ animationDelay: "0.15s" }}
          >
            Programa CASS
          </h1>
          <p
            className="mt-4 text-center font-display text-lg font-normal leading-snug text-cass-muted opacity-0 animate-fade-up sm:text-left sm:text-xl md:text-2xl"
            style={{ animationDelay: "0.25s" }}
          >
            Investigación y Tratamiento de Conductas Adictivas Sin Sustancia
          </p>
          <div
            className="mx-auto mt-8 h-px w-20 bg-cass-gold/50 opacity-0 animate-fade-up sm:mx-0"
            style={{ animationDelay: "0.35s" }}
            aria-hidden
          />
          <div
            className="mt-10 border-l-2 border-cass-gold pl-5 opacity-0 animate-fade-up sm:pl-6"
            style={{ animationDelay: "0.45s" }}
          >
            <p className="text-[0.95rem] leading-relaxed text-cass-cream/95 sm:text-base">
              Las conductas adictivas sin sustancia —juego, apuestas, uso
              problemático de tecnología, alimentación, sexo y otras
              modalidades— constituyen un desafío clínico creciente. El Programa
              CASS integra rigor científico y un abordaje humano para
              comprenderlas, investigarlas y tratarlas con la excelencia que
              merecen las personas y sus familias.
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Sobre el programa */}
        <section
          id="programa"
          className="border-b border-cass-border px-5 py-14 sm:px-8 sm:py-20"
          aria-labelledby="titulo-programa"
        >
          <div className="mx-auto max-w-3xl opacity-0 animate-fade-up-slow" style={{ animationDelay: "0.1s" }}>
            <div className="mb-8 h-px w-full max-w-xs bg-gradient-to-r from-cass-gold/60 via-cass-gold/25 to-transparent" aria-hidden />
            <h2
              id="titulo-programa"
              className="font-display text-2xl font-medium tracking-tight text-cass-cream sm:text-3xl"
            >
              ¿Qué es el Programa CASS?
            </h2>
            <div className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-cass-muted sm:text-base">
              <p className="text-cass-cream/90">
                Las adicciones comportamentales se manifiestan mediante
                conductas repetidas que generan pérdida de control, sufrimiento
                y deterioro en la vida cotidiana, sin necesidad de una sustancia
                psicoactiva. Su estudio y tratamiento exigen marcos teóricos
                actualizados y protocolos basados en evidencia.
              </p>
              <p>
                El Programa CASS articula{" "}
                <strong className="font-medium text-cass-cream">
                  investigación clínica
                </strong>
                , formación y atención especializada para personas que atraviesan
                estas problemáticas, con un enfoque bio-psico-social respetuoso y
                confidencial.
              </p>
              <p>
                Está dirigido a quienes buscan un{" "}
                <strong className="font-medium text-cass-cream">
                  tratamiento serio y diferenciado
                </strong>
                , a profesionales de la salud mental que desean actualizar su
                práctica y a instituciones comprometidas con la calidad asistencial
                en adicciones comportamentales.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Investigación Clínica",
                  text: "Producción y aplicación de conocimiento riguroso para mejorar el diagnóstico y las intervenciones.",
                },
                {
                  title: "Tratamiento Especializado",
                  text: "Planes terapéuticos individualizados, con seguimiento ético y estándares de excelencia.",
                },
                {
                  title: "Enfoque Interdisciplinario",
                  text: "Integración de miradas clínica, neurocientífica y psicosocial en cada proceso.",
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="border border-cass-border bg-cass-surface/60 px-4 py-5 backdrop-blur-sm transition-colors hover:border-cass-gold/35"
                >
                  <h3 className="font-display text-base font-medium text-cass-gold">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cass-muted">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Dirección */}
        <section
          id="direccion"
          className="border-b border-cass-border px-5 py-14 sm:px-8 sm:py-20"
          aria-labelledby="titulo-direccion"
        >
          <div className="mx-auto max-w-3xl opacity-0 animate-fade-up-slow" style={{ animationDelay: "0.15s" }}>
            <div className="mb-8 h-px w-full max-w-xs bg-gradient-to-r from-cass-gold/60 via-cass-gold/25 to-transparent" aria-hidden />
            <h2
              id="titulo-direccion"
              className="font-display text-2xl font-medium tracking-tight text-cass-cream sm:text-3xl"
            >
              Dirección
            </h2>
            <div className="mt-8 border-l-2 border-cass-gold bg-cass-surface/40 py-6 pl-5 sm:pl-7">
              <p className="font-display text-xl font-medium text-cass-gold sm:text-2xl">
                Dr. Alejandro Sánchez
              </p>
              <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-cass-muted sm:text-base">
                Psicólogo de amplia trayectoria en el campo de las conductas
                adictivas, combina práctica clínica de alto nivel con docencia e
                investigación reconocida internacionalmente, guiando al Programa
                CASS con rigor científico y una mirada profundamente humana.
              </p>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section
          id="contacto"
          className="px-5 py-14 sm:px-8 sm:py-20"
          aria-labelledby="titulo-contacto"
        >
          <div className="mx-auto max-w-3xl opacity-0 animate-fade-up-slow" style={{ animationDelay: "0.2s" }}>
            <div className="mb-8 h-px w-full max-w-xs bg-gradient-to-r from-cass-gold/60 via-cass-gold/25 to-transparent" aria-hidden />
            <h2
              id="titulo-contacto"
              className="font-display text-2xl font-medium tracking-tight text-cass-cream sm:text-3xl"
            >
              Contacto
            </h2>
            <ul className="mt-10 space-y-8 text-[0.95rem] leading-relaxed sm:text-base">
              <li className="text-cass-muted">
                <span className="mr-2 text-cass-gold/90" aria-hidden>
                  📍
                </span>
                {/* TODO: Reemplazar con la dirección física real del programa */}
                <span className="text-cass-cream/90">
                  Dirección: disponible próximamente.
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/5492235220806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full max-w-sm items-center justify-center rounded-sm border border-cass-border bg-cass-surface/80 px-5 py-3.5 font-medium text-cass-cream transition-all hover:border-[#25D366]/60 hover:bg-[#25D366]/15 hover:text-[#dcf8c6] sm:w-auto"
                >
                  Escribir por WhatsApp
                </a>
                <p className="mt-2 text-sm text-cass-muted">
                  +54 9 2235 22-0806
                </p>
              </li>
              <li>
                <span className="block text-xs font-medium uppercase tracking-wider text-cass-gold/80">
                  Teléfono
                </span>
                <a
                  href="tel:+5492235220806"
                  className="link-gold mt-1 inline-block text-lg text-cass-cream"
                >
                  +54 9 2235 22-0806
                </a>
              </li>
              <li>
                <span className="block text-xs font-medium uppercase tracking-wider text-cass-gold/80">
                  Correo electrónico
                </span>
                {/* TODO: Reemplazar href mailto: y el texto visible con el correo institucional real */}
                <a
                  href="mailto:contacto@programacass.invalid"
                  className="link-gold mt-1 inline-block text-cass-muted"
                >
                  Correo institucional en actualización
                </a>
                <p className="mt-1.5 text-xs text-cass-muted/85">
                  Pronto publicaremos la dirección oficial de contacto.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-cass-border px-5 py-8 sm:px-8">
        <p className="mx-auto max-w-3xl text-center text-xs text-cass-muted opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
          © 2025 Programa CASS — Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
}
