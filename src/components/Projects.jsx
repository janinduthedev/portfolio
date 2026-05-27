import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Car Rental System",
      category: "Development",
      tags: ["MERN Stack", "Render"],
      image: "/car.png",
      gallery: ["/car.png", "/login.png", "/home.png"],
      desc: "A complete car rental solution with real-time booking and admin controls. Built with MERN stack for high performance and scalability.",
      link: "https://mern-car-rental-system-1.onrender.com",
      github: "https://github.com/janinduthedev/mern-car-rental-system",
    },
    {
      id: 2,
      title: "Modern Portfolio",
      category: "Development",
      tags: ["React", "Tailwind"],
      image: "/portfolio.png",
      gallery: ["/portfolio.png", "/portfolio1.png", "/portfolio2.png"],
      desc: "A minimalist portfolio design focusing on smooth animations and futuristic UI elements.",
      link: "https://janinduthedev.vercel.app/",
      github: "https://github.com/janinduthedev/portfolio",
    },
    {
      id: 3,
      title: "Smart Watch",
      category: "Design",
      tags: ["Photoshop"],
      image: "/Watch.png",
      gallery: [
        "/jtw.png",
        "/watch-side.png",
        "/watch-strap.png",
        "/watch-ui.png",
      ],
      desc: "Detailed concept design of a smartwatch interface, focusing on typography and high-end visual aesthetics.",
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Design Services",
      category: "Design",
      tags: ["Photoshop", "Branding"],
      image: "/jtw.png",
      gallery: ["/jtw.png", "/jtw-mockup.png"],
      desc: "Full branding services including logo design and visual identity for modern digital agencies.",
      link: "#",
      github: "#",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setActiveImage(project.image);
  };

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="work"
      className="w-full bg-black py-24 px-4 sm:px-6 relative text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-futuristic font-bold uppercase tracking-tighter">
            Selected <br /> <span className="text-white/10">Works.</span>
          </h2>

          <div className="flex border-b border-white/10 w-full md:w-auto overflow-x-auto">
            {["All", "Development", "Design"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-4 text-[10px] font-mono font-bold uppercase tracking-[0.3em] transition-all relative whitespace-nowrap ${
                  filter === cat
                    ? "text-blue-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-500"
                    : "text-slate-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="columns-1 md:columns-2 gap-12 space-y-20">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="break-inside-avoid group cursor-pointer transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-xl bg-white/5 border border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex justify-between items-center">
                  <p className="text-blue-500 font-mono text-[9px] uppercase tracking-[0.4em]">
                    {project.category}
                  </p>
                  <span className="text-white/20 font-mono text-[9px]">
                    0{project.id}
                  </span>
                </div>
                <h3 className="text-2xl font-futuristic font-bold uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-neutral-900 border border-white/10 p-6 md:p-10 rounded-3xl max-w-5xl w-full relative overflow-y-auto max-h-[92vh] scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white text-2xl z-20"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Side: Images */}
              <div className="lg:col-span-8 space-y-6">
                <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/5">
                  <img
                    src={activeImage}
                    alt="Main view"
                    className="w-full h-auto"
                  />
                </div>

                {/* Thumbnails */}
                {selectedProject.gallery && (
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                    {selectedProject.gallery.map((img, index) => (
                      <div
                        key={index}
                        onClick={() => setActiveImage(img)}
                        className={`aspect-square overflow-hidden rounded-lg cursor-pointer border-2 transition-all duration-300 ${
                          activeImage === img
                            ? "border-blue-500 scale-95"
                            : "border-transparent opacity-40 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          className="w-full h-full object-cover"
                          alt="thumbnail"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Side: Info */}
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">
                      {selectedProject.category}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-slate-400 leading-relaxed">
                      {selectedProject.desc}
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-white/20 font-mono text-[10px] uppercase tracking-widest mb-4">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-slate-300 font-mono uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-12">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-white text-black text-center py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all"
                  >
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full border border-white/10 text-white text-center py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
                  >
                    GitHub Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
