import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Projects",
  description: "Products and software projects designed and developed by Kunatip U-tong.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <SectionHeading
        eyebrow="Projects / Product builds"
        title="Software built beyond the spotlight."
        description="This space will document the products I design and develop—from the problem and technical decisions to the finished experience. Project stories are being prepared and will be added here next."
      />

      <section className="mt-16 overflow-hidden rounded-[2rem] border border-black/10 bg-[#090c12] text-white">
        <div className="grid min-h-[28rem] lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col justify-between border-b border-white/10 p-7 sm:p-10 lg:border-r lg:border-b-0">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
              <span className="mr-2 text-[#72f1b8]">●</span>
              Project archive initializing
            </div>
            <p className="mt-20 max-w-sm text-base leading-7 text-white/55">
              Work records recognition and milestones. Projects will focus on the actual software, architecture, implementation, and product thinking behind each build.
            </p>
          </div>

          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#72f1b8]">Next collection</p>
              <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                Products, systems, and experiments.
              </h1>
            </div>

            <div className="mt-16 flex flex-wrap gap-3">
              <Link href="/work" className="group inline-flex items-center gap-3 rounded-md bg-[#72f1b8] px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[#090c12]">
                Explore current work
                <ArrowIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/contact" className="rounded-md border border-white/15 px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/70 transition hover:border-white/40 hover:text-white">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
