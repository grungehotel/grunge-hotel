import Image from "next/image";
import type { Metadata } from "next";
import PageNav from "./PageNav";
import ContactSection from "./ContactSection";
import PageFooter from "./PageFooter";

type Bullet = string;

type ServiceLandingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  intro: string[];
  bullets: Bullet[];
  audience: string[];
  scenarios: { title: string; text: string }[];
  faq?: { q: string; a: string }[];
  pricingTitle?: string;
  pricingItems?: { label: string; price: string; note?: string }[];
};

export function buildMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: "https://www.grungehotel.com.kz",
    },
  };
}

export default function ServiceLandingPage({
  eyebrow,
  title,
  description,
  heroImage,
  heroAlt,
  ctaPrimary = "Связаться с менеджером",
  ctaSecondary = "Оставить заявку",
  intro,
  bullets,
  audience,
  scenarios,
  faq,
  pricingTitle,
  pricingItems,
}: ServiceLandingPageProps) {
  const hasPricing = Boolean(pricingItems?.length);
  const hasFaq = Boolean(faq?.length);

  return (
    <main className="bg-neutral-950 text-white">
      <PageNav />

      <section className="relative min-h-[86vh] overflow-hidden border-b border-white/10 pt-24 md:pt-28">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.22),transparent_30%)]" />

        <div className="relative mx-auto flex min-h-[calc(86vh-6rem)] max-w-7xl items-center px-4 py-14 sm:px-6 md:px-10 md:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-amber-300/80 sm:text-xs">
              {eyebrow}
            </p>
            <h1 className="font-serif text-4xl leading-[0.94] sm:text-5xl md:text-7xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75 sm:text-base md:text-lg">
              {description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/77072996264"
                className="rounded-full bg-amber-300 px-6 py-4 text-center text-sm font-semibold text-black transition hover:bg-amber-200"
              >
                {ctaPrimary}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                {ctaSecondary}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs text-white/70 sm:text-sm">
              {audience.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
              Что получает клиент
            </p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Услуга под задачу, а не просто формальный выход на сцену
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/75 sm:text-base">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {bullets.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-7 text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {hasPricing ? (
        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
                Прайс
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
                {pricingTitle || "Актуальные цены"}
              </h2>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
              <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white/70 md:grid-cols-[1.3fr_0.7fr]">
                <div>Услуга</div>
                <div>Стоимость</div>
              </div>
              {pricingItems?.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 gap-2 border-b border-white/10 px-6 py-5 last:border-none md:grid-cols-[1.3fr_0.7fr] md:gap-6"
                >
                  <div>
                    <p className="text-base font-medium text-white">{item.label}</p>
                    {item.note ? (
                      <p className="mt-2 text-sm leading-6 text-white/60">{item.note}</p>
                    ) : null}
                  </div>
                  <div className="text-base font-semibold text-amber-200">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-white/10 bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
              Где это работает лучше всего
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
              Сценарии, под которые услуга покупается чаще всего
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {scenarios.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-neutral-900 p-6"
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {hasFaq ? (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
              FAQ
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
              Частые вопросы
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {faq?.map((item) => (
              <article
                key={item.q}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-xl font-semibold text-white">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <ContactSection />
      <PageFooter />
    </main>
  );
}
