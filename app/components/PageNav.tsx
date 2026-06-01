"use client";

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { href: "/live-band-almaty", label: "Живая группа" },
  { href: "/corporate-band-almaty", label: "Корпоративы" },
  { href: "/wedding-band-almaty", label: "Свадьбы" },
  { href: "/studio-recording-almaty", label: "Студия" },
];

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/#cases", label: "Кейсы" },
  { href: "/#contact", label: "Контакты" },
];

export default function PageNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const trackWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.ym) {
      window.ym(108573750, "reachGoal", "whatsapp_click");
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-white.png"
            alt="Grunge Hotel logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <div>
            <p className="font-serif text-lg leading-none">Grunge Hotel</p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/50 sm:text-xs">
              music & event solutions
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-white/70 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-2 transition hover:text-white"
            >
              Услуги
              <span className="text-xs text-white/50">▾</span>
            </button>

            <div className="invisible absolute right-0 top-full mt-3 w-64 translate-y-2 rounded-3xl border border-white/10 bg-black/95 p-2 opacity-0 shadow-2xl transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <a
            href="https://wa.me/77072996264"
            onClick={trackWhatsAppClick}
            className="rounded-full border border-white/15 px-5 py-2.5 text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Связаться
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Открыть меню"
        >
          <span className="text-lg">{menuOpen ? "×" : "≡"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-2 rounded-2xl border border-white/10 p-2">
              <p className="px-2 pb-2 pt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                Услуги
              </p>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href="https://wa.me/77072996264"
              className="mt-2 rounded-full bg-amber-300 px-5 py-3 text-center text-sm font-semibold text-black"
              onClick={() => {
                trackWhatsAppClick();
                setMenuOpen(false);
              }}
            >
              Связаться в WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
