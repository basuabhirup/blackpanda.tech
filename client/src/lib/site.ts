export const CONTACT_EMAIL = "abhirup@abhirupbasu.com";
export const REPO_URL = "https://github.com/basuabhirup/blackpanda.tech";

const mailto = (subject: string, body: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const AUDIT_CODEBASE_HREF = mailto(
  "AI codebase audit request",
  [
    "Hi Abhirup,",
    "",
    "I'd like an audit of my AI-built codebase.",
    "",
    "What I built it with (Cursor / Claude Code / Bolt / v0 / Lovable / Copilot / other):",
    "Repo link (GitHub / GitLab / zip):",
    "Where it runs today (localhost / Vercel / AWS / GCP / nowhere yet):",
    "Database (Supabase / Postgres / other):",
    "Biggest worry right now:",
    "",
    "Thanks!",
  ].join("\n"),
);

export const INFRA_AUDIT_HREF = mailto(
  "Infrastructure audit request",
  [
    "Hi Abhirup,",
    "",
    "I'd like to schedule an infrastructure audit and map out a CI/CD pipeline.",
    "",
    "Project (one line):",
    "AI tools used:",
    "Preferred cloud (AWS / GCP / Vercel / not sure):",
    "Timezone:",
    "Target launch date:",
    "",
    "Thanks!",
  ].join("\n"),
);

export const NAV_LINKS = [
  { label: "Problem", href: "#problem" },
  { label: "What we build", href: "#build" },
  { label: "Pipelines", href: "#pipelines" },
  { label: "Audits", href: "#audits" },
  { label: "Founder", href: "#founder" },
] as const;
