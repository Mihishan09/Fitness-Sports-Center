"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')`,
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Gold left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 section-container w-full pt-20">
        <div
          className={`transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 px-4 py-2 mb-8">
            <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-xs font-bold uppercase tracking-widest">
              Premier Fitness Destination
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-6">
            <span
              className={`block text-white transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              ELEVATE YOUR
            </span>
            <span
              className={`block text-gold transition-all duration-700 delay-300 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              STRENGTH
            </span>
          </h1>

          {/* Subtext */}
          <p
            className={`text-gray-300 text-lg max-w-md mb-10 leading-relaxed transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Experience premium fitness facilities and expert coaching designed
            to push your limits and transform your lifestyle.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button
              onClick={() => scrollTo("#membership")}
              className="bg-gold text-black text-xs font-black uppercase tracking-widest px-10 py-4 hover:bg-gold-light transition-all duration-300 hover:scale-105 active:scale-95"
            >
              JOIN NOW
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="border border-white text-white text-xs font-black uppercase tracking-widest px-10 py-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              VIEW CLASSES
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-gold animate-pulse" />
      </div>
    </section>
  );
}