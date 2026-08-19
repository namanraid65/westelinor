"use client";

import { useEffect } from "react";

export function useCounterAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const count = parseInt(target.getAttribute("data-count") || "0");
            const duration = 2000;
            const startTime = performance.now();

            const updateCounter = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easedProgress =
                progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const currentCount = Math.floor(easedProgress * count);
              target.textContent = currentCount + "+";

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                target.textContent = count + "+";
              }
            };

            requestAnimationFrame(updateCounter);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll("[data-count]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
