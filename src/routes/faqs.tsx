import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    title: "FAQs — Isle of Barra Beach Hotel",
    meta: [
      { name: "description", content: "Frequently asked questions about booking, pets, accessibility, weather, and travel to the Isle of Barra Beach Hotel." },
    ],
  }),
  component: FaqsPage,
});

const FAQS = [
  {
    q: "When are you open?",
    a: "We open each year in May and close at the end of September. Our season follows the island's best weather and longest daylight hours. Outside these months, the hotel is closed.",
  },
  {
    q: "How do I book a room?",
    a: "Contact us by email at barrahotel@aol.com or call 01871 810383 with your preferred dates. We'll check availability and confirm your booking. A deposit may be required to secure your reservation.",
  },
  {
    q: "What's included in the room rate?",
    a: "A full Scottish breakfast is included with every room. Wi-Fi is complimentary. The Bolt Hole cabin is self-catering and includes kitchen facilities.",
  },
  {
    q: "Do you accept dogs?",
    a: "Yes — well-behaved dogs are welcome in designated rooms and in The Bolt Hole. Please let us know when booking so we can allocate the right room. There is no extra charge for dogs.",
  },
  {
    q: "Is there parking?",
    a: "Yes, we have free on-site parking for all guests. Spaces are available on a first-come basis.",
  },
  {
    q: "Do you have a restaurant?",
    a: "Yes. Our Sunset Restaurant serves dinner each evening from 6:30 pm to 8:30 pm. The Blue Lounge Bar serves light meals and drinks throughout the day. Breakfast is included for all residents.",
  },
  {
    q: "Can non-residents dine at the hotel?",
    a: "The Blue Lounge Bar is open to all guests and visitors during the day. Evening dining in the Sunset Restaurant is primarily for hotel residents — please call ahead to check availability.",
  },
  {
    q: "Do you cater for dietary requirements?",
    a: "Absolutely. Please let us know about any allergies, intolerances, or dietary preferences when you book and we'll do our best to accommodate you.",
  },
  {
    q: "Is the hotel accessible?",
    a: "The hotel has ground-floor access and some accessible rooms. Please contact us directly to discuss your specific requirements and we'll do our best to help.",
  },
  {
    q: "What's the weather like?",
    a: "Hebridean weather is famously changeable. Summer temperatures range from 12–18°C with long daylight hours (sunrise around 4 am, sunset after 10 pm in June). Rain is possible any time — bring layers and a waterproof. The upside: extraordinary light and dramatic skies.",
  },
  {
    q: "How do I get to Barra?",
    a: "The MV Caledonian Isles ferry sails from Oban to Castlebay daily (5 hours). Loganair flies from Glasgow to Barra Airport (1 hour). You can also reach Barra by ferry chain from the mainland via the Uists. See our Local Area Guide for full details.",
  },
  {
    q: "Is there a car hire on the island?",
    a: "Yes, a small number of car hire providers operate from Castlebay. We recommend booking well in advance during summer as availability is limited.",
  },
  {
    q: "What is there to do on the island?",
    a: "Beach walks, wildlife spotting, Kisimul Castle, boat trips to Mingulay, fishing, cycling, and simply watching the sunset. See our Experience and Local Area pages for inspiration.",
  },
  {
    q: "Can I charge my electric vehicle?",
    a: "We don't currently have EV charging facilities on-site. There are limited public charging points in Castlebay. We recommend planning your charging around trips into the village.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Cancellation terms are provided at the time of booking. Generally, cancellations made more than 14 days before arrival receive a full refund of the deposit. Please contact us if you need to make changes.",
  },
];

export default function FaqsPage() {
  return (
    <main className="bg-white">
      <Nav />

      <section className="pt-32 pb-28 bg-[#f4efe6]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="FAQs"
            title="Common questions"
            description="Everything you need to know before your stay. If your question isn't here, please get in touch."
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-0">
            {FAQS.map((faq, i) => (
              <details key={i} className="group border-b border-[#5b6470]/20">
                <summary className="flex items-center justify-between py-6 cursor-pointer list-none">
                  <span className="font-serif text-[#0f1d3a] text-lg pr-4">{faq.q}</span>
                  <span className="text-[#5b6470] shrink-0 group-open:rotate-180 transition-transform">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </span>
                </summary>
                <p className="text-[#3a4150] text-sm leading-relaxed pb-6">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#0f1d3a] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Still have questions?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            We're happy to help with anything else. Drop us a line and we'll get back to you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:barrahotel@aol.com"
              className="bg-white text-[#0f1d3a] px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#f4efe6] transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:01871810383"
              className="border border-white/40 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-[#0f1d3a] transition-colors"
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
