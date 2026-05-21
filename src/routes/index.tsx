import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import hotel from "@/assets/hotel.jpg";
import roomSea from "@/assets/room-seaview.jpg";
import roomOcean from "@/assets/room-ocean.jpg";
import roomCabin from "@/assets/room-cabin.jpg";
import dining from "@/assets/dining.jpg";
import bar from "@/assets/bar.jpg";
import castle from "@/assets/castle.jpg";
import dolphins from "@/assets/dolphins.jpg";
import beachwalk from "@/assets/beachwalk.jpg";
import eagle from "@/assets/eagle.jpg";
import sunset from "@/assets/sunset.jpg";
import galleryClouds from "@/assets/gallery-clouds.jpg";
import galleryRoom from "@/assets/gallery-room.jpg";
import galleryFood from "@/assets/gallery-food.jpg";
import galleryMachair from "@/assets/gallery-machair.jpg";
import galleryWhisky from "@/assets/gallery-whisky.jpg";
import galleryBoat from "@/assets/gallery-boat.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAVY = "#0f1d3a";
const SAND = "#f4efe6";
const SLATE = "#5b6470";

function Nav() {
  const links = [
    ["About", "#about"],
    ["Rooms", "#rooms"],
    ["Dining", "#dining"],
    ["Experience", "#experience"],
    ["Gallery", "#gallery"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0f1d3a]/70 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-white text-xl tracking-wide">
          Isle of Barra <span className="italic text-white/70">Beach Hotel</span>
        </a>
        <ul className="hidden md:flex gap-8 text-sm text-white/80">
          {links.map(([l, h]) => (
            <li key={h}>
              <a href={h} className="hover:text-white transition-colors">{l}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-block text-xs uppercase tracking-widest border border-white/40 text-white px-4 py-2 hover:bg-white hover:text-[#0f1d3a] transition-colors">
          Book
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      <img
        src={hero}
        alt="Wild Atlantic coastline at Tangasdale Beach, Isle of Barra"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1d3a]/60 via-[#0f1d3a]/30 to-[#0f1d3a]/80" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <p className="uppercase tracking-[0.4em] text-xs md:text-sm text-white/80 mb-6">
          Tangasdale Beach · Outer Hebrides
        </p>
        <h1 className="font-serif text-white text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl">
          Where the Atlantic <br />
          <span className="italic">meets your soul</span>
        </h1>
        <p className="mt-6 max-w-xl text-white/85 text-base md:text-lg">
          A timeless seaside hotel set above one of Scotland's wildest beaches —
          uninterrupted ocean views, spectacular sunsets, and quiet Hebridean hospitality.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-white text-[#0f1d3a] px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#f4efe6] transition-colors"
          >
            Book a Room
          </a>
          <a
            href="#rooms"
            className="border border-white/70 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-[#0f1d3a] transition-colors"
          >
            View Rooms
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase animate-pulse">
        Scroll
      </div>
    </section>
  );
}

function About() {
  return AboutInner();
}

function TripAdvisor() {
  return (
    <section className="bg-[#0f1d3a] border-y border-white/10 py-6">
      <a
        href="https://www.tripadvisor.co.uk/Hotel_Review-g1546330-d293142-Reviews-Isle_Of_Barra_Beach_Hotel-Isle_of_Barra_Outer_Hebrides_Scotland.html"
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white/90 hover:text-white transition-colors text-sm"
      >
        <span className="flex items-center gap-1 text-[#34e0a1]" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="inline-block w-3 h-3 rounded-full bg-[#34e0a1]" />
          ))}
          <span className="inline-block w-3 h-3 rounded-full bg-[#34e0a1]/40" />
        </span>
        <span className="font-serif text-lg">3.8 / 5</span>
        <span className="text-white/60 uppercase tracking-widest text-xs">
          720+ TripAdvisor reviews · Read what guests are saying →
        </span>
      </a>
    </section>
  );
}

function AboutInner() {
  return (
    <section id="about" className="py-28 bg-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-[#5b6470] mb-6">A Place Apart</p>
          <h2 className="font-serif text-[#0f1d3a] text-4xl md:text-5xl leading-tight mb-8">
            Wild meadow flowers, manicured lawns, and the open Atlantic.
          </h2>
          <div className="space-y-5 text-[#3a4150] leading-relaxed">
            <p>
              The Isle of Barra Beach Hotel sits in quiet juxtaposition with rugged volcanic
              rocks and the wide ocean — just two minutes from the Castlebay ferry terminal,
              yet a world away from everything else. This is the place guests return to year
              after year for the views, the welcome, and the silence.
            </p>
            <p>
              We are a small, family-run hotel, dog-friendly, and open from
              <span className="font-medium text-[#0f1d3a]"> May through September</span>.
              Come to walk the beach, watch the sunset turn the sky pink, or simply do
              nothing at all.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#5b6470]/20 pt-8">
            {[
              ["2 min", "From Castlebay ferry"],
              ["May–Sep", "Seasonal opening"],
              ["Dog", "Friendly stays"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="font-serif text-2xl text-[#0f1d3a]">{k}</p>
                <p className="text-xs uppercase tracking-widest text-[#5b6470] mt-1">{v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src={hotel}
            alt="Aerial view of the Isle of Barra Beach Hotel above Tangasdale Beach"
            width={1600}
            height={1000}
            loading="lazy"
            className="w-full h-[560px] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-[#0f1d3a] text-white px-8 py-6 hidden md:block">
            <p className="font-serif text-2xl italic">Tangasdale</p>
            <p className="text-xs uppercase tracking-widest text-white/60 mt-1">Isle of Barra · HS9 5XW</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Rooms() {
  const rooms = [
    {
      img: roomSea,
      name: "Sea View Room",
      desc: "Comfortable rooms with mesmerising glimpses of the sea, sandy bay, and the islands beyond. The sound of the surf is your nightcap.",
      specs: ["Double or twin", "Sea-facing window", "Breakfast included"],
    },
    {
      img: roomOcean,
      name: "Ocean-Facing Room",
      desc: "Our most-requested rooms — uninterrupted Atlantic views from your bed. Watch the gannets dive while the kettle boils.",
      specs: ["King bed", "Panoramic windows", "Sunset views"],
    },
    {
      img: roomCabin,
      name: "The Bolt Hole",
      desc: "A private, self-contained cabin sleeping up to six. Your own front door, your own slice of the island — ideal for families and small groups.",
      specs: ["Sleeps 6", "Self-contained", "Dog friendly"],
    },
  ];
  return (
    <section id="rooms" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-xs text-[#5b6470] mb-6">Accommodation</p>
          <h2 className="font-serif text-[#0f1d3a] text-4xl md:text-5xl mb-6">
            Rooms that face the ocean
          </h2>
          <p className="text-[#3a4150]">
            Every guest bedroom is sea-facing or offers uninterrupted views of the bay.
            Unwind, exhale, and let the Atlantic do the rest.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((r) => (
            <article key={r.name} className="group bg-[#f4efe6] flex flex-col">
              <div className="overflow-hidden">
                <img
                  src={r.img}
                  alt={r.name}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl text-[#0f1d3a] mb-3">{r.name}</h3>
                <p className="text-[#3a4150] text-sm leading-relaxed mb-6 flex-1">{r.desc}</p>
                <ul className="text-xs uppercase tracking-widest text-[#5b6470] space-y-2 border-t border-[#5b6470]/20 pt-5">
                  {r.specs.map((s) => (
                    <li key={s}>· {s}</li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-block text-sm text-[#0f1d3a] border-b border-[#0f1d3a] pb-1 self-start hover:opacity-70 transition-opacity"
                >
                  Enquire to stay
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dining() {
  return (
    <section id="dining" className="py-28 bg-[#0f1d3a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="uppercase tracking-[0.3em] text-xs text-white/60 mb-6">Eat & Drink</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Sunsets, local catch, and a quiet dram.
          </h2>
          <p className="text-white/75">
            Local island producers, fresh fish from neighbouring waters, and a glass in
            hand as the light pours across the bay.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="group relative overflow-hidden">
            <img src={dining} alt="Upper deck sunset restaurant" width={1600} height={1000} loading="lazy" className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1d3a] via-[#0f1d3a]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="uppercase tracking-widest text-xs text-white/70 mb-2">Upper Deck</p>
              <h3 className="font-serif text-3xl mb-3">The Sunset Restaurant</h3>
              <p className="text-white/80 max-w-md text-sm leading-relaxed">
                Evening meals with mesmerising sea views — North Uist smoked salmon, Barra
                scallops, and fresh fish landed on the island. Our fruits, salads and
                vegetables come from our long-time Oban supplier.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden">
            <img src={bar} alt="Blue Lounge Bar" width={1200} height={900} loading="lazy" className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1d3a] via-[#0f1d3a]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="uppercase tracking-widest text-xs text-white/70 mb-2">Blue Lounge</p>
              <h3 className="font-serif text-3xl mb-3">The Bar</h3>
              <p className="text-white/80 max-w-md text-sm leading-relaxed">
                A relaxed lounge bar with bottled beers, soft drinks, a thoughtful spirits
                selection, and easy meals throughout the day. Pull up a chair by the window.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const items = [
    { img: beachwalk, title: "Walk the white sands", desc: "Tangasdale Beach is right beneath you. Miles of empty machair and shell-sand all the way to the headland." },
    { img: dolphins, title: "Watch for dolphins", desc: "Pods are regularly spotted from the windows, alongside gannets diving and grey seals lazing on the rocks." },
    { img: eagle, title: "Sea eagles & otters", desc: "Barra's sky and shore are home to white-tailed eagles, otters, and migrating seabirds throughout the season." },
    { img: castle, title: "Kisimul Castle", desc: "The medieval seat of Clan MacNeil sits on its own islet in Castlebay — a short drive away and well worth the boat trip." },
  ];
  return (
    <section id="experience" className="py-28 bg-[#f4efe6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <p className="uppercase tracking-[0.3em] text-xs text-[#5b6470] mb-6">See & Do</p>
          <h2 className="font-serif text-[#0f1d3a] text-4xl md:text-5xl">
            An island that gives itself slowly.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <article key={it.title} className="bg-white">
              <img src={it.img} alt={it.title} width={1200} height={900} loading="lazy" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#0f1d3a] mb-2">{it.title}</h3>
                <p className="text-sm text-[#3a4150] leading-relaxed">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    { src: hero, h: "row-span-2", alt: "Wild coastline" },
    { src: sunset, h: "", alt: "Hebridean sunset" },
    { src: beachwalk, h: "", alt: "White sand beach" },
    { src: hotel, h: "row-span-2", alt: "Hotel from above" },
    { src: castle, h: "", alt: "Kisimul Castle" },
    { src: dining, h: "", alt: "Sunset restaurant" },
    { src: galleryClouds, h: "", alt: "Dramatic Hebridean sky over the bay" },
    { src: galleryRoom, h: "row-span-2", alt: "Sea-view bedroom interior" },
    { src: galleryMachair, h: "", alt: "Machair wildflowers on the coast" },
    { src: galleryFood, h: "", alt: "Fresh Barra seafood plate" },
    { src: galleryWhisky, h: "", alt: "A quiet dram at sunset" },
    { src: galleryBoat, h: "", alt: "Boat in turquoise bay water" },
  ];
  return (
    <section id="gallery" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="uppercase tracking-[0.3em] text-xs text-[#5b6470] mb-6">Gallery</p>
          <h2 className="font-serif text-[#0f1d3a] text-4xl md:text-5xl">Glimpses of Barra</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-3">
          {imgs.map((im, i) => (
            <div key={i} className={`overflow-hidden ${im.h}`}>
              <img src={im.src} alt={im.alt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#0f1d3a] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-white/60 mb-6">Plan Your Stay</p>
        <h2 className="font-serif text-4xl md:text-6xl mb-8">
          Come stay with us.
        </h2>
        <p className="max-w-xl mx-auto text-white/75 mb-14">
          We'd love to hear from you. Rooms are limited and our season is short —
          we're open May through September, so contact us to check availability
          for your dates and we'll take it from there.
        </p>
        <div className="grid md:grid-cols-3 gap-10 text-left md:text-center border-t border-white/10 pt-12">
          <div>
            <p className="uppercase tracking-widest text-xs text-white/60 mb-3">Telephone</p>
            <a href="tel:01871810383" className="font-serif text-2xl hover:text-white/80">01871 810383</a>
          </div>
          <div>
            <p className="uppercase tracking-widest text-xs text-white/60 mb-3">Email</p>
            <a href="mailto:barrahotel@aol.com" className="font-serif text-2xl hover:text-white/80">barrahotel@aol.com</a>
          </div>
          <div>
            <p className="uppercase tracking-widest text-xs text-white/60 mb-3">Address</p>
            <p className="font-serif text-xl leading-snug">Tangasdale Beach<br />Isle of Barra · HS9 5XW</p>
          </div>
        </div>
        <a
          href="mailto:barrahotel@aol.com?subject=Room%20enquiry"
          className="mt-14 inline-block bg-white text-[#0f1d3a] px-10 py-4 text-sm uppercase tracking-widest hover:bg-[#f4efe6] transition-colors"
        >
          Enquire by Email
        </a>
        <div className="mt-16 overflow-hidden border border-white/10">
          <iframe
            title="Map of Isle of Barra Beach Hotel"
            src="https://www.google.com/maps?q=Isle+of+Barra+Beach+Hotel,+Tangasdale+Beach,+Isle+of+Barra,+HS9+5XW&output=embed"
            width="100%"
            height="420"
            style={{ border: 0, filter: "grayscale(0.2) contrast(0.95)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
      <p>© {new Date().getFullYear()} · Tangasdale Beach, Isle of Barra, Outer Hebrides</p>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-white">
      <Nav />
      <Hero />
      <TripAdvisor />
      <About />
      <Rooms />
      <Dining />
      <Experience />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
