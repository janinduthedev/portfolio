import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { DiPhotoshop, DiIllustrator } from "react-icons/di"; // Adobe icons මේකෙන් ගත්තා

const skills = [
  // Development Skills
  { icon: <SiMongodb />, color: "#47A248", name: "MongoDB", category: "Dev" },
  { icon: <SiExpress />, color: "#ffffff", name: "Express", category: "Dev" },
  { icon: <SiReact />, color: "#61DAFB", name: "React", category: "Dev" },
  { icon: <SiNodedotjs />, color: "#339933", name: "Node.js", category: "Dev" },
  { icon: <SiNextdotjs />, color: "#ffffff", name: "Next.js", category: "Dev" },
  {
    icon: <SiTailwindcss />,
    color: "#06B6D4",
    name: "Tailwind",
    category: "Dev",
  },
  {
    icon: <SiTypescript />,
    color: "#3178C6",
    name: "TypeScript",
    category: "Dev",
  },
  { icon: <SiDocker />, color: "#2496ED", name: "Docker", category: "Dev" },
  // Design Skills
  {
    icon: <DiPhotoshop />,
    color: "#31A8FF",
    name: "Photoshop",
    category: "Design",
  },
  {
    icon: <DiIllustrator />,
    color: "#FF9A00",
    name: "Illustrator",
    category: "Design",
  },
  { icon: <SiFigma />, color: "#F24E1E", name: "Figma", category: "Design" },
  { icon: <SiCanva />, color: "#00C4CC", name: "Canva", category: "Design" },
];

export default function InteractiveSkills() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-24 bg-black px-4 overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-futuristic font-bold text-white uppercase tracking-tighter">
            Tech & <span className="text-white/10">Design.</span>
          </h2>
          <p className="text-blue-500 font-mono text-[10px] mt-4 uppercase tracking-[0.5em]">
            Tools & Ecosystems
          </p>
        </div>

        {/* Interactive Grid */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center group overflow-hidden"
            >
              {/* Background Glow on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500"
                style={{ backgroundColor: skill.color }}
              />

              {/* Icon */}
              <div
                className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              {/* Skill Info */}
              <div className="text-center z-10">
                <p className="text-white font-bold text-[11px] uppercase tracking-wider mb-1 group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </p>
                <p className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">
                  {skill.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
