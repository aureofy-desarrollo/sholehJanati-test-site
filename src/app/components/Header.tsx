import { Instagram, Facebook, Linkedin, Palette, Mail, Link } from "lucide-react";
import { motion } from "motion/react";
import clsx from "clsx";
import logoImage from "figma:asset/e037112bd9ac0ee59db22996421bb5ae3cf2b1fa.png";

export function Header() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/sholehjanatiart" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/sholeh.janati/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sholehjanati/" },
    { icon: Link, label: "Linktree", href: "https://linktr.ee/sholehjanati" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apple-like ease
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-white/20 supports-[backdrop-filter]:bg-white/60"
    >
      <div className="max-w-7xl mx-auto px-6 h-32 flex items-center justify-between relative bg-[rgba(0,0,0,0)]">
        {/* Empty left space to balance social links on the right */}
        <div className="w-48 hidden md:block" />

        {/* Logo Area - Centered */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={logoImage}
            alt="Sholeh Janati"
            className="h-16 w-auto object-contain"
          />
        </motion.div>

        {/* Desktop Nav - Right Aligned */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-900 hover:bg-slate-100 transition-all duration-300 relative group"
                aria-label={link.label}
              >
                <link.icon className="w-7 h-7 stroke-[1.5]" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}