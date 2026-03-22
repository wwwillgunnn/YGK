"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type SplashGateProps = {
  children: React.ReactNode;
  fadeMs?: number;
};

export default function SplashGate({
  children,
  fadeMs = 350,
}: SplashGateProps) {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 8, 95));
    }, 120);

    const handleLoaded = () => {
      clearInterval(interval);
      setProgress(100);
      setDone(true);

      setTimeout(() => {
        document.body.style.overflow = prevOverflow;
      }, fadeMs);
    };

    window.addEventListener("spline:loaded", handleLoaded);

    return () => {
      clearInterval(interval);
      window.removeEventListener("spline:loaded", handleLoaded);
      document.body.style.overflow = prevOverflow;
    };
  }, [fadeMs]);

  return (
    <>
      {children}

      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center 
                    bg-gradient-to-b from-[#6DB86B] via-[#569255] to-[#305230] 
                    transition-opacity`}
        style={{
          opacity: done ? 0 : 1,
          pointerEvents: done ? "none" : "auto",
          transitionDuration: `${fadeMs}ms`,
        }}
        aria-hidden={done}
      >
        <div className="w-80 max-w-sm text-center">
          <Image
            src="/white-orchid-logo.png"
            alt="Orchid"
            width={80}
            height={80}
            priority
            className="mx-auto mb-5"
          />

          <p className="text-white/90 text-sm mb-3">Loading the experience…</p>

          <div className="h-4 w-full rounded-full bg-white/20 overflow-hidden">
            <div
              className="h-full bg-white/80 transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-2 text-xs text-white/70">{Math.round(progress)}%</p>
        </div>
      </div>
    </>
  );
}
