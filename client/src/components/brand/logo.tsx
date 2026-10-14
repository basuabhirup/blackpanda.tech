import { cn } from "@/lib/utils";

/**
 * Geometric panda mark: two ears + a face split by a "deploy" chevron-eye pair.
 * Pure SVG so it stays crisp and inherits colour from CSS.
 */
export function PandaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
    >
      {/* ears */}
      <circle cx="10.5" cy="11" r="6.5" fill="currentColor" />
      <circle cx="37.5" cy="11" r="6.5" fill="currentColor" />
      {/* face */}
      <rect
        x="4"
        y="9"
        width="40"
        height="35"
        rx="17.5"
        fill="#07090b"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* eye patches */}
      <path
        d="M10.5 24.5c0-4.2 3.2-6.8 6.4-6.8 3 0 4.3 2.6 4.3 5.2 0 3.6-2.6 6.6-6 6.6-3 0-4.7-2-4.7-5Z"
        fill="currentColor"
      />
      <path
        d="M37.5 24.5c0-4.2-3.2-6.8-6.4-6.8-3 0-4.3 2.6-4.3 5.2 0 3.6 2.6 6.6 6 6.6 3 0 4.7-2 4.7-5Z"
        fill="currentColor"
      />
      {/* pupils: signal-green */}
      <circle cx="17" cy="24" r="1.9" fill="#34d399" />
      <circle cx="31" cy="24" r="1.9" fill="#34d399" />
      {/* nose */}
      <path d="M21 32.5h6l-3 3.2-3-3.2Z" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <PandaMark className="text-white" />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight text-white">
          Black Panda
        </span>
        <span className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.22em] text-white/45">
          Technologies
        </span>
      </span>
    </span>
  );
}
