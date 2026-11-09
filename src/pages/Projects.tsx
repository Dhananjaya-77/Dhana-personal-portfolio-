import { useState, useEffect } from "react";
import { motion } from "motion/react";
import enterpriseNetworkPreview from "../assets/images/enterprise_network_simulation.png";
import enterpriseLanWlanPreview from "../assets/images/enterprise_lan_wlan_simulation.png";
import networkAutomationPreview from "../assets/images/network_automation_toolkit.png";
import secureCloudPreview from "../assets/images/secure_cloud_network.png";
import cgoMobilePreview from "../assets/images/cgo_mobile_preview.png";
import busTrackerPreview from "../assets/images/bus_tracking_system_lite.png";
import flashcardPreview from "../assets/images/flashcard_generator_preview.png";
import erpDashboardPreview from "../assets/images/erp_dashboard_1781123885443.png";
import eventhubPreview from "../assets/images/eventhub_preview_1781160769870.png";
import profilePhoto from "../assets/images/profile_photo.jpg";
import theSunPreview from "../assets/images/the_sun_preview.png";
import { 
  Github, 
  ExternalLink, 
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
  alt,
  contain = false
}: { 
  primarySrc: string; 
  fallbackSrc: string; 
  alt: string; 
  contain?: boolean;
}) {
  const [src, setSrc] = useState(primarySrc);
  const [triedFallback, setTriedFallback] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full ${contain ? "object-contain py-2 bg-gradient-to-b from-[#091522] via-[#050b12] to-[#020508]" : "object-cover object-top"} transition-transform duration-500 group-hover:scale-[1.03]`}
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

const fallbackRepos: GitHubRepo[] = [
  {
    id: 1,
    name: "Enterprise-Network-Simulation",
    description: "An interactive enterprise network simulation showcasing topology design, VLAN segmentation, HSRP redundancy failover, NAT/PAT, OSPF routing, and ACL security policies.",
    html_url: "https://github.com/Dhananjaya-77/Enterprise-Network-Simulation",
    stargazers_count: 5,
    forks_count: 1,
    language: "HTML",
    topics: ["networking", "cisco-packet-tracer", "hsrp", "vlan", "ospf"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 4,
    name: "Enterprise-LAN-WLAN-Simulation",
    description: "Interactive enterprise campus network studio simulating a multi-tier backbone, VLSM subnetting engine, 802.11ax Wi-Fi RF heatmaps, VLANs, and WLC controllers.",
    html_url: "https://github.com/Dhananjaya-77/Enterprise-LAN-WLAN-Simulation",
    stargazers_count: 6,
    forks_count: 1,
    language: "TypeScript",
    topics: ["networking", "wlan", "vlsm", "wifi-6", "vlan", "cisco"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 6,
    name: "Network-Automation-Toolkit",
    description: "Modular multi-vendor network automation toolkit built with Python, Netmiko, Jinja2, and Typer for configuration generation, state auditing, drift detection, and automated playbooks.",
    html_url: "https://github.com/Dhananjaya-77/Network-Automation-Toolkit",
    stargazers_count: 6,
    forks_count: 1,
    language: "Python",
    topics: ["network-automation", "python", "netmiko", "jinja2", "cisco"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 5,
    name: "Bus-Tracking-System-lite",
    description: "A real-time transit and bus tracking platform featuring interactive live maps, route filtering, active passenger counts, and dedicated driver/admin portals.",
    html_url: "https://github.com/Dhananjaya-77/Bus-Tracking-System-lite",
    stargazers_count: 6,
    forks_count: 1,
    language: "JavaScript",
    topics: ["transit-map", "bus-tracking", "geolocation", "real-time"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 7,
    name: "C-GO-Mobile",
    description: "Secure transit and container tracking mobile application with dedicated role portals for truck drivers, container owners, and Sri Lanka customs inspectors.",
    html_url: "https://github.com/Dhananjaya-77/C-GO-Mobile",
    stargazers_count: 6,
    forks_count: 1,
    language: "TypeScript",
    topics: ["mobile-app", "logistics", "cargo-tracking", "react-native", "transit-security"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 8,
    name: "Secure-Cloud-Network",
    description: "Production-ready, hardened 3-tier multi-AZ AWS Virtual Private Cloud (VPC) architecture built with Terraform, featuring ALB, NAT Gateways, CIS benchmarks, and VPC Flow Logs.",
    html_url: "https://github.com/Dhananjaya-77/Secure-Cloud-Network",
    stargazers_count: 6,
    forks_count: 1,
    language: "Terraform",
    topics: ["aws", "terraform", "vpc", "cloud-security", "iac", "devops"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Flashcard-Generator",
    description: "An interactive study assistant for active recall and custom learning structures.",
    html_url: "https://github.com/Dhananjaya-77/Flashcard-Generator",
    stargazers_count: 8,
    forks_count: 1,
    language: "TypeScript",
    topics: ["flashcards", "study", "react"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Student-Event-Management-System",
    description: "A student-focused event management platform for registration, scheduling, and attendance tracking.",
    html_url: "https://github.com/Dhananjaya-77/Student-Event-Management-System",
    stargazers_count: 7,
    forks_count: 1,
    language: "TypeScript",
    topics: ["events", "campus", "management"],
    updated_at: new Date().toISOString(),
  },
];

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string | null>(null);

  const username = "Dhananjaya-77";

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
        const repoList = Array.isArray(data) ? data : [];

        if (!repoList.length) {
          throw new Error("No public repositories were returned from GitHub.");
        }

        // Filter out undesired repositories and map any specific customized URL paths
        const filtered = repoList.map(repo => {
          const repoName = repo.name.toLowerCase();

          if (repoName === "erp-asset-management-module" || repoName === "student-event-management-system" || repoName === "flashcard-generator") {
            return {
              ...repo,
              html_url: `https://github.com/${username}/${repo.name}`,
            };
          }

          return repo;
        }).filter((repo) => {
          const nameLower = repo.name.toLowerCase();
          return (
            nameLower !== "branchers" &&
            nameLower !== "macports-base" &&
            nameLower !== "dhana" &&
            nameLower !== "dhana-personal-portfolio" &&
            nameLower !== "dhana-personal-portfolio-" &&
            nameLower !== "personal-portfolio" &&
            nameLower !== "bus-tracking-system" &&
            nameLower !== "sl-bus-tracker" &&
            nameLower !== "my-static-webapp-pro" &&
            nameLower !== "google-collab" &&
            nameLower !== "erp-asset-management-module" &&
            nameLower !== "cgo"
          );
        });

        // Ensure Flashcard-Generator and Student-Event-Management-System are always included in the showcase portfolio
        const hasFlashcard = filtered.some(repo => repo.name.toLowerCase() === "flashcard-generator");
        const hasEventSystem = filtered.some(repo => repo.name.toLowerCase() === "student-event-management-system" || repo.name.toLowerCase() === "eventhub" || repo.name.toLowerCase() === "student-event-management");
        const hasNetworkSim = filtered.some(repo => repo.name.toLowerCase() === "enterprise-network-simulation" || (repo.name.toLowerCase().includes("enterprise-network") && !repo.name.toLowerCase().includes("lan-wlan")));
        const hasLanWlanSim = filtered.some(repo => repo.name.toLowerCase().includes("lan-wlan") || repo.name.toLowerCase().includes("lan_wlan") || repo.name.toLowerCase() === "enterprise-lan-wlan-simulation");
        const hasNetworkToolkit = filtered.some(repo => repo.name.toLowerCase().includes("network-automation-toolkit") || repo.name.toLowerCase() === "network-automation-toolkit");
        
        let sorted = filtered.sort((a, b) => b.stargazers_count - a.stargazers_count);

        if (!hasNetworkToolkit) {
          const networkToolkitFallback: GitHubRepo = {
            id: 999992,
            name: "Network-Automation-Toolkit",
            description: "Modular multi-vendor network automation toolkit built with Python, Netmiko, Jinja2, and Typer for configuration generation, state auditing, drift detection, and automated playbooks.",
            html_url: `https://github.com/${username}/Network-Automation-Toolkit`,
            stargazers_count: 5,
            forks_count: 1,
            language: "Python",
            topics: ["network-automation", "python", "netmiko", "jinja2", "cisco"],
            updated_at: new Date().toISOString()
          };
          sorted = [networkToolkitFallback, ...sorted];
        } else {
          sorted = sorted.map(repo => {
            if (repo.name.toLowerCase().includes("network-automation-toolkit") || repo.name.toLowerCase() === "network-automation-toolkit") {
              return {
                ...repo,
                description: repo.description || "Modular multi-vendor network automation toolkit built with Python, Netmiko, Jinja2, and Typer for configuration generation, state auditing, drift detection, and automated playbooks.",
                topics: repo.topics && repo.topics.length > 0 ? repo.topics : ["network-automation", "python", "netmiko", "jinja2", "cisco"],
                language: repo.language || "Python",
              };
            }
            return repo;
          });
          const toolkitIndex = sorted.findIndex(repo => repo.name.toLowerCase().includes("network-automation-toolkit") || repo.name.toLowerCase() === "network-automation-toolkit");
          if (toolkitIndex > -1) {
            const [toolkitProject] = sorted.splice(toolkitIndex, 1);
            sorted = [toolkitProject, ...sorted];
          }
        }

        if (!hasNetworkSim) {
          const networkSimFallback: GitHubRepo = {
            id: 999995,
            name: "Enterprise-Network-Simulation",
            description: "Interactive enterprise network topology simulator featuring VLAN segmentation, HSRP redundancy failover, NAT/PAT, OSPF routing, and ACL security policies.",
            html_url: `https://github.com/${username}/Enterprise-Network-Simulation`,
            stargazers_count: 5,
            forks_count: 1,
            language: "HTML",
            topics: ["networking", "cisco-packet-tracer", "hsrp", "vlan", "ospf"],
            updated_at: new Date().toISOString()
          };
          sorted = [networkSimFallback, ...sorted];
        } else {
          sorted = sorted.map(repo => {
            if (repo.name.toLowerCase().includes("enterprise-network") && !repo.name.toLowerCase().includes("lan-wlan")) {
              return {
                ...repo,
                description: repo.description || "Interactive enterprise network topology simulator featuring VLAN segmentation, HSRP redundancy failover, NAT/PAT, OSPF routing, and ACL security policies.",
                topics: repo.topics && repo.topics.length > 0 ? repo.topics : ["networking", "cisco-packet-tracer", "hsrp", "vlan", "ospf"],
                language: repo.language || "HTML",
              };
            }
            return repo;
          });
          const netIndex = sorted.findIndex(repo => repo.name.toLowerCase().includes("enterprise-network") && !repo.name.toLowerCase().includes("lan-wlan"));
          if (netIndex > -1) {
            const [netProject] = sorted.splice(netIndex, 1);
            sorted = [netProject, ...sorted];
          }
        }

        if (!hasLanWlanSim) {
          const lanWlanFallback: GitHubRepo = {
            id: 999994,
            name: "Enterprise-LAN-WLAN-Simulation",
            description: "Interactive enterprise campus network studio simulating a multi-tier backbone, VLSM subnetting engine, 802.11ax Wi-Fi RF heatmaps, VLANs, and WLC controllers.",
            html_url: `https://github.com/${username}/Enterprise-LAN-WLAN-Simulation`,
            stargazers_count: 6,
            forks_count: 1,
            language: "TypeScript",
            topics: ["networking", "wlan", "vlsm", "wifi-6", "vlan", "cisco"],
            updated_at: new Date().toISOString()
          };
          sorted = [lanWlanFallback, ...sorted];
        } else {
          sorted = sorted.map(repo => {
            if (repo.name.toLowerCase().includes("lan-wlan") || repo.name.toLowerCase().includes("lan_wlan") || repo.name.toLowerCase() === "enterprise-lan-wlan-simulation") {
              return {
                ...repo,
                description: repo.description || "Interactive enterprise campus network studio simulating a multi-tier backbone, VLSM subnetting engine, 802.11ax Wi-Fi RF heatmaps, VLANs, and WLC controllers.",
                topics: repo.topics && repo.topics.length > 0 ? repo.topics : ["networking", "wlan", "vlsm", "wifi-6", "vlan", "cisco"],
                language: repo.language || "TypeScript",
              };
            }
            return repo;
          });
          const lanIndex = sorted.findIndex(repo => repo.name.toLowerCase().includes("lan-wlan") || repo.name.toLowerCase().includes("lan_wlan") || repo.name.toLowerCase() === "enterprise-lan-wlan-simulation");
          if (lanIndex > -1) {
            const [lanProject] = sorted.splice(lanIndex, 1);
            sorted = [lanProject, ...sorted];
          }
        }

        const hasBusTracker = filtered.some(repo => repo.name.toLowerCase().includes("bus-tracking-system-lite") || repo.name.toLowerCase() === "bus-tracking-system-lite");

        if (!hasBusTracker) {
          const busTrackerFallback: GitHubRepo = {
            id: 999993,
            name: "Bus-Tracking-System-lite",
            description: "A real-time transit and bus tracking platform featuring interactive live maps, route filtering, active passenger counts, and dedicated driver/admin portals.",
            html_url: `https://github.com/${username}/Bus-Tracking-System-lite`,
            stargazers_count: 6,
            forks_count: 1,
            language: "JavaScript",
            topics: ["transit-map", "bus-tracking", "geolocation", "real-time"],
            updated_at: new Date().toISOString()
          };
          sorted = [busTrackerFallback, ...sorted];
        } else {
          sorted = sorted.map(repo => {
            if (repo.name.toLowerCase().includes("bus-tracking-system-lite")) {
              return {
                ...repo,
                description: repo.description || "A real-time transit and bus tracking platform featuring interactive live maps, route filtering, active passenger counts, and dedicated driver/admin portals.",
                topics: repo.topics && repo.topics.length > 0 ? repo.topics : ["transit-map", "bus-tracking", "geolocation", "real-time"],
                language: repo.language === "Jupyter Notebook" ? "JavaScript" : (repo.language || "JavaScript"),
              };
            }
            return repo;
          });
          const busIndex = sorted.findIndex(repo => repo.name.toLowerCase().includes("bus-tracking-system-lite"));
          if (busIndex > -1) {
            const [busProject] = sorted.splice(busIndex, 1);
            sorted = [busProject, ...sorted];
          }
        }

        const hasCGOMobile = filtered.some(repo => repo.name.toLowerCase().includes("c-go") || repo.name.toLowerCase() === "cgo-mobile");

        if (!hasCGOMobile) {
          const cgoMobileFallback: GitHubRepo = {
            id: 999991,
            name: "C-GO-Mobile",
            description: "Secure transit and container tracking mobile application with dedicated role portals for truck drivers, container owners, and Sri Lanka customs inspectors.",
            html_url: `https://github.com/${username}/C-GO-Mobile`,
            stargazers_count: 6,
            forks_count: 1,
            language: "TypeScript",
            topics: ["mobile-app", "logistics", "cargo-tracking", "react-native", "transit-security"],
            updated_at: new Date().toISOString()
          };
          sorted = [cgoMobileFallback, ...sorted];
        } else {
          sorted = sorted.map(repo => {
            if (repo.name.toLowerCase().includes("c-go") || repo.name.toLowerCase() === "cgo-mobile") {
              return {
                ...repo,
                description: repo.description || "Secure transit and container tracking mobile application with dedicated role portals for truck drivers, container owners, and Sri Lanka customs inspectors.",
                topics: repo.topics && repo.topics.length > 0 ? repo.topics : ["mobile-app", "logistics", "cargo-tracking", "react-native", "transit-security"],
                language: repo.language || "TypeScript",
              };
            }
            return repo;
          });
          const cgoIndex = sorted.findIndex(repo => repo.name.toLowerCase().includes("c-go") || repo.name.toLowerCase() === "cgo-mobile");
          if (cgoIndex > -1) {
            const [cgoProject] = sorted.splice(cgoIndex, 1);
            sorted = [cgoProject, ...sorted];
          }
        }

        const hasCloudNetwork = filtered.some(repo => repo.name.toLowerCase().includes("secure-cloud-network") || repo.name.toLowerCase() === "secure-cloud-network" || (repo.name.toLowerCase().includes("secure") && repo.name.toLowerCase().includes("cloud")));

        if (!hasCloudNetwork) {
          const cloudNetworkFallback: GitHubRepo = {
            id: 999990,
            name: "Secure-Cloud-Network",
            description: "Production-ready, hardened 3-tier multi-AZ AWS Virtual Private Cloud (VPC) architecture built with Terraform, featuring ALB, NAT Gateways, CIS benchmarks, and VPC Flow Logs.",
            html_url: `https://github.com/${username}/Secure-Cloud-Network`,
            stargazers_count: 6,
            forks_count: 1,
            language: "Terraform",
            topics: ["aws", "terraform", "vpc", "cloud-security", "iac", "devops"],
            updated_at: new Date().toISOString()
          };
          sorted = [cloudNetworkFallback, ...sorted];
        } else {
          sorted = sorted.map(repo => {
            if (repo.name.toLowerCase().includes("secure-cloud-network") || (repo.name.toLowerCase().includes("secure") && repo.name.toLowerCase().includes("cloud"))) {
              return {
                ...repo,
                description: repo.description || "Production-ready, hardened 3-tier multi-AZ AWS Virtual Private Cloud (VPC) architecture built with Terraform, featuring ALB, NAT Gateways, CIS benchmarks, and VPC Flow Logs.",
                topics: repo.topics && repo.topics.length > 0 ? repo.topics : ["aws", "terraform", "vpc", "cloud-security", "iac", "devops"],
                language: "Terraform",
              };
            }
            return repo;
          });
          const cloudIndex = sorted.findIndex(repo => repo.name.toLowerCase().includes("secure-cloud-network") || (repo.name.toLowerCase().includes("secure") && repo.name.toLowerCase().includes("cloud")));
          if (cloudIndex > -1) {
            const [cloudProject] = sorted.splice(cloudIndex, 1);
            sorted = [cloudProject, ...sorted];
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

        if (!hasEventSystem) {
          // Prepend a rich synthetic item so Student-Event-Management-System is guaranteed to showcase
          const eventSystemFallback: GitHubRepo = {
            id: 999996,
            name: "Student-Event-Management-System",
            description: "A centralized campus event management platform that simplifies scheduling, attendance tracking, registrations, and activity management.",
            html_url: `https://github.com/${username}/Student-Event-Management-System`,
            stargazers_count: 1,
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
        const message = e instanceof Error ? e.message : "An unexpected error occurred while loading projects.";
        setRepos(fallbackRepos);
        setErr(null);
        console.warn("GitHub repo fetch failed, using fallback portfolio data:", message);
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

  const buildGeneratedProjectArt = (repoName: string, accent: string, secondary: string, variant: "dashboard" | "analytics" | "mobile" | "studio" = "dashboard") => {
    const safeName = repoName.replace(/[-_]/g, " ").trim() || "Project";
    const shortLabel = safeName
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map(part => part[0]?.toUpperCase() ?? "")
      .join("") || "PR";

    const label = safeName.length > 16 ? `${safeName.slice(0, 16)}…` : safeName;
    const panelH = variant === "mobile" ? 340 : 260;
    const dataBars = variant === "analytics"
      ? `<rect x="150" y="355" width="180" height="12" rx="6" fill="${accent}" opacity="0.9"/> <rect x="350" y="355" width="250" height="12" rx="6" fill="#2c313a"/> <rect x="630" y="355" width="130" height="12" rx="6" fill="#2c313a"/>`
      : variant === "mobile"
      ? `<rect x="150" y="350" width="260" height="18" rx="9" fill="${accent}" opacity="0.9"/> <rect x="150" y="390" width="320" height="12" rx="6" fill="#2c313a"/> <rect x="150" y="420" width="290" height="12" rx="6" fill="#2c313a"/>`
      : `<rect x="150" y="350" width="300" height="18" rx="9" fill="${accent}" opacity="0.9"/> <rect x="150" y="390" width="720" height="14" rx="7" fill="#2c313a"/> <rect x="150" y="420" width="640" height="14" rx="7" fill="#2c313a"/> <rect x="150" y="450" width="480" height="14" rx="7" fill="#2c313a"/>`;

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#0b0d12"/>
            <stop offset="100%" stop-color="#181b20"/>
          </linearGradient>
          <linearGradient id="panel" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="${accent}"/>
            <stop offset="100%" stop-color="${secondary}"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#bg)"/>
        <circle cx="1040" cy="130" r="160" fill="${accent}" opacity="0.18"/>
        <circle cx="210" cy="620" r="220" fill="${secondary}" opacity="0.12"/>
        <rect x="80" y="90" width="1040" height="620" rx="28" fill="#101318" stroke="rgba(255,255,255,0.10)"/>
        <rect x="120" y="140" width="250" height="110" rx="18" fill="url(#panel)"/>
        <text x="150" y="195" fill="#fff" font-size="34" font-family="Arial, sans-serif" font-weight="700">${shortLabel}</text>
        <text x="150" y="230" fill="#f5f5f5" font-size="18" opacity="0.9" font-family="Arial, sans-serif">PROJECT</text>
        <rect x="750" y="160" width="260" height="${panelH}" rx="24" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255,255,255,0.14)"/>
        <text x="880" y="250" fill="#fff" font-size="52" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700">${shortLabel}</text>
        <rect x="790" y="310" width="180" height="12" rx="6" fill="${accent}" opacity="0.8"/>
        <rect x="790" y="338" width="120" height="12" rx="6" fill="#2c313a"/>
        <rect x="790" y="366" width="150" height="12" rx="6" fill="#2c313a"/>
        ${dataBars}
        <text x="150" y="610" fill="#f4f4f5" font-size="38" font-family="Arial, sans-serif" font-weight="700">${label}</text>
      </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  const getProjectPreview = (repoName: string) => {
    const name = repoName.toLowerCase();

    if (
      name.includes("secure-cloud") ||
      name.includes("secure_cloud") ||
      name.includes("cloud-network") ||
      name.includes("cloud_network") ||
      (name.includes("cloud") && name.includes("network")) ||
      name === "secure-cloud-network"
    ) {
      return secureCloudPreview;
    }

    if (
      name.includes("c-go") ||
      name.includes("cgo") ||
      name.includes("secure-transit") ||
      name.includes("securetrack")
    ) {
      return cgoMobilePreview;
    }

    if (
      name.includes("network-automation") ||
      name.includes("network_automation") ||
      name.includes("automation-toolkit") ||
      name.includes("automation_toolkit") ||
      (name.includes("network") && name.includes("toolkit")) ||
      (name.includes("network") && name.includes("automation"))
    ) {
      return networkAutomationPreview;
    }

    if (
      name.includes("lan-wlan") ||
      name.includes("lan_wlan") ||
      (name.includes("lan") && name.includes("wlan")) ||
      name.includes("wlan")
    ) {
      return enterpriseLanWlanPreview;
    }

    if (
      name.includes("enterprise-network") ||
      name.includes("enterprise_network") ||
      name.includes("network-simulation") ||
      name.includes("network_simulation") ||
      (name.includes("enterprise") && name.includes("network"))
    ) {
      return enterpriseNetworkPreview;
    }

    if (name.includes("bus-tracking") || name.includes("bus_tracking") || name.includes("bus-tracker")) {
      return busTrackerPreview;
    }

    if (name.includes("the-sun") || name === "the sun") {
      return theSunPreview;
    }

    if (name.includes("event") || name.includes("campus")) {
      return eventhubPreview;
    }

    if (name.includes("portfolio")) {
      return profilePhoto;
    }

    if (name.includes("flashcard") || name.includes("study")) {
      return flashcardPreview;
    }

    if (name.includes("google") || name.includes("collab") || name.includes("notebook") || name.includes("python")) {
      return buildGeneratedProjectArt(repoName, "#3b82f6", "#1e3a8a", "analytics");
    }

    if (name.includes("c-go") || name.includes("cgo") || name.includes("go") || name.includes("mobile")) {
      return buildGeneratedProjectArt(repoName, "#22c55e", "#166534", "mobile");
    }

    return buildGeneratedProjectArt(repoName, "#ef4444", "#7c2d12", "dashboard");
  };

  return (
    <section id="projects" className="scroll-mt-20 py-16 md:py-24 border-t border-rose-500/10">
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
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {repos.map((repo) => {
                const isERP = repo.name.toLowerCase() === "erp-asset-management-module";
                const isFlashcard = repo.name.toLowerCase() === "flashcard-generator";
                const isEventSystem = repo.name.toLowerCase() === "student-event-management-system" || repo.name.toLowerCase() === "eventhub" || repo.name.toLowerCase() === "student-event-management";
                const isNetworkAuto = repo.name.toLowerCase().includes("network-automation") || repo.name.toLowerCase().includes("automation-toolkit") || (repo.name.toLowerCase().includes("network") && repo.name.toLowerCase().includes("toolkit"));
                const isNetworkSim = repo.name.toLowerCase().includes("enterprise-network") || repo.name.toLowerCase().includes("lan-wlan") || repo.name.toLowerCase().includes("wlan");
                const isNetworkProject = isNetworkSim || isNetworkAuto;
                const isBusTracker = repo.name.toLowerCase().includes("bus-tracking");
                const isCGOMobile = repo.name.toLowerCase().includes("c-go") || repo.name.toLowerCase().includes("cgo") || repo.name.toLowerCase().includes("secure-transit");
                const isCloudNetwork = repo.name.toLowerCase().includes("secure-cloud") || repo.name.toLowerCase().includes("cloud-network") || (repo.name.toLowerCase().includes("cloud") && repo.name.toLowerCase().includes("network"));
                const isSpecial = isERP || isFlashcard || isEventSystem || isNetworkProject || isBusTracker || isCGOMobile || isCloudNetwork;
                const previewImage = getProjectPreview(repo.name);

                return (
                  <motion.article
                    key={repo.id}
                    variants={cardVariants}
                    className={`group flex flex-col justify-between overflow-hidden rounded-xl card-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${
                      isCloudNetwork
                        ? "border-sky-500/30 shadow-sky-500/5 bg-[#06121d]/70 hover:border-sky-400"
                        : isCGOMobile
                        ? "border-emerald-500/30 shadow-emerald-500/5 bg-[#061710]/70 hover:border-emerald-400"
                        : isNetworkProject
                        ? "border-cyan-500/30 shadow-cyan-500/5 bg-[#08151c]/70 hover:border-cyan-400"
                        : isBusTracker
                        ? "border-emerald-500/30 shadow-emerald-500/5 bg-[#061510]/70 hover:border-emerald-400"
                        : isEventSystem
                        ? "border-indigo-500/30 shadow-indigo-500/5 bg-[#090b1c]/70 hover:border-indigo-500"
                        : isSpecial 
                        ? "border-[#ef4444]/40 shadow-[#ef4444]/5 bg-[#170a0d]/70 hover:border-[#ef4444]" 
                        : "hover:border-[#ef4444]/20 hover:bg-neutral-900/40 hover:border-[#ef4444]/35"
                    }`}
                  >
                    <div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        aria-label={`Open ${repo.name} on GitHub`}
                      >
                        <div className="relative aspect-[16/9] w-[calc(100%+3rem)] max-w-none overflow-hidden bg-zinc-950 border-b border-white/5 rounded-t-xl -mt-6 -mx-6 mb-4">
                          <ProjectImage
                            primarySrc={previewImage}
                            fallbackSrc={previewImage}
                            alt={`${repo.name} preview`}
                            contain={isCGOMobile}
                          />
                        </div>
                      </a>

                      {/* Top Language Stamp & Header */}
                      <div className="flex items-center justify-between mb-3 text-[10px] font-mono tracking-widest uppercase">
                        <span className={`font-semibold flex items-center space-x-1 ${
                          isCloudNetwork ? "text-sky-400" : isCGOMobile ? "text-emerald-400" : isNetworkProject ? "text-cyan-400" : isBusTracker ? "text-emerald-400" : isEventSystem ? "text-indigo-400" : "text-[#ef4444]"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full inline-block mr-1 ${
                            isCloudNetwork ? "bg-sky-400" : isCGOMobile ? "bg-emerald-400" : isNetworkProject ? "bg-cyan-400" : isBusTracker ? "bg-emerald-400" : isEventSystem ? "bg-indigo-400" : "bg-[#ef4444]"
                          }`}></span>
                          {repo.language || (isCloudNetwork ? "Terraform / AWS" : isNetworkAuto ? "Network Automation" : isNetworkSim ? "Network Sim" : "Web Asset")}
                          {isSpecial && (
                            <span className={`ml-2 px-2 py-0.5 rounded text-[8px] tracking-widest font-sans font-bold uppercase ${
                              isCloudNetwork
                                ? "bg-sky-500/20 text-sky-400"
                                : isCGOMobile
                                ? "bg-emerald-500/20 text-emerald-400"
                                : isNetworkProject
                                ? "bg-cyan-500/20 text-cyan-400"
                                : isBusTracker
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
                        isCloudNetwork ? "group-hover:text-sky-400" : isCGOMobile ? "group-hover:text-emerald-400" : isNetworkProject ? "group-hover:text-cyan-400" : isBusTracker ? "group-hover:text-emerald-400" : isEventSystem ? "group-hover:text-indigo-400" : "group-hover:text-[#ef4444]"
                      }`}>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {repo.name}
                        </a>
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
                          <GitFork className={`h-3.5 w-3.5 ${isCloudNetwork ? "text-sky-400" : isCGOMobile ? "text-emerald-400" : isNetworkProject ? "text-cyan-400" : isBusTracker ? "text-emerald-400" : "text-[#ef4444]"}`} />
                          <span>{repo.forks_count}</span>
                        </span>
                      </div>

                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-1 text-xs transition-all hover:text-white font-semibold font-sans ${
                          isCloudNetwork ? "text-sky-400" : isCGOMobile ? "text-emerald-400" : isNetworkProject ? "text-cyan-400" : isBusTracker ? "text-emerald-400" : isEventSystem ? "text-indigo-400" : "text-[#ef4444]"
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
    </section>
  );
}
