import Image from "next/image";
import { ChevronRight } from "lucide-react";

const projects = [
  {
    image: "https://lh3.googleusercontent.com/aida/AP1WRLtJo-Q-f6TQqpVryY-wpYSBQMild6RHvWih-jKP_zGIWoFTc5_sJLmg-G3hgg2MJZPGv7Z9mGj1ENrDiUSrTRsUZ8xcYJE5nEoOW308Ih0wZ8Cv8BXSg0-IzCH_IF5HG5pguotCbvJ4sb4MJ0BMOPrJ2m8XiJtZMEZBYshkn3vr2DOOGEQUk9ZQAUowMjF4V02I3LgdLY573RNVj25cusH_hjn5DErpDyzv-X9yET43s8OS-ipN5VEfsA",
    alt: "Enterprise Platform",
    badgeClass: "bg-[var(--color-primary)]/20 text-[var(--color-primary)]",
    badge: "Enterprise Software",
    title: "Global Supply Chain Hub",
    description: "Comprehensive management system integrating real-time logistics and predictive inventory analysis for a Fortune 500 client.",
  },
  {
    image: "https://lh3.googleusercontent.com/aida/AP1WRLuUVw9e6TKI5topJoFtuzqI6HbaSWPIip6_zceulcsWl7jVVx_PiQsULjTT2p3ExUE2FR15UO2fOhIjHQpUJpdcXijvEGuXkEtt8gfFyYuGQ6FKvz7XLSkjFxtUIV5_vcgJOUwq3Hl46TYBqhKv56_cOCneDiuE9M5f53ccBgjUb22ZqdW9s8v_c0bzgeYgDldsuCR0DfpJgYr-dbuuhc94v6jfv3WOniOZVITGgMqpLMWUzC0ZZFL5zG0",
    alt: "LMS Interface",
    badgeClass: "bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]",
    badge: "Education Technology",
    title: "Nexus Learning Ecosystem",
    description: "Scalable LMS platform supporting over 200,000 active learners with AI-driven personalized learning paths.",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16 md:mb-20 reveal">
          <div>
            <span className="text-[var(--color-primary)] text-xs font-bold tracking-[0.18em] uppercase">
              Our Work
            </span>
            <h2
              className="font-[var(--font-hanken)] font-bold text-[var(--color-on-surface)] mt-4 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Featured Engagements
            </h2>
          </div>
          <button className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline group cursor-pointer shrink-0">
            View Full Portfolio
            <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Project cards */}
        <div className="grid lg:grid-cols-2 gap-8 stagger-reveal">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl glass-card cursor-pointer"
            >
              <Image
                src={p.image}
                alt={p.alt}
                width={700}
                height={467}
                className="w-full aspect-[16/10] object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className={`${p.badgeClass} px-3 py-1.5 rounded-full text-xs font-semibold inline-block mb-4`}>
                  {p.badge}
                </span>
                <h3 className="font-[var(--font-hanken)] text-xl md:text-2xl font-bold text-[var(--color-on-surface)] mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[var(--color-on-surface-variant)] text-sm leading-[1.75] max-w-md">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
