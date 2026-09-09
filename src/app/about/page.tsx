import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Kunatip U-tong and explore the thinking, process, and direction behind the work.",
};

const workflow = [
  { step: "01", command: "understand()", title: "Find the real problem", description: "Start with the people, constraints, and outcome—not the first solution that comes to mind." },
  { step: "02", command: "design()", title: "Make the system clear", description: "Turn complexity into a structure that is understandable, useful, and ready to grow." },
  { step: "03", command: "build()", title: "Create the working version", description: "Move from concept to something people can see, test, and respond to." },
  { step: "04", command: "validate()", title: "Learn from the output", description: "Review the result, explain the decisions, and use the evidence to improve the next iteration." },
] as const;

const directions = [
  { index: "01", label: "Useful products", description: "Digital products that solve a visible problem and make the next action feel obvious." },
  { index: "02", label: "Intelligent systems", description: "AI and automation explored as practical parts of a reliable product—not decoration." },
  { index: "03", label: "Clear communication", description: "Research, demos, and pitches that make technical thinking easier to understand." },
] as const;

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <section className="border-t border-black/15 pt-5" aria-labelledby="about-heading">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-black/35">
          <span className="font-bold text-[#0b9f76]">About / developer_profile</span>
          <span className="flex items-center gap-2"><span className="status-dot size-1.5 rounded-full bg-[#20a667]" />Profile loaded</span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.62fr)] lg:items-end lg:gap-16">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">Kunatip U-tong · Full-stack developer</p>
            <h1 id="about-heading" className="mt-5 max-w-4xl font-display text-[clamp(3.3rem,6.8vw,6.4rem)] leading-[0.88] tracking-[-0.068em]">
              Code is only part of the build.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/55 sm:text-xl">
              The rest is understanding the problem, testing the idea, and communicating why the result matters.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-black/45">
              {['Build', 'Research', 'Present', 'Compete'].map((item) => (
                <span key={item} className="rounded border border-black/15 bg-white px-3 py-2 transition hover:-translate-y-0.5 hover:border-[#0b9f76]/50 hover:text-[#0b9f76]">{item}</span>
              ))}
            </div>
          </div>

          <figure className="group overflow-hidden rounded-xl border border-[#293140] bg-[#090c12] shadow-[0_24px_70px_rgba(9,12,18,0.18)]">
            <div className="flex h-11 items-center justify-between border-b border-white/10 px-4 font-mono text-[8px] uppercase tracking-[0.13em] text-white/30">
              <span className="flex gap-1.5" aria-hidden="true"><span className="size-1.5 rounded-full bg-[#ff6b5f]" /><span className="size-1.5 rounded-full bg-[#ffc857]" /><span className="size-1.5 rounded-full bg-[#72f1b8]" /></span>
              <span>profile.jpg</span>
              <span>01 / 01</span>
            </div>
            <div className="dev-grid relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/kunatip-profile.png"
                alt="Portrait of Kunatip U-tong"
                fill
                sizes="(max-width: 1023px) 100vw, 34vw"
                loading="eager"
                fetchPriority="high"
                className="object-cover object-top grayscale-[15%] transition duration-500 group-hover:scale-[1.025] group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#090c12] to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-5 font-mono text-[9px] uppercase tracking-[0.12em] text-white/55">
                <span>Kunatip U-tong</span>
                <span className="text-[#72f1b8]">Builder / learner</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <section className="mt-24 grid gap-8 border-t border-black/15 pt-5 lg:mt-32 lg:grid-cols-[0.32fr_1fr]" aria-labelledby="story-heading">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">01 // Story</p>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.13em] text-[#0b9f76]">Beyond the code</p>
        </div>
        <div className="max-w-4xl">
          <h2 id="story-heading" className="text-[clamp(2.5rem,5vw,4.8rem)] font-black leading-[0.92] tracking-[-0.055em]">I learn fastest when an idea has to work in the real world.</h2>
          <div className="mt-8 grid gap-6 text-base leading-8 text-black/55 sm:grid-cols-2 sm:text-lg">
            <p>My work moves between product development, research, and competition. Each setting asks for the same core skill: turn an unclear challenge into something structured enough to build and explain.</p>
            <p>That has meant exploring learning games, service platforms, logistics, data analysis, cybersecurity, and Agentic AI—then presenting the reasoning as clearly as the result itself.</p>
          </div>
        </div>
      </section>

      <section className="project-explorer mt-24 overflow-hidden rounded-xl border border-[#293140] bg-[#090c12] text-[#e8edf5] shadow-[0_28px_80px_rgba(9,12,18,0.16)] lg:mt-32" aria-labelledby="process-heading">
        <div className="flex h-12 items-center justify-between border-b border-white/10 bg-[#0d1119] px-4 font-mono text-[8px] uppercase tracking-[0.14em] text-white/30 sm:px-5">
          <span className="text-[#72f1b8]">02 // process.pipeline</span>
          <span>4 executable steps</span>
        </div>
        <div className="grid gap-5 border-b border-white/10 px-5 py-9 sm:px-8 lg:grid-cols-[0.45fr_1fr] lg:px-10 lg:py-12">
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">How I work</p>
          <h2 id="process-heading" className="max-w-3xl text-[clamp(2.5rem,5vw,4.7rem)] font-black leading-[0.92] tracking-[-0.055em]">From ambiguity to a useful output.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((item) => (
            <article key={item.step} className="group min-h-64 border-b border-white/10 p-6 transition duration-200 hover:bg-[#72f1b8]/[0.06] sm:border-r lg:border-b-0 lg:p-7">
              <div className="flex items-center justify-between font-mono text-[9px] text-white/25"><span>{item.step}</span><span className="text-[#72f1b8] opacity-50 transition group-hover:opacity-100">{item.command}</span></div>
              <h3 className="mt-12 text-xl font-bold tracking-[-0.03em] text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/42">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24 grid gap-8 border-t border-black/15 pt-5 lg:mt-32 lg:grid-cols-[0.32fr_1fr]" aria-labelledby="direction-heading">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">03 // Direction</p>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.13em] text-[#0b9f76]">What I move toward</p>
        </div>
        <div>
          <h2 id="direction-heading" className="max-w-3xl text-[clamp(2.5rem,5vw,4.8rem)] font-black leading-[0.92] tracking-[-0.055em]">Build with purpose. Explain with clarity.</h2>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {directions.map((item) => (
              <article key={item.index} className="group rounded-lg border border-black/12 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#0b9f76]/40 hover:shadow-[0_18px_45px_rgba(9,12,18,0.08)]">
                <span className="font-mono text-[9px] text-[#0b9f76]">{item.index}</span>
                <h3 className="mt-10 text-xl font-bold tracking-[-0.03em]">{item.label}</h3>
                <p className="mt-4 text-sm leading-6 text-black/48">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 flex flex-col gap-8 rounded-xl border border-black/10 bg-white p-7 sm:p-10 lg:mt-32 lg:flex-row lg:items-center lg:justify-between" aria-label="Explore more">
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#0b9f76]">Profile loaded / choose next route</p>
          <p className="mt-3 text-2xl font-bold tracking-[-0.035em] sm:text-3xl">See the evidence, read the resume, or say hello.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/work" className="group inline-flex items-center gap-3 rounded-md bg-[#090c12] px-5 py-3.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-[#17211d]">Explore work <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          <Link href="/resume" className="inline-flex items-center rounded-md border border-black/15 px-5 py-3.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-black/60 transition hover:-translate-y-0.5 hover:border-[#0b9f76]/50 hover:text-[#0b9f76]">View resume</Link>
          <a href="mailto:railp1594@gmail.com" className="inline-flex items-center rounded-md bg-[#72f1b8] px-5 py-3.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-[#090c12] transition hover:-translate-y-0.5 hover:bg-[#090c12] hover:text-white">Contact me</a>
        </div>
      </section>
    </div>
  );
}
