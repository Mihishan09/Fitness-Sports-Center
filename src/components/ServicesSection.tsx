"use client";

import { useEffect, useRef, useState } from "react";
import { User, Users, Activity, Dumbbell } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: User,
    title: "PERSONAL TRAINING",
    description:
      "One-on-one expert coaching tailored to your specific fitness goals and body type.",
  },
  {
    icon: Users,
    title: "GROUP CLASSES",
    description:
      "High-energy community workouts ranging from HIIT to Yoga and Spin sessions.",
  },
  {
    icon: Activity,
    title: "CARDIO ZONE",
    description:
      "Advanced cardiovascular equipment including treadmills, rowers, and elliptical bikes.",
  },
  {
    icon: Dumbbell,
    title: "WEIGHT LIFTING",
    description:
      "Professional-grade free weights, racks, and platforms for serious strength athletes.",
  },
];

export default function ServicesSection() {
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
      id="services"
      ref={ref}
      className="bg-[#0d0d0d] py-20 md:py-32"
    >
      <div className="section-container">

        {/* Header */}
        <div
          className={`mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white">
            WORLD CLASS{" "}
            <span className="text-gold">FACILITIES</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`bg-[#1a1a1a] border border-[#2a2a2a] p-6 group hover:border-gold/60 transition-all duration-500 cursor-default ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-gold" />
                </div>

                {/* Title */}
                <h3 className="text-white font-black text-sm uppercase tracking-wider mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Link */}
                <span className="text-gold text-xs font-bold uppercase tracking-widest hover:text-gold-light transition-colors flex items-center gap-1 group-hover:gap-2 transition-all">
                  LEARN MORE
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}