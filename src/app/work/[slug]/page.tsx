import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/arrow-icon";
import { getProjectBySlug, projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main>
      <section className="bg-[#090c12] px-5 pb-20 pt-14 text-white sm:px-8 lg:px-12 lg:pb-28 lg:pt-20">
        <div className="mx-auto max-w-[1344px]">
          <Link href="/work" className="project-back-link group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            All projects
          </Link>

          <div className="mt-12 grid gap-10 border-t border-white/10 pt-6 lg:grid-cols-[0.34fr_1fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#72f1b8]">Case study / {project.number}</p>
              <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.13em] text-white/25">{project.context}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: project.accent }}>{project.eyebrow}</p>
              <h1 className="mt-5 max-w-5xl text-[clamp(4.5rem,11vw,10rem)] font-black leading-[0.78] tracking-[-0.075em]">{project.title}</h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55 sm:text-xl">{project.summary}</p>
            </div>
          </div>

          <div className="case-study-media mt-14 grid gap-4 lg:grid-cols-[1fr_0.34fr]">
            <div className="group relative aspect-[16/8] min-h-72 overflow-hidden rounded-xl border border-white/10 bg-[#111620]">
              <Image src={project.image} alt={project.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 72vw" unoptimized={project.unoptimized} className="object-cover object-top transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090c12]/70 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.13em]">
                <span>{project.association}</span>
                <span className="rounded px-2.5 py-1.5 font-bold text-[#090c12]" style={{ backgroundColor: project.accent }}>{project.status}</span>
              </div>
            </div>

            {project.secondaryImage ? (
              <div className="group relative min-h-[420px] overflow-hidden rounded-xl border border-white/10 bg-white lg:min-h-0">
                <Image src={project.secondaryImage} alt={project.secondaryImageAlt ?? `${project.title} supporting image`} fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-contain object-center transition duration-700 group-hover:scale-[1.025]" />
                <div className="absolute inset-x-0 bottom-0 bg-[#090c12]/88 px-4 py-3 text-center font-mono text-[8px] uppercase tracking-[0.14em] text-white backdrop-blur">{project.secondaryImageLabel ?? "Project media"}</div>
              </div>
            ) : (
              <div className="flex min-h-64 flex-col justify-between rounded-xl border border-white/10 bg-[#111620] p-7">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/25">Project index</p>
                <p className="font-mono text-8xl font-bold tracking-[-0.08em]" style={{ color: project.accent }}>{project.number}</p>
                <p className="text-sm text-white/45">{project.status}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1344px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.34fr_1fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-black/40">01 // Overview</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {project.highlights.map((item) => (
              <div key={item.label} className="case-study-stat border-t border-black/15 pt-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/35">{item.label}</p>
                <p className="mt-6 text-xl font-bold tracking-[-0.025em]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-black/15 pt-6 lg:grid-cols-[0.34fr_1fr]">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-black/40">02 // Thinking</p>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#0b9f76]">The challenge</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em]">What needed to change.</h2>
              <p className="mt-5 text-base leading-8 text-black/55">{project.caseStudy.challenge}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#5b4de3]">The solution</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em]">How the idea became a product.</h2>
              <p className="mt-5 text-base leading-8 text-black/55">{project.caseStudy.solution}</p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-black/15 pt-6 lg:grid-cols-[0.34fr_1fr]">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-black/40">03 // Features</p>
          <div className="grid gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 sm:grid-cols-2">
            {project.caseStudy.features.map((feature, index) => (
              <div key={feature} className="case-study-feature bg-[#f3f1e9] p-7 sm:p-9">
                <span className="font-mono text-[9px] text-black/30">0{index + 1}</span>
                <p className="mt-10 text-2xl font-bold tracking-[-0.035em]">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-black/15 pt-6 lg:grid-cols-[0.34fr_1fr]">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-black/40">04 // Process</p>
          <div>
            {project.caseStudy.process.map((item) => (
              <div key={item.step} className="case-study-process grid gap-4 border-b border-black/10 py-7 sm:grid-cols-[5rem_0.6fr_1fr] sm:items-start">
                <span className="font-mono text-xs text-[#0b9f76]">{item.step}</span>
                <h3 className="text-xl font-bold tracking-[-0.03em]">{item.title}</h3>
                <p className="leading-7 text-black/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-2xl bg-[#090c12] p-8 text-white sm:p-12 lg:p-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#72f1b8]">05 // Outcome</p>
          <p className="mt-8 max-w-5xl text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">{project.caseStudy.outcome}</p>
        </div>

        <Link href={nextProject.href} className="next-project-link group mt-24 flex items-end justify-between gap-8 border-t border-black/15 pt-6">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/35">Next project / {nextProject.number}</p>
            <p className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-6xl">{nextProject.title}</p>
          </div>
          <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[#171b18] text-white transition group-hover:rotate-45 group-hover:bg-[#0b9f76] sm:size-16"><ArrowIcon className="size-5" /></span>
        </Link>
      </section>
    </main>
  );
}
