export default function AboutServices() {
  const services = [
    {
      title: "Full-Stack Dev",
      desc: "Building scalable applications using MERN & Next.js.",
    },
    {
      title: "Graphic Design",
      desc: "Creating visual identities using Photoshop & Illustrator.",
    },
    {
      title: "UI/UX Design",
      desc: "Crafting minimal and high-performance user interfaces.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full bg-black py-32 px-4 sm:px-6 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-20">
        {/* Left: About Me (BSc Hons Detail) */}
        <div className="md:col-span-5 space-y-10">
          <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em]">
            02 // Biography
          </p>
          <h2 className="text-4xl md:text-5xl font-futuristic font-bold text-white uppercase leading-tight">
            Software Engineer <br />
            <span className="text-white/20">& Creative Thinker.</span>
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Recently completed my BSc (Hons) in Software Engineering, I focus on
            building products that are not only functional but also visually
            compelling. Based in Sri Lanka, working globally.
          </p>
        </div>

        {/* Right: Services */}
        <div className="md:col-span-7">
          <div className="space-y-2">
            <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-10">
              03 // Specializations
            </p>
            {services.map((service, index) => (
              <div
                key={index}
                className="group border-b border-white/10 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-all px-4"
              >
                <div className="flex items-center gap-6">
                  <span className="text-white/10 font-mono text-xl">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-futuristic font-bold text-white uppercase group-hover:text-blue-500 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-500 font-sans text-sm md:max-w-[250px]">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
