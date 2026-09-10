import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import type { SoftwareProject } from "@/data/projects";

export function SoftwareProjectCard({ project }: { project: SoftwareProject }) {
  const previewGroup = project.galleryGroups[0];
  const previewItems = previewGroup?.items ?? [];
  const isPortraitPreview = previewItems.every((item) => item.orientation === "portrait");

  return (
    <article className="group overflow-hidden rounded-xl border border-black/12 bg-white shadow-[0_20px_60px_rgba(9,12,18,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(9,12,18,0.13)]">
      <Link href={`/projects/${project.slug}`} className="grid lg:grid-cols-[0.78fr_1.22fr]">
        <div className="flex flex-col justify-between p-7 sm:p-10 lg:min-h-[520px] lg:border-r lg:border-black/10">
          <div>
            <div className="flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.14em] text-black/35">
              <span className="text-[#0b9f76]">Project / {project.number}</span>
              <span>{project.category}</span>
            </div>
            <p className="mt-12 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#0b9f76]">{project.status}</p>
            <h2 className="mt-4 font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.9] tracking-[-0.06em]">{project.shortTitle}</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-black/55">{project.summary}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => <span key={tag} className="rounded border border-black/10 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.09em] text-black/45 transition group-hover:border-[#0b9f76]/25">{tag}</span>)}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-black/10 pt-5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-black/45">
            <span className="transition group-hover:text-[#0b9f76]">Open project case study</span>
            <span className="grid size-10 place-items-center rounded-md bg-[#090c12] text-white transition duration-200 group-hover:rotate-45 group-hover:bg-[#0b9f76]"><ArrowIcon className="size-4" /></span>
          </div>
        </div>

        <div className="dev-grid flex items-center bg-[#090c12] p-4 sm:p-6">
          <div className="w-full overflow-hidden rounded-lg border border-white/10 bg-[#0d1119]">
            <div className="flex h-10 items-center justify-between border-b border-white/10 px-4 font-mono text-[8px] uppercase tracking-[0.13em] text-white/25">
              <span className="flex gap-1.5" aria-hidden="true"><span className="size-1.5 rounded-full bg-[#ff6b5f]" /><span className="size-1.5 rounded-full bg-[#ffc857]" /><span className="size-1.5 rounded-full bg-[#72f1b8]" /></span>
              <span>{previewGroup?.id ?? "interface"} / preview</span>
              <span>{String(previewItems.length).padStart(2, "0")} screens</span>
            </div>
            <div className={`grid items-end gap-2 p-3 sm:gap-4 sm:p-6 ${isPortraitPreview ? "grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
              {previewItems.slice(0, 3).map((item, index) => (
                <div key={item.src} className={`relative overflow-hidden rounded-[0.7rem] border border-white/15 bg-white shadow-2xl transition duration-500 group-hover:-translate-y-1 sm:rounded-[1rem] ${item.orientation === "portrait" ? "aspect-[402/874]" : "aspect-video"} ${isPortraitPreview && index === 1 ? "mb-5" : ""}`} style={{ transitionDelay: `${index * 45}ms` }}>
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 1024px) 30vw, 20vw" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
