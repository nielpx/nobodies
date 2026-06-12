"use client";

import { useState } from "react";
import { Anton } from "next/font/google";
import { ArrowRight, Heart, MessageSquare, UserPlus, Lock } from "lucide-react";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

function XLogo({ size, className }: { size: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const taskIcons = [XLogo, Heart, MessageSquare, UserPlus];

const tasks = [
  { label: "Follow on X", hasInput: false },
  { label: "Like the announcement", hasInput: false },
  { label: "Quote the post", hasInput: true },
  { label: "Comment & Tag 2 friend", hasInput: true },
];

export default function WhitelistForm() {
  const [wallet, setWallet] = useState("");
  const [inputs, setInputs] = useState<string[]>(tasks.map(() => ""));

  return (
    <div className="w-full md:max-w-[360px] px-5 py-3 md:px-5 md:py-3">
      <div className={`${anton.className} leading-none tracking-tight`}>
        <span className="text-6xl text-black">SUBMIT</span>
        <br />
        <span className="text-6xl text-[#FF3DA5]">WHITELIST</span>
      </div>

      <div className="mt-1 mb-2 h-0.5 w-10 bg-black" />

      <p className="text-base leading-tight text-black/80" style={{ fontFamily: "var(--font-roadgeek)" }}>
        Join the founding <span className="text-[#FF3DA5] font-semibold">NOBODIES</span>
        <br />
        Complete a few simple tasks to secure your early access
      </p>

      <div className="mt-2 flex flex-col gap-1.5">
        {tasks.map((task, i) => {
          const Icon = taskIcons[i];
          return (
            <div
              key={i}
              className="group rounded-xl border border-white/20 bg-black p-4 text-base text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF3DA5]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon size={18} className="text-white" />
                  <span style={{ fontFamily: "var(--font-roadgeek)" }}>{task.label}</span>
                </div>
                <ArrowRight size={18} className="text-[#FF3DA5] transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
              {task.hasInput && (
                <input
                  type="text"
                  value={inputs[i]}
                  onChange={(e) => {
                    const next = [...inputs];
                    next[i] = e.target.value;
                    setInputs(next);
                  }}
                  className="mt-1.5 w-full rounded-lg border border-white/20 bg-black px-3 py-1.5 text-base text-white outline-none ring-0 transition-all duration-200 focus:border-[#FF3DA5] focus:ring-1 focus:ring-[#FF3DA5]"
                  style={{ fontFamily: "var(--font-roadgeek)" }}
                />
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-center text-sm font-medium uppercase tracking-wider text-[#b8226e]" style={{ fontFamily: "var(--font-roadgeek)" }}>
        Submit your EVM address
      </p>

      <input
        type="text"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
        className="mt-0.5 w-full rounded-xl border border-white/10 bg-black px-4 py-2 text-base text-white outline-none ring-0 transition-all duration-200 focus:border-[#FF3DA5] focus:ring-1 focus:ring-[#FF3DA5]"
        style={{ fontFamily: "var(--font-roadgeek)" }}
      />

      <button
        className={`${anton.className} mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-[#FF3DA5] text-2xl uppercase tracking-wide text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#e63595]`}
      >
        Submit Application
      </button>

      <p className="mt-1.5 flex items-center justify-center gap-1.5 text-center text-sm text-black/60" style={{ fontFamily: "var(--font-roadgeek)" }}>
        <Lock size={14} className="text-black" />
        Secure Verified Whitelist Only
      </p>
    </div>
  );
}
