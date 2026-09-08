"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type PointerEvent } from "react";
import { ArrowIcon } from "@/components/arrow-icon";
import { stackGroups, type StackGroupId } from "@/data/portfolio";

export function HeroStage() {
  const [activeGroupId, setActiveGroupId] = useState<StackGroupId>("frontend");
  const activeGroup = stackGroups.find((group) => group.id === activeGroupId) ?? stackGroups[0];
  const [activeTech, setActiveTech] = useState<string>(activeGroup.items[0].name);
  const selectedTech = activeGroup.items.find((item) => item.name === activeTech) ?? activeGroup.items[0];

  function selectGroup(id: StackGroupId) {
    const nextGroup = stackGroups.find((group) => group.id === id) ?? stackGroups[0];
    setActiveGroupId(id);
    setActiveTech(nextGroup.items[0].name);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--photo-x", `${x * 10}px`);
    event.currentTarget.style.setProperty("--photo-y", `${y * 7}px`);
    event.currentTarget.style.setProperty("--spot-x", `${(x + 0.5) * 100}%`);
    event.currentTarget.style.setProperty("--spot-y", `${(y + 0.5) * 100}%`);
  }

  function resetPointer(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--photo-x", "0px");
    event.currentTarget.style.setProperty("--photo-y", "0px");
    event.currentTarget.style.setProperty("--spot-x", "75%");
    event.currentTarget.style.setProperty("--spot-y", "32%");
  }

  return (
    <section className="px-3 pb-10 pt-4 sm:px-5 sm:pt-6 lg:px-8 lg:pt-1">
      <div
        className="dev-hero mx-auto w-full max-w-[1440px] overflow-hidden rounded-2xl border border-[#293140] bg-[#090c12] text-[#e8edf5] shadow-[0_32px_90px_rgba(9,12,18,0.2)] sm:rounded-3xl"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <div className="dev-spotlight pointer-events-none absolute inset-0" />

        <div className="dev-window-bar relative z-30 flex h-12 items-center justify-between border-b border-white/10 px-4 font-mono text-[10px] text-white/45 sm:px-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="hidden sm:inline">~/kunatip/portfolio/home.tsx</span>
          </div>
          <span className="flex items-center gap-2"><span className="status-dot size-1.5 rounded-full bg-[#72f1b8]" />SYSTEM.ONLINE</span>
        </div>

        <div className="dev-grid relative z-10 grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col justify-center px-5 py-14 sm:px-9 lg:min-h-[720px] lg:px-14 lg:py-16">
            <p className="dev-kicker font-mono text-xs uppercase tracking-[0.18em] text-[#72f1b8]">01 // Introduction</p>
            <h1 className="mt-6 max-w-3xl text-[clamp(3.6rem,7vw,7.5rem)] font-black leading-[0.82] tracking-[-0.07em] text-white">
              <span className="hero-line block"><span className="hero-line-inner hero-line-one">FULL
                STACK</span></span>
              <span className="hero-line block text-white/35"><span className="hero-line-inner hero-line-two">DEVELOPER</span></span>
            </h1>

            <div className="terminal-line mt-7 w-fit max-w-full overflow-hidden whitespace-nowrap font-mono text-sm text-[#aab4c4] sm:text-base">
              <span className="text-[#8b7cff]">const</span> focus = <span className="text-[#72f1b8]">&quot;useful digital products&quot;</span>;
            </div>

            <div className="mt-10 flex w-fit rounded-md border border-white/10 bg-[#111620] p-1 font-mono">
              {stackGroups.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  aria-pressed={activeGroupId === group.id}
                  onClick={() => selectGroup(group.id)}
                  className={`rounded px-3 py-2 text-[10px] uppercase tracking-[0.12em] transition duration-200 sm:px-4 ${activeGroupId === group.id ? "bg-[#72f1b8] text-[#090c12]" : "text-white/40 hover:bg-white/10 hover:text-white"}`}
                >
                  {group.label}
                </button>
              ))}
            </div>

            <div className="mt-4 grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-4">
              {activeGroup.items.map((item) => {
                const isActive = selectedTech.name === item.name;
                return (
                  <button
                    key={`${activeGroup.id}-${item.name}`}
                    type="button"
                    aria-pressed={isActive}
                    onMouseEnter={() => setActiveTech(item.name)}
                    onFocus={() => setActiveTech(item.name)}
                    onClick={() => setActiveTech(item.name)}
                    className={`code-token group ${isActive ? "code-token-active" : ""}`}
                  >
                    <span className="font-mono text-[10px] text-[#8b7cff] group-hover:text-[#090c12]">{item.short}</span>
                    <span className="truncate text-left text-xs font-bold">{item.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 max-w-xl border-l-2 border-[#72f1b8] bg-[#0e131c] px-4 py-3 font-mono" aria-live="polite">
              <p key={selectedTech.name} className="tech-detail-title text-xs text-[#72f1b8]">{">"} {selectedTech.name}</p>
              <p key={selectedTech.description} className="tech-detail-copy mt-2 text-xs leading-5 text-white/45">{selectedTech.description}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/work" className="dev-primary group inline-flex items-center gap-3 rounded-md bg-[#72f1b8] px-5 py-3 text-sm font-bold text-[#090c12]">View projects <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
              <Link href="/about" className="dev-secondary rounded-md border border-white/15 px-5 py-3 font-mono text-xs text-white/70">./about-me</Link>
            </div>
          </div>

          <div className="relative min-h-[540px] overflow-hidden border-t border-white/10 bg-[#0d1119] lg:min-h-[720px] lg:border-l lg:border-t-0">
            <div className="absolute inset-x-0 top-0 z-20 flex h-10 items-center justify-between border-b border-white/10 bg-[#111620]/90 px-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/35 backdrop-blur">
              <span>portrait.preview</span>
              <span>1086 × 1448 / RGB</span>
            </div>

            <div className="dev-photo-frame absolute inset-x-[8%] bottom-0 top-[10%] overflow-hidden border-x border-t border-white/10 bg-[#e9ecef]">
              <div className="dev-photo-motion absolute inset-0">
                <Image src="/images/kunatip-profile.png" alt="Portrait of Kunatip U-tong" fill priority sizes="(max-width: 1024px) 92vw, 42vw" className="object-cover object-top" />
              </div>
              <div className="dev-photo-overlay absolute inset-0" />
              <div className="dev-scan-line absolute inset-x-0 top-0 h-px bg-[#72f1b8] shadow-[0_0_18px_#72f1b8]" />
              <span className="corner corner-tl" />
              <span className="corner corner-tr" />
              <span className="corner corner-bl" />
              <span className="corner corner-br" />
            </div>

            <div className="absolute bottom-5 left-5 z-30 font-mono sm:bottom-8 sm:left-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#72f1b8]">Selected profile</p>
              <p className="mt-1 text-xl font-bold text-white">KUNATIP U-TONG</p>
            </div>

            <div className="absolute right-5 top-16 z-30 rounded-md border border-[#72f1b8]/30 bg-[#090c12]/85 px-3 py-2 font-mono text-[9px] text-[#72f1b8] backdrop-blur sm:right-8">
              &lt;ready_to_build /&gt;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
