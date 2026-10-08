"use client";

import { useState } from "react";

const services = [
  "Сведение",
  "Мастеринг",
  "Запись вокала",
  "Аранжировка / продакшн",
  "Композиция",
  "Другое",
];

export default function ProductionContactSection() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    service: "",
    trackLink: "",
    deadline: "",
    comment: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.contact.trim() || !form.service) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestType: "production", ...form }),
      });
      if (!response.ok) throw new Error("Request failed");
      setForm({ name: "", contact: "", service: "", trackLink: "", deadline: "", comment: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="border-t border-white/10 bg-neutral-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-300/80 sm:text-xs">Начать работу</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">Расскажи о треке</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Пришли ссылку на демо или релиз, опиши задачу и срок. Алан посмотрит материал и предложит следующий шаг.
          </p>
          <p className="mt-8 text-sm leading-7 text-white/55">Нужен быстрый ответ? Напиши в WhatsApp.</p>
          <a href="https://wa.me/77072996264" className="mt-4 inline-flex rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition hover:border-amber-200 hover:text-amber-200">
            Написать в WhatsApp
          </a>
        </div>

        <form onSubmit={submit} className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" value={form.name} onChange={update} placeholder="Как вас зовут" className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35" />
            <input name="contact" value={form.contact} onChange={update} placeholder="Телефон / Telegram / email" className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35" />
          </div>
          <select name="service" value={form.service} onChange={update} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none">
            <option value="" disabled>Что нужно сделать?</option>
            {services.map((service) => <option key={service} value={service} className="bg-neutral-900">{service}</option>)}
          </select>
          <input name="trackLink" value={form.trackLink} onChange={update} placeholder="Ссылка на демо / трек (необязательно)" className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35" />
          <input name="deadline" value={form.deadline} onChange={update} placeholder="Желаемый срок" className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35" />
          <textarea name="comment" value={form.comment} onChange={update} placeholder="Опишите задачу, референсы и детали" className="min-h-[130px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35" />
          <button type="submit" disabled={status === "loading"} className="rounded-2xl bg-amber-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-200 disabled:opacity-60">
            {status === "loading" ? "Отправляем…" : "Отправить запрос"}
          </button>
          {status === "success" && <p className="text-sm text-emerald-300">Запрос отправлен. Свяжемся с вами в ближайшее время.</p>}
          {status === "error" && <p className="text-sm text-red-300">Заполните имя, контакт и услугу. Если ошибка повторится — напишите в WhatsApp.</p>}
        </form>
      </div>
    </section>
  );
}
