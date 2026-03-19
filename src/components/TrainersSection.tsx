"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const trainers = [
  {
    name: "MARCUS THORNE",
    role: "POWERLIFTING SPECIALIST",
    description:
      "Former competitive powerlifter with over a decade of coaching experience specializing in strength and muscle development.",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80",
  },
  {
    name: "SARAH VANCE",
    role: "HIIT & MOBILITY",
    description:
      "Certified personal trainer who designs and delivers high-intensity interval and mobility training sessions.",
    image:
      "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=600&q=80",
  },
  {
    name: "DAMIEN CROSS",
    role: "ATHLETIC PERFORMANCE",
    description:
      "Sports performance coach with expertise in functional movement and biomechanics coaching for athletes.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
  },
];

export default function TrainersSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="trainers"
      ref={ref}
      className="bg-[#0d0d0d] py-20 md:py-32"
    >
      <div className="section-container">

        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row sm:justify-between sm:items-end mb-14 gap-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
              Expert Coaching
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white">
              MEET THE{" "}
              <span className="text-gold">ELITE</span>
            </h2>
          </div>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gold text-xs font-bold uppercase tracking-widest hover:text-gold-light transition-colors flex items-center gap-1"
          >
            VIEW ALL STAFF →
          </button>
        </div>

        {/* Trainers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.name}
              className={`group transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Photo */}
              <div className="relative h-64 md:h-80 overflow-hidden mb-5">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {/* Gold bottom border reveal */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              {/* Info */}
              <div>
                <h3 className="text-white font-black text-lg uppercase tracking-wide mb-0.5">
                  {trainer.name}
                </h3>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  {trainer.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {trainer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}