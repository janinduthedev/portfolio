import { Link } from "react-router-dom";
import me from "../assets/me.png";

export default function Hero() {
  return (
    <div className="w-full bg-black min-h-screen flex flex-col items-center relative overflow-hidden selection:bg-blue-500/30">
      {/* ඉතාම හීනි Ambient Light එකක් - මේකෙන් තමයි Premium ගතිය එන්නේ */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />

      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-40 md:pt-52 flex flex-col md:flex-row items-center justify-between gap-20">
        {/* Left Side: Bold Typography */}
        <div className="flex-1 space-y-12 text-center md:text-left">
          <div className="space-y-4">
            <h1 className="text-7xl md:text-[110px] font-futuristic font-bold tracking-tighter leading-[0.85] uppercase text-white">
              JANINDU <br />
              <span className="text-white/10 outline-text">THARINDA.</span>
            </h1>
            <p className="text-slate-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em]">
              Full-Stack Developer / Designer
            </p>
          </div>

          <p className="text-slate-400 font-sans text-sm md:text-base max-w-sm leading-relaxed opacity-80">
            Crafting high-performance digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-4">
            {/* Primary Button: View Work */}
            {/* Primary Button: View Work */}
            <Link
              to="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("work")?.scrollIntoView();
                }
              }}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 bg-white rounded-full hover:bg-blue-600 hover:text-white w-full sm:w-auto"
            >
              <span className="relative z-10">View Work</span>
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Secondary Button: About Me */}
            <Link
              to="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView();
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 border border-white/10 rounded-full hover:bg-white/5 hover:border-white/20 w-full sm:w-auto"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* Right Side: Sleek Image Box */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-72 h-[400px] md:w-[420px] md:h-[520px]">
            {/* Image එක වටේ තියෙන පිරිසිදු Frame එක */}
            <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]">
              <img
                src={me}
                alt="Janindu"
                className="w-full h-full object-cover "
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>

            {/* Minimal line element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-blue-500/30 rounded-br-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
