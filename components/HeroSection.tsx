"use client";

import Image from "next/image";

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="solutions"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Max-width wrapper with generous padding */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: text ── */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <h1
              className="hero-entrance hero-stagger-1 font-[var(--font-hanken)] font-bold leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.75rem)" }}
            >
              <span className="text-[var(--color-primary)]">
                Transforming Businesses Through
              </span>{" "}
              <span className="text-[var(--color-on-surface)]">
                Technology &amp; Digital Learning
              </span>
            </h1>

            <p className="hero-entrance hero-stagger-2 text-[var(--color-on-surface-variant)] text-lg md:text-xl leading-[1.75] max-w-[520px]">
              Custom Software Development, LMS, Mobile Applications, and Digital
              Transformation Services engineered for the modern enterprise.
            </p>

            <div className="hero-entrance hero-stagger-3 flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] px-8 py-4 rounded-xl text-sm font-bold tracking-wide hover:scale-105 hover:glow-cyan transition-all active:scale-95 cursor-pointer"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="border border-[var(--color-outline-variant)] bg-white/5 text-[var(--color-on-surface)] px-8 py-4 rounded-xl text-sm font-bold hover:bg-white/10 transition-all active:scale-95 cursor-pointer"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* ── Right: floating image ── */}
          <div className="relative group hero-entrance hero-stagger-4">
            <div className="absolute -inset-6 bg-[var(--color-primary)]/15 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="animate-float relative z-10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDniJX1Ba_BGNLNeu6_Tm9F-m_Rv50rDJbPEq0dmQLDQoTbBCflIqBUMF5_cfgQ5L3bbLsMKQqWvju76VjE1ibU4G2r7X3LbTmq6TzTp7w9J1zsP09faplM2X815-FWa6v0Jse6S1KWsnBJvbbQwHTIBK09VhJTwyQoaexSRhvmI5w6-5WecURWvSuB-UM_YxDCG9BlkWZw4oLjF5gAQjbAmtDjazkoWavd6cbwq-udAXMjvrfsMeL9H4TKIVKhvn2zZbL1O1gwoXA"
                alt="Digital Dashboard UI"
                width={700}
                height={467}
                className="rounded-2xl glass-card w-full shadow-2xl object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* Atmospheric blobs */}
      <div className="pointer-events-none absolute top-1/3 -left-32 w-[420px] h-[420px] bg-[var(--color-primary)]/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 -right-32 w-[500px] h-[500px] bg-[var(--color-secondary)]/6 blur-[160px] rounded-full" />
    </section>
  );
}
