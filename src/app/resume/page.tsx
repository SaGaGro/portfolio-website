import type { Metadata } from "next";
import { ArrowIcon } from "@/components/arrow-icon";

export const metadata: Metadata = {
  title: "Resume",
  description: "Kunatip U-tong's resume in English and Thai.",
};

export default function ResumePage() {
  return (
    <div className="resume-page mx-auto min-h-[calc(100svh-4.5rem)] max-w-[1240px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <header className="border-t border-black/15 pt-5">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#0b9f76]">Resume / Select language</p>
            <h1 className="mt-5 text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.82] tracking-[-0.07em]">Kunatip U-tong</h1>
          </div>
          <span className="rounded-full border border-black/15 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-black/45">Full-stack developer</span>
        </div>

        <div className="mt-12 grid gap-8 border-y border-black/15 py-7 lg:grid-cols-[0.3fr_1fr]">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-black/35">Resume documents</p>
          <p className="max-w-3xl text-xl leading-8 tracking-[-0.02em] text-black/65">Choose the English or Thai version below. Each document opens as a complete PDF in a new tab.</p>
        </div>
      </header>

      <section className="mt-10 overflow-hidden rounded-lg border border-black/15 bg-[#090c12] text-white" aria-labelledby="resume-files-heading">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-1.5 rounded-full bg-[#ff6b5f]" />
            <span className="size-1.5 rounded-full bg-[#ffc857]" />
            <span className="size-1.5 rounded-full bg-[#72f1b8]" />
          </span>
          <h2 id="resume-files-heading">resume_versions.pdf</h2>
          <span>02 files</span>
        </div>

        <div className="grid sm:grid-cols-2">
          <a
            href="/resume/kunatip-utong-resume-en.pdf"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-6 p-5 transition hover:bg-[#72f1b8]/[0.07] sm:border-r sm:border-white/10 sm:p-6"
          >
            <span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-[#72f1b8]">EN / English version</span>
              <span className="mt-2 block text-lg font-bold tracking-[-0.025em]">Open English resume</span>
              <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.12em] text-white/30">PDF · 1.31 MB</span>
            </span>
            <ArrowIcon className="size-5 shrink-0 text-white/35 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#72f1b8]" />
          </a>

          <a
            href="/resume/kunatip-utong-resume-th.pdf"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-6 border-t border-white/10 p-5 transition hover:bg-[#72f1b8]/[0.07] sm:border-t-0 sm:p-6"
          >
            <span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-[#72f1b8]">TH / Thai version</span>
              <span className="mt-2 block text-lg font-bold tracking-[-0.025em]">เปิดเรซูเม่ภาษาไทย</span>
              <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.12em] text-white/30">PDF · 891 KB</span>
            </span>
            <ArrowIcon className="size-5 shrink-0 text-white/35 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#72f1b8]" />
          </a>
        </div>
      </section>
    </div>
  );
}
