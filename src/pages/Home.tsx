import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Shield, GraduationCap } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 14,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85, rotate: -3 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
        delay: 0.15,
      },
    },
  };

  return (
    <main id="home-page" className="flex-grow flex flex-col justify-center">
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden py-16 md:py-24" 
        aria-labelledby="hero-title"
      >
        {/* Subtle Background Glow Elements */}
        <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-[#ef4444]/10 blur-[130px]" />
        <div className="absolute right-1/4 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-red-950/15 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center"
          >
            {/* Left text column */}
            <div className="space-y-6 lg:col-span-7 z-10">
              <motion.div 
                variants={itemVariants} 
                className="inline-flex items-center space-x-2 rounded-full border border-[#ef4444]/30 bg-[#ef4444]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ef4444] shadow-md shadow-red-900/10"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef4444] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef4444]"></span>
                </span>
                <span>Available for Internship &bull; HCI Certified</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h4 variants={itemVariants} className="font-mono text-xs md:text-sm tracking-wider uppercase text-[#a3a3a3] flex items-center gap-1.5">
                  <span className="w-4 h-[1px] bg-red-500"></span> Ayubowan! I am
                </motion.h4>
                <motion.h1 
                  id="hero-title"
                  variants={itemVariants} 
                  className="bg-gradient-to-r from-white via-zinc-250 to-[#ef4444] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  Hasitha Dhananjaya
                </motion.h1>
                <motion.p 
                  variants={itemVariants} 
                  className="font-sans text-lg md:text-xl font-medium text-zinc-300"
                >
                  Undergraduate Student <span className="text-[#ef4444] font-semibold">&amp;</span> Full-Stack Developer
                </motion.p>
              </div>

              <motion.p 
                variants={itemVariants} 
                className="max-w-2xl text-sm md:text-base text-[#a3a3a3] leading-relaxed"
              >
                Passionate about engineering reliable, scalable full-stack applications and integrating human-centered design (HCI) concepts. Specializing in React, Node.js, and Java to solve complex digital puzzles.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                variants={itemVariants} 
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Link
                  to="/projects"
                  id="hero-cta-btn"
                  className="group relative inline-flex items-center justify-center rounded-md bg-[#ef4444] text-black font-bold tracking-wider px-8 py-3.5 text-xs uppercase shadow-lg shadow-[#ef4444]/20 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[#ef4444]/30 active:scale-[0.98]"
                >
                  <span>View My Projects</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  id="hero-secondary-btn"
                  className="inline-flex items-center justify-center rounded-md border border-[#a3a3a3] bg-transparent text-white hover:border-[#ef4444] hover:text-[#ef4444] transition-all px-8 py-3.5 text-xs uppercase tracking-wider hover:bg-[#ef4444]/5"
                >
                  Let's Connect
                </Link>
              </motion.div>

              {/* Quick Highlighting Metrics */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8"
              >
                <div className="space-y-1 group cursor-default">
                  <div className="flex items-center space-x-1.5">
                    <GraduationCap className="h-4 w-4 text-[#ef4444] transition-transform group-hover:scale-110" />
                    <span className="font-mono text-[#a3a3a3] text-[10px] tracking-widest uppercase group-hover:text-white transition-colors">Education</span>
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-zinc-300">IT Undergraduate</p>
                </div>
                <div className="space-y-1 group cursor-default">
                  <div className="flex items-center space-x-1.5">
                    <Code className="h-4 w-4 text-[#ef4444] transition-transform group-hover:scale-110" />
                    <span className="font-mono text-[#a3a3a3] text-[10px] tracking-widest uppercase group-hover:text-white transition-colors">Tech Stack</span>
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-zinc-300">React, Node, Java</p>
                </div>
                <div className="space-y-1 group cursor-default">
                  <div className="flex items-center space-x-1.5">
                    <Shield className="h-4 w-4 text-[#ef4444] transition-transform group-hover:scale-110" />
                    <span className="font-mono text-[#a3a3a3] text-[10px] tracking-widest uppercase group-hover:text-white transition-colors">Aspirations</span>
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-zinc-300">Software & Cyber</p>
                </div>
              </motion.div>
            </div>

            {/* Right photo column */}
            <div className="lg:col-span-5 flex justify-center z-10">
              <motion.div
                variants={imageVariants}
                className="relative flex items-center justify-center p-6 animate-cyber-float"
              >
                {/* Decorative frames */}
                <div className="glowing-accent absolute inset-0 -z-10 rounded-full bg-[#ef4444]/10 blur-2xl" />
                <div className="absolute -inset-4 border-2 border-dashed border-[#ef4444] border-opacity-40 rounded-full animate-spin-slow"></div>
                
                {/* Image holder with border */}
                <div className="relative h-60 w-60 md:h-72 md:w-72 overflow-hidden rounded-full border-4 border-[#07070a] bg-zinc-950 shadow-2xl scanline">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQHJrqryBW6FDA/profile-displayphoto-crop_800_800/B56ZpuJ73kJoAI-/0/1762784703062?e=1782950400&v=beta&t=cRGV-Vnr652ytUpyQ2sRWQUw87g6-hlpV7xPMdsHwRQ"
                    alt="Hasitha Dhananjaya Wickramaarachchi Profile Photo"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.06]"
                    referrerPolicy="no-referrer"
                    id="profile-img"
                    onError={(e) => {
                      // fallback representation if the external cdn fails or is blocked
                      const target = e.currentTarget;
                      target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop";
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
