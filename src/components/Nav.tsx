import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV_LINKS: [string, string][] = [
  ["About", "/about"],
  ["Rooms", "/rooms"],
  ["Dining", "/dining"],
  ["Experience", "/experience"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0f1d3a]/70 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-white text-xl tracking-wide">
          Isle of Barra <span className="italic text-white/70">Beach Hotel</span>
        </Link>
        <ul className="hidden md:flex gap-8 text-sm text-white/80">
          {NAV_LINKS.map(([label, to]) => (
            <li key={to}>
              <Link to={to} className="hover:text-white transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="hidden md:inline-block text-xs uppercase tracking-widest border border-white/40 text-white px-4 py-2 hover:bg-white hover:text-[#0f1d3a] transition-colors"
        >
          Book
        </Link>
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>
      {mobileOpen && (
        <div className="md:hidden bg-[#0f1d3a]/95 backdrop-blur-md border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm text-white/80">
            {NAV_LINKS.map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="block py-2 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-4 block text-center text-xs uppercase tracking-widest border border-white/40 text-white px-4 py-3 hover:bg-white hover:text-[#0f1d3a] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Book
          </Link>
        </div>
      )}
    </header>
  );
}
