"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/arrow-icon";
import type { Project } from "@/data/portfolio";

const slideDuration = 5000;

export function FeaturedProjectSlider({ projects }: { projects: readonly Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const project = projects[activeIndex];

  useEffect(() => {
    if (projects.length < 2 || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, slideDuration);

    return () => window.clearInterval(timer);
  }, [projects.length, isPaused]);

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % projects.length);
  }

  if (!project) return null;

  return (
    <div
      className="featured-build group mt-14 overflow-hidden rounded-2xl border border-[#293140] bg-[#090c12] text-white shadow-[0_28px_80px_rgba(9,12,18,0.18)]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
    >
      <div className="flex min-h-12 flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#0d1119] px-4 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/35 sm:px-5">
        <div className="flex items-center gap-3">
          <span className="status-dot size-1.5 rounded-full bg-[#72f1b8]" />
          <span>Featured project / {project.number}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="mr-2 hidden sm:inline">{project.status}</span>
          <button type="button" onClick={showPrevious} className="project-slider-control" aria-label="Show previous project">←</button>
          <button type="button" onClick={() => setIsPaused((current) => !current)} className="project-slider-control min-w-14" aria-label={isPaused ? "Play project slideshow" : "Pause project slideshow"}>
            {isPaused ? "Play" : "Pause"}
          </button>
          <button type="button" onClick={showNext} className="project-slider-control" aria-label="Show next project">→</button>
        </div>
      </div>

      <div className="relative h-0.5 bg-white/5">
        <span key={`${project.slug}-${isPaused}`} className={`project-slide-progress absolute inset-y-0 left-0 ${isPaused ? "project-slide-progress-paused" : ""}`} style={{ backgroundColor: project.accent }} />
      </div>

      <div key={project.slug} className="project-slide-enter grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="featured-preview relative min-h-[420px] overflow-hidden border-b border-white/10 p-5 sm:min-h-[560px] sm:p-8 lg:border-b-0 lg:border-r">
          <Image src={project.image} alt="" fill sizes="(max-width: 1024px) 100vw, 60vw" className="scale-125 object-cover opacity-25 blur-2xl" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#090c12]/45" />

          <div className="preview-browser relative flex h-full min-h-[380px] flex-col overflow-hidden rounded-xl border border-white/15 bg-[#0d1119] shadow-2xl sm:min-h-[496px]">
            <div className="flex h-10 shrink-0 items-center justify-between border-b border-white/10 px-3 font-mono text-[7px] uppercase tracking-[0.12em] text-white/35 sm:px-4">
              <div className="flex gap-1"><span className="size-1.5 rounded-full bg-[#ff5f57]" /><span className="size-1.5 rounded-full bg-[#febc2e]" /><span className="size-1.5 rounded-full bg-[#28c840]" /></div>
              <span>{project.slug} / media</span>
              <span>{activeIndex + 1} of {projects.length}</span>
            </div>

            <div className="relative flex flex-1 items-center justify-center overflow-hidden p-5 sm:p-10">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className={`relative w-full max-w-2xl ${project.secondaryImage ? "grid grid-cols-[1.35fr_0.65fr] items-center gap-3" : ""}`}>
                <div className={`event-capture relative overflow-hidden rounded-lg border border-white/20 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.55)] ${project.secondaryImage ? "aspect-[4/3]" : "aspect-video"}`}>
                  <Image src={project.image} alt="" fill sizes="(max-width: 1024px) 80vw, 48vw" aria-hidden="true" className="scale-110 object-cover opacity-25 blur-xl" />
                  <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 1024px) 80vw, 48vw" unoptimized={project.unoptimized} className="z-10 object-contain object-center" />
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#090c12]/70 via-transparent to-transparent" />
                  <span className="absolute right-3 top-3 z-30 rounded px-2 py-1 font-mono text-[7px] font-bold uppercase tracking-[0.12em] text-[#090c12] sm:right-4 sm:top-4" style={{ backgroundColor: project.accent }}>{project.status}</span>
                  <div className="absolute inset-x-4 bottom-4 z-30 font-mono text-[8px] uppercase tracking-[0.12em] text-white sm:inset-x-5 sm:bottom-5">{project.context}</div>
                </div>

                {project.secondaryImage ? (
                  <div className={`supporting-media relative w-full min-w-24 overflow-hidden rounded-md border border-white/25 bg-white shadow-[0_18px_46px_rgba(0,0,0,0.6)] ${project.secondaryImageOrientation === "landscape" ? "aspect-[4/3]" : "aspect-[3/4]"}`}>
                    <Image src={project.secondaryImage} alt={project.secondaryImageAlt ?? `${project.title} supporting image`} fill sizes="(max-width: 640px) 35vw, 240px" className="object-contain object-center" />
                    <span className="absolute inset-x-0 bottom-0 bg-[#090c12]/85 px-2 py-1.5 text-center font-mono text-[7px] uppercase tracking-[0.12em] text-white backdrop-blur">{project.secondaryImageLabel ?? "Project media"}</span>
                  </div>
                ) : null}
              </div>
              <div className="preview-scan absolute inset-x-0 top-0 h-px bg-[#72f1b8]/70 shadow-[0_0_14px_#72f1b8]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-9 lg:p-10">
          <div>
            <div className="flex items-center justify-between gap-5 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
              <span>project / {project.slug}</span>
              <span className="shrink-0" style={{ color: project.accent }}>{project.year}</span>
            </div>
            <p className="mt-10 font-mono text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: project.accent }}>{project.eyebrow}</p>
            <h3 className="mt-3 text-5xl font-black tracking-[-0.06em] sm:text-6xl">{project.title}</h3>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/52">{project.summary}</p>

            <div className="mt-8 space-y-3">
              {project.highlights.map((item, index) => (
                <div key={item.label} className="build-highlight flex items-center justify-between gap-4 border-t border-white/10 py-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-white/25">0{index + 1} / {item.label}</span>
                  <span className="text-right text-sm text-white/65">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-white/30">{project.issuer}</p>
            <p className="mt-2 text-sm text-white/50">{project.association}</p>
            <Link href={project.href} className="dev-primary group mt-6 inline-flex items-center gap-3 rounded-md px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#090c12]" style={{ backgroundColor: project.accent }}>
              Open case study
              <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 bg-[#0d1119] px-5 py-3">
        <div className="flex gap-2" role="tablist" aria-label="Choose featured project">
          {projects.map((item, index) => (
            <button key={item.slug} type="button" role="tab" aria-selected={index === activeIndex} aria-label={`Show ${item.title}`} onClick={() => setActiveIndex(index)} className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-10" : "w-4 bg-white/15 hover:bg-white/35"}`} style={index === activeIndex ? { backgroundColor: item.accent } : undefined} />
          ))}
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[0.13em] text-white/25">Auto advance / 05 sec</span>
      </div>
    </div>
  );
}
