import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

export const Route = createFileRoute("/local-area")({
  head: () => ({
    title: "Local Area Guide — Isle of Barra Beach Hotel",
    meta: [
      { name: "description", content: "Your guide to getting to Barra, beaches, ferries, airports, wildlife, and nearby islands from the Isle of Barra Beach Hotel." },
    ],
  }),
  component: LocalAreaPage,
});

export default function LocalAreaPage() {
  return (
    <main className="bg-white">
      <Nav />

      <section className="pt-32 pb-28 bg-[#f4efe6]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Local Area"
            title="Your guide to Barra and beyond"
            description="Barra is the southernmost inhabited island of the Outer Hebrides — remote, beautiful, and easier to reach than you might think."
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-[#0f1d3a] text-3xl md:text-4xl mb-12">Getting here</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="border-t border-[#5b6470]/20 pt-6">
              <h3 className="font-serif text-xl text-[#0f1d3a] mb-3">By ferry</h3>
              <p className="text-[#3a4150] text-sm leading-relaxed mb-3">
                The MV Caledonian Isles sails from Oban to Castlebay several times daily during
                the season (March–October). The crossing takes approximately 5 hours. CalMac
                ferries operate the route — book early in summer as spaces fill quickly.
              </p>
              <p className="text-xs uppercase tracking-widest text-[#5b6470]">calmac.co.uk</p>
            </div>
            <div className="border-t border-[#5b6470]/20 pt-6">
              <h3 className="font-serif text-xl text-[#0f1d3a] mb-3">By air</h3>
              <p className="text-[#3a4150] text-sm leading-relaxed mb-3">
                Loganair operates flights from Glasgow to Barra Airport — the only airport in
                the world where scheduled flights land on a beach. The flight takes about 1 hour
                and offers spectacular views of the Hebrides.
              </p>
              <p className="text-xs uppercase tracking-widest text-[#5b6470]">loganair.co.uk</p>
            </div>
            <div className="border-t border-[#5b6470]/20 pt-6">
              <h3 className="font-serif text-xl text-[#0f1d3a] mb-3">By ferry + drive</h3>
              <p className="text-[#3a4150] text-sm leading-relaxed mb-3">
                You can also reach Barra via a chain of ferry crossings from the mainland through
                the islands: Eriskay to Barra is a short 40-minute ferry. Many visitors combine
                this with a drive through the Uists.
              </p>
              <p className="text-xs uppercase tracking-widest text-[#5b6470]">scotlandcalm.co.uk</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0f1d3a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl mb-12">Beaches</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Tangasdale Beach", desc: "Right below the hotel. A sweeping west-facing shell-sand beach — the best sunset spot on the island. Long, quiet, and never crowded.", highlight: true },
              { name: "Cockle Strand", desc: "The famous beach-airport at the north end of the island. Watch planes land on the sand at low tide. Also great for cockle-picking." },
              { name: "Vatersay Bay", desc: "A sheltered, turquoise bay on Vatersay island, connected by causeway. One of the most beautiful beaches in the Hebrides." },
              { name: "Eoligarry Beach", desc: "A remote, north-facing beach at the tip of the island. Wild, windswept, and backed by dunes — perfect for a solitary walk." },
              { name: "Allers Bay", desc: "A quiet east-facing beach near Castlebay with views toward Kisimul Castle. Sheltered from the Atlantic swell." },
              { name: "Brevigh", desc: "A hidden beach on the east coast. Sandy, secluded, and rarely visited — the kind of place that makes Barra special." },
            ].map((b) => (
              <div key={b.name} className={`border-t ${b.highlight ? "border-[#34e0a1]" : "border-white/20"} pt-6`}>
                <h3 className="font-serif text-xl mb-2">{b.name}</h3>
                {b.highlight && <p className="text-[#34e0a1] text-xs uppercase tracking-widest mb-2">Below the hotel</p>}
                <p className="text-white/70 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-[#0f1d3a] text-3xl md:text-4xl mb-12">Wildlife spotting guide</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { animal: "Dolphins", where: "From the beach or hotel windows, especially in the morning", when: "April – October" },
              { animal: "Grey seals", where: "Hauling out on rocks at the south end of Tangasdale Beach", when: "Year-round, pupping Oct–Dec" },
              { animal: "White-tailed eagles", where: "Soaring above the coast and machair on thermals", when: "March – September" },
              { animal: "Otters", where: "Rocky shoreline south of the hotel, best at dawn or dusk", when: "Year-round" },
              { animal: "Minke whales", where: "Offshore, visible from the headland on calm days", when: "June – September" },
              { animal: "Seabirds", where: "Gannets, fulmars, puffins (on Mingulay), skuas", when: "April – August" },
              { animal: "Corncrakes", where: "In the tall grass and meadow fields behind the beach", when: "May – July (nocturnal)" },
              { animal: "Golden eagles", where: "Occasionally over the hills in the north of the island", when: "Year-round" },
            ].map((w) => (
              <div key={w.animal} className="flex gap-4 border-b border-[#5b6470]/10 pb-4">
                <div className="w-32 shrink-0">
                  <p className="font-serif text-lg text-[#0f1d3a]">{w.animal}</p>
                  <p className="text-xs text-[#5b6470]">{w.when}</p>
                </div>
                <p className="text-[#3a4150] text-sm leading-relaxed">{w.where}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f4efe6]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-[#0f1d3a] text-3xl md:text-4xl mb-12">Nearby islands</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Eriskay", desc: "A 40-minute ferry from Ardmhor. Famous for Eriskay ponies, the Eriskay cream liqueur, and the beach where the SS Politician wrecked carrying 264,000 bottles of whisky." },
              { name: "South Uist", desc: "Connected to Barra via Eriskay causeway. Home to Ben Mula, the highest point in the southern Outer Hebrides, and some of the finest machair coastline." },
              { name: "Mingulay", desc: "An uninhabited island 12 miles south of Barra, accessible by boat trip. Towering sea stacks, thousands of nesting seabirds, and no permanent residents since 1912." },
            ].map((is) => (
              <div key={is.name} className="border-t border-[#5b6470]/20 pt-6">
                <h3 className="font-serif text-xl text-[#0f1d3a] mb-3">{is.name}</h3>
                <p className="text-[#3a4150] text-sm leading-relaxed">{is.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0f1d3a] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl mb-6">Getting around</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Barra is small but worth exploring at your own pace. A hire car is the best option
            for covering the island, though cycling and walking are also rewarding.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Car hire", desc: "Available from Castlebay. Book in advance during summer — there are only a handful of providers on the island." },
              { title: "Bus service", desc: "A local bus connects Castlebay with the north of the island and runs a few times daily. Limited but useful." },
              { title: "Cycling", desc: "Flat terrain along the coast road makes cycling pleasant. Bring your own or hire locally in Castlebay." },
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
            Planning a trip? We can help with recommendations and local knowledge.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#0f1d3a] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#1a2d52] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
