import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import dining from "@/assets/dining.jpg";
import bar from "@/assets/bar.jpg";

export const Route = createFileRoute("/dining")({
  head: () => ({
    title: "Dining — Isle of Barra Beach Hotel",
    meta: [
      { name: "description", content: "Sunset dining at the Upper Deck restaurant and relaxed drinks in the Blue Lounge Bar. Fresh Hebridean seafood, local produce." },
    ],
  }),
  component: DiningPage,
});

function DiningPage() {
  return (
    <main className="bg-white">
      <Nav />

      <section className="pt-32 pb-28 bg-[#f4efe6]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Eat & Drink"
            title="Sunsets, local catch, and a quiet dram"
            description="Our kitchen works with what the island and surrounding waters provide. The menu changes with the tide and the season."
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src={dining}
                alt="Upper Deck sunset restaurant"
                width={1600}
                height={1000}
                className="w-full h-[460px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="uppercase tracking-[0.3em] text-xs text-[#5b6470] mb-4">Upper Deck</p>
              <h2 className="font-serif text-[#0f1d3a] text-3xl md:text-4xl mb-6">The Sunset Restaurant</h2>
              <p className="text-[#3a4150] leading-relaxed mb-6">
                Evening meals served in our upper-level restaurant with sweeping views across Tangasdale Bay.
                Watch the light change over the Atlantic as you eat — the sunset service is the most popular
                seat in the house.
              </p>
              <p className="text-[#3a4150] leading-relaxed mb-8">
                Our menu is built around fresh fish landed on the island, North Uist smoked salmon, Barra scallops,
                and seasonal produce. Fruits, salads, and vegetables arrive regularly from our long-time supplier in
                Oban. If the fishermen have had a good day, you'll know about it on your plate.
              </p>
              <div className="border-t border-[#5b6470]/20 pt-6">
                <p className="text-xs uppercase tracking-widest text-[#5b6470] mb-3">Hours</p>
                <p className="text-[#0f1d3a] font-medium">Dinner: 6:30 pm – 8:30 pm (daily in season)</p>
                <p className="text-[#5b6470] text-sm mt-1">Residents only. Booking recommended.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f4efe6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <p className="uppercase tracking-[0.3em] text-xs text-[#5b6470] mb-4">Blue Lounge</p>
              <h2 className="font-serif text-[#0f1d3a] text-3xl md:text-4xl mb-6">The Bar</h2>
              <p className="text-[#3a4150] leading-relaxed mb-6">
                A relaxed lounge bar with bottled beers, soft drinks, a thoughtful spirits selection, and easy
                meals throughout the day. Pull up a chair by the window — the view is free and the conversation
                is usually with fellow guests who've come from somewhere interesting.
              </p>
              <p className="text-[#3a4150] leading-relaxed mb-8">
                We keep a selection of Scottish gins, whiskies including island malts, and a considered wine list.
                Light lunches and snacks are available through the afternoon if you'd rather not leave the comfort
                of the sofa.
              </p>
              <div className="border-t border-[#5b6470]/20 pt-6">
                <p className="text-xs uppercase tracking-widest text-[#5b6470] mb-3">Hours</p>
                <p className="text-[#0f1d3a] font-medium">11:00 am – 10:30 pm (daily in season)</p>
                <p className="text-[#5b6470] text-sm mt-1">Open to all guests. No reservation needed.</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={bar}
                alt="Blue Lounge Bar"
                width={1200}
                height={900}
                className="w-full h-[460px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#0f1d3a] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionHeader
            label="Sample Menu"
            title="What's on your plate"
            light={false}
          />
          <p className="text-white/70 max-w-2xl mx-auto mb-12">
            Our menu changes daily based on what's available. Here's a taste of what to expect.
          </p>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div>
              <h3 className="font-serif text-xl mb-4 border-b border-white/20 pb-3">Starters</h3>
              <ul className="space-y-3 text-white/75 text-sm">
                <li>North Uist smoked salmon with lemon and dill</li>
                <li>Barra crab on toast with chili lime dressing</li>
                <li>Hebridean cheese board with oatcakes</li>
                <li>Roasted beetroot and goat cheese salad</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4 border-b border-white/20 pb-3">Mains</h3>
              <ul className="space-y-3 text-white/75 text-sm">
                <li>Pan-fried Atlantic cod with crushed potatoes</li>
                <li>Local lamb rack with herb crust and root vegetables</li>
                <li>Hand-diver scallops with black pudding</li>
                <li>Isle of Barra venison casserole</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4 border-b border-white/20 pb-3">Desserts</h3>
              <ul className="space-y-3 text-white/75 text-sm">
                <li>Sticky toffee pudding with cream</li>
                <li>Lemon posset with shortbread</li>
                <li>Selection of Scottish cheeses</li>
                <li>Warm chocolate brownie</li>
              </ul>
            </div>
          </div>
          <p className="text-white/50 text-xs mt-8 uppercase tracking-widest">Sample only — actual dishes depend on the day's catch and seasonal availability</p>
        </div>
      </section>

      <section className="py-20 bg-[#f4efe6]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#3a4150] mb-6">
            Dietary requirements? We're happy to accommodate. Just let us know when you book.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#0f1d3a] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#1a2d52] transition-colors"
          >
            Reserve a Table
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
