import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { FeaturedProjectSlider } from "@/components/featured-project-slider";
import { workItems } from "@/data/portfolio";

export function SelectedProjectsSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="grid gap-8 border-t border-black/15 pt-5 lg:grid-cols-[0.35fr_1fr]">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-black/45">04 // Selected_work</p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-black/30">Auto-playing recognition reel</p>
        </div>
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-8xl">Recognition, research, and competition.</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-black/55 sm:text-lg">A rotating archive of awards, presentations, and competitive work. Open an entry to explore its context, approach, journey, and outcome.</p>
          </div>
          <Link href="/work" className="project-action-light group inline-flex w-fit items-center gap-3 border-b border-black pb-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em]">
            View all work
            <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>

      <FeaturedProjectSlider projects={workItems} />
    </section>
  );
}
