"use client";

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "live-band",
    title: "Живая группа",
    text: "Главный формат Grunge Hotel для корпоративов, свадеб и частных событий: сильный вокал, широкий репертуар, адаптация под аудиторию и понятная работа с организатором.",
    price: "от 500 000 ₸",
  },
  {
    id: "tribute-shows",
    title: "Трибьют-шоу",
    text: "Отдельные концертные форматы и тематические программы для площадок, спецсобытий и клиентов, которым нужен яркий музыкальный акцент.",
    price: "по запросу",
  },
  {
    id: "event-production",
    title: "Event Production",
    text: "Сборка музыкальной части мероприятия под ключ: структура шоу, координация, драматургия вечера и работа в связке с организатором.",
    price: "по запросу",
  },
  {
    id: "technical-production",
    title: "Свет / звук / сцена",
    text: "Техническая часть проекта без лишних подрядчиков: бэклайн, координация под площадку и музыкальное решение в одной команде.",
    price: "по запросу",
  },
  {
    id: "studio",
    title: "Студия",
    text: "Запись вокала, барабанов, группы целиком, поканальная запись и студийные задачи как отдельное направление проекта.",
    price: "прайс отдельно",
  },
];

const audiences = [
  "Event-агентства",
  "Корпоративные клиенты",
  "Свадьбы",
  "Частные события",
];

const cases = [
  {
    title: "Крупный корпоратив",
    text: "Живая программа для брендов и компаний: 3 сета, адаптация под тайминг вечера, понятная коммуникация и музыкальный результат без хаоса.",
  },
  {
    title: "Свадьба с плотным танцполом",
    text: "Репертуар и динамика вечера собираются под публику: от сильного входа до танцевального блока без провалов по энергии.",
  },
  {
    title: "Концертный / трибьют-формат",
    text: "Отдельный формат для площадок и специальных событий, где важны подача, характер и цельная программа, а не набор случайных песен.",
  },
];

const videoGallery = [
  {
    title: "Live performance — YouTube",
    text: "Полноформатное видео с живым выступлением Grunge Hotel.",
    embedUrl: "https://www.youtube.com/embed/3AbyGBVosNA",
    href: "https://youtu.be/3AbyGBVosNA?si=qHYL9AtKZ46RcmSD",
  },
  {
    title: "Shorts — live moment #1",
    text: "Короткий вертикальный фрагмент с живой подачей и энергией группы.",
    embedUrl: "https://www.youtube.com/embed/PxHy7URcpD4",
    href: "https://youtube.com/shorts/PxHy7URcpD4?si=RYZVMBMVjRFRpuZM",
  },
  {
    title: "Shorts — live moment #2",
    text: "Ещё один короткий live-фрагмент для быстрой оценки подачи и атмосферы.",
    embedUrl: "https://www.youtube.com/embed/D9q61SpeCbM",
    href: "https://youtube.com/shorts/D9q61SpeCbM?si=azETVF2m99LVQT9r",
  },
];

const partners = [
  "Bereke Bank",
  "Kaspi Bank",
  "Samsung",
  "Astana Motors",
  "Kärcher",
  "Dior",
  "Tinkoff",
  "VTB",
  "Total Energies / Rixos",
  "Nurbank",
  "KASE",
  "Hard Rock Cafe",
  "Coca-Cola",
];

const liveBandGallery = [
  "/images/ghmain1.jpg",
  "/images/ghmain2.jpg",
  "/images/ghmain3.jpg",
  "/images/ghmain4.jpg",
  "/images/ghmain5.jpg",
  "/images/ghmain6.jpg",
  "/images/ghmain7.jpg",
];

const quartetGallery = [
  "/images/quartet/quartet1.jpg",
  "/images/quartet/quartet2.jpg",
  "/images/quartet/quartet3.jpg",
  "/images/quartet/quartet4.jpg",
  "/images/quartet/quartet5.jpg",
  "/images/quartet/quartet6.jpg",
  "/images/quartet/quartet7.jpg",
  "/images/quartet/quartet8.jpg",
  "/images/quartet/quartet9.jpg",
  "/images/quartet/quartet10.jpg",
  "/images/quartet/quartet11.jpg",
  "/images/quartet/quartet12.jpg",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [liveBandSlide, setLiveBandSlide] = useState(0);
  const [quartetSlide, setQuartetSlide] = useState(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    format: "",
    comment: "",
  });
  const [formStatus, setFormStatus] = useState<{
    type: "idle" | "success" | "error" | "loading";
    message: string;
  }>({ type: "idle", message: "" });

  const trackWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.ym) {
      window.ym(108573750, "reachGoal", "whatsapp_click");
    }
  };

  const showPrevLiveBandSlide = () => {
    setLiveBandSlide((prev) =>
      prev === 0 ? liveBandGallery.length - 1 : prev - 1
    );
  };

  const showNextLiveBandSlide = () => {
    setLiveBandSlide((prev) =>
      prev === liveBandGallery.length - 1 ? 0 : prev + 1
    );
  };

  const showPrevQuartetSlide = () => {
    setQuartetSlide((prev) =>
      prev === 0 ? quartetGallery.length - 1 : prev - 1
    );
  };

  const showNextQuartetSlide = () => {
    setQuartetSlide((prev) =>
      prev === quartetGallery.length - 1 ? 0 : prev + 1
    );
  };

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      setFormStatus({
        type: "error",
        message: "Укажи имя и телефон — без этого заявка не уйдёт.",
      });
      return;
    }

    setFormStatus({ type: "loading", message: "Отправляем заявку…" });

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Не удалось отправить заявку");
      }

      setForm({ name: "", phone: "", date: "", format: "", comment: "" });
      setFormStatus({
        type: "success",
        message: "Заявка отправлена. Антон свяжется с вами в ближайшее время.",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Не удалось отправить заявку";
      setFormStatus({ type: "error", message });
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
            <a href="#live-band" className="hover:text-white">
              Живая группа
            </a>
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
              href="https://wa.me/77072996264"
              onClick={trackWhatsAppClick}
              className="rounded-full border border-white/15 px-5 py-2.5 text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Связаться с менеджером
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
                href="#live-band"
                className="rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Живая группа
              </a>
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
                href="https://wa.me/77072996264"
                className="mt-2 rounded-full bg-amber-300 px-5 py-3 text-center text-sm font-semibold text-black"
                onClick={() => {
                  trackWhatsAppClick();
                  setMenuOpen(false);
                }}
              >
                Связаться с менеджером
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
          <div className="max-w-5xl">
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-amber-300/80 sm:text-xs">
              Almaty · live band · music & event production
            </p>

            <h1 className="max-w-5xl font-serif text-4xl leading-[0.94] sm:text-5xl md:text-7xl xl:text-8xl">
              Живая группа и музыкальный подрядчик для мероприятий в Алматы
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75 sm:text-base md:text-lg">
              Grunge Hotel — это группа на корпоративы, свадьбы и частные события,
              с которой удобно работать организатору. Сильный вокал, широкий
              репертуар, адаптация под аудиторию и результат без лишнего хаоса.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/77072996264"
                onClick={trackWhatsAppClick}
                className="rounded-full bg-amber-300 px-6 py-4 text-center text-sm font-semibold text-black transition hover:bg-amber-200"
              >
                Связаться с менеджером
              </a>
              <a
                href="#live-band"
                className="rounded-full border border-white/20 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Посмотреть формат живой группы
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs text-white/70 sm:text-sm">
              {[
                "Event-агентства",
                "Корпоративные клиенты",
                "Свадьбы",
                "500+ песен",
                "3 сета по 30–40 минут",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2"
                >
                  {item}
                </span>
              ))}
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
              Не просто группа, а серьёзный музыкальный подрядчик
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-white/75 sm:text-base">
            <p>
              Grunge Hotel — это группа на ивенты, которая закрывает музыкальную
              часть события профессионально: программа, подача, тайминг,
              коммуникация и адаптация под публику.
            </p>
            <p>
              Production-направление на сайте остаётся как развитие проекта и
              дополнительная услуга, но главный фокус — живая группа, на которую
              можно положиться.
            </p>
          </div>
        </div>
      </section>

      <section
        id="live-band"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20"
      >
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
              Живая группа
            </p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Живая группа на корпоративы, свадьбы и частные события
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Это главный формат Grunge Hotel. Мы не просто выходим на сцену и
              играем песни — мы собираем живую программу под задачу, чтобы вечер
              работал на атмосферу, гостей и общий результат мероприятия.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              С нами удобно работать организатору: понятная коммуникация,
              согласование репертуара, работа под тайминг события и сильное live-
              исполнение без ощущения случайной кавер-группы.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Подбор программы под аудиторию",
                "3 сета по 30–40 минут",
                "Согласование репертуара",
                "Работа под тайминг события",
                "Бэклайн и команда под площадку",
                "Мужской состав / mixed состав",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-7 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-amber-300/20 bg-amber-300/5 p-6">
              <p className="text-sm leading-7 text-white/80 sm:text-base">
                Главные страхи клиента мы понимаем заранее: группа может оказаться
                слишком роковой, скучной или неудобной в работе. Поэтому мы
                собираем программу не под вкус музыкантов, а под аудиторию,
                площадку и формат события.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/77072996264"
                onClick={trackWhatsAppClick}
                className="rounded-full bg-amber-300 px-6 py-4 text-center text-sm font-semibold text-black transition hover:bg-amber-200"
              >
                Связаться с менеджером
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Оставить заявку через форму
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
              <img
                src={liveBandGallery[liveBandSlide]}
                alt={`Grunge Hotel live gallery ${liveBandSlide + 1}`}
                className="h-full max-h-[640px] w-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPrevLiveBandSlide}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  ← Назад
                </button>
                <button
                  type="button"
                  onClick={showNextLiveBandSlide}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  Вперёд →
                </button>
              </div>

              <p className="text-xs text-white/50 sm:text-sm">
                {liveBandSlide + 1} / {liveBandGallery.length}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
              {liveBandGallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setLiveBandSlide(index)}
                  className={`overflow-hidden rounded-2xl border transition ${
                    index === liveBandSlide
                      ? "border-amber-300"
                      : "border-white/10 hover:border-white/30"
                  }`}
                  aria-label={`Показать фото ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`Grunge Hotel thumbnail ${index + 1}`}
                    className="h-20 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
              Видео-галерея
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
              Живое видео Grunge Hotel
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              Ниже — первые видео для портфолио: полное выступление и короткие
              live-фрагменты, которые можно использовать как основу для видео-раздела
              и дальнейшего наполнения сайта.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {videoGallery.map((video) => (
              <article
                key={video.href}
                className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900"
              >
                <div className="aspect-[16/9] w-full bg-black">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="space-y-4 p-5">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{video.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">{video.text}</p>
                  </div>
                  <a
                    href={video.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/35 hover:bg-white/5"
                  >
                    Открыть на YouTube
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
            Услуги проекта
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
            Главный фокус — группа на ивенты. Остальное — как расширение задачи.
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            Если клиенту нужно больше, чем просто выступление, мы можем закрыть и
            дополнительные направления проекта.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => (
            <article
              id={item.id}
              key={item.id}
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
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-white/10"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.78) 45%, rgba(0,0,0,0.52) 100%), url('/images/quartet main.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="grid gap-10 px-6 py-10 sm:px-8 md:grid-cols-[1fr_1fr] md:px-12 md:py-16">
              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
                  Мужской квартет
                </p>
                <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                  Мужской квартет для корпоративных и частных мероприятий
                </h2>
                <div className="mt-6 space-y-5 text-sm leading-7 text-white/80 sm:text-base">
                  <p>
                    Grunge Hotel работает в формате мужского квартета как отдельное
                    решение для мероприятий, где важны качество живого выступления,
                    дисциплина на площадке и понятный рабочий процесс.
                  </p>
                  <p>
                    Этот формат подходит для корпоративов, свадеб и частных событий,
                    когда заказчику нужна живая группа с собранной программой,
                    сильной подачей и профессиональной организацией.
                  </p>
                  <p>
                    Группа работает со своим бэклайном и соблюдает агентские условия
                    сотрудничества: тайминг, подготовку к площадке, рабочую
                    коммуникацию и согласованный формат взаимодействия с
                    организатором.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Мужской состав с сильной сценической подачей",
                    "Подходит для корпоративов, свадеб и частных мероприятий",
                    "Работа со своим бэклайном",
                    "Соблюдение агентских условий",
                    "Программа под задачу мероприятия",
                    "Понятная организация работы на площадке",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm leading-7 text-white/85 backdrop-blur-[2px]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="https://wa.me/77072996264"
                    onClick={trackWhatsAppClick}
                    className="inline-flex rounded-full bg-amber-300 px-6 py-4 text-sm font-semibold text-black transition hover:bg-amber-200"
                  >
                    Запросить условия
                  </a>
                </div>
              </div>

              <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
              <img
                src={quartetGallery[quartetSlide]}
                alt={`Grunge Hotel quartet gallery ${quartetSlide + 1}`}
                className="h-full max-h-[640px] w-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPrevQuartetSlide}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  ← Назад
                </button>
                <button
                  type="button"
                  onClick={showNextQuartetSlide}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  Вперёд →
                </button>
              </div>

              <p className="text-xs text-white/50 sm:text-sm">
                {quartetSlide + 1} / {quartetGallery.length}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
              {quartetGallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setQuartetSlide(index)}
                  className={`overflow-hidden rounded-2xl border transition ${
                    index === quartetSlide
                      ? "border-amber-300"
                      : "border-white/10 hover:border-white/30"
                  }`}
                  aria-label={`Показать фото квартета ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`Grunge Hotel quartet thumbnail ${index + 1}`}
                    className="h-20 w-full object-cover"
                  />
                </button>
              ))}
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="border-y border-white/10 bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
              Кейсы
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
              Три сценария, в которых формат Grunge Hotel работает сильнее всего
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
              500+ песен под разную аудиторию и формат вечера
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Рок, поп, фанк, джаз, R&B, международный и русскоязычный
              репертуар, казахские песни, tribute-программы, танцевальные блоки
              и более мягкие lounge-решения под нужный сценарий события.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/repertoire.pdf"
                className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Скачать репертуар
              </a>
              <a
                href="https://wa.me/77072996264"
                onClick={trackWhatsAppClick}
                className="rounded-full bg-amber-300 px-7 py-4 text-center text-sm font-semibold text-black transition hover:bg-amber-200"
              >
                Запросить программу в WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="mb-4 text-sm text-white/60">Нам доверяли</p>
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

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 md:py-20">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-white/10"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 42%, rgba(0,0,0,0.45) 100%), url('/images/alan2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="grid gap-10 px-6 py-10 sm:px-8 md:grid-cols-[0.95fr_1.05fr] md:px-12 md:py-16">
              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">
                  Фронтмен
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
                  Алан Салпагаров — голос, который держит внимание зала
                </h2>
              </div>

              <div className="space-y-5 text-sm leading-7 text-white/80 sm:text-base">
                <p>
                  У Grunge Hotel сильный фронтменский центр. Алан — это не просто
                  вокалист, а лицо группы и один из ключевых факторов, почему формат
                  работает и на корпоративах, и на свадьбах, и на концертных
                  площадках.
                </p>
                <p>
                  Широкий диапазон, мощная подача и умение держать внимание аудитории
                  усиливают весь проект: от камерного блока до плотного live-сета.
                </p>
              </div>
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
              Связаться с менеджером
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Быстрее всего — написать в WhatsApp. Форма ниже остаётся как запасной
              вариант, если удобно оставить заявку текстом.
            </p>

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

            <div className="mt-8">
              <a
                href="https://wa.me/77072996264"
                onClick={trackWhatsAppClick}
                className="inline-flex rounded-full bg-amber-300 px-6 py-4 text-sm font-semibold text-black transition hover:bg-amber-200"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="mb-5 text-sm text-white/55">Запасной вариант — форма заявки</p>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleFormChange}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Имя"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleFormChange}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Телефон / WhatsApp"
              />
              <input
                name="date"
                value={form.date}
                onChange={handleFormChange}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Дата мероприятия"
              />
              <input
                name="format"
                value={form.format}
                onChange={handleFormChange}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Формат мероприятия"
              />
              <textarea
                name="comment"
                value={form.comment}
                onChange={handleFormChange}
                className="min-h-[140px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Комментарий"
              />

              <button
                type="submit"
                disabled={formStatus.type === "loading"}
                className="rounded-2xl bg-amber-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {formStatus.type === "loading" ? "Отправляем…" : "Отправить заявку"}
              </button>

              {formStatus.type !== "idle" && (
                <p
                  className={`text-sm ${
                    formStatus.type === "success"
                      ? "text-emerald-300"
                      : formStatus.type === "error"
                        ? "text-red-300"
                        : "text-white/60"
                  }`}
                >
                  {formStatus.message}
                </p>
              )}
            </form>
          </div>

          <a
            href="https://wa.me/77072996264"
            onClick={trackWhatsAppClick}
            className="fixed bottom-4 right-4 z-50 rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:bg-amber-200 md:bottom-5 md:right-5"
            aria-label="WhatsApp"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-white/45 sm:px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© Grunge Hotel — music & event solutions</p>
          <p>Almaty, Kazakhstan</p>
        </div>
      </footer>
    </main>
  );
}
