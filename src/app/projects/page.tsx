import type { Metadata } from "next";
import { SoftwareProjectCard } from "@/components/software-project-card";
import { projectItems } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Products and software projects designed and developed by Kunatip U-tong.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <header className="border-t border-black/15 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-black/35">
          <span className="font-bold text-[#0b9f76]">Projects / product_builds</span>
          <span>{String(projectItems.length).padStart(2, "0")} documented project</span>
        </div>
        <div className="mt-10 grid gap-7 lg:grid-cols-[0.32fr_1fr] lg:items-end">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-black/35">Designed and developed</p>
          <div>
            <h1 className="max-w-5xl font-display text-[clamp(3.3rem,6.5vw,6.2rem)] leading-[0.88] tracking-[-0.065em]">Products shaped from real problems.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/55">Projects focus on the software itself: requirements, product decisions, user flows, implementation, and the experience delivered.</p>
          </div>
        </div>
      </header>

      <section className="mt-14 space-y-6" aria-label="Software projects">
        {projectItems.map((project) => <SoftwareProjectCard key={project.slug} project={project} />)}
      </section>
    </div>
  );
}
