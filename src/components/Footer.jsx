import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black pt-32 pb-16 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Big Contact CTA */}
        <div className="flex flex-col items-center text-center space-y-10 mb-32">
          <h2 className="text-5xl md:text-[100px] font-futuristic font-bold text-white uppercase tracking-tighter leading-none">
            Let's build <br />
            <span className="text-white/10 outline-text">Something Great.</span>
          </h2>

          <a
            href="mailto:your-email@example.com"
            className="group relative text-xl md:text-3xl font-mono text-blue-500 hover:text-white transition-colors duration-500"
          >
            janinduthedev@gmail.com
            <div className="absolute bottom-[-8px] left-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full"></div>
          </a>
        </div>

        {/* Bottom Links & Info */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
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
            <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">
              © {currentYear} — Developed by Janindu
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-8 font-mono text-[10px] uppercase tracking-[0.2em]">
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-slate-400 hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="text-slate-400 hover:text-blue-500 transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Location/Time */}
          <div className="text-center md:text-right">
            <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest">
              Based in Sri Lanka <br />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
