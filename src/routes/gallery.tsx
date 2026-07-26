import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import hero from "@/assets/hero.jpg";
import hotel from "@/assets/hotel.jpg";
import sunset from "@/assets/sunset.jpg";
import beachwalk from "@/assets/beachwalk.jpg";
import castle from "@/assets/castle.jpg";
import dining from "@/assets/dining.jpg";
import bar from "@/assets/bar.jpg";
import roomSea from "@/assets/room-seaview.jpg";
import roomOcean from "@/assets/room-ocean.jpg";
import roomCabin from "@/assets/room-cabin.jpg";
import galleryClouds from "@/assets/gallery-clouds.jpg";
import galleryRoom from "@/assets/gallery-room.jpg";
import galleryFood from "@/assets/gallery-food.jpg";
import galleryMachair from "@/assets/gallery-machair.jpg";
import galleryWhisky from "@/assets/gallery-whisky.jpg";
import galleryBoat from "@/assets/gallery-boat.jpg";
import dolphins from "@/assets/dolphins.jpg";
import eagle from "@/assets/eagle.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    title: "Gallery — Isle of Barra Beach Hotel",
    meta: [
      { name: "description", content: "Photos of the Isle of Barra Beach Hotel, Tangasdale Beach, wildlife, dining, rooms, and island life." },
    ],
  }),
  component: GalleryPage,
});

type Category = "All" | "Island" | "Rooms" | "Dining" | "Wildlife";

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
}

const IMAGES: GalleryImage[] = [
  { src: hero, alt: "Wild Atlantic coastline at Tangasdale Beach", category: "Island" },
  { src: hotel, alt: "Aerial view of the hotel above Tangasdale Beach", category: "Island" },
  { src: sunset, alt: "Hebridean sunset over the Atlantic", category: "Island" },
  { src: beachwalk, alt: "Walking the white shell-sand beach", category: "Island" },
  { src: castle, alt: "Kisimul Castle in Castlebay", category: "Island" },
  { src: galleryClouds, alt: "Dramatic Hebridean sky over the bay", category: "Island" },
  { src: galleryMachair, alt: "Machair wildflowers on the coast", category: "Island" },
  { src: galleryBoat, alt: "Boat in turquoise bay water", category: "Island" },
  { src: roomSea, alt: "Sea view bedroom interior", category: "Rooms" },
  { src: roomOcean, alt: "Ocean-facing room with panoramic views", category: "Rooms" },
  { src: roomCabin, alt: "The Bolt Hole private cabin", category: "Rooms" },
  { src: galleryRoom, alt: "Sea-view bedroom with natural light", category: "Rooms" },
  { src: dining, alt: "Upper Deck sunset restaurant", category: "Dining" },
  { src: bar, alt: "Blue Lounge Bar interior", category: "Dining" },
  { src: galleryFood, alt: "Fresh Barra seafood plate", category: "Dining" },
  { src: galleryWhisky, alt: "A quiet dram at sunset", category: "Dining" },
  { src: dolphins, alt: "Dolphins spotted from the beach", category: "Wildlife" },
  { src: eagle, alt: "White-tailed sea eagle in flight", category: "Wildlife" },
];

const CATEGORIES: Category[] = ["All", "Island", "Rooms", "Dining", "Wildlife"];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? IMAGES : IMAGES.filter((img) => img.category === active);

  return (
    <main className="bg-white">
      <Nav />

      <section className="pt-32 pb-12 bg-[#f4efe6]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Gallery"
            title="Glimpses of Barra"
            description="The island speaks for itself. Here are some of the moments we've been lucky enough to witness."
          />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs uppercase tracking-widest px-5 py-2.5 transition-colors ${
                  active === cat
                    ? "bg-[#0f1d3a] text-white"
                    : "bg-[#f4efe6] text-[#5b6470] hover:bg-[#e8e2d8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3">
            {filtered.map((img, i) => (
              <div key={`${img.src}-${i}`} className="overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-[#5b6470] py-20">No photos in this category yet.</p>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
