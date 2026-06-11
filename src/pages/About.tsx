import { motion } from "motion/react";
import { GraduationCap, Compass, Code2, Database, ShieldAlert, Cpu } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  // Structured tech stacks for a clean grid representation
  const skillGroups = [
    {
      category: "Frontend Development",
      icon: Code2,
      skills: ["React.js", "Vite", "Tailwind CSS", "HTML5 & CSS3", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend & Systems",
      icon: Database,
      skills: ["Node.js", "Express.js", "Java (OOP)", "RESTful APIs", "SQL"],
    },
    {
      category: "Tools & Methodologies",
      icon: Cpu,
      skills: ["Git & GitHub", "Figma (UI/UX)", "Jira (Agile)", "Agile Workflows", "NPM"],
    },
    {
      category: "Security & Specialization",
      icon: ShieldAlert,
      skills: ["HCI Principles", "Application Security", "Cybersecurity Basics", "OWASP Awareness"],
    }
  ];

  return (
    <main id="about-page" className="flex-grow py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page title header */}
        <div className="text-center md:text-left mb-12 border-b border-rose-500/10 pb-6">
          <h1 id="about-title" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            About <span className="text-[#ef4444]">Me</span>
          </h1>
          <p className="mt-2 text-[#a3a3a3]">
            A little glimpse into my academic pathway, tech stack, and career goals.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-10 lg:grid-cols-12"
        >
          {/* Main Story & Aspiration Column */}
          <div className="space-y-8 lg:col-span-7">
            {/* Educational Section Card */}
            <motion.section 
              variants={itemVariants}
              className="rounded-2xl card-surface p-6 md:p-8 backdrop-blur-sm shadow-lg hover:border-[#ef4444]/20 transition-all duration-350"
              aria-labelledby="education-heading"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ef4444]/10 text-[#ef4444]">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h2 id="education-heading" className="text-xl font-bold text-white">Educational Background</h2>
              </div>
              <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                I am an ambitious undergraduate student currently studying **Information Technology and Software Development**. 
                My curriculum has provided me with essential programming concepts alongside a specialized appreciation for human-centered system design and scalable applications. My continuous academic goal is to apply mathematical precision to interface engineering to deliver beautiful, accessible solutions.
              </p>
            </motion.section>

            {/* Career Goals & Aspirations */}
            <motion.section 
              variants={itemVariants}
              className="rounded-2xl card-surface p-6 md:p-8 backdrop-blur-sm shadow-lg hover:border-[#ef4444]/20 transition-all duration-350"
              aria-labelledby="aspirations-heading"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ef4444]/10 text-[#ef4444]">
                  <Compass className="h-6 w-6" />
                </div>
                <h2 id="aspirations-heading" className="text-xl font-bold text-white">Career Aspirations</h2>
              </div>
              <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                My immediate career goal is to secure a software deployment or engineering **internship** where I can apply my **software engineering** and **cybersecurity** skills to solve complex real-world problems. I enjoy designing secure-by-default software, focusing on safe data architectures, and following solid coding workflows within cohesive teamwork environments.
              </p>
            </motion.section>

            {/* My Philosophy Highlight */}
            <motion.div 
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl border border-dashed border-[#ef4444]/30 bg-[#ef4444]/5 p-6 animate-cyber-float"
            >
              <p className="font-mono text-xs text-[#ef4444] uppercase tracking-wider mb-2">My Philosophy</p>
              <blockquote className="text-zinc-300 italic text-sm md:text-base leading-relaxed">
                "Computers are built for humans first. Clean backend code and reliable software design are meaningless if the end user is excluded by a poorly planned interface or lacks accessibility."
              </blockquote>
            </motion.div>
          </div>

          {/* Technical Skills Stack Column */}
          <div className="space-y-6 lg:col-span-5">
            <h2 id="skills-title" className="text-sm font-bold uppercase tracking-widest text-[#a3a3a3] font-mono mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-ping"></span> Technical Stack & Skill Set
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    key={group.category}
                    variants={itemVariants}
                    className="rounded-xl card-surface p-5 transition-all duration-300 hover:border-[#ef4444]/30 hover:bg-neutral-900/60 shadow-md"
                  >
                    <div className="flex items-center space-x-2.5 mb-3">
                      <Icon className="h-5 w-5 text-[#ef4444]" />
                      <h3 className="text-sm font-semibold text-white tracking-wide">{group.category}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-zinc-950 border border-white/5 px-2.5 py-1 text-xs font-medium text-zinc-350 transition-colors duration-200 hover:border-[#ef4444]/40 hover:text-white hover:bg-[#ef4444]/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
