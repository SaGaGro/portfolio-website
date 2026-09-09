"use client";

import { useEffect, useRef, useState } from "react";

const email = "railp1594@gmail.com";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="inline-flex min-w-32 items-center justify-center rounded-md border border-white/15 bg-[#111620] px-5 py-3.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-white/60 transition duration-200 hover:-translate-y-0.5 hover:border-[#72f1b8]/50 hover:text-[#72f1b8]"
      aria-live="polite"
    >
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}
