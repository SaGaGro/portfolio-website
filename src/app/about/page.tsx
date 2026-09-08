import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { SectionHeading } from "@/components/section-heading";
import { capabilities } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: "About Kunatip U-tong and the approach behind the work.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <SectionHeading eyebrow="About" title="Curious by default. Precise by practice." description="I’m Kunatip, a web developer focused on turning complex ideas into digital experiences that feel clear, useful, and considered." />
      <div className="mt-20 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] bg-[#d9ff62] p-8">
          <div className="absolute -bottom-24 -right-16 size-80 rounded-full bg-[#171b18]" />
          <p className="relative z-10 text-xs uppercase tracking-[0.2em] text-black/50">The short version</p>
          <p className="relative z-10 mt-12 max-w-md font-display text-5xl leading-[0.95] tracking-[-0.045em]">I like making the complicated feel simple.</p>
        </div>
        <div className="rounded-[2rem] bg-white p-8 sm:p-12">
          <p className="max-w-2xl text-xl leading-9 text-black/65">This portfolio is being built in public as both a home for finished work and a space for experiments. The system is intentionally modular, so every new project can become a deeper story instead of another thumbnail in a grid.</p>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {capabilities.map((item) => <div key={item.number} className="border-t border-black/15 pt-4"><span className="text-xs text-black/35">{item.number}</span><h3 className="mt-6 font-display text-2xl">{item.title}</h3></div>)}
          </div>
          <Link href="/contact" className="group mt-14 inline-flex items-center gap-3 rounded-full bg-[#171b18] px-5 py-3 text-sm font-bold text-white">Start a conversation <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
        </div>
      </div>
    </div>
  );
}
