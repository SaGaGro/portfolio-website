import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { ResumeActions } from "@/components/resume-actions";
import { stackGroups, workItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume",
  description: "Web resume for Kunatip U-tong, including skills, recognition, research, and technical competition experience.",
};

export default function ResumePage() {
  return (
    <div className="resume-page mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <header className="border-t border-black/15 pt-5">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#0b9f76]">Resume / Living document</p>
            <h1 className="mt-5 text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.82] tracking-[-0.07em]">Kunatip<br />U-tong</h1>
          </div>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <span className="rounded-full border border-black/15 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-black/45">Full-stack developer</span>
            <ResumeActions />
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-y border-black/15 py-7 lg:grid-cols-[0.3fr_1fr]">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-black/35">Professional profile</p>
          <p className="max-w-3xl text-xl leading-8 tracking-[-0.02em] text-black/65">A developer focused on turning complex ideas into clear digital experiences, with hands-on work across web development, mobile systems, research presentation, data analysis, and cybersecurity competitions.</p>
        </div>
      </header>

      <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_0.38fr]">
        <section>
          <div className="flex items-end justify-between gap-6 border-b border-black/15 pb-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">01 // Selected recognition</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">Work & milestones</h2>
            </div>
            <span className="font-mono text-[9px] text-black/30">{String(workItems.length).padStart(2, "0")} entries</span>
          </div>

          <div>
            {workItems.map((item) => (
              <Link key={item.slug} href={item.href} className="resume-entry group grid gap-3 border-b border-black/10 py-6 sm:grid-cols-[5rem_1fr_auto] sm:items-start">
                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#0b9f76]">{item.year}</span>
                <span>
                  <span className="block text-xl font-bold tracking-[-0.03em]">{item.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-black/45">{item.eyebrow} · {item.issuer}</span>
                </span>
                <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-black/35 transition group-hover:text-[#0b9f76]">Details <ArrowIcon className="size-3" /></span>
              </Link>
            ))}
          </div>
        </section>

        <aside className="space-y-12">
          <section>
            <p className="border-b border-black/15 pb-4 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">02 // Core skills</p>
            <div className="mt-6 space-y-7">
              {stackGroups.map((group) => (
                <div key={group.id}>
                  <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.13em] text-black/60">{group.label}</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((skill) => <span key={skill.name} className="rounded border border-black/10 bg-white px-2.5 py-1.5 text-xs text-black/55">{skill.name}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="border-b border-black/15 pb-4 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">03 // Education</p>
            <p className="mt-6 text-lg font-bold">Sripatum University</p>
            <p className="mt-2 text-sm leading-6 text-black/45">Degree and study details will be added with the complete resume information.</p>
          </section>

          <section>
            <p className="border-b border-black/15 pb-4 font-mono text-[9px] uppercase tracking-[0.15em] text-black/35">04 // Contact</p>
            <a href="https://github.com/SaGaGro" target="_blank" rel="noreferrer" className="group mt-6 inline-flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-black/65 hover:text-[#0b9f76]">github.com/SaGaGro <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          </section>
        </aside>
      </div>
    </div>
  );
}
