import Image from "next/image";
import { Globe, Building2, Network, Headphones } from "lucide-react";

const advantages = [
  {
    icon: Globe,
    iconColor: "text-[var(--color-primary)]",
    title: "Global Delivery",
    description: "Serving clients across 10+ countries with seamless remote collaboration models.",
  },
  {
    icon: Building2,
    iconColor: "text-[var(--color-secondary)]",
    title: "Enterprise Expertise",
    description: "Specialized in large-scale infrastructure and complex software ecosystems.",
  },
  {
    icon: Network,
    iconColor: "text-[var(--color-primary)]",
    title: "LMS Specialists",
    description: "Deep domain knowledge in E-Learning standards and pedagogical technology.",
  },
  {
    icon: Headphones,
    iconColor: "text-[var(--color-secondary)]",
    title: "Dedicated Support",
    description: "24/7 technical assistance and proactive maintenance for all critical systems.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface-container-low)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* ── Left column ── */}
          <div className="lg:col-span-1 reveal">
            <span className="text-[var(--color-secondary)] text-xs font-bold tracking-[0.18em] uppercase">
              The Advantage
            </span>
            <h2
              className="font-[var(--font-hanken)] font-bold text-[var(--color-on-surface)] mt-4 mb-6 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}
            >
              Why Partner With Us?
            </h2>
            <p className="text-[var(--color-on-surface-variant)] text-base leading-[1.8]">
              We don&apos;t just build software; we build the future of your
              enterprise through strategic engineering and visionary design.
            </p>
            <div className="mt-10 overflow-hidden rounded-xl shadow-xl border border-white/10">
              <Image
                src="https://lh3.googleusercontent.com/aida/AP1WRLuUVw9e6TKI5topJoFtuzqI6HbaSWPIip6_zceulcsWl7jVVx_PiQsULjTT2p3ExUE2FR15UO2fOhIjHQpUJpdcXijvEGuXkEtt8gfFyYuGQ6FKvz7XLSkjFxtUIV5_vcgJOUwq3Hl46TYBqhKv56_cOCneDiuE9M5f53ccBgjUb22ZqdW9s8v_c0bzgeYgDldsuCR0DfpJgYr-dbuuhc94v6jfv3WOniOZVITGgMqpLMWUzC0ZZFL5zG0"
                alt="Software Architecture"
                width={500}
                height={320}
                className="w-full object-cover hover:scale-[1.03] transition-transform duration-500"
                unoptimized
              />
            </div>
          </div>

          {/* ── Right grid ── */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-5 stagger-reveal">
            {advantages.map(({ icon: Icon, iconColor, title, description }) => (
              <div
                key={title}
                className="p-7 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-container)] flex items-center justify-center mb-5">
                  <Icon size={20} className={iconColor} />
                </div>
                <h4 className="font-[var(--font-hanken)] text-base font-semibold text-[var(--color-on-surface)] mb-3 leading-snug">
                  {title}
                </h4>
                <p className="text-sm text-[var(--color-on-surface-variant)] leading-[1.75]">
                  {description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
