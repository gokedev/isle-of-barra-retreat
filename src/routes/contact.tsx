import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    title: "Contact & Book — Isle of Barra Beach Hotel",
    meta: [
      { name: "description", content: "Get in touch with the Isle of Barra Beach Hotel. Room enquiries, bookings, and directions to Tangasdale Beach." },
    ],
  }),
  component: ContactPage,
});

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const dates = data.get("dates");
    const guests = data.get("guests");
    const message = data.get("message");

    const subject = encodeURIComponent(`Room enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPreferred dates: ${dates}\nNumber of guests: ${guests}\n\n${message}`
    );
    window.location.href = `mailto:barrahotel@aol.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <main className="bg-white">
      <Nav />

      <section className="pt-32 pb-28 bg-[#0f1d3a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Plan Your Stay"
            title="Come stay with us"
            description="We'd love to hear from you. Rooms are limited and our season is short — contact us to check availability."
            light={false}
          />
          <div className="grid md:grid-cols-3 gap-10 text-center border-t border-white/10 pt-12">
            <div>
              <p className="uppercase tracking-widest text-xs text-white/60 mb-3">Telephone</p>
              <a href="tel:01871810383" className="font-serif text-2xl hover:text-white/80">
                01871 810383
              </a>
            </div>
            <div>
              <p className="uppercase tracking-widest text-xs text-white/60 mb-3">Email</p>
              <a href="mailto:barrahotel@aol.com" className="font-serif text-2xl hover:text-white/80">
                barrahotel@aol.com
              </a>
            </div>
            <div>
              <p className="uppercase tracking-widest text-xs text-white/60 mb-3">Address</p>
              <p className="font-serif text-xl leading-snug">
                Tangasdale Beach<br />Isle of Barra &middot; HS9 5XW
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#f4efe6]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-[#0f1d3a] text-3xl mb-6">Send us an enquiry</h2>
              <p className="text-[#3a4150] mb-8 leading-relaxed">
                Fill in the form and we'll get back to you as soon as we can. You can also
                call us directly or send an email — whichever you prefer.
              </p>
              {submitted ? (
                <div className="bg-white border border-[#5b6470]/20 p-8 text-center">
                  <p className="font-serif text-2xl text-[#0f1d3a] mb-3">Thank you</p>
                  <p className="text-[#3a4150]">
                    Your enquiry has been prepared. We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[#5b6470] mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border border-[#5b6470]/30 bg-white px-4 py-3 text-sm text-[#0f1d3a] focus:outline-none focus:border-[#0f1d3a]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[#5b6470] mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-[#5b6470]/30 bg-white px-4 py-3 text-sm text-[#0f1d3a] focus:outline-none focus:border-[#0f1d3a]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="dates" className="block text-xs uppercase tracking-widest text-[#5b6470] mb-2">Preferred dates</label>
                      <input
                        type="text"
                        id="dates"
                        name="dates"
                        placeholder="e.g. 15–20 August"
                        className="w-full border border-[#5b6470]/30 bg-white px-4 py-3 text-sm text-[#0f1d3a] focus:outline-none focus:border-[#0f1d3a]"
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-xs uppercase tracking-widest text-[#5b6470] mb-2">Guests</label>
                      <select
                        id="guests"
                        name="guests"
                        className="w-full border border-[#5b6470]/30 bg-white px-4 py-3 text-sm text-[#0f1d3a] focus:outline-none focus:border-[#0f1d3a]"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#5b6470] mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Any special requirements, questions, or notes..."
                      className="w-full border border-[#5b6470]/30 bg-white px-4 py-3 text-sm text-[#0f1d3a] focus:outline-none focus:border-[#0f1d3a] resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0f1d3a] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#1a2d52] transition-colors w-full"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
            <div>
              <h2 className="font-serif text-[#0f1d3a] text-3xl mb-6">Find us</h2>
              <p className="text-[#3a4150] mb-6 leading-relaxed">
                The hotel sits directly above Tangasdale Beach, two minutes from the Castlebay ferry
                terminal. If you're arriving by ferry, turn left at the main road and follow the coast
                road west — we're the building right on the beach.
              </p>
              <div className="overflow-hidden border border-[#5b6470]/20">
                <iframe
                  title="Map of Isle of Barra Beach Hotel"
                  src="https://www.google.com/maps?q=Isle+of+Barra+Beach+Hotel,+Tangasdale+Beach,+Isle+of+Barra,+HS9+5XW&output=embed"
                  width="100%"
                  height="380"
                  style={{ border: 0, filter: "grayscale(0.2) contrast(0.95)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
