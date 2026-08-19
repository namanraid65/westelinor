import { Code2, Terminal, Database, Cloud, Shield, Layers, Cpu, GitBranch } from "lucide-react";

const technologies = [
  { icon: Code2,     label: "TypeScript"   },
  { icon: Layers,    label: "Next.js"      },
  { icon: Terminal,  label: "Node.js"      },
  { icon: Cpu,       label: "Python"       },
  { icon: Database,  label: "PostgreSQL"   },
  { icon: Cloud,     label: "AWS Cloud"    },
  { icon: Shield,    label: "Azure"        },
  { icon: GitBranch, label: "React Native" },
];

export function TechStack() {
  return (
    <section id="technology" className="py-24 md:py-32 bg-[var(--color-surface-container-highest)]/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        <div className="text-center mb-14 reveal">
          <span className="text-[var(--color-primary)] text-xs font-bold tracking-[0.18em] uppercase">
            Stack
          </span>
          <h2
            className="font-[var(--font-hanken)] font-semibold text-[var(--color-on-surface)] mt-4 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
          >
            Future-Proof Tech Stack
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 stagger-reveal">
          {technologies.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="tech-badge bg-[var(--color-surface-container)] px-5 py-3.5 rounded-xl flex items-center gap-3 border border-[var(--color-outline-variant)]/40 cursor-default"
            >
              <Icon size={17} className="text-[var(--color-primary)]" aria-hidden />
              <span className="text-sm font-semibold text-[var(--color-on-surface)]">
                {label}
              </span>
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
