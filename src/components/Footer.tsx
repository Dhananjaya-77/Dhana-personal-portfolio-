import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  // Use the current year so the footer remains up to date automatically.
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="border-t border-rose-500/10 bg-[#07070a] py-8 mt-auto z-10 card-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          
          {/* Logo representation and name */}
          <div className="text-center sm:text-left">
            <span className="font-mono text-lg font-bold tracking-wider text-white">
              Hasitha Dhananjaya
            </span>
            <p className="mt-1 text-[11px] text-[#a0a0a0] font-medium tracking-wide uppercase">
               Portfolio
            </p>
          </div>

          {/* Social Links / Access Handles */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Hasitha123456789/Hasitha-Dhananjaya-Wickramaarachchi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0a0a0] transition-colors duration-300 hover:text-[#ef4444]"
              aria-label="Hasitha's GitHub Profile"
              id="footer-github-link"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/hasitha-dhananjaya-863405181"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0a0a0] transition-colors duration-300 hover:text-[#ef4444]"
              aria-label="Hasitha's LinkedIn Profile"
              id="footer-linkedin-link"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:hasidhananjaya121212@gmail.com"
              className="text-[#a0a0a0] transition-colors duration-300 hover:text-[#ef4444]"
              aria-label="Email Hasitha"
              id="footer-email-link"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:0771265617"
              className="text-[#a0a0a0] transition-colors duration-300 hover:text-[#ef4444]"
              aria-label="Call Hasitha"
              id="footer-phone-link"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright description */}
          <div className="text-center sm:text-right">
            <p id="footer-copyright" className="text-[10px] text-[#a0a0a0] tracking-widest uppercase font-mono">
              {/* Footer details removed per request */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
