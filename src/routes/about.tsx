import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import hotel from "@/assets/hotel.jpg";
import castle from "@/assets/castle.jpg";
import beachwalk from "@/assets/beachwalk.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    title: "About Us — Isle of Barra Beach Hotel",
    meta: [
      { name: "description", content: "Learn about the Isle of Barra Beach Hotel — a family-run Hebridean hotel on Tangasdale Beach, open May through September." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-white">
      <Nav />
      <section className="pt-32 pb-28 bg-[#f4efe6]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Our Story"
            title="A place apart since 1968"
            description="Three generations of hospitality on the edge of the Atlantic."
          />
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-[#3a4150] leading-relaxed">
              <p>
                The Isle of Barra Beach Hotel has welcomed guests to Tangasdale Beach for over fifty years.
                What began as a small family home opening its doors to visitors has grown into one of
                the Outer Hebrides' most beloved coastal retreats — though the spirit has never changed.
              </p>
              <p>
                We are still family-run, still seasonal, and still convinced that the best things in life
                are the simplest: a walk along an empty beach, a meal made from what the island offers,
                and the kind of welcome that makes you feel like you belong.
              </p>
              <p>
                The hotel sits above the sweeping shell-sand curve of Tangasdale Beach, looking out across
                the Atlantic toward the islands of Eriskay and South Uist. Behind us, machair meadows burst
                with wildflowers in summer. In front, the ocean puts on a different show every hour.
              </p>
              <p>
                We open each year from <span className="font-medium text-[#0f1d3a]">May through September</span>,
                when the Hebridean light is at its most extraordinary — long golden evenings that fade slowly
                into a brief, luminous dusk. The off-season is the island's secret, but our hotel rests during it,
                gathering strength for the guests who return, year after year.
              </p>
            </div>
            <div className="space-y-6">
              <img
                src={hotel}
                alt="Isle of Barra Beach Hotel above Tangasdale Beach"
                width={1600}
                height={1000}
                className="w-full h-[400px] object-cover"
              />
              <div className="grid grid-cols-3 gap-6 border-t border-[#5b6470]/20 pt-8">
                {[
                  ["50+", "Years welcoming guests"],
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
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={castle}
                alt="Kisimul Castle in Castlebay"
                width={1600}
                height={1000}
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#0f1d3a] text-white px-8 py-6 hidden md:block">
                <p className="font-serif text-2xl italic">Castlebay</p>
                <p className="text-xs uppercase tracking-widest text-white/60 mt-1">2 minutes from the ferry</p>
              </div>
            </div>
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-[#5b6470] mb-6">Location</p>
              <h2 className="font-serif text-[#0f1d3a] text-4xl md:text-5xl leading-tight mb-8">
                On the edge of everything, away from it all
              </h2>
              <div className="space-y-5 text-[#3a4150] leading-relaxed">
                <p>
                  The hotel is just two minutes from the Castlebay ferry terminal, where the
                  MV Caledonian Isles arrives from the mainland several times a day. Despite this
                  convenience, Tangasdale feels a world apart — a wide, quiet beach with nothing
                  but sand, sea, and sky.
                </p>
                <p>
                  Kisimul Castle, the medieval seat of Clan MacNeil, sits on its own rocky islet
                  in Castlebay. The island airport — one of the shortest scheduled flights in the
                  world — lands on the cockle shell beach at the far end of the runway. Barra is
                  a place where the ordinary rules don't quite apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#0f1d3a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="What We Believe"
            title="Simple values, honestly kept"
            light={false}
          />
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Welcome everyone",
                desc: "We are dog-friendly, family-friendly, and quietly proud of the fact that our guests come from every corner of the world. The only thing we ask is that you leave Barra a little better than you found it.",
              },
              {
                title: "Seasonal rhythm",
                desc: "We open when the island is at its best and close when it's time to rest. This isn't a limitation — it's a promise that when we're here, we're fully here. Our team lives on the island, not just works here.",
              },
              {
                title: "Honest hospitality",
                desc: "No gimmicks, no scripts. Just good rooms, home-cooked food, and staff who know the island because they love it. If you need a recommendation, ask anyone — you'll get a different answer each time, and they'll all be right.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-white/20 pt-8">
                <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#f4efe6]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionHeader
            label="Come Stay"
            title="Experience Barra for yourself"
            description="Rooms are limited and our season is short. Get in touch to check availability."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/rooms"
              className="bg-[#0f1d3a] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#1a2d52] transition-colors"
            >
              View Rooms
            </Link>
            <Link
              to="/contact"
              className="border border-[#0f1d3a] text-[#0f1d3a] px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#0f1d3a] hover:text-white transition-colors"
            >
              Enquire
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
