"use client";

import { ArrowRight, BookOpen, Monitor, Smartphone, Cog } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    iconColor: "text-[var(--color-primary)]",
    title: "LMS Platforms",
    description: "Customized learning management systems designed for scalability and user engagement.",
  },
  {
    icon: Monitor,
    iconColor: "text-[var(--color-secondary)]",
    title: "Web App Dev",
    description: "High-performance web applications built with modern frameworks and robust backends.",
  },
  {
    icon: Smartphone,
    iconColor: "text-[var(--color-primary)]",
    title: "Mobile App Dev",
    description: "Native and cross-platform mobile solutions delivering seamless experiences.",
  },
  {
    icon: Cog,
    iconColor: "text-[var(--color-secondary)]",
    title: "Business Automation",
    description: "Streamline operations with intelligent automation and AI-integrated workflows.",
  },
];

export function ServicesSection() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 reveal">
          <span className="text-[var(--color-primary)] text-xs font-bold tracking-[0.18em] uppercase">
            Expertise
          </span>
          <h2
            className="font-[var(--font-hanken)] font-bold text-[var(--color-on-surface)] mt-4 leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Our Core Expertise
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-reveal">
          {services.map(({ icon: Icon, iconColor, title, description }) => (
            <div
              key={title}
              className="glass-card gradient-border rounded-2xl p-8 flex flex-col gap-5 h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-surface-container)] flex items-center justify-center">
                <Icon size={24} className={iconColor} aria-hidden />
              </div>
              <h3 className="font-[var(--font-hanken)] text-lg font-semibold text-[var(--color-on-surface)] leading-snug">
                {title}
              </h3>
              <p className="text-sm text-[var(--color-on-surface-variant)] leading-[1.7] flex-1">
                {description}
              </p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline group/btn cursor-pointer mt-1"
              >
                Learn More
                <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
