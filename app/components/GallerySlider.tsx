"use client";

import { useState } from "react";
import Image from "next/image";

interface GallerySliderProps {
  images: string[];
  altPrefix?: string;
}

export default function GallerySlider({
  images,
  altPrefix = "Grunge Hotel",
}: GallerySliderProps) {
  const [slide, setSlide] = useState(0);

  const prev = () =>
    setSlide((s) => (s === 0 ? images.length - 1 : s - 1));
  const next = () =>
    setSlide((s) => (s === images.length - 1 ? 0 : s + 1));

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30">
        <Image
          src={images[slide]}
          alt={`${altPrefix} ${slide + 1}`}
          width={1600}
          height={1067}
          sizes="(max-width: 768px) 100vw, 45vw"
          className="h-full max-h-[640px] w-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/5"
          >
            ← Назад
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Вперёд →
          </button>
        </div>
        <p className="text-xs text-white/50 sm:text-sm">
          {slide + 1} / {images.length}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSlide(index)}
            className={`overflow-hidden rounded-2xl border transition ${
              index === slide
                ? "border-amber-300"
                : "border-white/10 hover:border-white/30"
            }`}
            aria-label={`Показать фото ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${altPrefix} thumbnail ${index + 1}`}
              width={240}
              height={160}
              sizes="(max-width: 640px) 25vw, 10vw"
              className="h-20 w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
