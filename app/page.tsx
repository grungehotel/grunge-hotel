"use client";
declare global {
  interface Window {
    ym?: (...args: any[]) => void;
  }
}
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    title: "Live Band",
    text: "Живое выступление Grunge Hotel для корпоративов, частных мероприятий, площадок и агентств.",
    price: "от 500 000 ₸",
  },
  {
    title: "Tribute Shows",
    text: "Готовые трибьют-программы и тематические концертные форматы для баров, площадок и специальных событий.",
    price: "по запросу",
  },
  {
    title: "Event Production",
    text: "Музыкальная концепция, структура шоу, координация и сборка музыкальной части мероприятия под ключ.",
    price: "по запросу",
  },
  {
    title: "Technical Production",
    text: "Свет, звук, сцена, визуальная поддержка и техническая координация проекта.",
    price: "по запросу",
  },
  {
    title: "Studio",
    text: "Запись вокала, барабанов, группы целиком, поканальная запись и сведение в Алматы.",
    price: "от 25 000 ₸",
  },
];

const audiences = [
  "Event-агентства",
  "Корпоративные клиенты",
  "Частные мероприятия",
  "Бары и площадки",
];

const cases = [
  {
    title: "Корпоративное мероприятие",
    text: "3 сета, адаптированный репертуар, живая динамика вечера, единая коммуникация с заказчиком.",
  },
  {
    title: "Трибьют-вечер",
    text: "Концертный формат для площадки с сильной подачей, понятной афишей и повторяемой моделью.",
  },
  {
    title: "Частное событие",
    text: "Живое выступление без ощущения обычной кавер-группы — со стилем, сценой и правильной драматургией.",
  },
];

const partners = [
  "Dior",
  "Kaspi Bank",
  "Bereke Bank",
  "Samsung",
  "Astana Motors",
  "Karcher",
  "1C",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    format: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const trackWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.ym) {
      window.ym(108573750, "reachGoal", "whatsapp_click");
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setSubmitMessage("Заявка отправлена");
      setForm({
        name: "",
        phone: "",
        date: "",
        format: "",
        comment: "",
      });
    } catch (error) {
      setSubmitMessage("Не удалось отправить заявку");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="bg-neutral-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-10">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo-white.png"
              alt="Grunge Hotel logo"
              className="h-10 w-10 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div>
              <p className="font-serif text-lg leading-none">Grunge Hotel</p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/50 sm:text-xs">
                music & event solutions
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#services" className="hover:text-white">
  Услуги
</a>
<a href="#cases" className="hover:text-white">
  Кейсы
</a>
<a href="#contact" className="hover:text-white">
  Контакты
</a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-5 py-2.5 text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Обсудить проект
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            <span className="text-lg">{menuOpen ? "×" : "≡"}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black/95 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            <a
  href="#services"
  className="rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
  onClick={() => setMenuOpen(false)}
>
  Услуги
</a>
<a
  href="#cases"
  className="rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
  onClick={() => setMenuOpen(false)}
>
  Кейсы
</a>
<a
  href="#contact"
  className="rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
  onClick={() => setMenuOpen(false)}
>
  Контакты
</a>
              <a
                href="#contact"
                className="mt-2 rounded-full bg-amber-300 px-5 py-3 text-center text-sm font-semibold text-black"
                onClick={() => setMenuOpen(false)}
              >
                Обсудить проект
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative min-h-screen overflow-hidden border-b border-white/10 pt-24 md:pt-28">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Grunge Hotel live performance"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.22),transparent_30%)]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-4 py-14 sm:px-6 md:px-10 md:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-amber-300/80 sm:text-xs">
              Almaty · music & event production
            </p>

            <h1 className="max-w-5xl font-serif text-4xl sm:text-5xl md:text-7xl xl:text-8xl leading-[0.94]">
  Кавер-группа и event production в Алматы — Grunge Hotel
</h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base md:text-lg">
              Живая группа, трибьют-шоу, свет, звук, сцена и музыкальная часть
              события под ключ. Не просто выступление, а собранный результат.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-amber-300 px-6 py-4 text-center text-sm font-semibold text-black transition hover:bg-amber-200"
              >
                Обсудить проект
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/20 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Посмотреть форматы
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/70 sm:text-sm">
  <a
    href="#live-band"
    className="rounded-full border border-white/10 bg-black/20 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
  >
    Живая группа
  </a>
  <a
    href="#tribute-shows"
    className="rounded-full border border-white/10 bg-black/20 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
  >
    Трибьют-шоу
  </a>
  <a
    href="#technical-production"
    className="rounded-full border border-white/10 bg-black/20 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
  >
    Свет / звук / сцена
  </a>
  <a
    href="#event-production"
    className="rounded-full border border-white/10 bg-black/20 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
  >
    Шоу под ключ
  </a>
  <a
    href="#studio"
    className="rounded-full border border-white/10 bg-black/20 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
  >
    Студия
  </a>
</div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:px-10 md:py-20">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
              Что это за формат
            </p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Ваш музыкальный подрядчик под задачу
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-white/75 sm:text-base">
            <p>
              Grunge Hotel — это не только live band, но и production-подход:
              музыкальная концепция, сценическая подача, техническое
              сопровождение и понятная коммуникация с заказчиком.
            </p>
            <p>
              С нами можно собрать музыкальную часть события без хаоса между
              разными подрядчиками.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
            Услуги
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
            Что можно заказать
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            Ниже — реальные рабочие форматы, а не общие слова.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-amber-300/40 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <span className="rounded-full border border-amber-300/30 px-3 py-1 text-xs text-amber-200">
                  {item.price}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/70">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:px-10 md:py-20">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
              Для кого
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
              Работаем с теми, кому нужен результат
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 px-5 py-5 text-white/85"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
              Почему это удобно
            </p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Один подрядчик вместо операционного хаоса
            </h2>

            <div className="mt-8 grid gap-4">
              {[
                "Понятная коммуникация с первого сообщения",
                "Можно собрать музыку и техчасть в одной команде",
                "Форматы под агентства, бренды, частные события и площадки",
                "Репертуар и программа подстраиваются под задачу",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-7 text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="/images/live.jpg"
              alt="Grunge Hotel live stage"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="cases" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
              Кейсы
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
              Как это выглядит в работе
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {cases.map((item) => (
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

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
              Репертуар
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
              Большой каталог под разные аудитории
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Pop & Pop Rock, Rock & Indie, Retro, Qazaq classics, Russian rock,
              tribute-материал и танцевальные форматы.
            </p>
            <div className="mt-8">
              <a
                href="/repertoire.pdf"
                className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Скачать репертуар
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="mb-4 text-sm text-white/60">Партнёры</p>
            <div className="flex flex-wrap gap-3">
              {partners.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-neutral-900">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:px-10 md:py-20">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
              Контакт
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
              Обсудить мероприятие
            </h2>

            <div className="mt-8 space-y-4 text-sm leading-7 text-white/80 sm:text-base">
              <div className="flex items-center gap-3">
                <span className="text-amber-300">📞</span>
                <a href="tel:+77072996264" className="hover:text-white">
                  +7 707 299 6264
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-amber-300">◎</span>
                <a
                  href="https://www.instagram.com/thegrungehotel/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Instagram
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-amber-300">▶</span>
                <a
                  href="https://www.youtube.com/@GrungeHotel_Almaty"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Имя"
              />
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Телефон / WhatsApp"
              />
              <input
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Дата мероприятия"
              />
              <input
                value={form.format}
                onChange={(e) => setForm({ ...form, format: e.target.value })}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Формат мероприятия"
              />
              <textarea
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                className="min-h-[140px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Комментарий"
              />

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-amber-300 px-7 py-4 text-center text-sm font-semibold text-black transition hover:bg-amber-200 disabled:opacity-60"
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </button>

                <a
                  href="https://wa.me/77072996264?text=Здравствуйте!%20Хочу%20обсудить%20мероприятие%20с%20Grunge%20Hotel."
                  onClick={trackWhatsAppClick}
                  className="w-full rounded-full border border-white/20 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  Написать в WhatsApp
                </a>
              </div>

              {submitMessage && (
                <p className="text-sm text-white/70">{submitMessage}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-white/45 sm:px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© Grunge Hotel — music & event solutions</p>
          <p>Almaty, Kazakhstan</p>
        </div>
      </footer>

      <a
        href="https://wa.me/77072996264?text=Здравствуйте!%20Хочу%20обсудить%20мероприятие%20с%20Grunge%20Hotel."
        onClick={trackWhatsAppClick}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:bg-amber-200 md:bottom-5 md:right-5"
        aria-label="WhatsApp"
      >
        WhatsApp
      </a>

      </main>
);
}
