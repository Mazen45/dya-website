import React from "react";

const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export function BullseyeIcon({ className }) {
  return (
    <svg className={className} {...common}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function UsersIcon({ className }) {
  return (
    <svg className={className} {...common}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
      <circle cx="17" cy="8.5" r="2.3" />
      <path d="M15.8 13.6c2.7.5 4.7 2.6 4.7 5.4" />
    </svg>
  );
}

export function LeafIcon({ className }) {
  return (
    <svg className={className} {...common}>
      <path d="M20 4C10 4 4 10 4 18c0 1.1.9 2 2 2 8 0 14-6 14-16 0-.6-.4-1-1-1z" />
      <path d="M8 18c2-4 6-8 11-10" />
    </svg>
  );
}

export function BookOpenIcon({ className }) {
  return (
    <svg className={className} {...common}>
      <path d="M12 6c-1.8-1.3-4.3-2-7-2v13c2.7 0 5.2.7 7 2 1.8-1.3 4.3-2 7-2V4c-2.7 0-5.2.7-7 2z" />
      <path d="M12 6v13" />
    </svg>
  );
}

export function HeartIcon({ className }) {
  return (
    <svg className={className} {...common}>
      <path d="M12 20s-7-4.35-9.5-8.8C.8 8 2 4.5 5.5 4c2-.3 3.7.7 4.5 2.2C10.8 4.7 12.5 3.7 14.5 4 18 4.5 19.2 8 17.5 11.2 15 15.65 12 20 12 20z" />
    </svg>
  );
}

export function HealthIcon({ className }) {
  return (
    <svg className={className} {...common}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

export function MegaphoneIcon({ className }) {
  return (
    <svg className={className} {...common}>
      <path d="M3 10v4a1 1 0 0 0 1 1h2l4 4V5L6 9H4a1 1 0 0 0-1 1z" />
      <path d="M14 8a4 4 0 0 1 0 8" />
      <path d="M17 5a8 8 0 0 1 0 14" />
    </svg>
  );
}

export function BriefcaseIcon({ className }) {
  return (
    <svg className={className} {...common}>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

export function CandleIcon({ className }) {
  return (
    <svg className={className} {...common}>
      <path d="M9 12h6v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" />
      <path d="M12 12V6" />
      <path d="M12 6c-1.2-1-1.2-2.6 0-4 1.2 1.4 1.2 3 0 4z" />
    </svg>
  );
}

export function SunIcon({ className }) {
  return (
    <svg className={className} {...common}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8L6 18M18 6l1.8-1.8" />
    </svg>
  );
}

export function MoonIcon({ className }) {
  return (
    <svg className={className} {...common}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
    </svg>
  );
}

export function MailIcon({ className }) {
  return (
    <svg className={className} {...common}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function PhoneIcon({ className }) {
  return (
    <svg className={className} {...common}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}
