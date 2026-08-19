const footerLinks: Record<string, string[]> = {
  Solutions: ["LMS Platforms", "E-Learning", "Corporate Training"],
  Services:  ["Web Development", "Mobile App Dev", "Business Automation"],
  Connect:   ["Newsletter", "Careers", "Privacy Policy"],
};

export function Footer() {
  return (
    <footer className="bg-[var(--color-surface-container-lowest)] border-t border-[var(--color-outline-variant)]/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-[var(--font-hanken)] text-lg font-bold text-[var(--color-primary)] mb-4 leading-tight">
              West Elinor Technologies
            </div>
            <p className="text-sm text-[var(--color-on-surface-variant)] leading-[1.8]">
              Enlightening the world with technology and innovative digital learning solutions.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h6 className="text-[0.7rem] font-bold tracking-[0.16em] uppercase text-[var(--color-primary)] mb-5">
                {category}
              </h6>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors leading-relaxed"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[var(--color-outline-variant)]/20 py-6 text-center text-sm text-[var(--color-on-surface-variant)]">
        © {new Date().getFullYear()} West Elinor Technologies. All rights reserved.
      </div>
    </footer>
  );
}
