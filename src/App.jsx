import React from "react";

const Icon = ({ children, className = "" }) => (
  <span className={`inline-flex items-center justify-center ${className}`} aria-hidden="true">
    {children}
  </span>
);

const services = [
  {
    tag: "SQL",
    icon: "🗄️",
    title: "SQL avancé & qualité des données",
    text: "Requêtes complexes, vues métier, optimisation, contrôle de cohérence et préparation de données fiables.",
    points: ["Requêtes avancées", "Optimisation", "Contrôle qualité"],
  },
  {
    tag: "XL",
    icon: "📊",
    title: "Excel finance & reporting",
    text: "Modélisation financière, automatisation, analyses d’écarts, tableaux de bord et fichiers professionnels.",
    points: ["Modèles financiers", "Automatisation", "Analyse d’écarts"],
  },
  {
    tag: "BI",
    icon: "📈",
    title: "Power BI & dashboards exécutifs",
    text: "Data model, DAX, storytelling visuel, KPI interactifs et reporting orienté décision stratégique.",
    points: ["DAX & data model", "Dashboards KPI", "Reporting exécutif"],
  },
  {
    tag: "PY",
    icon: "🐍",
    title: "Python / pandas & automatisation",
    text: "Nettoyage, rapprochements, analyses exploratoires, traitements récurrents et automatisation de workflows data.",
    points: ["pandas", "Nettoyage data", "Automatisation"],
  },
];
const skills = [
  "Génie civil",
  "Statistiques de l’environnement",
  "Big Data",
  "Data Analytics",
  "Power BI",
  "SQL",
  "Python",
  "Gestion de projet",
  "Environnement & Climat",
  "WASH (Humanitaire)",
];

const testimonials = [
  {
    name: "Responsable projet",
    role: "Cabinet d’ingénierie",
    text: "Une approche claire, structurée et orientée résultats. Abdoul sait connecter les enjeux techniques aux décisions stratégiques.",
  },
  {
    name: "Consultant senior",
    role: "Data & performance",
    text: "Son profil hybride data, génie civil et gestion de projet apporte une vraie valeur dans les environnements complexes.",
  },
  {
    name: "Manager opérationnel",
    role: "Entreprise partenaire",
    text: "Les livrables sont propres, exploitables et directement utiles pour suivre la performance et prioriser les actions.",
  },
];

const faqs = [
  {
    q: "Quels types de missions acceptez-vous ?",
    a: "J’interviens sur des missions data, dashboards Power BI, analyse statistique, reporting, environnement & climat, WASH, optimisation de projets d’ingénierie et accompagnement en gestion de projet.",
  },
  {
    q: "Travaillez-vous avec des entreprises à distance ?",
    a: "Oui. Je peux collaborer à distance ou en mode hybride selon les besoins du projet, les outils disponibles et les contraintes de l’équipe.",
  },
  {
    q: "Quelle est votre valeur ajoutée principale ?",
    a: "Je combine une compréhension technique de l’ingénierie, une expertise data, une sensibilité environnementale et une méthode de gestion de projet orientée résultats.",
  },
  {
    q: "Peut-on vous contacter pour un recrutement ?",
    a: "Oui. Je suis ouvert aux opportunités professionnelles, aux collaborations avec cabinets, startups, entreprises, ONG et institutions internationales.",
  },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-lg leading-8 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function App() {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes floatSoft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.35); }
          50% { box-shadow: 0 0 45px 8px rgba(6, 182, 212, 0.25); }
        }
      `}</style>

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="#home" className="text-lg font-black tracking-tight text-slate-950">
              Abdoul Otniel<span className="text-cyan-600">.</span>
            </a>
            <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
              <a href="#services" className="hover:text-cyan-600">Services</a>
              <a href="#expertise" className="hover:text-cyan-600">Expertise</a>
              <a href="#projects" className="hover:text-cyan-600">Projets</a>
              <a href="#faq" className="hover:text-cyan-600">FAQ</a>
              <a href="#contact" className="rounded-full bg-slate-950 px-5 py-2.5 text-white hover:bg-cyan-600">Contact</a>
            </div>
            <button className="md:hidden rounded-xl border border-slate-200 p-2">
              <Icon className="h-5 w-5">☰</Icon>
            </button>
          </nav>
        </header>

        <section id="home" className="relative overflow-hidden px-6 py-24 md:py-32 lg:px-8">
          <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div className="animate-[fadeInUp_0.7s_ease-out]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                <Icon className="h-4 w-4 text-cyan-600">✦</Icon> Data · Génie civil · Environnement & Climat
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
                Transformer vos données et vos projets en décisions stratégiques à fort impact.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Je suis A. Otniel, ingénieur en génie civil, statistiques de l’environnement et big data. J’interviens également sur les enjeux d’environnement et de changement climatique, ainsi que dans le secteur humanitaire, notamment WASH. J’aide les entreprises, ONG, recruteurs et institutions à exploiter leurs données pour mieux piloter, décider et performer.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700">
                  Discutons de votre projet <Icon className="h-5 w-5">→</Icon>
                </a>
                <a href="/cv.pdf" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-700">
                  Télécharger mon CV <Icon className="h-5 w-5">↓</Icon>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {skills.slice(0, 6).map((skill) => (
                  <span key={skill} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">{skill}</span>
                ))}
              </div>
            </div>

            <div className="animate-[fadeIn_0.9s_ease-out] rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-200 ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-cyan-200/70">
              <div className="relative mb-6 flex flex-col items-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-4 pt-20">
                <div className="absolute left-6 top-6 rounded-full bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 ring-1 ring-cyan-300/20">
                  Profil international
                </div>
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="absolute -top-1 z-20 animate-[floatSoft_4s_ease-in-out_infinite]">
                  <div className="animate-[pulseGlow_3s_ease-in-out_infinite] rounded-full bg-white p-1">
                    <img
                      src="/photo-avatar.jpg"
                      alt="Abdoul Otniel BONKOUNGOU avatar"
                      className="h-32 w-32 rounded-full object-cover ring-4 ring-cyan-400/40"
                    />
                  </div>
                </div>

                <div className="relative mt-12 w-full overflow-hidden rounded-2xl">
                  <img
                    src="/photo-portrait.jpg"
                    alt="Abdoul Otniel BONKOUNGOU portrait"
                    className="h-72 w-full object-cover object-top transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent p-5">
                    <p className="text-lg font-bold text-white">Abdoul Otniel BONKOUNGOU</p>
                    <p className="text-sm text-cyan-200">Data · Génie civil · Humanitaire · Environnement & Climat</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-slate-950 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Profil premium</p>
                <h2 className="mt-4 text-3xl font-bold">Ingénieur Data & Génie Civil & Environnement</h2>
                <p className="mt-4 leading-7 text-slate-300">Un profil hybride capable de relier la technique, la donnée, l’environnement et la stratégie projet.</p>
                <div className="mt-8 grid gap-4">
                  {["Certifié PL-300 Power BI", "Certifié PRINCE2", "Certifié PMP / PMI", "Disponible freelance & recrutement"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                      <Icon className="h-5 w-5 text-cyan-300">✓</Icon>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Positionnement" title="À l’intersection de la data, de l’ingénierie et de la stratégie" subtitle="Une approche claire, mesurable et orientée performance pour accompagner les organisations dans leurs décisions, y compris dans des contextes internationaux (MINUSMA, Nations Unies - Vienne)." />
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {[
              [<Icon className="h-7 w-7">✓</Icon>, "Crédibilité", "Certifications PL-300, PRINCE2 et PMP/PMI pour rassurer recruteurs, clients et décideurs."],
              [<Icon className="h-7 w-7">👥</Icon>, "Collaboration", "Une communication claire et accessible pour travailler efficacement avec équipes métiers et techniques."],
              [<Icon className="h-7 w-7">🌍</Icon>, "Impact", "Des livrables pensés pour produire des décisions utiles dans la data, l’ingénierie, l’environnement et l’humanitaire."],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">{icon}</div>
                <h3 className="text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="relative overflow-hidden bg-white px-6 py-24 lg:px-8">
  <div className="absolute left-1/2 top-10 -z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-100/60 blur-3xl" />

  <div className="relative z-10">
    <SectionTitle
      eyebrow="Services premium"
      title="Des compétences data transformées en solutions concrètes"
      subtitle="SQL, Excel, Power BI et Python ne sont pas seulement des outils : ce sont des leviers pour fiabiliser vos données, automatiser vos reportings et accélérer vos décisions."
    />

    <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => (
        <div
          key={service.title}
          className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:bg-white hover:shadow-2xl hover:shadow-cyan-100"
        >
          <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-cyan-100 opacity-0 blur-2xl transition group-hover:opacity-100" />

          <div className="relative mb-7 flex items-center justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-2xl text-white transition group-hover:bg-cyan-600">
              {service.icon}
            </div>
            <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-black tracking-widest text-cyan-700 ring-1 ring-cyan-100">
              {service.tag}
            </span>
          </div>

          <h3 className="relative text-xl font-black leading-snug text-slate-950">
            {service.title}
          </h3>

          <p className="relative mt-4 min-h-[120px] leading-7 text-slate-600">
            {service.text}
          </p>

          <div className="relative mt-6 space-y-3">
            {service.points.map((point) => (
              <div key={point} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
                  ✓
                </span>
                {point}
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="relative mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-cyan-600"
          >
            Discuter d’un projet <span>→</span>
          </a>
        </div>
      ))}
    </div>

    <div className="mx-auto mt-12 grid max-w-7xl gap-6 rounded-[2rem] bg-slate-950 p-8 text-white md:grid-cols-4">
      {[
        ["01", "Comprendre", "Analyse du besoin, des données et des objectifs métier."],
        ["02", "Structurer", "Nettoyage, modélisation et fiabilisation des données."],
        ["03", "Visualiser", "Création de dashboards clairs, interactifs et exploitables."],
        ["04", "Décider", "Recommandations concrètes pour passer à l’action."],
      ].map(([number, title, text]) => (
        <div key={number} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
          <p className="text-sm font-black text-cyan-300">{number}</p>
          <h4 className="mt-3 text-lg font-bold">{title}</h4>
          <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-white px-6 py-20 lg:px-8">
  <SectionTitle
    eyebrow="Impact"
    title="Des résultats concrets"
    subtitle="Des solutions data qui produisent un impact mesurable."
  />

  <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
    {[
      ["+50%", "Gain de temps", "Automatisation des reportings Excel et Power BI"],
      ["-30%", "Erreurs data", "Amélioration de la qualité et cohérence des données"],
      ["x3", "Vitesse d’analyse", "Optimisation SQL et structuration des données"],
    ].map(([value, title, desc]) => (
      <div key={title} className="rounded-3xl bg-slate-50 p-8 text-center shadow-sm ring-1 ring-slate-200">
        <p className="text-4xl font-black text-cyan-600">{value}</p>
        <h3 className="mt-3 text-lg font-bold text-slate-950">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{desc}</p>
      </div>
    ))}
  </div>
</section>

        <section className="bg-white px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Expérience internationale" title="Engagement terrain & humanitaire" subtitle="Interventions dans des contextes internationaux et humanitaires à fort enjeu (ONU, environnement & climat, WASH)." />
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            {[
              {
                title: "MINUSMA (Mission des Nations Unies au Mali)",
                text: "Expérience en environnement terrain avec des enjeux de coordination, reporting, gestion de données et adaptation dans un contexte international complexe.",
              },
              {
                title: "Nations Unies – Vienne",
                text: "Exposition à des environnements institutionnels internationaux avec des standards élevés en analyse, reporting et gestion stratégique.",
              },
              {
                title: "WASH (Humanitaire)",
                text: "Interventions liées à l’eau, l’assainissement et l’hygiène avec une approche data-driven pour améliorer l’impact terrain.",
              },
              {
                title: "Environnement & Climat",
                text: "Analyse de données environnementales et climatiques pour suivre les tendances, identifier les risques et orienter les décisions opérationnelles.",
              },
            ].map((exp) => (
              <div key={exp.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:bg-white hover:shadow-xl">
                <h3 className="text-xl font-bold text-slate-950">{exp.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{exp.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Crédibilité" title="Certifications & domaines d’expertise" subtitle="Un socle solide pour intervenir auprès des entreprises, institutions, cabinets, ONG et startups." />
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["PL-300 Power BI", "PRINCE2", "PMP / PMI", "Big Data", "Environnement & Climat", "WASH", "MINUSMA", "Nations Unies - Vienne"].map((item) => (
              <div key={item} className="rounded-3xl bg-white p-6 text-center font-bold text-slate-900 shadow-sm ring-1 ring-slate-200">{item}</div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-20 text-white lg:px-8">
          <SectionTitle eyebrow="Témoignages" title="Ils parlent de mon approche" subtitle="Des retours orientés clarté, méthode et valeur opérationnelle." />
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-3xl bg-white/10 p-8 ring-1 ring-white/10">
                <p className="leading-7 text-slate-200">“{t.text}”</p>
                <div className="mt-6">
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-cyan-300">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="bg-white px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Projets" title="Projets data & ingénierie" subtitle="Quelques exemples de projets illustrant mon approche orientée impact et décision." />
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {[
              {
                title: "Dashboard Power BI - Suivi de performance",
                text: "Création d’un dashboard interactif pour suivre les KPI d’un projet et améliorer la prise de décision.",
              },
              {
                title: "Analyse statistique environnementale",
                text: "Modélisation et analyse de données environnementales pour identifier des tendances, risques et priorités d’action.",
              },
              {
                title: "Optimisation projet génie civil",
                text: "Utilisation de la data pour améliorer le suivi, les coûts et les délais d’un projet d’ingénierie.",
              },
            ].map((project) => (
              <div key={project.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:bg-white hover:shadow-xl">
                <h3 className="text-xl font-bold text-slate-950">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{project.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="FAQ" title="Questions fréquentes" subtitle="Les réponses essentielles pour recruteurs, entreprises et porteurs de projets." />
          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 open:shadow-lg">
                <summary className="cursor-pointer list-none text-lg font-bold text-slate-950">{faq.q}</summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Opportunités" title="Recevez des insights data & opportunités" subtitle="Laissez votre email pour recevoir des ressources, dashboards et opportunités de collaboration." />
          <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Votre email professionnel"
                className="w-full rounded-full border border-slate-300 px-6 py-4 outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-6 py-4 font-semibold text-white hover:bg-cyan-700"
              >
                Recevoir les ressources <Icon className="h-5 w-5">→</Icon>
              </button>
            </form>
            <p className="mt-4 text-sm text-slate-500">Pas de spam. Contenu utile uniquement.</p>
          </div>
        </section>

        <section id="contact" className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-cyan-600 p-8 text-white shadow-2xl shadow-cyan-600/20 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100">Contact</p>
                <h2 className="mt-4 text-3xl font-black md:text-5xl">Prêt à transformer vos données en décisions ?</h2>
                <p className="mt-5 leading-8 text-cyan-50">Contactez-moi pour une mission, une opportunité de recrutement ou une collaboration stratégique.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 text-slate-900">
                <div className="space-y-4">
                  <a href="mailto:otnielbonk@gmail.com" className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 hover:border-cyan-400">
                    <Icon className="h-5 w-5 text-cyan-600">✉</Icon> otnielbonk@gmail.com
                  </a>
                  <a href="tel:+436767756992" className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 hover:border-cyan-400">
                    <Icon className="h-5 w-5 text-cyan-600">☎</Icon> +43 676 7756992
                  </a>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
                    <Icon className="h-5 w-5 text-cyan-600">⌖</Icon> Disponible à distance / hybride
                  </div>
                </div>
                <a href="mailto:otnielbonk@gmail.com" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 font-bold text-white hover:bg-cyan-700">
                  Réserver un échange <Icon className="h-5 w-5">→</Icon>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Abdoul Otniel BONKOUNGOU — Portfolio Data, Génie civil, Environnement & Gestion de projet.
        </footer>
      </main>
    </>
  );
}

export default App;
