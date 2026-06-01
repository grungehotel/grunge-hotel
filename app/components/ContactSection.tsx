"use client";

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

import { useState } from "react";

export default function ContactSection() {
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
        headers: { "Content-Type": "application/json" },
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
            Быстрее всего — написать в WhatsApp. Форма ниже остаётся как
            запасной вариант, если удобно оставить заявку текстом.
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
          <p className="mb-5 text-sm text-white/55">
            Запасной вариант — форма заявки
          </p>
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
              {formStatus.type === "loading"
                ? "Отправляем…"
                : "Отправить заявку"}
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
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/77072996264"
        onClick={trackWhatsAppClick}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:bg-amber-200 md:bottom-5 md:right-5"
        aria-label="WhatsApp"
      >
        WhatsApp
      </a>
    </section>
  );
}
