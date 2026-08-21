"use client";

import { companies } from "@/data/companies";

// Duplicated once so the track can loop seamlessly (see .marquee-track
// animation in globals.css, which scrolls exactly one copy's width).
const track = [...companies, ...companies];

export default function CompaniesMarquee() {
  return (
    <section
      aria-label="Companies I've worked with"
      className="py-10 border-y border-[#171717]/8 bg-[#F5F5F5] overflow-hidden"
    >
      <p
        className="text-center text-[#6B7280] text-xs tracking-widest uppercase mb-6"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Companies I&apos;ve Worked With
      </p>

      <div className="marquee-mask relative overflow-hidden">
        <div className="marquee-track flex items-center gap-16 w-max">
          {track.map((company, i) => {
            const content = company.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ) : (
              <span
                className="text-[#171717]/50 hover:text-[#171717] text-lg font-semibold whitespace-nowrap transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {company.name}
              </span>
            );

            return (
              <div key={`${company.name}-${i}`} className="flex items-center shrink-0 h-8">
                {company.url ? (
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={company.name}
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
