"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ServiceSlide = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  href: string;
};

type ServicesCarouselProps = {
  title: string;
  slides: ServiceSlide[];
  buttonLabel: string;
};

export default function ServicesCarousel({
  title,
  slides,
  buttonLabel,
}: ServicesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const autoplayRef = useRef<number | null>(null);

  useEffect(() => {
    if (slides.length <= 1) return;

    autoplayRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => {
      if (autoplayRef.current !== null) {
        window.clearInterval(autoplayRef.current);
      }
    };
  }, [slides.length]);

  function goToSlide(index: number) {
    setActiveIndex(index);
  }

  function goToNext() {
    setActiveIndex((current) => (current + 1) % slides.length);
  }

  function goToPrevious() {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX === null) return;

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const delta = touchStartX - touchEndX;

    if (Math.abs(delta) > 50) {
      if (delta > 0) goToNext();
      else goToPrevious();
    }

    setTouchStartX(null);
  }

  const activeSlide = slides[activeIndex];

  return (
    <div className="brand-card-soft overflow-hidden">
      <div className="flex items-center justify-between px-6 pb-4 pt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
          {title}
        </p>
      </div>

      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.slug} className="min-w-full px-4 pb-4">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-white">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  width={1200}
                  height={780}
                  className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[420px]"
                />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-[#293f46]/86 via-[#293f46]/36 to-transparent p-5 sm:p-6">
                  <h3 className="max-w-[60%] text-lg font-semibold text-white sm:text-2xl">
                    {slide.title}
                  </h3>

                  <Link
                    href={slide.href}
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-soft-2"
                  >
                    {buttonLabel}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {slides.length > 1 ? (
          <>
            <button
              type="button"
              aria-label="Slide precedente"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/92 p-3 text-brand-primary shadow-md transition hover:bg-white lg:block"
            >
              ‹
            </button>

            <button
              type="button"
              aria-label="Slide successiva"
              onClick={goToNext}
              className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/92 p-3 text-brand-primary shadow-md transition hover:bg-white lg:block"
            >
              ›
            </button>
          </>
        ) : null}
      </div>

      {slides.length > 1 ? (
        <div className="flex items-center justify-center gap-2 px-6 pb-6 pt-2">
          {slides.map((slide, index) => (
            <button
              key={slide.slug}
              type="button"
              aria-label={`Vai a ${slide.title}`}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition ${
                index === activeIndex
                  ? "w-8 bg-brand-primary"
                  : "w-2.5 bg-[#879e8580] hover:bg-[#879e85]"
              }`}
            />
          ))}
        </div>
      ) : null}

      {activeSlide ? (
        <div className="sr-only">{activeSlide.title}</div>
      ) : null}
    </div>
  );
}
