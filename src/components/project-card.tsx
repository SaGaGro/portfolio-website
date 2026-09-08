import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import type { WorkItem } from "@/data/portfolio";

export function ProjectCard({ project }: { project: WorkItem }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white">
      <Link href={project.href} className="block">
        <div className="relative min-h-72 overflow-hidden bg-[#090c12] p-6 sm:min-h-80" style={{ borderColor: project.accent }}>
          <Image src={project.image} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="scale-125 object-cover opacity-25 blur-2xl transition duration-700 group-hover:scale-150" aria-hidden="true" />
          <div className="absolute inset-5 overflow-hidden rounded-xl border border-white/15 bg-[#111620] shadow-2xl sm:inset-7">
            <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 1024px) 90vw, 44vw" unoptimized={project.unoptimized} className="object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090c12]/85 via-transparent to-[#090c12]/15" />
          </div>
          {project.secondaryImage ? (
            <div className={`absolute right-8 top-8 z-10 overflow-hidden rounded border border-white/40 bg-white shadow-xl transition duration-500 group-hover:-translate-y-1 group-hover:rotate-2 sm:right-10 sm:top-10 ${project.secondaryImageOrientation === "landscape" ? "aspect-[4/3] w-24 sm:w-28" : "aspect-[3/4] w-16 sm:w-20"}`}>
              <Image src={project.secondaryImage} alt={project.secondaryImageAlt ?? `${project.title} supporting image`} fill sizes="112px" className="object-contain object-center" />
            </div>
          ) : null}
          <div className="absolute inset-x-9 bottom-9 z-10 flex items-end justify-between sm:inset-x-11 sm:bottom-11">
            <span className="rounded border border-white/20 bg-[#090c12]/80 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">{project.status}</span>
            <span className="font-mono text-5xl font-bold leading-none text-white/85">{project.number}</span>
          </div>
        </div>
        <div className="grid gap-6 p-7 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-black/40">Work entry {project.number}</p>
            <h3 className="font-display text-4xl tracking-[-0.035em]">{project.title}</h3>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-black/40">{project.context}</p>
            <p className="mt-3 max-w-xl leading-7 text-black/55">{project.summary}</p>
            <p className="mt-3 text-xs text-black/40">{project.association}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => <span key={tag} className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/55">{tag}</span>)}
            </div>
          </div>
          <span className="grid size-12 place-items-center rounded-full bg-[#171b18] text-white transition-transform group-hover:rotate-45 group-hover:bg-[#0b9f76]"><ArrowIcon className="size-5" /></span>
        </div>
      </Link>
    </article>
  );
}
