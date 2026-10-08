import Image from "next/image";
import type { Metadata } from "next";
import PageNav from "../components/PageNav";
import ContactSection from "../components/ContactSection";
import PageFooter from "../components/PageFooter";

export const metadata: Metadata = {
  title: "Алан Салпагаров — аудиоинженер и композитор | Almaty",
  description:
    "Алан Салпагаров — аудиоинженер и композитор из Алматы. Сведение, мастеринг, аранжировки и музыка под задачу.",
};

const workLinks = [
  {
    platform: "Spotify",
    service: "Сведение / мастеринг",
    label: "Drugs’n’Foks — Opening",
    href: "https://open.spotify.com/album/07YwPc6FPGSGUihHYQ3YsX?si=oz23ove5TkWo3elJeJFBFA",
  },
  {
    platform: "YouTube",
    service: "Запись вокала / сведение / мастеринг",
    label: "Анастасия Россошанская — Electric Hearts",
    href: "https://www.youtube.com/watch?v=otsIf4RLOlE",
  },
  {
    platform: "YouTube",
    service: "Запись вокала / сведение / мастеринг",
    label: "Анастасия Россошанская — На веки вместе",
    href: "https://www.youtube.com/watch?v=T1T7A9rIkyw",
  },
  {
    platform: "Spotify",
    service: "Сведение / мастеринг",
    label: "AsVein — Kebab",
    href: "https://open.spotify.com/track/3gR6V4ZlbnwZkmfFdrgFrg?si=b15e865d77c14540",
  },
  {
    platform: "Spotify",
    service: "Сведение / мастеринг",
    label: "Grunge Hotel — I. L. Y.",
    href: "https://open.spotify.com/track/1GZL7Ui6HAVislapaDNmSu?si=5b5035578cdc4942",
  },
  {
    platform: "YouTube",
    service: "Сведение / мастеринг",
    label: "Grunge Hotel — Wicked Game",
    href: "https://youtu.be/Bzx592Ii4rU?si=-TZwdyaY2c8zFI04",
  },
  {
    platform: "Spotify",
    service: "Аранжировка / запись всех инструментов / сведение / мастеринг",
    label: "Ильяс Желдыбаев — Не до войны",
    href: "https://open.spotify.com/track/7Jr1wCLQ9d4KovvMMM334M?si=f0abe6c0e5aa4e27",
  },
  {
    platform: "Spotify",
    service: "Аранжировка / запись всех инструментов / сведение / мастеринг",
    label: "Ильяс Желдыбаев — Лодочка",
    href: "https://open.spotify.com/track/5pTLQ4EKnvPYwpfZcHMUOO?si=6195964d07164423",
  },
  {
    platform: "Spotify",
    service: "Сведение / мастеринг / запись вокала",
    label: "Drugs’n’Foks ft. Eric Tsoy",
    href: "https://open.spotify.com/track/7FyMpWHwpPMeljpacfdKJC?si=0aeb733685f24717",
  },
  {
    platform: "Instagram",
    service: "Сведение / мастеринг",
    label: "Säwlet Nurcapağat — Bobby McFerrin — Don’t Worry, Be Happy (Qazaq cover)",
    href: "https://www.instagram.com/reel/DWMX9vuCFe1/?igsh=MXdsb3JkcmJxOWd6dw==",
  },
  {
    platform: "Instagram",
    service: "Сведение / мастеринг",
    label: "Doom 3 — Main Theme (Full Band Cover)",
    href: "https://www.instagram.com/reel/C_cpd9WNiuZ/?igsh=MXEweHF3b2EzMGtlZA==",
  },
];

export default function AlanAudioPage() {
  return (
    <main className="bg-neutral-950 text-white">
      <PageNav />

      <section className="relative overflow-hidden border-b border-white/10 pt-24 md:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_14%,rgba(66,91,255,0.32),transparent_30%),radial-gradient(circle_at_14%_84%,rgba(219,39,119,0.2),transparent_28%)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-end gap-10 px-4 sm:px-6 md:grid-cols-[1.08fr_0.92fr] md:px-10">
          <div className="pb-14 pt-12 md:pb-20 md:pt-20">
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-amber-300/80 sm:text-xs">
              alan salpagarov · audio engineer · composer
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[0.9] sm:text-6xl md:text-8xl">
              Звук, у которого есть характер
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Алан Салпагаров — аудиоинженер и композитор из Алматы. Сведение,
              мастеринг, аранжировки и музыка под задачу — с вниманием к деталям,
              динамике и тому самому ощущению, ради которого трек включают ещё раз.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-amber-300 px-6 py-4 text-center text-sm font-semibold text-black transition hover:bg-amber-200"
              >
                Обсудить проект
              </a>
              <a
                href="#works"
                className="rounded-full border border-white/20 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Слушать работы
              </a>
            </div>
          </div>

          <div className="relative h-[54vh] min-h-[430px] overflow-hidden rounded-t-[2.5rem] border-x border-t border-white/10 bg-neutral-900 md:h-[calc(100vh-7rem)] md:min-h-[620px]">
            <Image
              src="/images/alan.jpg"
              alt="Алан Салпагаров, аудиоинженер и композитор"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.82fr_1.18fr] md:gap-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
              О подходе
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-none sm:text-5xl">
              Не «сделать громче». Собрать трек целиком.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-white/75 sm:text-lg">
            <p>
              Хорошая запись начинается не с плагинов, а с ясной задачи. Где должен
              появиться трек, что он должен передать и какое место занять в плейлисте
              слушателя — от этого строится вся работа.
            </p>
            <p>
              Алан работает с материалом от первой идеи до финального мастера: помогает
              выстроить аранжировку, найти баланс между живой энергией и точностью, а
              затем довести звук до релизного состояния.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
            Направления работы
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Сведение", "Баланс, объём и акценты, которые держат внимание."],
              ["Мастеринг", "Финальная подготовка трека для стримингов и релиза."],
              ["Аранжировка", "Музыкальная форма, партии и фактура без лишних слоёв."],
              ["Композиция", "Музыка для артистов, проектов и визуальных историй."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
              Сведение / мастеринг
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-none sm:text-5xl">Примеры работ</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/65 sm:text-base">
              Релизы, на которых можно услышать работу Алана — от записи вокала до
              полного продакшена.
            </p>
          </div>
          <div className="grid gap-3">
            {workLinks.map((work, index) => (
              <a
                key={work.href}
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 transition hover:border-amber-200/60 hover:bg-white/[0.06]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-amber-200/70">
                    {work.platform} · {work.service}
                  </p>
                  <p className="mt-1 text-lg font-medium">
                    {String(index + 1).padStart(2, "0")} · {work.label}
                  </p>
                </div>
                <span className="text-2xl text-white/45 transition group-hover:translate-x-1 group-hover:text-amber-200">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[0.65fr_1.35fr] md:items-center md:px-10 md:py-20">
          <div className="relative aspect-[3/4] max-h-[520px] overflow-hidden rounded-3xl border border-white/10">
            <Image src="/images/alan2.jpg" alt="Алан Салпагаров в студии" fill sizes="(max-width: 768px) 100vw, 32vw" className="object-cover" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">Проект начинается с разговора</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-none sm:text-5xl">Расскажи, каким должен быть результат. Остальное разберём по пути.</h2>
            <a href="#contact" className="mt-8 inline-flex rounded-full bg-amber-300 px-6 py-4 text-sm font-semibold text-black transition hover:bg-amber-200">Оставить заявку</a>
          </div>
        </div>
      </section>

      <ContactSection />
      <PageFooter />
    </main>
  );
}
