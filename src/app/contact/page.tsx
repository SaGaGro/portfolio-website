import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { CopyEmailButton } from "@/components/copy-email-button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kunatip U-tong by email or connect through LinkedIn and GitHub.",
};

const contactLinks = [
  { index: "01", label: "LinkedIn", detail: "Professional network", href: "https://www.linkedin.com/in/kunatip-utong-221485399/", external: true },
  { index: "02", label: "GitHub", detail: "Source code & experiments", href: "https://github.com/SaGaGro", external: true },
  { index: "03", label: "Resume", detail: "English & Thai documents", href: "/resume", external: false },
] as const;

const messageGuide = [
  { index: "01", title: "What are you building?", description: "A short description of the idea, product, or problem is enough to begin." },
  { index: "02", title: "Where can I help?", description: "Share the role, challenge, or kind of collaboration you have in mind." },
  { index: "03", title: "What context matters?", description: "Add useful links, constraints, or a timeline if they are already known." },
] as const;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <section className="border-t border-black/15 pt-5" aria-labelledby="contact-heading">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-black/35">
          <span className="font-bold text-[#0b9f76]">Contact / open_channel</span>
          <span className="flex items-center gap-2"><span className="status-dot size-1.5 rounded-full bg-[#20a667]" />Ready for input</span>
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-16">
          <h1 id="contact-heading" className="max-w-4xl font-display text-[clamp(3.3rem,6.8vw,6.5rem)] leading-[0.88] tracking-[-0.068em]">
            Start with a clear hello.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-black/55">Have an idea, an opportunity, or a problem worth exploring? Email is the most direct place to start.</p>
        </div>
      </section>

      <section className="project-explorer mt-14 overflow-hidden rounded-xl border border-[#293140] bg-[#090c12] text-[#e8edf5] shadow-[0_28px_80px_rgba(9,12,18,0.18)]" aria-label="Contact channels">
        <div className="flex h-12 items-center justify-between border-b border-white/10 bg-[#0d1119] px-4 font-mono text-[8px] uppercase tracking-[0.14em] text-white/30 sm:px-5">
          <span className="flex items-center gap-3"><span className="flex gap-1.5" aria-hidden="true"><span className="size-1.5 rounded-full bg-[#ff6b5f]" /><span className="size-1.5 rounded-full bg-[#ffc857]" /><span className="size-1.5 rounded-full bg-[#72f1b8]" /></span><span>contact.request</span></span>
          <span>secure channel / online</span>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="dev-grid flex min-h-[390px] flex-col justify-between border-b border-white/10 p-6 sm:p-9 lg:border-b-0 lg:border-r lg:p-12">
            <div>
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#72f1b8]">Primary channel / email</p>
              <a href="mailto:railp1594@gmail.com" className="group mt-7 inline-flex max-w-full items-center gap-4 text-[clamp(1.55rem,4vw,3.5rem)] font-black leading-none tracking-[-0.055em] text-white transition hover:text-[#72f1b8]">
                <span className="break-all">railp1594@gmail.com</span>
                <ArrowIcon className="size-6 shrink-0 text-[#72f1b8] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-8" />
              </a>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/42">Click the address to open your email app, or copy it and continue wherever you prefer.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="mailto:railp1594@gmail.com" className="group inline-flex items-center gap-4 rounded-md bg-[#72f1b8] px-5 py-3.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-[#090c12] transition duration-200 hover:-translate-y-0.5 hover:bg-white">Send an email <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
              <CopyEmailButton />
            </div>
          </div>

          <div className="bg-[#0b0f16] p-3 sm:p-4">
            <p className="px-3 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">Other routes</p>
            <div className="mt-1">
              {contactLinks.map((item) => {
                const className = "group flex items-center justify-between gap-6 rounded-md border border-transparent px-4 py-5 transition duration-200 hover:translate-x-1 hover:border-[#72f1b8]/20 hover:bg-[#72f1b8]/[0.07]";
                const content = (
                  <>
                    <span className="flex items-start gap-4">
                      <span className="mt-1 font-mono text-[8px] text-white/20 transition group-hover:text-[#72f1b8]">{item.index}</span>
                      <span><span className="block text-base font-bold tracking-[-0.02em] text-white/75 transition group-hover:text-white">{item.label}</span><span className="mt-1 block text-xs text-white/30">{item.detail}</span></span>
                    </span>
                    <ArrowIcon className="size-4 shrink-0 text-white/20 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#72f1b8]" />
                  </>
                );

                return item.external ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className={className}>{content}</a>
                ) : (
                  <Link key={item.label} href={item.href} className={className}>{content}</Link>
                );
              })}
            </div>
            <div className="mx-3 mt-5 border-t border-white/10 px-1 py-5 font-mono text-[9px] leading-6 text-white/25">
              <p><span className="text-[#8b7cff]">const</span> preferredChannel = <span className="text-[#72f1b8]">&quot;email&quot;</span>;</p>
              <p><span className="text-[#8b7cff]">return</span> startConversation();</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-8 border-t border-black/15 pt-5 lg:grid-cols-[0.32fr_1fr]" aria-labelledby="message-heading">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">01 // First message</p>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.13em] text-[#0b9f76]">No formal brief required</p>
        </div>
        <div>
          <h2 id="message-heading" className="max-w-3xl text-[clamp(2.3rem,4.5vw,4.4rem)] font-black leading-[0.94] tracking-[-0.055em]">A useful conversation can start with three things.</h2>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {messageGuide.map((item) => (
              <article key={item.index} className="group rounded-lg border border-black/12 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#0b9f76]/40 hover:shadow-[0_18px_45px_rgba(9,12,18,0.08)]">
                <span className="font-mono text-[9px] text-[#0b9f76]">{item.index}</span>
                <h3 className="mt-9 text-lg font-bold tracking-[-0.025em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/48">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
