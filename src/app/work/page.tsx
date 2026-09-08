import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { workItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Work",
  description: "Recognition, research presentations, competitions, and professional milestones by Kunatip U-tong.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <SectionHeading compact eyebrow="Work / Archive" title="Recognition earned through building, presenting, and competing." description="An evolving record of awards, research presentations, and technical competitions. Each entry documents its context, approach, journey, and outcome." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {workItems.map((work) => (
          <div id={work.slug} key={work.number} className="scroll-mt-28">
            <ProjectCard project={work} />
          </div>
        ))}
      </div>
      <div className="mt-24 rounded-[2rem] bg-[#171b18] p-8 text-white sm:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-[#d9ff62]">Work detail format</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["Context", "Approach", "Journey", "Outcome"].map((step, index) => (
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
