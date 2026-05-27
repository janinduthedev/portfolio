import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-6">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl h-16 flex items-center justify-between px-6 transition-all duration-500 hover:border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="text-2xl font-futuristic font-extrabold tracking-tight group text-white"
          >
            <span className="text-blue-500 text-4xl">J</span>
            ANINDU
            <span className="text-blue-500 inline-block transition-transform duration-300 group-hover:translate-x-1 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
              .
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-mono">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => {
                  if (link.name === "Home") {
                    window.scrollTo(0, 0);
                  } else {
                    const sectionId = link.name.toLowerCase();
                    document.getElementById(sectionId)?.scrollIntoView();
                  }
                }}
                className="text-xs uppercase tracking-widest text-blue-500 hover:text-white cursor-pointer"
              >
                {link.name}
              </button>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/20 px-5 py-2 rounded-xl transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white bg-white/5 p-2 rounded-lg border border-white/10"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mx-4 mt-2 md:hidden bg-black/80 backdrop-blur-2xl border border-white/5 p-6 rounded-2xl flex flex-col gap-6 font-mono shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => {
                // 1. Home එක නම් උඩටම යනවා
                if (link.name === "Home") {
                  window.scrollTo(0, 0);
                }
                // 2. Work හෝ About වගේ සෙක්ෂන් එකක් නම්
                else {
                  if (window.location.pathname === "/") {
                    const sectionId = link.name.toLowerCase();
                    const element = document.getElementById(sectionId);

                    if (element) {
                      e.preventDefault();
                      element.scrollIntoView();
                    }
                  }
                }
                // 3. ලින්ක් එක එබුවට පස්සේ Mobile Menu එක වහන්න
                setIsOpen(false);
              }}
              className="text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="text-[10px] text-center uppercase tracking-[0.2em] bg-blue-600/10 text-blue-400 border border-blue-500/20 py-3 rounded-xl transition-all active:bg-blue-600 active:text-white"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
