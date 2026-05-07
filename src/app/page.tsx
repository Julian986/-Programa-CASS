export default function Home() {
  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#ayuda", label: "¿Cómo ayudarte?" },
    { href: "#ideas", label: "Ideas frecuentes" },
    { href: "#programa", label: "Programa" },
    { href: "#ejes", label: "Ejes" },
    { href: "#actividades", label: "Actividades" },
    { href: "#direccion", label: "Dirección" },
    { href: "#sedes", label: "Sedes" },
    { href: "#contacto", label: "Contacto" },
    { href: "#recursos", label: "Recursos" },
    { href: "#logo", label: "Logo" },
  ];

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
        <a
          href="#contacto"
          className="text-accent-gold transition-colors duration-300 hover:text-white focus:outline-none"
          aria-label="Ir a contacto"
        >
          <span className="material-symbols-outlined">call</span>
        </a>
      </header>

      <main className="content-wrapper mx-auto flex w-full max-w-[1120px] grow flex-col items-center px-6 pb-10 pt-[100px] md:px-margin-edge">
        <section
          id="inicio"
          className="mb-section-padding mt-12 flex min-h-[618px] w-full scroll-mt-[100px] flex-col items-center justify-center text-center"
        >
          <span className="font-label-caps text-label-caps mb-6 rounded-sm border border-accent-gold/40 px-4 py-2 text-accent-gold">
            Conductas Adictivas Sin Sustancia
          </span>
          <h1 className="font-display-lg mb-4 text-display-lg text-on-surface">
            Programa CASS
          </h1>
          <p className="font-headline-sm text-headline-sm mb-8 max-w-2xl text-tertiary">
            Investigación, tratamiento y prevención de conductas adictivas sin
            sustancia. Mar del Plata, desde 2007.
          </p>
          <div className="mb-8 h-px w-24 bg-accent-gold" aria-hidden />
          <p className="font-body-lg text-body-lg mx-auto max-w-3xl leading-relaxed text-on-surface-variant opacity-90">
            El Programa CASS es un espacio especializado en la comprensión y el
            tratamiento de las adicciones conductuales: aquellas que no
            involucran sustancias químicas pero generan dependencia, pérdida de
            control e interferencia significativa en la vida cotidiana.
            Trabajamos desde la evidencia clínica y el compromiso con la
            comunidad.
          </p>
        </section>

        <section id="ayuda" className="mb-section-padding w-full scroll-mt-[100px]">
          <h2 className="font-display-md text-display-md mb-6 text-on-surface">
            ¿Cómo podemos ayudarte?
          </h2>
          <p className="font-body-md text-body-md mb-8 max-w-4xl text-on-surface-variant">
            Cada persona que llega al Programa CASS atraviesa una situación
            única. Por eso nuestro primer paso es siempre una evaluación que
            nos permite entender el tipo y la gravedad de la conducta, para
            ofrecer la respuesta más adecuada a cada caso.
          </p>
          <p className="font-label-caps text-label-caps mb-4 text-accent-gold">
            Lista de servicios
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "Evaluación clínica inicial para determinar el tipo de tratamiento más adecuado",
              "Tratamiento psicológico individual",
              "Tratamiento grupal",
              "Terapia familiar y orientación a familias",
              "Seguimiento y prevención de recaídas",
              "Información y psicoeducación",
              "Derivación a especialistas según cada caso — incluyendo profesionales para adolescentes",
              "Desarrollo de programas de prevención e investigación comunitaria",
            ].map((item) => (
              <article
                key={item}
                className="rounded-sm border border-accent-gold/20 bg-card-surface p-5"
              >
                <div className="mb-3 flex items-center gap-2 text-accent-gold">
                  <span className="material-symbols-outlined text-base">
                    check_circle
                  </span>
                  <span className="font-label-caps text-label-caps">
                    Servicio
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="ideas" className="mb-section-padding w-full scroll-mt-[100px]">
          <h2 className="font-display-md text-display-md mb-3 text-on-surface">
            Ideas que nos alejan de pedir ayuda
          </h2>
          <p className="font-body-md text-body-md mb-8 text-on-surface-variant">
            Estas creencias son frecuentes en personas con problemas de juego.
            Reconocerlas es el primer paso.
          </p>
          <p className="font-label-caps text-label-caps mb-4 text-accent-gold">
            Las 8 frases
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              '"Los juegos de azar son un medio fácil de ganar dinero."',
              '"No hay ningún mal en pedir prestado para jugar."',
              '"Siempre puedo recuperar lo que perdí."',
              '"Soy una persona con mucha suerte."',
              '"Esta máquina está a punto de dar el premio."',
              '"Mi número va a salir si sigo comprando siempre el mismo."',
              '"Yo no tengo un problema de juego, tengo un problema de dinero."',
              '"El juego es una manera de escapar de mis problemas."',
            ].map((item) => (
              <article
                key={item}
                className="rounded-sm border border-accent-gold/20 bg-card-surface p-5"
              >
                <p className="font-body-md text-body-md italic text-on-surface-variant">
                  {item}
                </p>
              </article>
            ))}
          </div>
          <p className="font-body-md text-body-md mt-8 text-on-surface-variant">
            Si alguna de estas ideas le resulta familiar, el Programa CASS puede
            ayudarle a entender qué está pasando. La consulta no compromete a
            nada.
          </p>
        </section>

        <section id="programa" className="mb-section-padding w-full scroll-mt-[100px]">
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
                El Programa CASS —Conductas Adictivas Sin Sustancia— nació en
                2007 como una iniciativa de investigación y tratamiento
                especializado en adicciones conductuales. A lo largo de su
                trayectoria ha articulado intervención clínica, prevención
                comunitaria, formación profesional y producción de conocimiento
                en este campo.
              </p>
              <p className="font-body-md text-body-md mb-12 text-on-surface-variant">
                Trabajamos con adultos, adolescentes y sus familias, en un
                modelo que combina atención clínica individualizada con acciones
                de prevención dirigidas a la comunidad. Para los casos que lo
                requieren, contamos con una red de derivación a colegas
                especializados según el perfil y la edad de cada persona.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3" id="ejes">
                <div className="flex flex-col items-start rounded-sm border-t border-accent-gold bg-card-surface p-6 transition-colors duration-300 hover:bg-card-hover">
                  <span className="material-symbols-outlined mb-4 text-3xl text-accent-gold">
                    psychology_alt
                  </span>
                  <h3 className="font-label-caps text-label-caps mb-2 uppercase tracking-widest text-on-surface">
                    Eje 1 — Asistencial
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Evaluación clínica, diagnóstico diferencial y tratamiento
                    psicológico individualizado. Atención de adultos con
                    conductas adictivas sin sustancia: juego patológico,
                    apuestas online, uso problemático de tecnologías, compras
                    compulsivas, entre otras. Orientación a familias y
                    prevención de recaídas. Para casos que requieren atención
                    especializada en adolescencia, contamos con una red de
                    derivación a profesionales de confianza.
                  </p>
                </div>
                <div className="flex flex-col items-start rounded-sm border-t border-accent-gold bg-card-surface p-6 transition-colors duration-300 hover:bg-card-hover">
                  <span className="material-symbols-outlined mb-4 text-3xl text-accent-gold">
                    science
                  </span>
                  <h3 className="font-label-caps text-label-caps mb-2 uppercase tracking-widest text-on-surface">
                    Eje 2 — Investigación
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Registro sistemático de casos, seguimiento de resultados
                    clínicos. Revisión permanente de evidencia actualizada.
                    Articulación con referentes nacionales e internacionales en
                    el campo de las adicciones conductuales.
                  </p>
                </div>
                <div className="flex flex-col items-start rounded-sm border-t border-accent-gold bg-card-surface p-6 transition-colors duration-300 hover:bg-card-hover">
                  <span className="material-symbols-outlined mb-4 text-3xl text-accent-gold">
                    group
                  </span>
                  <h3 className="font-label-caps text-label-caps mb-2 uppercase tracking-widest text-on-surface">
                    Eje 3 — Prevención y comunidad
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Charlas abiertas y gratuitas para familias, docentes y
                    vecinos. Talleres de sensibilización e información.
                    Articulación con instituciones educativas y de salud. La
                    información es nuestra primera herramienta de prevención.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-1">
                <div className="flex flex-col items-start rounded-sm border-t border-accent-gold bg-card-surface p-6 transition-colors duration-300 hover:bg-card-hover">
                  <span className="material-symbols-outlined mb-4 text-3xl text-accent-gold">
                    school
                  </span>
                  <h3 className="font-label-caps text-label-caps mb-2 uppercase tracking-widest text-on-surface">
                    Eje 4 — Formación profesional
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Capacitación e intercambio con colegas y profesionales de la
                    salud. Protocolos de derivación. Fortalecimiento de la red
                    profesional local en adicciones conductuales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="actividades" className="mb-section-padding w-full scroll-mt-[100px]">
          <h2 className="font-display-md text-display-md mb-8 text-on-surface">
            Actividades próximas
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <article className="rounded-sm border border-accent-gold/30 bg-card-surface p-6">
              <h3 className="font-display-md text-2xl text-on-surface">
                Atrapados: apuestas online y conductas compulsivas
              </h3>
              <p className="font-label-caps text-label-caps mt-2 text-accent-gold">
                Charla abierta y gratuita para familias, docentes y vecinos
              </p>
              <p className="font-body-md text-body-md mt-4 text-on-surface-variant">
                Una conferencia de divulgación sobre el fenómeno de las
                conductas adictivas sin sustancia, con especial foco en el
                crecimiento de las apuestas deportivas online y su impacto en
                adolescentes, familias y entornos educativos.
              </p>
              <p className="font-body-md text-body-md mt-3 text-on-surface-variant">
                Sin tecnicismos. Con herramientas concretas para reconocer
                señales de alerta y saber cuándo buscar ayuda.
              </p>
              <div className="mt-5 rounded-sm border border-accent-gold/35 bg-hero-bg/40 p-4">
                <p className="font-label-caps text-label-caps mb-3 tracking-widest text-accent-gold">
                  Datos del evento
                </p>
                <div className="grid grid-cols-1 gap-2">
                  <p className="font-body-md text-body-md text-white">
                    <span className="text-accent-gold">Fecha:</span> Jueves 14 de
                    mayo de 2025
                  </p>
                  <p className="font-body-md text-body-md text-white">
                    <span className="text-accent-gold">Hora:</span> 17:00 hs
                  </p>
                  <p className="font-body-md text-body-md text-white">
                    <span className="text-accent-gold">Lugar:</span> Shopping Los
                    Gallegos — 2° piso, nivel cines — Mar del Plata
                  </p>
                  <p className="font-body-md text-body-md text-white">
                    <span className="text-accent-gold">Entrada:</span> libre y
                    gratuita
                  </p>
                </div>
                <p className="font-body-md text-body-md mt-4 text-white">
                  <span className="text-accent-gold">Organizan:</span> Programa
                  CASS · Colegio de Psicólogos de la Provincia de Buenos Aires
                  Distrito X · Consultorios FADE · Consultorios Lucero
                </p>
              </div>
            </article>
            <article className="rounded-sm border border-accent-gold/30 bg-card-surface p-6">
              <h3 className="font-display-md text-2xl text-on-surface">
                Diagnostico y tratamiento de las conductas adictivas sin sustancia
              </h3>
              <p className="font-label-caps text-label-caps mt-2 text-accent-gold">
                Jornada para profesionales en salud mental
              </p>
              <p className="font-body-md text-body-md mt-4 text-on-surface-variant">
                Una jornada introductoria en el diagnóstico y opciones de
                tratamiento de las conductas adictivas sin sustancia;
                tipologías, instrumentos de diagnostico, diagn. Diferencial,
                comorbilidades, semejanzas y diferencias con las adicciones
                tradicionales.
              </p>
              <div className="mt-5 rounded-sm border border-accent-gold/35 bg-hero-bg/40 p-4">
                <p className="font-label-caps text-label-caps mb-3 tracking-widest text-accent-gold">
                  Datos del evento
                </p>
                <div className="grid grid-cols-1 gap-2">
                  <p className="font-body-md text-body-md text-white">
                    <span className="text-accent-gold">Fecha:</span> sábado del
                    mes de Junio 20206, fecha a definir
                  </p>
                  <p className="font-body-md text-body-md text-white">
                    <span className="text-accent-gold">Hora:</span> de mañana, a
                    definir
                  </p>
                  <p className="font-body-md text-body-md text-white">
                    <span className="text-accent-gold">Lugar:</span> Consultorios
                    FADE —Moreno 3215 1er piso of. 2. Mar del Plata
                  </p>
                  <p className="font-body-md text-body-md text-white">
                    <span className="text-accent-gold">Entrada:</span> a definir
                  </p>
                </div>
                <p className="font-body-md text-body-md mt-4 text-white">
                  <span className="text-accent-gold">Organizan:</span> Programa
                  CASS · Consultorios FADE
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="direccion" className="mb-section-padding w-full scroll-mt-[100px]">
          <div className="relative rounded-[0.25rem] border border-accent-gold/20 bg-card-surface p-8 md:p-12">
            <div
              className="absolute left-0 top-12 h-32 w-[3px] bg-accent-gold"
              aria-hidden
            />
            <div className="pl-6">
              <h2 className="font-label-caps text-label-caps mb-2 uppercase tracking-widest text-accent-gold">
                Dirección
              </h2>
              <h3 className="font-body-lg text-body-lg mb-4 text-on-surface-variant">
                Lic. Alejandro G. Sánchez
              </h3>
              <p className="font-body-md text-body-md max-w-3xl text-on-surface-variant">
                Licenciado en Psicología. Director del Programa CASS desde su
                fundación en 2007. Psicólogo clínico especializado en el
                tratamiento de adultos con conductas adictivas sin sustancia. A
                lo largo de casi dos décadas ha desarrollado una práctica
                clínica e institucional que combina atención individual,
                prevención comunitaria y articulación con la red de salud de Mar
                del Plata.
              </p>
            </div>
          </div>
        </section>

        <section id="sedes" className="mb-section-padding w-full scroll-mt-[100px]">
          <h2 className="font-display-md text-display-md mb-8 text-on-surface">
            Sedes e instituciones articuladas
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="rounded-sm border border-accent-gold/20 bg-card-surface p-6">
              <h3 className="font-label-caps text-label-caps mb-3 text-accent-gold">
                Consultorios FADE
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Dirección: [completar con el diseñador]
                <br />
                Teléfono: [completar]
                <br />
                Mail: [completar]
              </p>
            </article>
            <article className="rounded-sm border border-accent-gold/20 bg-card-surface p-6">
              <h3 className="font-label-caps text-label-caps mb-3 text-accent-gold">
                Consultorios Lucero
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Dirección: [completar]
                <br />
                Teléfono: [completar]
                <br />
                Mail: [completar]
              </p>
            </article>
            <article className="rounded-sm border border-accent-gold/20 bg-card-surface p-6">
              <h3 className="font-label-caps text-label-caps mb-3 text-accent-gold">
                Colegio de Psicólogos PBA Distrito X
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Web: [completar]
              </p>
            </article>
          </div>
        </section>

        <section id="contacto" className="w-full scroll-mt-[100px]">
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
                  Ubicación general: Mar del Plata, Buenos Aires, Argentina
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined mb-4 text-4xl text-accent-gold">
                  phone_iphone
                </span>
                <a
                  className="font-body-md text-body-md text-on-surface-variant transition-colors duration-300 hover:text-accent-gold"
                  href="tel:+542234940697"
                >
                  Teléfono: 223 4940697
                </a>
                <a
                  className="font-body-md text-body-md mt-2 text-on-surface-variant transition-colors duration-300 hover:text-accent-gold"
                  href="https://wa.me/5492235220806"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +54 9 223 522-0806
                </a>
                <a
                  className="font-label-caps text-label-caps mt-4 flex items-center gap-2 rounded-sm bg-accent-gold px-6 py-2 text-hero-bg transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/60"
                  href="https://wa.me/5492235220806"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir chat de WhatsApp"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  Enviar mensaje por WhatsApp
                </a>
              </div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined mb-4 text-4xl text-accent-gold">
                  mail
                </span>
                <a
                  className="font-body-md text-body-md text-on-surface-variant transition-colors duration-300 hover:text-accent-gold"
                  href="mailto:alesan23@gmail.com"
                >
                  Mail: alesan23@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="recursos" className="mb-section-padding mt-section-padding w-full scroll-mt-[100px]">
          <h2 className="font-display-md text-display-md mb-8 text-on-surface">
            Recursos de ayuda
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              "Línea 141 — SEDRONAR Gratuita · confidencial · 24 horas · todo el país",
              "SEMDA — Servicio Municipal de Atención a las Adicciones Av. Jara 1661, Mar del Plata Tel: (0223) 473-2037",
              "Casa Caracol — SEDRONAR territorial Ituzaingó 8055, Mar del Plata Tel: (0223) 478-6384",
              "CPA Mar del Plata — Centro Provincial de Atención Buenos Aires 2855, Mar del Plata",
              "HIGA — Servicio de Salud Mental Tel: (0223) 499-9300",
            ].map((item) => (
              <p
                key={item}
                className="font-body-md text-body-md rounded-sm border border-accent-gold/20 bg-card-surface px-4 py-3 text-on-surface-variant"
              >
                {item}
              </p>
            ))}
          </div>
        </section>

        <section id="logo" className="mb-section-padding w-full scroll-mt-[100px]">
          <h2 className="font-display-md text-display-md mb-4 text-on-surface">
            Indicación sobre el logo
          </h2>
          <div className="rounded-sm border border-accent-gold/30 bg-card-surface p-6">
            <p className="font-body-md text-body-md text-on-surface-variant">
              El logo actual —la letra C aislada— debe ser reemplazado. El
              nuevo logo no debe contener una sola letra sino las siglas
              completas CASS o un símbolo que no dependa de una inicial.
            </p>
            <p className="font-body-md text-body-md mt-4 text-on-surface-variant">
              Esta propuesta debe formar parte del trabajo de diseño, ya que el
              nuevo logo también va a utilizarse en Instagram.
            </p>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-accent-gold/20 bg-hero-bg">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-8 px-8 py-12">
          <div className="font-display-lg text-lg font-bold text-accent-gold">
            Programa CASS
          </div>
          <nav
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
            aria-label="Navegación en esta página"
          >
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-display-md text-sm font-semibold italic underline decoration-1 transition-colors hover:text-accent-gold ${
                  i === 0 ? "text-accent-gold" : "text-slate-500"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p className="font-display-md max-w-md text-center text-sm italic text-slate-500">
            © 2025 Programa CASS — Conductas Adictivas Sin Sustancia — Mar del
            Plata — Desde 2007.
          </p>
        </div>
      </footer>
    </>
  );
}
