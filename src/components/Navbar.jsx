import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#050507]/80 backdrop-blur-md">
      
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-5 sm:px-6 md:px-10 lg:px-16">

        {/* LOGO */}
        <a
          href="#top"
          className="font-mono text-sm tracking-wider text-white"
        >
          sumit_t<span className="text-purple-500">.</span>dev
        </a>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-sm text-gray-400 hover:text-white transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <a
          href="#contact"
          className="hidden md:inline-block border border-white/10 px-4 py-2 rounded-md text-sm text-white hover:border-purple-500 transition"
        >
          Let's talk
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-[#050507]"
          >
            <ul className="flex flex-col px-6 py-4 gap-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-gray-400 hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}