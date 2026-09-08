"use client";

export function ResumeActions() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="resume-no-print rounded-md bg-[#72f1b8] px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#090c12] transition hover:-translate-y-0.5 hover:bg-white"
    >
      Print / Save PDF
    </button>
  );
}
