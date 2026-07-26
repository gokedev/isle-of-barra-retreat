import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import beachwalk from "@/assets/beachwalk.jpg";
import dolphins from "@/assets/dolphins.jpg";
import eagle from "@/assets/eagle.jpg";
import castle from "@/assets/castle.jpg";
import sunset from "@/assets/sunset.jpg";
import galleryBoat from "@/assets/gallery-boat.jpg";

export const Route = createFileRoute("/experience")({
  head: () => ({
    title: "Things to Do — Isle of Barra Beach Hotel",
    meta: [
      { name: "description", content: "Beach walks, wildlife spotting, castle visits, and island adventures from the Isle of Barra Beach Hotel." },
    ],
  }),
  component: ExperiencePage,
});

const ACTIVITIES = [
  {
    img: beachwalk,
    title: "Walk the white sands",
    desc: "Tangasdale Beach stretches for miles beneath the hotel — a sweeping curve of shell-sand and machair that feels endless. Walk east toward the headland for views across to Eriskay, or west where the beach meets the Atlantic in a long, rolling surf. In summer, the machair behind the sand is carpeted with orchids, buttercups, and red clover.",
    duration: "1–3 hours",
  },
  {
    img: dolphins,
    title: "Watch for dolphins and seals",
    desc: "Common dolphins and bottlenose dolphins are regularly spotted from the beach and the hotel windows. Grey seals haul out on the rocks at the edge of the bay, and if you're lucky, you might catch a minke whale breaking the surface further offshore. Bring binoculars and patience.",
    duration: "Anytime",
  },
  {
    img: eagle,
    title: "Sea eagles and otters",
    desc: "Barra's white-tailed eagles — reintroduced to Scotland and now thriving — soar above the coast on thermals. Otters are present but shy; your best chance is at dawn or dusk along the rocky shoreline south of the hotel. Peregrine falcons, hen harriers, and corncrakes also inhabit the island.",
    duration: "Dawn or dusk",
  },
  {
    img: castle,
    title: "Visit Kisimul Castle",
    desc: "The medieval seat of Clan MacNeil sits on its own rocky islet in Castlebay, looking like something from a fairy tale. A small boat runs from the pier to the castle throughout the day. Inside, you'll find a Great Hall, chapel, and tower with views across the bay. It's one of the most photogenic spots in the Hebrides.",
    duration: "1–2 hours",
  },
  {
    img: galleryBoat,
    title: "Boat trips and fishing",
    desc: "Castlebay is the departure point for boat trips to nearby islands including Mingulay and the Bishop's Isles — dramatic, uninhabited sea stacks with thousands of nesting seabirds. Local operators also offer deep-sea fishing trips for pollack, mackerel, and cod. In autumn, shark fishing trips are available.",
    duration: "Half or full day",
  },
  {
    img: sunset,
    title: "Chase the sunset",
    desc: "The west-facing beach puts you in prime position for some of the most spectacular sunsets in the British Isles. On clear evenings, the sky turns through gold, amber, and deep pink before fading into the short Hebridean dusk. The best show happens from the beach between 9 and 10:30 pm in midsummer.",
    duration: "Evening",
  },
];

export default function ExperiencePage() {
  return (
    <main className="bg-white">
      <Nav />

      <section className="pt-32 pb-28 bg-[#f4efe6]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="See & Do"
            title="An island that gives itself slowly"
            description="Barra isn't a place you rush through. It rewards the visitor who wanders, watches, and waits."
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {ACTIVITIES.map((act, i) => (
            <div key={act.title} className={`grid md:grid-cols-2 gap-12 items-center`}>
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={act.img}
                  alt={act.title}
                  width={1200}
                  height={900}
                  className="w-full h-[380px] object-cover"
                />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-xs uppercase tracking-widest text-[#5b6470] mb-3">{act.duration}</p>
                <h2 className="font-serif text-[#0f1d3a] text-3xl md:text-4xl mb-4">{act.title}</h2>
                <p className="text-[#3a4150] leading-relaxed">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-[#0f1d3a] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Explore the wider island</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Beyond the hotel, Barra has more to offer than you might expect. Hire a car or bring a bike
            and discover the rest of the island at your own pace.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Cockle Strand", desc: "The famous cockle-picking beach at the north end, where the runway meets the sea. planes land on the sand at low tide." },
              { title: "Vatersay Causeway", desc: "A short drive south leads to Vatersay, connected by a causeway. Wild beaches, a small museum, and a sense of being at the very edge." },
              { title: "Barra Airport", desc: "The world's only airport where scheduled flights land on a beach. Watch planes touch down on the cockle shell strand from the roadside." },
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
            Not sure what to do? Ask at reception — we know this island inside out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/local-area"
              className="bg-[#0f1d3a] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#1a2d52] transition-colors"
            >
              Local Area Guide
            </Link>
            <Link
              to="/contact"
              className="border border-[#0f1d3a] text-[#0f1d3a] px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#0f1d3a] hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
