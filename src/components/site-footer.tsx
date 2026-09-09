import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { navItems } from "@/data/portfolio";

const footerRoutes = [...navItems, { label: "Resume", href: "/resume" }] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#090c12] text-[#e8edf5]">
      <div className="dev-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-48 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-[#72f1b8]/[0.06] blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
          <span className="flex items-center gap-2 text-[#72f1b8]">
            <span className="status-dot size-1.5 rounded-full bg-[#72f1b8]" />
            Portfolio system online
          </span>
          <span>End of page&nbsp; // &nbsp;Start of something new</span>
        </div>

        <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(19rem,0.75fr)] lg:items-end lg:gap-20 lg:py-20">
          <section aria-labelledby="footer-heading">
            <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#72f1b8]">
              Contact / next_build
            </p>
            <h2 id="footer-heading" className="max-w-3xl font-display text-[clamp(2.7rem,6vw,5.5rem)] leading-[0.9] tracking-[-0.065em] text-white">
              Have an idea?<br />Let&apos;s ship it.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
              I&apos;m always interested in thoughtful products, useful technology, and the people building them.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:railp1594@gmail.com"
                className="group inline-flex items-center gap-4 rounded-md bg-[#72f1b8] px-5 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#090c12] transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_32px_rgba(114,241,184,0.16)]"
              >
                Start a conversation
                <ArrowIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                href="/resume"
                className="inline-flex items-center rounded-md border border-white/15 bg-[#111620] px-5 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white/65 transition duration-200 hover:-translate-y-0.5 hover:border-[#72f1b8]/60 hover:text-[#72f1b8]"
              >
                View resume
              </Link>
            </div>
          </section>

          <nav className="overflow-hidden rounded-lg border border-white/10 bg-[#0d1119]/90 shadow-2xl" aria-label="Footer navigation">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[8px] uppercase tracking-[0.14em] text-white/30">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="size-1.5 rounded-full bg-[#ff6b5f]" />
                <span className="size-1.5 rounded-full bg-[#ffc857]" />
                <span className="size-1.5 rounded-full bg-[#72f1b8]" />
              </span>
              <span>site_map.ts</span>
              <span>{footerRoutes.length} routes</span>
            </div>

            <div className="p-2">
              {footerRoutes.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between rounded-md border border-transparent px-3 py-2.5 font-mono transition duration-200 hover:translate-x-1 hover:border-[#72f1b8]/20 hover:bg-[#72f1b8]/[0.07]"
                >
                  <span className="flex items-center gap-3 text-[11px] uppercase tracking-[0.1em] text-white/55 transition group-hover:text-white">
                    <span className="text-[8px] text-white/20 transition group-hover:text-[#72f1b8]">0{index + 1}</span>
                    {item.label}
                  </span>
                  <span className="text-xs text-white/15 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#72f1b8]" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>

            <div className="grid border-t border-white/10 sm:grid-cols-2">
              <a
                href="https://github.com/SaGaGro"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between px-5 py-4 font-mono text-[9px] uppercase tracking-[0.12em] text-white/35 transition hover:bg-white/[0.03] hover:text-[#72f1b8] sm:border-r sm:border-white/10"
              >
                <span>GitHub</span>
                <ArrowIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kunatip-utong-221485399/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-t border-white/10 px-5 py-4 font-mono text-[9px] uppercase tracking-[0.12em] text-white/35 transition hover:bg-white/[0.03] hover:text-[#72f1b8] sm:border-t-0"
              >
                <span>LinkedIn</span>
                <ArrowIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 py-6 font-mono text-[9px] uppercase tracking-[0.14em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="group flex w-fit items-center gap-3 text-white/45 transition hover:text-white" aria-label="Kunatip home">
            <span className="grid size-7 place-items-center rounded border border-[#72f1b8]/30 bg-[#111620] text-[8px] font-bold text-[#72f1b8] transition group-hover:border-[#72f1b8] group-hover:bg-[#72f1b8] group-hover:text-[#090c12]">KU</span>
            <span>&copy; {new Date().getFullYear()} Kunatip U-tong</span>
          </Link>
          <p>Built with Next.js&nbsp; / &nbsp;TypeScript&nbsp; / &nbsp;Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
