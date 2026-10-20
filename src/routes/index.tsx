
import { createFileRoute } from "@tanstack/react-router";
import {
  Droplets,
  HeartPulse,
  Truck,
  Leaf,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const WHATSAPP = "https://wa.me/221000000000";

const avantages = [
  {
    Icon: Droplets,
    t: "Légère & équilibrée",
    d: "Une eau faiblement minéralisée, au goût neutre et rafraîchissant, idéale au quotidien.",
  },
  {
    Icon: HeartPulse,
    t: "Bonne pour la santé",
    d: "Une hydratation adaptée aux besoins quotidiens de toute la famille.",
  },
  {
    Icon: ShieldCheck,
    t: "Sécurité garantie",
    d: "Bouchons scellés, contrôles réguliers et traçabilité de chaque lot.",
  },
  {
    Icon: Truck,
    t: "Livraison rapide",
    d: "À domicile et au bureau, avec un service d'abonnement pour vos bonbonnes.",
  },
  {
    Icon: Leaf,
    t: "Respect de la nature",
    d: "Une démarche responsable pour limiter l'impact environnemental des emballages.",
  },
  {
    Icon: Sparkles,
    t: "Fierté locale",
    d: "Une marque sénégalaise qui ambitionne de valoriser le savoir-faire local.",
  },
];

const gamme = [
  {
    img: "/src/assets/dasyo-33cl-clair.png",
    size: "33 cl",
    name: "Bouteille galbée",
    use: "Sac, sport, réunions",
  },
  {
    img: "/src/assets/dasyo-1L-clair.png",
    size: "1 L",
    name: "Bouteille épaulée",
    use: "Table, maison, restaurant",
  },
  {
    img: "/src/assets/dasyo-10L-clair.png",
    size: "10 L",
    name: "Bidon à poignée",
    use: "Famille, cuisine",
  },
  {
    img: "/src/assets/dasyo-18-9L-clair.png",
    size: "18,9 L",
    name: "Bonbonne fontaine",
    use: "Bureaux, entreprises",
  },
];

const engagements = [
  {
    t: "Analysée en laboratoire",
    d: "La qualité de l'eau doit être confirmée par des analyses régulières.",
  },
  {
    t: "Filtrée & traitée",
    d: "Des procédés de traitement adaptés pour garantir la qualité de l'eau.",
  },
  {
    t: "Traçable",
    d: "Date de production, date de péremption et numéro de lot sur chaque emballage.",
  },
  {
    t: "Conforme",
    d: "Une production respectant les exigences sanitaires et réglementaires applicables.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "DASY'O — L'essence de la pureté | Eau du Sénégal",
      },
      {
        name: "description",
        content:
          "Découvrez DASY'O et ses formats d'eau pour particuliers, hôtels, restaurants et bureaux au Sénégal.",
      },
      {
        property: "og:title",
        content: "DASY'O — L'essence de la pureté",
      },
      {
        property: "og:description",
        content:
          "Découvrez la gamme DASY'O : bouteilles, packs, bidons et bonbonnes.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      {/* Navigation */}
      <header className="absolute inset-x-0 top-0 z-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#accueil" className="flex items-center gap-2">
            <img
              src="/src/assets/logo.png"
              alt="Logo DASY'O"
              className="h-30 w-30 rounded-full bg-card object-cover shadow-soft ring-4 ring-primary/15"
            />
          </a>

          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#gamme" className="hover:text-primary">
              Gamme
            </a>
            <a href="#purete" className="hover:text-primary">
              Pureté
            </a>
            <a href="#histoire" className="hover:text-primary">
              Histoire
            </a>
            <a href="#pro" className="hover:text-primary">
              Professionnels
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft"
          >
            Commander
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="accueil"
        className="bg-water relative overflow-hidden pb-20 pt-36 md:pt-40"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Eau · Sénégal
            </p>

            <h1 className="text-5xl font-light leading-[1.05] md:text-7xl">
              L'essence
              <br />
              <em className="text-primary">de la pureté.</em>
            </h1>

            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              DASY'O, une marque d'eau pensée pour accompagner chaque
              moment de votre quotidien : à la maison, à table et au bureau.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#gamme"
                className="rounded-full bg-deep px-7 py-3.5 font-semibold text-deep-foreground"
              >
                Découvrir la gamme
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary px-7 py-3.5 font-semibold text-primary"
              >
                Commander sur WhatsApp
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-10 rounded-full bg-primary/20 blur-3xl" />

            <img
              src="/src/assets/dasyo-pack-1L.png"
              alt="Pack de bouteilles DASY'O 1 L"
              className="animate-float relative max-h-[520px] max-w-full rounded-3xl object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* Gamme */}
      <section id="gamme" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Notre gamme
          </p>

          <h2 className="mt-3 text-4xl font-light md:text-5xl">
            Un format pour chaque moment
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gamme.map((g) => (
              <article
                key={g.size}
                className="group rounded-3xl bg-secondary p-6 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex h-64 items-end justify-center">
                  <img
                    src={g.img}
                    alt={`DASY'O ${g.size}`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain mix-blend-multiply transition group-hover:scale-105"
                  />
                </div>

                <p className="mt-6 font-display text-3xl">{g.size}</p>
                <p className="font-semibold">{g.name}</p>
                <p className="text-sm text-muted-foreground">{g.use}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              {
                img: "/src/assets/dasyo-pack-33cl.png",
                t: "Pack 33 cl",
                d: "Un format pratique pour les événements et les déplacements.",
              },
              {
                img: "/src/assets/dasyo-pack-1L.png",
                t: "Pack 1 L",
                d: "Pour la maison, les hôtels et la restauration.",
              },
            ].map((p) => (
              <div
                key={p.t}
                className="flex items-center gap-6 rounded-3xl bg-secondary p-6"
              >
                <img
                  src={p.img}
                  alt={`DASY'O ${p.t}`}
                  loading="lazy"
                  className="h-40 w-40 shrink-0 object-contain mix-blend-multiply"
                />

                <div>
                  <h3 className="text-2xl">{p.t}</h3>
                  <p className="mt-1 text-muted-foreground">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="border-y border-border bg-card py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          {[
            ["Qualité", "Notre priorité"],
            ["4", "Formats présentés"],
            ["B2B", "Offres professionnelles"],
            ["Dakar", "Zone de service"],
          ].map(([number, label]) => (
            <div key={label}>
              <p className="font-display text-3xl font-light text-primary md:text-5xl">
                {number}
              </p>
              <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Citation */}
      <section className="bg-card py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-display text-2xl font-light leading-relaxed md:text-3xl">
            « Chaque gorgée porte un nom, chaque bouteille porte{" "}
            <em className="text-primary">une promesse</em>. »
          </p>

          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            DASY'O — L'essence de la pureté
          </p>
        </div>
      </section>

      {/* Avantages */}
      <section
        id="avantages"
        className="relative overflow-hidden py-24"
      >
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Pourquoi DASY'O
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-light md:text-5xl">
              Bien plus qu'une eau,{" "}
              <em className="text-primary">un art de vivre</em>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {avantages.map(({ Icon, t, d }) => (
              <div
                key={t}
                className="group rounded-3xl border border-border bg-card/70 p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-2xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements qualité */}
      <section
        id="purete"
        className="bg-deep-gradient py-24 text-deep-foreground"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1fr_1.4fr]">
          <img
            src="/src/assets/dasyo-1L-nuit.png"
            alt="Bouteille DASY'O"
            loading="lazy"
            className="mx-auto max-h-[480px] max-w-full rounded-3xl object-contain"
          />

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Notre engagement
            </p>

            <h2 className="mt-3 text-4xl font-light md:text-5xl">
              La qualité, au cœur de nos priorités
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {engagements.map((engagement, index) => (
                <div key={engagement.t}>
                  <span className="font-display text-3xl text-primary">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 text-xl">{engagement.t}</h3>

                  <p className="mt-1 text-sm opacity-75">
                    {engagement.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  {/* Histoire */}
      <section id="histoire" className="py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="relative flex justify-center">
            <div className="absolute inset-8 rounded-full bg-primary/15 blur-3xl" />

            <img
              src="/src/assets/logo.png"
              alt="Logo DASY'O"
              className="relative h-72 w-72 rounded-full bg-card object-cover shadow-soft ring-8 ring-primary/10"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Notre histoire
            </p>

            <h2 className="mt-3 text-4xl font-light md:text-5xl">
              Un nom qui vient <em className="text-primary">du cœur</em>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground">
              Avant d'être une marque, DASY'O est une histoire de famille.
              DASY porte les premières lettres de{" "}
              <strong className="text-foreground">« Dame Sylla »</strong>,
              le père de la fondatrice, en hommage à l'homme qui lui a
              transmis la rigueur et l'amour du travail bien fait.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["DA", "Dame"],
                ["SY", "Sylla"],
                ["O", "L'eau"],
              ].map(([letter, meaning]) => (
                <div
                  key={letter}
                  className="rounded-2xl border border-border bg-card p-5 text-center"
                >
                  <p className="font-display text-4xl text-primary">
                    {letter}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {meaning}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-muted-foreground">
              À ces lettres s'ajoute le O de l'eau. Le tout forme une promesse
              simple :{" "}
              <em className="text-primary">
                l'essence de la pureté, portée par un nom qui compte.
              </em>
            </p>
          </div>
        </div>
      </section>
      {/* Professionnels */}
      <section id="pro" className="py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Professionnels
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-light md:text-5xl">
            Hôtels, restaurants, bureaux et revendeurs
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Découvrez nos solutions pour les professionnels : approvisionnement
            régulier, formats adaptés et demandes de devis pour les commandes
            en volume.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Hôtels",
              "Restaurants",
              "Entreprises",
              "Supermarchés",
            ].map((category) => (
              <div
                key={category}
                className="rounded-2xl border border-border py-8 font-display text-xl"
              >
                {category}
              </div>
            ))}
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-soft"
          >
            Demander un devis
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-water py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <img
            src="/src/assets/logo.png"
            alt="Logo DASY'O"
            loading="lazy"
            className="mx-auto h-36 w-36 rounded-full bg-card object-cover shadow-soft ring-4 ring-primary/10"
          />

          <h2 className="mt-8 text-4xl font-light md:text-5xl">
            Une envie de pureté ?
          </h2>

          <p className="mt-4 text-muted-foreground">
            Contactez-nous pour vos commandes, vos besoins professionnels ou
            une demande de devis.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-soft"
            >
              WhatsApp
            </a>

            <a
              href="mailto:contact@dasyo.sn"
              className="rounded-full bg-deep px-7 py-3.5 font-semibold text-deep-foreground"
            >
              contact@dasyo.sn
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Dakar, Sénégal
          </p>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-deep py-8 text-center text-sm text-deep-foreground/70">
        © {new Date().getFullYear()} DASY'O — L'essence de la pureté
      </footer>
    </main>
  );
}
