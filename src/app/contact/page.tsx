import type { Metadata } from "next";
import { ArrowIcon } from "@/components/arrow-icon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Kunatip U-tong.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">Contact / Open channel</p>
      <h1 className="mt-8 max-w-6xl font-display text-[clamp(4rem,10vw,10rem)] leading-[0.82] tracking-[-0.065em]">A GOOD PROJECT STARTS WITH A CLEAR HELLO.</h1>
      <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.55fr]">
        <div className="rounded-[2rem] bg-[#d9ff62] p-8 sm:p-12">
          <p className="max-w-xl text-xl leading-8 text-black/65">Have an idea, a collaboration, or a problem worth untangling? Connect with me through LinkedIn or explore my work on GitHub.</p>
          <div className="mt-12 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/kunatip-utong-221485399/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-[#171b18] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5">Open LinkedIn <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
            <a href="https://github.com/SaGaGro" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full border border-black/20 px-6 py-4 text-sm font-bold text-[#171b18] transition hover:-translate-y-0.5 hover:border-black">Open GitHub <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          </div>
        </div>
        <div className="flex min-h-72 flex-col justify-between rounded-[2rem] bg-[#171b18] p-8 text-white sm:p-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d9ff62]">Response mode</p>
          <div>
            <p className="font-display text-5xl tracking-[-0.04em]">Open to meaningful work.</p>
            <p className="mt-4 text-sm leading-6 text-white/45">More contact options can be added here without changing the rest of the site.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
