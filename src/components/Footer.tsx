import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-[#0a1428] text-white/60 py-12 text-center text-xs">
      <p className="font-serif text-white text-lg mb-4">Isle of Barra Beach Hotel</p>
      <div className="flex items-center justify-center gap-5 mb-5">
        <a
          href="https://www.facebook.com/IsleofBarraBeachHotel/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22 12a10 10 0 1 0-11.6 9.9V14.9H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z" />
          </svg>
        </a>
        <a
          href="https://twitter.com/BarraBeachHotel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.797l-5.32-6.96L4.8 22H1.54l8.02-9.17L1 2h6.97l4.81 6.36L18.244 2zm-1.19 18h1.88L7.05 4H5.06l11.994 16z" />
          </svg>
        </a>
        <a
          href="https://www.tripadvisor.co.uk/Hotel_Review-g1546330-d293142-Reviews-Isle_Of_Barra_Beach_Hotel-Isle_of_Barra_Outer_Hebrides_Scotland.html"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TripAdvisor"
          className="hover:text-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm-6 0a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm12 0a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM6 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm12 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
          </svg>
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mb-5">
        <Link to="/about" className="hover:text-white transition-colors">About</Link>
        <Link to="/rooms" className="hover:text-white transition-colors">Rooms</Link>
        <Link to="/dining" className="hover:text-white transition-colors">Dining</Link>
        <Link to="/experience" className="hover:text-white transition-colors">Experience</Link>
        <Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link>
        <Link to="/local-area" className="hover:text-white transition-colors">Local Area</Link>
        <Link to="/faqs" className="hover:text-white transition-colors">FAQs</Link>
        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
      </div>
      <p>&copy; {new Date().getFullYear()} Isle of Barra Beach Hotel &middot; Tangasdale Beach, Isle of Barra, Outer Hebrides</p>
    </footer>
  );
}
