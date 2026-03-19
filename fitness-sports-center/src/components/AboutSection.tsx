"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { value: "100%", label: "Satisfaction" },
  { value: "24/7", label: "Access" },
  { value: "Elite", label: "Training" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#111111] py-20 md:py-32"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Column */}
          <div
            className={`relative transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative h-72 md:h-[480px] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                alt="Fitness Sports Center Interior"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Decorative gold border accent */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-4 border-gold hidden md:block" />
            <div className="absolute -top-4 -left-4 w-12 h-12 border-2 border-gold/40 hidden md:block" />
          </div>

          {/* Content Column */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-6 text-white">
              PIONEERING{" "}
              <span className="text-gold">PERFORMANCE</span>{" "}
              SINCE 2023
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              At the heart of Fitness Sports Center lies a commitment to building
              stronger communities through elite fitness experiences. Founded in
              2023, we've been dedicated to transforming lives through
              evidence-based training methodologies.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our world-class facility is equipped with the latest equipment and
              staffed by certified professionals who are passionate about helping
              you reach your full potential. Whether you're a beginner or an
              elite athlete, we have the tools and expertise to guide your
              journey every step of the way.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#2a2a2a]">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center transition-all duration-500 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <p className="text-gold text-2xl md:text-3xl font-black mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}