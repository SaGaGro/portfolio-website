import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { navItems } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="bg-[#171b18] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[#d9ff62]">Have something in mind?</p>
            <Link href="/contact" className="group inline-flex items-end gap-4 font-display text-5xl leading-none tracking-[-0.05em] sm:text-7xl">
              Let&apos;s make it real
              <ArrowIcon className="mb-1 size-9 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-12" />
            </Link>
          </div>
          <nav className="grid grid-cols-2 gap-3 self-end text-sm text-white/65 lg:justify-self-end" aria-label="Footer navigation">
            {navItems.map((item) => <Link key={item.href} href={item.href} className="transition hover:text-white">{item.label}</Link>)}
            <a href="https://github.com/SaGaGro" target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
          </nav>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-xs uppercase tracking-[0.16em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kunatip U-tong</p>
          <p>Designed to keep evolving.</p>
        </div>
      </div>
    </footer>
  );
}
