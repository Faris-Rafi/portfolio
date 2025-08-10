import { ReactNode } from "react";

export default function AppBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-[image:radial-gradient(60%_80%_at_50%_20%,#071C1C,#0d1117_80%)] min-h-screen max-h-screen" />
      <svg
        className="absolute inset-0 -z-10 h-full max-h-screen w-full stroke-white/5 [mask-image:radial-gradient(80%_100%_at_top_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero"
            width="80"
            height="80"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#hero)"
        ></rect>
      </svg>
      {children}
    </div>
  );
}
