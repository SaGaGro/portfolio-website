import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work and evolving case studies by Kunatip U-tong.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <SectionHeading eyebrow="Work / 2026" title="Selected projects and the thinking behind them." description="This is the home for complete case studies. Each story will cover the problem, decisions, build process, and what changed after launch." />
      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <div id={project.slug} key={project.number} className="scroll-mt-28">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <div className="mt-24 rounded-[2rem] bg-[#171b18] p-8 text-white sm:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-[#d9ff62]">Case study format</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["Context", "Decisions", "Execution", "Outcome"].map((step, index) => (
            <div key={step} className="border-t border-white/20 pt-4">
              <span className="text-xs text-white/35">0{index + 1}</span>
              <p className="mt-6 font-display text-3xl">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
