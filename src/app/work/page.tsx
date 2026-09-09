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
    </div>
  );
}
