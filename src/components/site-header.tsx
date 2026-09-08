"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowIcon } from "@/components/arrow-icon";
import { navItems } from "@/data/portfolio";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="dev-navbar sticky top-0 z-50 border-b border-white/10 bg-[#090c12]/95 text-[#e8edf5] backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" onClick={() => setIsOpen(false)} className="nav-brand group flex items-center gap-3" aria-label="Kunatip home">
          <span className="grid size-9 place-items-center rounded-md border border-[#72f1b8]/35 bg-[#111620] font-mono text-[10px] font-bold text-[#72f1b8] transition duration-200 group-hover:border-[#72f1b8] group-hover:bg-[#72f1b8] group-hover:text-[#090c12]">
            KU
          </span>
          <span className="font-mono leading-tight">
            <span className="block text-xs font-bold tracking-tight text-white">kunatip.dev</span>
            <span className="mt-0.5 flex items-center gap-1.5 text-[8px] uppercase tracking-[0.18em] text-white/35">
              <span className="status-dot size-1.5 rounded-full bg-[#72f1b8]" />
              Full-stack developer
            </span>
          </span>
        </Link>

        <nav className="hidden items-center rounded-md border border-white/10 bg-[#111620] p-1 font-mono md:flex" aria-label="Main navigation">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`nav-route rounded px-4 py-2 text-[10px] uppercase tracking-[0.1em] transition duration-200 ${isActive ? "bg-white/10 text-[#72f1b8]" : "text-white/40 hover:bg-white/5 hover:text-white"}`}
              >
                <span className="mr-1.5 text-[8px] opacity-35">0{index + 1}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/resume" className="nav-contact group hidden items-center gap-3 rounded-md bg-[#72f1b8] px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[#090c12] sm:inline-flex">
            View resume
            <ArrowIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-10 min-w-20 place-items-center rounded-md border border-white/15 bg-[#111620] px-3 font-mono text-[9px] uppercase tracking-[0.12em] text-white/65 transition hover:border-[#72f1b8] hover:text-[#72f1b8] md:hidden"
          >
            {isOpen ? "[ Close ]" : "[ Menu ]"}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav id="mobile-navigation" className="mobile-nav border-t border-white/10 bg-[#090c12] px-5 py-4 font-mono md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-[1440px] gap-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-between rounded-md border px-4 py-3 text-xs uppercase tracking-[0.12em] transition ${isActive ? "border-[#72f1b8]/40 bg-[#72f1b8]/10 text-[#72f1b8]" : "border-transparent text-white/50 hover:border-white/10 hover:bg-white/5 hover:text-white"}`}
                >
                  <span><span className="mr-3 text-white/20">0{index + 1}</span>{item.label}</span>
                  <span aria-hidden="true">{isActive ? "●" : "→"}</span>
                </Link>
              );
            })}
            <Link href="/resume" onClick={() => setIsOpen(false)} className="mt-2 flex items-center justify-between rounded-md bg-[#72f1b8] px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#090c12] sm:hidden">
              View resume <ArrowIcon className="size-4" />
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
