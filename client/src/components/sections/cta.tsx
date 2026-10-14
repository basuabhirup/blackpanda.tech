import { ArrowUpRight, GitBranch, Mail } from "lucide-react";
import { Wordmark } from "@/components/brand/logo";
import { ButtonLink, Reveal } from "@/components/site/primitives";
import { CONTACT_EMAIL, INFRA_AUDIT_HREF, NAV_LINKS, REPO_URL } from "@/lib/site";

export function CTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-noise pt-24 md:pt-32">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_20%,transparent_75%)]" />
      <div className="absolute bottom-[-14rem] left-1/2 -z-10 h-[34rem] w-[56rem] -translate-x-1/2 rounded-full bg-signal/[0.13] blur-[130px]" />

      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="eyebrow">Ready when you are</p>
          <h2 className="mt-6 text-5xl font-semibold leading-[1.02] md:text-7xl">
            <span className="text-gradient">Ready to launch</span>
            <br />
            <span className="font-serif font-normal italic text-gradient-signal">
              your AI project?
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
            Stop wrestling with deployment errors and broken dependencies.
            Let’s map out a professional CI/CD pipeline so you can get back to
            building features.
          </p>

          <div className="mt-10 flex flex-col items-center gap-5">
            <ButtonLink href={INFRA_AUDIT_HREF} className="h-14 px-8 text-base">
              Schedule an Infrastructure Audit
            </ButtonLink>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 font-mono text-sm text-white/50 transition-colors hover:text-signal"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </Reveal>
      </div>

      {/* footer */}
      <footer className="mx-auto mt-24 max-w-7xl border-t border-line px-5 py-10 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Cloud infrastructure and backend automation for people who build
              with AI. Serving US, UK and EU timezones.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-14 gap-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-white/45 transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 rounded-lg border border-line bg-white/[0.02] px-3.5 py-2.5 font-mono text-[11.5px] text-white/55">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-signal text-signal" />
            US · UK · EU timezones
          </div>
        </div>

        {/* Colophon: this site is itself the example */}
        <div className="mt-10 rounded-xl border border-line bg-white/[0.02] p-5 md:flex md:items-center md:justify-between md:gap-8">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-signal">
              Colophon
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              This page is its own case study. It was built through prompts in
              Claude Code, then shipped the way we’d ship yours: every change
              opens a pull request, gets a preview URL, and goes live through a
              CI/CD pipeline when it’s merged to production.
            </p>
          </div>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="group mt-4 inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border border-white/12 bg-white/[0.03] px-4 py-2.5 font-mono text-[12.5px] text-white/80 transition-colors hover:border-signal/40 hover:text-signal md:mt-0"
          >
            <GitBranch className="h-4 w-4" />
            View the source
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-line pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Black Panda Technologies. All rights reserved.</p>
          <p>
            Registered in India · GSTIN:{" "}
            <a
              href="https://services.gst.gov.in/services/searchtp"
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-white/15 underline-offset-2 hover:text-signal"
            >
              19CSAPB8505R1ZB
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
}
