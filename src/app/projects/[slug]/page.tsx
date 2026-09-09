import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/arrow-icon";
import { getProjectBySlug, projectItems } from "@/data/projects";

type SoftwareProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projectItems.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: SoftwareProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function SoftwareProjectPage({ params }: SoftwareProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const previewItems = project.galleryGroups[0]?.items ?? [];
  const currentIndex = projectItems.findIndex((item) => item.slug === project.slug);
  const nextProject = projectItems.length > 1 ? projectItems[(currentIndex + 1) % projectItems.length] : null;

  return (
    <main>
      <section className="bg-[#090c12] px-5 pb-14 pt-8 text-white sm:px-8 lg:px-12 lg:pb-20 lg:pt-10">
        <div className="mx-auto max-w-[1344px]">
          <Link href="/projects" className="group inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white/40 transition hover:text-[#72f1b8]">
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            All projects
          </Link>

          <div className="mt-7 grid gap-8 border-t border-white/10 pt-5 lg:grid-cols-[0.28fr_1fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#72f1b8]">Project detail / {project.number}</p>
              <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.13em] text-white/25">{project.category}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#72f1b8]">{project.status}</p>
              <h1 className="mt-4 max-w-5xl text-[clamp(2.8rem,5.7vw,6rem)] font-black leading-[0.88] tracking-[-0.06em]">{project.title}</h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">{project.summary}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="rounded border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.1em] text-white/45">{tag}</span>)}
              </div>
            </div>
          </div>

          <div className="dev-grid mt-10 overflow-hidden rounded-xl border border-white/10 bg-[#0d1119]">
            <div className="flex h-11 items-center justify-between border-b border-white/10 px-4 font-mono text-[8px] uppercase tracking-[0.13em] text-white/25">
              <span className="flex gap-1.5" aria-hidden="true"><span className="size-1.5 rounded-full bg-[#ff6b5f]" /><span className="size-1.5 rounded-full bg-[#ffc857]" /><span className="size-1.5 rounded-full bg-[#72f1b8]" /></span>
              <span>slideme / customer_app</span>
              <span>{String(previewItems.length).padStart(2, "0")} screens</span>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-3 items-end gap-2 p-4 sm:gap-5 sm:p-8 lg:gap-8 lg:px-12">
              {previewItems.slice(0, 3).map((item, index) => (
                <div key={item.src} className={`relative aspect-[402/874] overflow-hidden rounded-[0.65rem] border border-white/15 bg-white shadow-[0_22px_55px_rgba(0,0,0,0.38)] transition duration-500 hover:-translate-y-2 sm:rounded-[1rem] ${index === 1 ? "mb-7" : ""}`}>
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 1024px) 30vw, 22vw" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1344px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.3fr_1fr]">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.17em] text-black/40">01 // Snapshot</p>
          <div className="grid gap-8 sm:grid-cols-3">
            {project.highlights.map((item) => (
              <div key={item.label} className="border-t border-black/15 pt-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/35">{item.label}</p>
                <p className="mt-6 text-xl font-bold tracking-[-0.025em]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-black/15 pt-6 lg:grid-cols-[0.3fr_1fr]">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.17em] text-black/40">02 // From brief to build</p>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#0b9f76]">The starting point</p>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.045em] sm:text-4xl">A real brief, not a fictional prompt.</h2>
              <p className="mt-5 text-base leading-8 text-black/55">{project.brief}</p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#5b4de3]">The responsibility</p>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.045em] sm:text-4xl">Interpret before implementing.</h2>
              <p className="mt-5 text-base leading-8 text-black/55">The work was not only to build screens. It required turning the brief into user needs, functional requirements, a usable service flow, and core application behavior.</p>
              <p className="mt-5 font-mono text-[9px] font-bold uppercase tracking-[0.13em] text-[#0b9f76]">{project.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-black/15 pt-6 lg:grid-cols-[0.3fr_1fr]">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.17em] text-black/40">03 // Key activities</p>
          <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
            {project.keyActivities.map((activity, index) => (
              <div key={activity} className="group grid gap-3 border-b border-black/10 px-6 py-5 transition hover:bg-[#72f1b8]/10 last:border-b-0 sm:grid-cols-[4rem_1fr] sm:items-center sm:px-8">
                <span className="font-mono text-[9px] text-[#0b9f76]">{String(index + 1).padStart(2, "0")}</span>
                <p className="font-medium leading-7 text-black/65">{activity}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-black/15 pt-6 lg:grid-cols-[0.3fr_1fr]">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.17em] text-black/40">04 // Core features</p>
          <div className="grid gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 sm:grid-cols-2">
            {project.features.map((feature, index) => (
              <article key={feature.title} className="group min-h-56 bg-[#f3f1e9] p-7 transition hover:bg-white sm:p-9">
                <span className="font-mono text-[9px] text-[#0b9f76]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-9 text-2xl font-bold tracking-[-0.035em]">{feature.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-black/50">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>

        {project.galleryGroups.map((group, groupIndex) => (
          <section key={group.id} className="mt-24 border-t border-black/15 pt-6" aria-labelledby={`gallery-${group.id}`}>
            <div className="grid gap-8 lg:grid-cols-[0.3fr_1fr]">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.17em] text-black/40">{`${String(groupIndex + 5).padStart(2, "0")} // Interface gallery`}</p>
              <div>
                <div className="flex flex-wrap items-end justify-between gap-5">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#0b9f76]">Gallery group / {group.id}</p>
                    <h2 id={`gallery-${group.id}`} className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">{group.label}</h2>
                  </div>
                  <span className="rounded border border-black/10 bg-white px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-black/40">{String(group.items.length).padStart(2, "0")} screens</span>
                </div>
                <p className="mt-5 max-w-3xl text-base leading-7 text-black/52">{group.description}</p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {group.items.map((item, index) => (
                <article key={item.src} className="group overflow-hidden rounded-xl border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(9,12,18,0.1)]">
                  <div className="dev-grid relative h-[520px] overflow-hidden border-b border-white/10 bg-[#090c12] p-4 sm:h-[600px] lg:h-[560px]">
                    <Image src={item.src} alt={item.alt} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-contain object-center p-4 transition duration-500 group-hover:scale-[1.015]" />
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-[9px] text-[#0b9f76]">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-4 text-xl font-bold tracking-[-0.03em]">{item.label}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/48">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-24 rounded-xl bg-[#090c12] p-7 text-white sm:p-10 lg:p-12" aria-labelledby="technology-heading">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.17em] text-[#72f1b8]">Tech stack</p>
            <div>
              <h2 id="technology-heading" className="text-3xl font-black tracking-[-0.045em] sm:text-4xl">Built across mobile and backend.</h2>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="rounded-md border border-white/10 bg-[#111620] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.1em] text-white/55 transition hover:border-[#72f1b8]/45 hover:text-[#72f1b8]">{tag}</span>)}
              </div>
            </div>
          </div>
        </section>

        <div className="mt-16 flex flex-col gap-5 border-t border-black/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          {project.relatedWorkHref ? (
            <Link href={project.relatedWorkHref} className="group inline-flex items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-black/45 transition hover:text-[#0b9f76]">View related research & recognition <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
          ) : <span />}
          <a href="mailto:railp1594@gmail.com" className="group inline-flex w-fit items-center gap-3 rounded-md bg-[#72f1b8] px-5 py-3.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-[#090c12] transition hover:-translate-y-0.5 hover:bg-[#090c12] hover:text-white">Discuss this project <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
        </div>

        {nextProject ? (
          <Link href={`/projects/${nextProject.slug}`} className="group mt-20 flex items-end justify-between gap-8 border-t border-black/15 pt-6">
            <div><p className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/35">Next project / {nextProject.number}</p><p className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-6xl">{nextProject.shortTitle}</p></div>
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#171b18] text-white transition group-hover:rotate-45 group-hover:bg-[#0b9f76]"><ArrowIcon className="size-5" /></span>
          </Link>
        ) : null}
      </section>
    </main>
  );
}
