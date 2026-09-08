"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowIcon } from "@/components/arrow-icon";

const profileFiles = [
  {
    id: "profile",
    label: "profile.ts",
    type: "TS",
    title: "Developer profile",
    status: "Available",
    statusTone: "text-[#72f1b8]",
    description: "A full-stack developer interested in turning ideas into clear, useful, and maintainable digital products.",
    code: [
      "export const developer = {",
      "  name: 'Kunatip U-tong',",
      "  role: 'Full-stack Developer',",
      "  focus: 'Useful digital products',",
      "  approach: [",
      "    'curious',",
      "    'practical',",
      "    'always learning',",
      "  ],",
      "};",
    ],
  },
  {
    id: "skills",
    label: "skills.json",
    type: "JSON",
    title: "Current toolkit",
    status: "Growing",
    statusTone: "text-[#8b7cff]",
    description: "The tools currently shaping this portfolio, organized from interface work through delivery.",
    code: [
      "{",
      "  \"frontend\": [",
      "    \"Next.js\", \"React\",",
      "    \"TypeScript\", \"Tailwind CSS\"",
      "  ],",
      "  \"backend\": [\"Node.js\", \"REST APIs\"],",
      "  \"tools\": [\"Git\", \"GitHub\", \"Figma\"],",
      "  \"next\": \"Keep learning by building\"",
      "}",
    ],
  },
  {
    id: "current",
    label: "currently.md",
    type: "MD",
    title: "Building right now",
    status: "In progress",
    statusTone: "text-[#febc2e]",
    description: "The current focus is a modular portfolio that can grow into complete project stories instead of a single static page.",
    code: [
      "# Current focus",
      "",
      "- Building this portfolio in public",
      "- Improving full-stack development skills",
      "- Designing meaningful interactions",
      "- Preparing real project case studies",
      "",
      "> Learn. Build. Review. Repeat.",
    ],
  },
  {
    id: "experience",
    label: "experience.log",
    type: "LOG",
    title: "Experience timeline",
    status: "Awaiting details",
    statusTone: "text-white/45",
    description: "This area is ready for verified internships, activities, hackathons, responsibilities, and outcomes.",
    code: [
      "[SYSTEM] Experience timeline initialized",
      "[READY] Internship entries",
      "[READY] University activities",
      "[READY] Hackathons and competitions",
      "[READY] Responsibilities and outcomes",
      "",
      "[TODO] Add verified experience details",
    ],
  },
  {
    id: "education",
    label: "education.txt",
    type: "TXT",
    title: "Education profile",
    status: "Awaiting details",
    statusTone: "text-white/45",
    description: "University, program, study period, relevant coursework, and academic highlights can be added here next.",
    code: [
      "EDUCATION_PROFILE",
      "-----------------",
      "institution : pending",
      "program     : pending",
      "period      : pending",
      "coursework  : pending",
      "highlights  : pending",
      "",
      "status      : ready_for_input",
    ],
  },
] as const;

export function ProfileExplorer() {
  const [activeId, setActiveId] = useState<(typeof profileFiles)[number]["id"]>("profile");
  const activeFile = profileFiles.find((file) => file.id === activeId) ?? profileFiles[0];

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mb-12 grid gap-5 border-t border-black/15 pt-5 lg:grid-cols-[0.35fr_1fr]">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-black/45">02 // Who_am_i</p>
          <p className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-black/35"><span className="status-dot size-1.5 rounded-full bg-[#20a667]" />Profile loaded</p>
        </div>
        <div>
          <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-8xl">A developer profile, decoded.</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-black/55 sm:text-lg">A quick look at who I am, what I use, and what I’m currently building. Select a file to explore the profile.</p>
        </div>
      </div>

      <div className="project-explorer overflow-hidden rounded-2xl border border-[#293140] bg-[#090c12] text-[#e8edf5] shadow-[0_28px_80px_rgba(9,12,18,0.18)]">
        <div className="flex h-12 items-center justify-between border-b border-white/10 bg-[#0d1119] px-4 font-mono text-[10px] text-white/40 sm:px-5">
          <div className="flex items-center gap-3"><span className="text-[#72f1b8]">●</span><span>kunatip / identity</span></div>
          <div className="flex items-center gap-4"><span className="hidden sm:inline">mode: overview</span><span className="rounded border border-white/10 px-2 py-1">ONLINE</span></div>
        </div>

        <div className="grid lg:grid-cols-[18rem_1fr]">
          <aside className="border-b border-white/10 bg-[#0b0f16] p-3 lg:min-h-[590px] lg:border-b-0 lg:border-r" aria-label="Profile file explorer">
            <p className="px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">Explorer</p>
            <div className="mt-1 flex items-center gap-2 px-3 py-2 font-mono text-[11px] text-white/70"><span className="text-[#72f1b8]">⌄</span><span>KUNATIP_PROFILE</span></div>
            <div className="mt-1 grid grid-cols-2 gap-1 lg:grid-cols-1" role="tablist" aria-label="Profile files">
              {profileFiles.map((file) => {
                const isActive = activeFile.id === file.id;
                return (
                  <button
                    key={file.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveId(file.id)}
                    onFocus={() => setActiveId(file.id)}
                    onClick={() => setActiveId(file.id)}
                    className={`project-tree-item flex min-w-0 items-center gap-2 rounded px-3 py-3 text-left font-mono text-[10px] sm:text-xs ${isActive ? "project-tree-active" : ""}`}
                  >
                    <span className="w-8 shrink-0 text-[8px] text-[#8b7cff]">{file.type}</span>
                    <span className="truncate">{file.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 hidden border-t border-white/10 px-3 pt-5 font-mono text-[9px] leading-5 text-white/25 lg:block">
              <p>PROFILE OUTLINE</p>
              <p className="mt-2 text-white/40">○ Identity</p>
              <p className="text-white/40">○ Technical skills</p>
              <p className="text-white/40">○ Current focus</p>
              <p className="text-white/40">○ Background</p>
            </div>
          </aside>

          <div className="min-w-0" role="tabpanel" aria-live="polite">
            <div className="flex h-11 items-center border-b border-white/10 bg-[#0d1119] px-4 font-mono text-[10px] text-white/45">
              <span className="mr-2 text-[#8b7cff]">{activeFile.type}</span>
              <span key={activeFile.label} className="project-info-swap truncate">profile/{activeFile.label}</span>
            </div>

            <div className="grid lg:grid-cols-[1fr_18rem]">
              <div className="min-h-[330px] overflow-x-auto border-b border-white/10 py-5 font-mono text-[11px] leading-7 sm:text-xs lg:min-h-[420px] lg:border-b-0 lg:border-r">
                {activeFile.code.map((line, index) => (
                  <div key={`${activeFile.id}-${index}`} className="code-row grid min-w-[34rem] grid-cols-[3rem_1fr] px-4 sm:grid-cols-[4rem_1fr] sm:px-5">
                    <span className="select-none pr-4 text-right text-white/15">{index + 1}</span>
                    <code className={line.startsWith("[") ? "text-[#72f1b8]" : line.startsWith("#") || line.startsWith(">") ? "text-[#8b7cff]" : line.includes("pending") || line.includes("TODO") ? "text-[#febc2e]" : line.includes("export") || line.includes("const") ? "text-[#8b7cff]" : "text-[#c7d0dd]"}>{line || " "}</code>
                  </div>
                ))}
              </div>

              <div key={activeFile.id} className="project-info-swap flex flex-col justify-between p-5 sm:p-6">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#72f1b8]">Inspector</p>
                  <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-white">{activeFile.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/45">{activeFile.description}</p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-white/30">
                  <div className="flex justify-between"><span>File</span><span className="text-white/60">{activeFile.label}</span></div>
                  <div className="mt-2 flex justify-between"><span>Status</span><span className={activeFile.statusTone}>{activeFile.status}</span></div>
                  <div className="mt-2 flex justify-between"><span>Updated</span><span className="text-white/60">Now</span></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/10 bg-[#0d1119] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-white/25">Profile overview · Content ready to expand</p>
              <div className="flex gap-2">
                <Link href="/about" className="project-action inline-flex items-center gap-2 rounded border border-white/15 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white/60">Full profile <ArrowIcon className="size-3" /></Link>
                <Link href="/contact" className="project-action inline-flex items-center gap-2 rounded bg-[#72f1b8] px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-[#090c12]">Contact me <ArrowIcon className="size-3" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
