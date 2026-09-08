"use client";

import { useState } from "react";
import { stackGroups, type StackGroupId } from "@/data/portfolio";

export function TechStackSection() {
  const [activeGroupId, setActiveGroupId] = useState<StackGroupId>("frontend");
  const activeGroup = stackGroups.find((group) => group.id === activeGroupId) ?? stackGroups[0];
  const [activeSkill, setActiveSkill] = useState<string>(activeGroup.items[0].name);
  const selectedSkill = activeGroup.items.find((item) => item.name === activeSkill) ?? activeGroup.items[0];

  function selectGroup(id: StackGroupId) {
    const group = stackGroups.find((item) => item.id === id) ?? stackGroups[0];
    setActiveGroupId(id);
    setActiveSkill(group.items[0].name);
  }

  return (
    <section className="bg-[#090c12] text-[#e8edf5]">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-8 border-t border-white/10 pt-5 lg:grid-cols-[0.35fr_1fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#72f1b8]">03 // Tech_stack</p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/25">Runtime tools loaded</p>
          </div>
          <div>
            <h2 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-8xl">The tools behind the build.</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">A practical stack for moving from interface ideas to working products. Hover or focus a tool to inspect its role.</p>
          </div>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 bg-[#0d1119] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="skill-console relative flex min-h-[430px] flex-col justify-between overflow-hidden border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <div className="skill-console-grid absolute inset-0" />
            <div className="relative z-10">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">
                <span>skill.inspect()</span>
                <span className="flex items-center gap-2"><span className="status-dot size-1.5 rounded-full bg-[#72f1b8]" />Listening</span>
              </div>
              <div key={selectedSkill.name} className="skill-output mt-14">
                <p className="font-mono text-xs text-[#8b7cff]">{activeGroup.role}</p>
                <p className="mt-3 text-[clamp(3rem,6vw,6rem)] font-black leading-none tracking-[-0.065em] text-white">{selectedSkill.name}</p>
                <p className="mt-6 max-w-lg text-base leading-7 text-white/50">{selectedSkill.description}</p>
              </div>
            </div>

            <div className="relative z-10 mt-12 border-t border-white/10 pt-5 font-mono text-[10px] leading-6 text-white/30">
              <p><span className="text-[#72f1b8]">$</span> stack --category {activeGroup.id}</p>
              <p><span className="text-[#72f1b8]">→</span> selected: <span className="text-white/65">{selectedSkill.name}</span></p>
              <p><span className="text-[#72f1b8]">→</span> status: <span className="text-[#72f1b8]">ready_to_build</span></p>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-5 font-mono">
              {stackGroups.map((group, index) => (
                <button
                  key={group.id}
                  type="button"
                  aria-pressed={activeGroupId === group.id}
                  onClick={() => selectGroup(group.id)}
                  className={`rounded-md border px-4 py-2 text-[10px] uppercase tracking-[0.12em] transition ${activeGroupId === group.id ? "border-[#72f1b8] bg-[#72f1b8] text-[#090c12]" : "border-white/10 text-white/35 hover:border-white/25 hover:text-white"}`}
                >
                  0{index + 1}.{group.label}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2" role="listbox" aria-label={`${activeGroup.label} skills`}>
              {activeGroup.items.map((skill, index) => {
                const isActive = skill.name === selectedSkill.name;
                return (
                  <button
                    key={`${activeGroup.id}-${skill.name}`}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    onFocus={() => setActiveSkill(skill.name)}
                    onClick={() => setActiveSkill(skill.name)}
                    className={`skill-module group min-h-32 rounded-lg border p-5 text-left ${isActive ? "skill-module-active" : "border-white/10 bg-[#111620]"}`}
                  >
                    <span className="flex items-start justify-between">
                      <span className={`grid size-10 place-items-center rounded-md border font-mono text-[10px] font-bold transition ${isActive ? "border-[#090c12]/15 bg-[#090c12] text-[#72f1b8]" : "border-white/10 bg-[#090c12] text-[#8b7cff] group-hover:border-[#72f1b8]/40"}`}>{skill.short}</span>
                      <span className="font-mono text-[9px] text-current opacity-30">0{index + 1}</span>
                    </span>
                    <span className="mt-7 flex items-end justify-between gap-3">
                      <span className="text-lg font-bold tracking-[-0.025em]">{skill.name}</span>
                      <span className="font-mono text-sm transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
