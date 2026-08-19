"use client";

import { useCounterAnimation } from "@/lib/useCounterAnimation";

const stats = [
  { count: 100, label: "Projects Delivered" },
  { count: 50,  label: "Global Clients"     },
  { count: 10,  label: "Countries Served"   },
  { count: 15,  label: "Years Experience"   },
];

export function TrustBar() {
  useCounterAnimation();

  return (
    <section className="bg-[var(--color-surface-container-lowest)] border-y border-[var(--color-outline-variant)]/30 reveal">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-3">
              <div
                className="font-[var(--font-hanken)] font-semibold text-[var(--color-primary)] leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
                data-count={s.count}
              >
                0
              </div>
              <div className="text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-on-surface-variant)] font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
