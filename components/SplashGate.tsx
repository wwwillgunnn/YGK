"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type SplashGateProps = {
  children: React.ReactNode;
  durationMs?: number; // how long the bar takes to fill
  fadeMs?: number; // fade-out time
};

export default function SplashGate({
  children,
  durationMs = 1200,
  fadeMs = 350,
}: SplashGateProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const tick = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;
      const p = Math.min(100, (elapsed / durationMs) * 100);

      setProgress(p);

      if (p >= 100) {
        setDone(true);

        window.dispatchEvent(new Event("splash:done"));

        window.setTimeout(() => {
          document.body.style.overflow = prevOverflow;
        }, fadeMs);

        return;
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = prevOverflow;
    };
  }, [durationMs, fadeMs]);

  return (
    <>
      {children}

      <div
        className={[
          "fixed inset-0 z-[9999] flex items-center justify-center",
          "bg-[linear-gradient(to_bottom,_#6DB86B_0%,_#569255_50%,_#305230_85%,_#422323_100%)]",
          "transition-opacity",
        ].join(" ")}
        style={{
          opacity: done ? 0 : 1,
          pointerEvents: done ? "none" : "auto",
          transitionDuration: `${fadeMs}ms`,
        }}
        aria-hidden={done}
      >
        <div className="w-[340px] max-w-[85vw] text-center">
          <div className="mb-5 flex items-center justify-center">
            <Image
              src="/orchid.png"
              alt="Orchid"
              width={80}
              height={80}
              className="opacity-90"
              priority
            />
          </div>

          <p className="text-white/90 text-sm mb-3">Getting things ready…</p>

          <div className="relative h-4 w-full rounded-full bg-white/20 overflow-hidden">
            <div
              className="h-full rounded-full bg-white/80"
              style={{
                width: `${progress}%`,
                transition: "width 60ms linear",
              }}
            />

            <div
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                left: `calc(${progress}% - 14px)`,
                transition: "left 60ms linear",
              }}
              aria-hidden="true"
            ></div>
          </div>

          <p className="mt-2 text-xs text-white/70">{Math.round(progress)}%</p>
        </div>
      </div>
    </>
  );
}
