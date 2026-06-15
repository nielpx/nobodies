"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", id: "home" },
  { label: "ABOUT", id: "about" },
  { label: "COLLECTION", id: "collection" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY + 100;

      let current = "home";
      sections.forEach((section) => {
        if (scrollY >= (section as HTMLElement).offsetTop) {
          current = section.id;
        }
      });
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/whitelist") return null;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 w-full bg-black px-6 md:px-12">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between">
        <Image src="/img/IMG_2890.png" alt="Logo" width={180} height={60} priority />

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative pb-1 text-sm font-medium uppercase tracking-wider text-white transition-colors duration-300 hover:text-yellow-500 ${
                activeId === link.id ? "border-b-2 border-yellow-500" : ""
              }`}
            >
              {link.label}
            </button>
          ))}

          <Link
            href="/whitelist"
            className="rounded-lg border-2 border-yellow-500 px-6 py-2 text-sm font-bold uppercase tracking-wider text-yellow-500 transition-all duration-300 hover:bg-yellow-500/10"
          >
            SUBMIT WHITELIST
          </Link>
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className={`absolute left-0 right-0 top-20 bg-black transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col items-center gap-6 px-6 pb-8 pt-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`pb-1 text-sm font-medium uppercase tracking-wider text-white transition-colors duration-300 hover:text-yellow-500 ${
                activeId === link.id ? "border-b-2 border-yellow-500" : ""
              }`}
            >
              {link.label}
            </button>
          ))}

          <Link
            href="/whitelist"
            className="rounded-lg border-2 border-yellow-500 px-6 py-2 text-sm font-bold uppercase tracking-wider text-yellow-500 transition-all duration-300 hover:bg-yellow-500/10"
          >
            SUBMIT WHITELIST
          </Link>
        </div>
      </div>
    </nav>
  );
}
