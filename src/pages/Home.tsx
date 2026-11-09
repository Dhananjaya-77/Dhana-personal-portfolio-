import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Shield, GraduationCap, ChevronDown } from "lucide-react";
import profilePhoto from "../assets/images/profile_photo.jpg";

const LINE_1_TEXT = "Ayubowan! I am";
const LINE_2_TEXT = "Hasitha Dhananjaya";
const LINE_3_PART1 = "IT Undergraduate";
const LINE_3_PART2 = "IT Support Engineer";
const LINE_3_TOTAL_STEPS = LINE_3_PART1.length + 1 + LINE_3_PART2.length;

export default function Home() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3Count, setLine3Count] = useState(0);
  const [activeLine, setActiveLine] = useState<1 | 2 | 3>(1);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // TYPING FORWARD
      if (activeLine === 1) {
        if (line1.length < LINE_1_TEXT.length) {
          timer = setTimeout(() => {
            setLine1(LINE_1_TEXT.slice(0, line1.length + 1));
          }, 45);
        } else {
          timer = setTimeout(() => {
            setActiveLine(2);
          }, 260);
        }
      } else if (activeLine === 2) {
        if (line2.length < LINE_2_TEXT.length) {
          timer = setTimeout(() => {
            setLine2(LINE_2_TEXT.slice(0, line2.length + 1));
          }, 55);
        } else {
          timer = setTimeout(() => {
            setActiveLine(3);
          }, 280);
        }
      } else if (activeLine === 3) {
        if (line3Count < LINE_3_TOTAL_STEPS) {
          timer = setTimeout(() => {
            setLine3Count((prev) => prev + 1);
          }, 32);
        } else {
          // Pause when all lines are typed out so the user can comfortably read
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 3200);
        }
      }
    } else {
      // DELETING BACKWARD (LOOP BACKSPACE)
      if (activeLine === 3) {
        if (line3Count > 0) {
          timer = setTimeout(() => {
            setLine3Count((prev) => prev - 1);
          }, 18);
        } else {
          timer = setTimeout(() => {
            setActiveLine(2);
          }, 120);
        }
      } else if (activeLine === 2) {
        if (line2.length > 0) {
          timer = setTimeout(() => {
            setLine2((prev) => prev.slice(0, -1));
          }, 22);
        } else {
          timer = setTimeout(() => {
            setActiveLine(1);
          }, 120);
        }
      } else if (activeLine === 1) {
        if (line1.length > 0) {
          timer = setTimeout(() => {
            setLine1((prev) => prev.slice(0, -1));
          }, 25);
        } else {
          // Brief pause on empty before restarting the loop
          timer = setTimeout(() => {
            setIsDeleting(false);
            setActiveLine(1);
          }, 500);
        }
      }
    }

    return () => clearTimeout(timer);
  }, [activeLine, isDeleting, line1, line2, line3Count]);

  const renderLine3 = () => {
    if (line3Count === 0) return null;

    const p1Len = LINE_3_PART1.length;
    const p1 = LINE_3_PART1.slice(0, Math.min(line3Count, p1Len));
    const showAmp = line3Count > p1Len;
    const p2Count = Math.max(0, line3Count - (p1Len + 1));
    const p2 = LINE_3_PART2.slice(0, p2Count);

    return (
      <span className="inline-flex items-center flex-wrap">
        <span className="text-zinc-300">{p1}</span>
        {showAmp && (
          <span className="text-[#ef4444] font-semibold mx-1.5">&amp;</span>
        )}
        {p2Count > 0 && <span className="text-zinc-300">{p2}</span>}
      </span>
    );
  };
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

              <div className="space-y-4">
                <motion.h4 
                  variants={itemVariants} 
                  aria-label={LINE_1_TEXT}
                  className="font-mono text-xs md:text-sm tracking-wider uppercase text-[#a3a3a3] flex items-center gap-1.5 min-h-[1.5em]"
                >
                  <span className="w-4 h-[1px] bg-red-500 shrink-0"></span>
                  <span>{line1}</span>
                  {activeLine === 1 && (
                    <span aria-hidden="true" className="inline-block w-[2px] h-[1.1em] bg-red-500 animate-blink ml-0.5" />
                  )}
                </motion.h4>
                <motion.h1 
                  id="hero-title"
                  variants={itemVariants} 
                  aria-label={LINE_2_TEXT}
                  className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl min-h-[1.15em] flex items-center flex-wrap"
                >
                  <span className="bg-gradient-to-r from-white via-zinc-200 to-[#ef4444] bg-clip-text text-transparent">
                    {line2}
                  </span>
                  {activeLine === 2 && (
                    <span aria-hidden="true" className="inline-block w-[3px] md:w-[4px] h-[0.85em] ml-1.5 bg-[#ef4444] animate-blink align-middle" />
                  )}
                </motion.h1>
                <motion.p 
                  variants={itemVariants} 
                  aria-label="IT Undergraduate & IT Support Engineer"
                  className="font-sans text-lg md:text-xl font-medium min-h-[1.6em] flex items-center flex-wrap"
                >
                  {renderLine3()}
                  {activeLine === 3 && (
                    <span aria-hidden="true" className="inline-block w-[2px] h-[1em] ml-1 bg-[#ef4444] animate-blink" />
                  )}
                </motion.p>
              </div>

              <motion.p 
                variants={itemVariants} 
                className="max-w-2xl text-sm md:text-base text-[#a3a3a3] leading-relaxed"
              >
                Second-year Information Technology undergraduate seeking an IT Support Engineer Intern role. Experienced with network troubleshooting, Windows and Linux systems, Cisco Packet Tracer, cloud fundamentals, and enterprise software projects.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                variants={itemVariants} 
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", "#projects");
                  }}
                  id="hero-cta-btn"
                  className="group relative inline-flex items-center justify-center rounded-md bg-[#ef4444] text-black font-bold tracking-wider px-8 py-3.5 text-xs uppercase shadow-lg shadow-[#ef4444]/20 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[#ef4444]/30 active:scale-[0.98] cursor-pointer"
                >
                  <span>View My Projects</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", "#contact");
                  }}
                  id="hero-secondary-btn"
                  className="inline-flex items-center justify-center rounded-md border border-[#a3a3a3] bg-transparent text-white hover:border-[#ef4444] hover:text-[#ef4444] transition-all px-8 py-3.5 text-xs uppercase tracking-wider hover:bg-[#ef4444]/5 cursor-pointer"
                >
                  Let's Connect
                </a>
              </motion.div>

              {/* Quick Highlighting Metrics */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8 max-w-md"
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
                    <Shield className="h-4 w-4 text-[#ef4444] transition-transform group-hover:scale-110" />
                    <span className="font-mono text-[#a3a3a3] text-[10px] tracking-widest uppercase group-hover:text-white transition-colors">Aspirations</span>
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-zinc-300">IT Support Engineer</p>
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
                    src={profilePhoto}
                    alt="Hasitha Dhananjaya Wickramaarachchi Profile Photo"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.06]"
                    id="profile-img"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Strolling Indicator */}
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", "#about");
              }}
              className="flex flex-col items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#a3a3a3] hover:text-[#ef4444] transition-colors cursor-pointer group"
              aria-label="Scroll down to About section"
            >
              <span>Scroll to Explore</span>
              <ChevronDown className="h-4 w-4 animate-bounce text-[#ef4444] group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
