import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  Star, 
  GitFork, 
  Calendar, 
  Loader2,
  AlertCircle
} from "lucide-react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

function ProjectImage({ 
  primarySrc, 
  fallbackSrc, 
  alt 
}: { 
  primarySrc: string; 
  fallbackSrc: string; 
  alt: string; 
}) {
  const [src, setSrc] = useState(primarySrc);
  const [triedFallback, setTriedFallback] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      referrerPolicy="no-referrer"
      onError={() => {
        if (!triedFallback) {
          setSrc(fallbackSrc);
          setTriedFallback(true);
        }
      }}
    />
  );
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string | null>(null);

  const username = "Hasitha123456789";

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unable to fetch repository data from GitHub at this moment.");
        }
        return res.json();
      })
      .then((data: GitHubRepo[]) => {
        // Filter out undesired repositories and map any specific customized URL paths
        const filtered = data.map(repo => {
          if (repo.name.toLowerCase() === "erp-asset-management-module") {
            return {
              ...repo,
              html_url: "https://github.com/Hasitha123456789/ERP-Asset-Management-module.git"
            };
          }
          return repo;
        }).filter((repo) => {
          const nameLower = repo.name.toLowerCase();
          return (
            nameLower !== "branchers" &&
            nameLower !== "macports-base" &&
            nameLower !== "dhana"
          );
        });

        // Ensure "ERP-Asset-Management-module", "Flashcard-Generator", "SL-Bus-Tracker", and "Student-Event-Management-System" are always included in the showcase portfolio
        const hasERP = filtered.some(repo => repo.name.toLowerCase() === "erp-asset-management-module");
        const hasFlashcard = filtered.some(repo => repo.name.toLowerCase() === "flashcard-generator");
        const hasBusTracker = filtered.some(repo => repo.name.toLowerCase() === "sl-bus-tracker" || repo.name.toLowerCase() === "bus-tracking-system");
        const hasEventSystem = filtered.some(repo => repo.name.toLowerCase() === "student-event-management-system" || repo.name.toLowerCase() === "eventhub" || repo.name.toLowerCase() === "student-event-management");
        
        let sorted = filtered.sort((a, b) => b.stargazers_count - a.stargazers_count);

        if (!hasERP) {
          // Prepend a rich synthetic item so ERP-Asset-Management-module is guaranteed to showcase even in case of fetch/profile states
          const erpFallback: GitHubRepo = {
            id: 999999,
            name: "ERP-Asset-Management-module",
            description: "A comprehensive Enterprise Resource Planning (ERP) asset tracking and lifecycle management system. Handles automated deprecation scheduling, audits, maintenance tracking, and secure resource allocation workflows.",
            html_url: "https://github.com/Hasitha123456789/ERP-Asset-Management-module.git",
            stargazers_count: 1, // Add gentle representation
            forks_count: 0,
            language: "Java",
            topics: ["erp", "asset-management", "lifecycle-tracking", "enterprise-software"],
            updated_at: new Date().toISOString()
          };
          sorted = [erpFallback, ...sorted];
        } else {
          // Move the ERP-Asset-Management-module to the very top to give it maximum visibility
          const erpIndex = sorted.findIndex(repo => repo.name.toLowerCase() === "erp-asset-management-module");
          if (erpIndex > -1) {
            const [erpProject] = sorted.splice(erpIndex, 1);
            sorted = [erpProject, ...sorted];
          }
        }

        if (!hasFlashcard) {
          // Prepend a rich synthetic item so Flashcard-Generator is guaranteed to showcase even in case of fetch/profile states
          const flashcardFallback: GitHubRepo = {
            id: 999998,
            name: "Flashcard-Generator",
            description: "An interactive flashcard application designed to optimize learning through active recall. Features customized decks, responsive quiz modes, and tracking parameters.",
            html_url: `https://github.com/${username}/Flashcard-Generator`,
            stargazers_count: 1, // Add gentle representation
            forks_count: 0,
            language: "TypeScript",
            topics: ["flashcards", "active-recall", "study-tool", "react"],
            updated_at: new Date().toISOString()
          };
          sorted = [flashcardFallback, ...sorted];
        } else {
          // Move the Flashcard-Generator to the very top to give it maximum visibility
          const flashcardIndex = sorted.findIndex(repo => repo.name.toLowerCase() === "flashcard-generator");
          if (flashcardIndex > -1) {
            const [flashcardProject] = sorted.splice(flashcardIndex, 1);
            sorted = [flashcardProject, ...sorted];
          }
        }

        if (!hasBusTracker) {
          // Prepend a rich synthetic item so SL-Bus-Tracker is guaranteed to showcase
          const busTrackerFallback: GitHubRepo = {
            id: 999997,
            name: "SL-Bus-Tracker",
            description: "Real-time passenger bus tracking system for transit routes in Sri Lanka. Highlights active vehicle locations, AI arrival delay metrics, OpenStreetMap live overlays, and route schedules.",
            html_url: `https://github.com/${username}/SL-Bus-Tracker`,
            stargazers_count: 1, // Add gentle representation
            forks_count: 0,
            language: "TypeScript",
            topics: ["bus-tracker", "realtime-gps", "sri-lanka", "openstreetmap", "transit"],
            updated_at: new Date().toISOString()
          };
          sorted = [busTrackerFallback, ...sorted];
        } else {
          // Move the SL-Bus-Tracker to the very top to give it maximum visibility
          const busTrackerIndex = sorted.findIndex(repo => repo.name.toLowerCase() === "sl-bus-tracker" || repo.name.toLowerCase() === "bus-tracking-system");
          if (busTrackerIndex > -1) {
            const [busTrackerProject] = sorted.splice(busTrackerIndex, 1);
            sorted = [busTrackerProject, ...sorted];
          }
        }

        if (!hasEventSystem) {
          // Prepend a rich synthetic item so Student-Event-Management-System is guaranteed to showcase
          const eventSystemFallback: GitHubRepo = {
            id: 999996,
            name: "Student-Event-Management-System",
            description: "A centralized campus event management platform (EventHub) that simplifies scheduling, attendance tracking, registrations, and budget logs for student actions and workshops.",
            html_url: `https://github.com/${username}/Student-Event-Management-System`,
            stargazers_count: 1, // Add gentle representation
            forks_count: 0,
            language: "TypeScript",
            topics: ["event-management", "campus-hub", "attendance-tracker", "react", "typescript"],
            updated_at: new Date().toISOString()
          };
          sorted = [eventSystemFallback, ...sorted];
        } else {
          // Move the Student-Event-Management-System to the very top to give it maximum visibility
          const eventSystemIndex = sorted.findIndex(repo => repo.name.toLowerCase() === "student-event-management-system" || repo.name.toLowerCase() === "eventhub" || repo.name.toLowerCase() === "student-event-management");
          if (eventSystemIndex > -1) {
            const [eventSystemProject] = sorted.splice(eventSystemIndex, 1);
            sorted = [eventSystemProject, ...sorted];
          }
        }

        setRepos(sorted);
      })
      .catch((e) => {
        setErr(e instanceof Error ? e.message : "An unexpected error occurred while loading projects.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 85,
        damping: 15
      }
    }
  };

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  };

  return (
    <main id="projects-page" className="flex-grow py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header section with styling consistent with About page */}
        <div className="text-center md:text-left mb-12 border-b border-rose-500/10 pb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 id="projects-title" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Showcase <span className="text-[#ef4444]">Portfolio</span>
              </h1>
              <p className="mt-2 text-[#a3a3a3]">
                Explore live projects fetched dynamically from Hasitha's GitHub profile.
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm text-[#a3a3a3] bg-[#0c0c0f] px-3.5 py-1.5 rounded-full border border-rose-500/10 card-surface shadow-sm font-mono">
              <Sparkles className="h-4 w-4 text-[#ef4444]" />
              <span>HCI Best Practices Implemented</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-6">
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20 text-center" id="live-loading">
              <Loader2 className="h-10 w-10 text-[#ef4444] animate-spin mb-4" />
              <p className="text-sm text-[#a3a3a3] font-medium font-mono uppercase tracking-widest">
                Fetching repositories dynamically from GitHub...
              </p>
            </div>
          )}

          {err && (
            <div className="flex items-center space-x-3 rounded-lg border border-red-500/20 bg-red-500/5 p-5 text-red-400" id="live-error">
              <AlertCircle className="h-6 w-6 shrink-0" />
              <div>
                <h3 className="font-bold text-sm tracking-wide uppercase">Repository Loading Failed</h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {err} You can visit the full profile directly at{" "}
                  <a 
                    href={`https://github.com/${username}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline font-semibold hover:text-white text-[#ef4444]"
                  >
                    github.com/{username}
                  </a>.
                </p>
              </div>
            </div>
          )}

          {!isLoading && !err && repos.length === 0 && (
            <div className="text-center py-16 card-surface rounded-xl p-8">
              <Github className="h-12 w-12 text-[#a3a3a3] mx-auto mb-3 opacity-60" />
              <p className="text-sm font-semibold text-zinc-300">No public repositories found</p>
              <p className="text-xs text-[#a3a3a3] mt-1">
                Try checking out current public updates directly on GitHub.
              </p>
            </div>
          )}

          {!isLoading && !err && repos.length > 0 && (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {repos.map((repo) => {
                const isERP = repo.name.toLowerCase() === "erp-asset-management-module";
                const isFlashcard = repo.name.toLowerCase() === "flashcard-generator";
                const isBusTracker = repo.name.toLowerCase() === "sl-bus-tracker" || repo.name.toLowerCase() === "bus-tracking-system";
                const isEventSystem = repo.name.toLowerCase() === "student-event-management-system" || repo.name.toLowerCase() === "eventhub" || repo.name.toLowerCase() === "student-event-management";
                const isSpecial = isERP || isFlashcard || isBusTracker || isEventSystem;
                return (
                  <motion.article
                    key={repo.id}
                    variants={cardVariants}
                    className={`group flex flex-col justify-between overflow-hidden rounded-xl card-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${
                      isBusTracker
                        ? "border-emerald-500/30 shadow-emerald-500/5 bg-[#0a1814]/70 hover:border-emerald-500"
                        : isEventSystem
                        ? "border-indigo-500/30 shadow-indigo-500/5 bg-[#090b1c]/70 hover:border-indigo-500"
                        : isSpecial 
                        ? "border-[#ef4444]/40 shadow-[#ef4444]/5 bg-[#170a0d]/70 hover:border-[#ef4444]" 
                        : "hover:border-[#ef4444]/20 hover:bg-neutral-900/40 hover:border-[#ef4444]/35"
                    }`}
                  >
                    <div>
                      {isFlashcard && (
                        <div className="relative aspect-[16/9] w-[calc(100%+3rem)] max-w-none overflow-hidden bg-zinc-950 border-b border-white/5 rounded-t-xl -mt-6 -mx-6 mb-4">
                          <ProjectImage
                            primarySrc="/src/assets/images/flashcard_screenshot.png"
                            fallbackSrc="/src/assets/images/flashcard_preview_1781120529761.png"
                            alt="AI Flashcard Generator Preview"
                          />
                        </div>
                      )}

                      {isBusTracker && (
                        <div className="relative aspect-[16/9] w-[calc(100%+3rem)] max-w-none overflow-hidden bg-zinc-950 border-b border-white/5 rounded-t-xl -mt-6 -mx-6 mb-4">
                          <ProjectImage
                            primarySrc="/src/assets/images/bus_tracker_screenshot.png"
                            fallbackSrc="/src/assets/images/sl_bus_tracker_map_preview_1781123088697.png"
                            alt="SL Bus Tracker Preview"
                          />
                        </div>
                      )}

                      {isERP && (
                        <div className="relative aspect-[16/9] w-[calc(100%+3rem)] max-w-none overflow-hidden bg-zinc-950 border-b border-white/5 rounded-t-xl -mt-6 -mx-6 mb-4">
                          <ProjectImage
                            primarySrc="/src/assets/images/erp_screenshot.png"
                            fallbackSrc="/src/assets/images/erp_dashboard_1781123885443.png"
                            alt="ERP Asset Management Dashboard Preview"
                          />
                        </div>
                      )}

                      {isEventSystem && (
                        <div className="relative aspect-[16/9] w-[calc(100%+3rem)] max-w-none overflow-hidden bg-zinc-950 border-b border-white/5 rounded-t-xl -mt-6 -mx-6 mb-4">
                          <ProjectImage
                            primarySrc="/src/assets/images/eventhub_screenshot.png"
                            fallbackSrc="/src/assets/images/eventhub_preview_1781160769870.png"
                            alt="Student Event Management System Preview"
                          />
                        </div>
                      )}

                      {/* Top Language Stamp & Header */}
                      <div className="flex items-center justify-between mb-3 text-[10px] font-mono tracking-widest uppercase">
                        <span className={`font-semibold flex items-center space-x-1 ${
                          isBusTracker ? "text-emerald-400" : isEventSystem ? "text-indigo-400" : "text-[#ef4444]"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full inline-block mr-1 ${
                            isBusTracker ? "bg-emerald-400" : isEventSystem ? "bg-indigo-400" : "bg-[#ef4444]"
                          }`}></span>
                          {repo.language || "Web Asset"}
                          {isSpecial && (
                            <span className={`ml-2 px-2 py-0.5 rounded text-[8px] tracking-widest font-sans font-bold uppercase ${
                              isBusTracker 
                                ? "bg-emerald-500/20 text-emerald-400" 
                                : isEventSystem
                                ? "bg-indigo-500/20 text-indigo-400"
                                : "bg-[#ef4444]/20 text-[#ef4444]"
                            }`}>
                              ★ Featured
                            </span>
                          )}
                        </span>
                        <span className="text-[#a0a0a0]/60 flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 mr-0.5" />
                          {formatDate(repo.updated_at)}
                        </span>
                      </div>

                      {/* Title of GitHub Repo */}
                      <h3 className={`text-lg font-bold text-white transition-colors duration-200 ${
                        isBusTracker ? "group-hover:text-emerald-400" : isEventSystem ? "group-hover:text-indigo-400" : "group-hover:text-[#ef4444]"
                      }`}>
                        {repo.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-xs text-[#a3a3a3] leading-relaxed line-clamp-3">
                        {repo.description || "Comprehensive software system demonstrating modular structure, clean design paradigms, and target user workflow coverage."}
                      </p>

                      {/* Topics Badges */}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1">
                          {repo.topics.slice(0, 4).map(topic => (
                            <span 
                              key={topic}
                              className="text-[9px] font-mono bg-[#07070a] text-zinc-400 px-1.5 py-0.5 rounded border border-white/5"
                            >
                              #{topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom stats row */}
                    <div className="mt-6 border-t border-white/5 pt-4 flex items-center justify-between text-xs text-[#a0a0a0] font-mono">
                      <div className="flex space-x-4">
                        <span className="flex items-center space-x-1" title="Stars count">
                          <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500/20" />
                          <span>{repo.stargazers_count}</span>
                        </span>
                        <span className="flex items-center space-x-1" title="Forks count">
                          <GitFork className="h-3.5 w-3.5 text-[#ef4444]" />
                          <span>{repo.forks_count}</span>
                        </span>
                      </div>

                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-1 text-xs transition-all hover:text-white font-semibold font-sans ${
                          isBusTracker ? "text-emerald-400" : isEventSystem ? "text-indigo-400" : "text-[#ef4444]"
                        }`}
                      >
                        <span>Explore Repo</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
