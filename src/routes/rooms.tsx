import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import roomSea from "@/assets/room-seaview.jpg";
import roomOcean from "@/assets/room-ocean.jpg";
import roomCabin from "@/assets/room-cabin.jpg";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    title: "Rooms — Isle of Barra Beach Hotel",
    meta: [
      { name: "description", content: "Sea-view rooms and a private self-cabin on Tangasdale Beach, Isle of Barra. Breakfast included, dog-friendly stays." },
    ],
  }),
  component: RoomsPage,
});

const ROOMS = [
  {
    img: roomSea,
    name: "Sea View Room",
    tagline: "Fall asleep to the sound of the surf",
    desc: "Comfortable rooms with mesmerising glimpses of the sea, sandy bay, and the islands beyond. Wake to gannets diving and the tide pulling at the shore. Our Sea View rooms are the most popular choice for couples and solo travellers who want that constant, quiet connection with the ocean.",
    specs: ["Double or twin configuration", "Sea-facing window with bay views", "Full Scottish breakfast included", "Free Wi-Fi", "Tea and coffee making facilities"],
    price: "From £120 per night",
  },
  {
    img: roomOcean,
    name: "Ocean-Facing Room",
    tagline: "Uninterrupted Atlantic views from your bed",
    desc: "Our most-requested rooms — uninterrupted Atlantic views stretch out from your window as far as the eye can see. Watch the gannets dive while the kettle boils. These rooms sit at the front of the hotel, giving you the full, dramatic sweep of Tangasdale Beach and the open ocean beyond.",
    specs: ["King-size bed", "Panoramic ocean-facing windows", "Spectacular sunset views", "Full Scottish breakfast included", "Free Wi-Fi", "Upgraded toiletries"],
    price: "From £155 per night",
  },
  {
    img: roomCabin,
    name: "The Bolt Hole",
    tagline: "Your own private island cabin",
    desc: "A private, self-contained cabin sleeping up to six. Your own front door, your own slice of the island. The Bolt Hole is perfect for families, small groups, or anyone who wants a bit more space and independence. It has a kitchen, living area, and its own garden space overlooking the machair.",
    specs: ["Sleeps up to 6", "Self-contained with kitchen", "Private entrance and garden", "Dog friendly", "Living and dining area", "Ideal for families and groups"],
    price: "From £195 per night",
  },
];

export default function RoomsPage() {
  return (
    <main className="bg-white">
      <Nav />
      <section className="pt-32 pb-28 bg-[#f4efe6]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Accommodation"
            title="Rooms that face the ocean"
            description="Every room in the hotel is sea-facing. You don't need a balcony to feel the Atlantic — it's right there, through your window, all day and all night."
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {ROOMS.map((room, i) => (
            <div key={room.name} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={room.img}
                  alt={room.name}
                  width={1200}
                  height={900}
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="uppercase tracking-[0.3em] text-xs text-[#5b6470] mb-3">{room.price}</p>
                <h2 className="font-serif text-[#0f1d3a] text-3xl md:text-4xl mb-2">{room.name}</h2>
                <p className="font-serif text-[#5b6470] italic text-lg mb-6">{room.tagline}</p>
                <p className="text-[#3a4150] leading-relaxed mb-8">{room.desc}</p>
                <ul className="space-y-2 mb-8">
                  {room.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-[#3a4150]">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0f1d3a] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-block text-sm text-[#0f1d3a] border-b border-[#0f1d3a] pb-1 hover:opacity-70 transition-opacity"
                >
                  Enquire to stay
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-[#0f1d3a] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Good to know</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              { title: "Breakfast", desc: "A full Scottish breakfast is included with every room. Served in the restaurant with views across the bay." },
              { title: "Dogs welcome", desc: "Well-behaved dogs stay free in designated rooms and The Bolt Hole. Please let us know when booking." },
              { title: "Season", desc: "We open May through September. Rooms are limited and book up quickly — early enquiry is recommended." },
            ].map((item) => (
              <div key={item.title} className="border-t border-white/20 pt-6">
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f4efe6]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#3a4150] mb-6">
            Ready to book? Contact us with your dates and we'll check availability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:barrahotel@aol.com?subject=Room%20enquiry"
              className="bg-[#0f1d3a] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#1a2d52] transition-colors"
            >
              Enquire by Email
            </a>
            <a
              href="tel:01871810383"
              className="border border-[#0f1d3a] text-[#0f1d3a] px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#0f1d3a] hover:text-white transition-colors"
            >
              Call 01871 810383
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
