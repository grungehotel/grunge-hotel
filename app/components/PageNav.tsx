"use client";

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const liveLinks = [
  { href: "/corporate-band-almaty", label: "Группа на корпоратив" },
  { href: "/wedding-band-almaty", label: "Группа на свадьбу" },
  { href: "/#contact", label: "Дуэты и инструменталисты" },
  { href: "/new-year-corporate-band-almaty", label: "Новогодний корпоратив" },
];

const productionLinks = [
  { href: "/studio-recording-almaty", label: "Студия звукозаписи" },
  { href: "/alanaudio", label: "Сведение / мастеринг — Alan Audio" },
  { href: "/#contact", label: "Сессионные музыканты" },
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
          <span className="site-logo-medallion" aria-hidden="true">
            <Image
              src="/images/logo-main.png"
              alt=""
              fill
              sizes="48px"
              className="object-contain scale-[1.24] p-0.5"
              priority
            />
          </span>
          <div>
            <p className="font-serif text-lg leading-none">Grunge Hotel</p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/50 sm:text-xs">
              music & event solutions
            </p>
          </div>
        </Link>

                <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <div className="group relative py-2">
            <Link href="/live-band-almaty" className="flex items-center gap-2 transition hover:text-white">
              Живая группа <span className="text-xs text-white/50">▾</span>
            </Link>
            <div className="invisible absolute left-0 top-full w-72 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-3xl border border-white/10 bg-black/95 p-2 shadow-2xl">
                {liveLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="block rounded-2xl px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-white">{link.label}</Link>
                ))}
              </div>
            </div>
          </div>
          <div className="group relative py-2">
            <Link href="/studio-recording-almaty" className="flex items-center gap-2 transition hover:text-white">
              Продакшн услуги <span className="text-xs text-white/50">▾</span>
            </Link>
            <div className="invisible absolute left-0 top-full w-80 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-3xl border border-white/10 bg-black/95 p-2 shadow-2xl">
                {productionLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="block rounded-2xl px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-white">{link.label}</Link>
                ))}
              </div>
            </div>
          </div>
          <a href="/#contact" className="hover:text-white">Организация концертов</a>
          <a href="/#contact" className="hover:text-white">Контакты</a>
          <a href="https://wa.me/77072996264" onClick={trackWhatsAppClick} className="rounded-full border border-white/15 px-5 py-2.5 text-white transition hover:border-white/40 hover:bg-white/5">Связаться с менеджером</a>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Открыть меню"><span className="text-lg">{menuOpen ? "×" : "≡"}</span></button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            <div className="rounded-2xl border border-white/10 p-2">
              <p className="px-2 pb-2 pt-1 text-xs uppercase tracking-[0.2em] text-white/40">Живая группа</p>
              {liveLinks.map((link) => <Link key={link.label} href={link.href} className="block rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>{link.label}</Link>)}
            </div>
            <div className="rounded-2xl border border-white/10 p-2">
              <p className="px-2 pb-2 pt-1 text-xs uppercase tracking-[0.2em] text-white/40">Продакшн услуги</p>
              {productionLinks.map((link) => <Link key={link.label} href={link.href} className="block rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>{link.label}</Link>)}
            </div>
            <a href="/#contact" className="rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>Организация концертов</a>
            <a href="/#contact" className="rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white" onClick={() => setMenuOpen(false)}>Контакты</a>
            <a href="https://wa.me/77072996264" className="mt-2 rounded-full bg-amber-300 px-5 py-3 text-center text-sm font-semibold text-black" onClick={() => { trackWhatsAppClick(); setMenuOpen(false); }}>Связаться с менеджером</a>
          </div>
        </div>
      )}
    </header>
  );
}
