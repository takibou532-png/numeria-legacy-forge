/**
 * Brand marks re-drawn from the Numeria logo: the Numidian column,
 * the crescent + star, the open book and the diamond divider.
 * Pure SVG so they inherit brand colors from the design system.
 */

export function ColumnMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 64" className={className} fill="none" aria-hidden="true">
      <rect x="6" y="6" width="36" height="5" rx="1" fill="currentColor" />
      <rect x="9" y="13" width="30" height="3" rx="1" fill="currentColor" opacity="0.7" />
      {[13, 19, 25, 31].map((x) => (
        <rect key={x} x={x} y="18" width="3" height="36" rx="1.5" fill="currentColor" opacity="0.85" />
      ))}
      <rect x="4" y="56" width="40" height="5" rx="1" fill="currentColor" />
    </svg>
  );
}

export function CrescentStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M40 6a26 26 0 1 0 0 52 21 21 0 1 1 0-52Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="m44 22 3.2 6.8 7.3.9-5.4 5 1.4 7.3L44 38.5 37.5 42l1.4-7.3-5.4-5 7.3-.9L44 22Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BookMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 36" className={className} fill="none" aria-hidden="true">
      <path d="M32 9C24 2 12 3 3 6v25c9-3 21-4 29 3V9Z" fill="currentColor" opacity="0.9" />
      <path d="M32 9c8-7 20-6 29-3v25c-9-3-21-4-29 3V9Z" fill="currentColor" />
    </svg>
  );
}

export function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden="true">
      <path d="M6 0 12 6 6 12 0 6Z" fill="currentColor" />
    </svg>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="nm-rule w-16 sm:w-24" />
      <Diamond className="size-2.5 text-gold" />
      <span className="nm-rule w-16 sm:w-24" />
    </div>
  );
}
