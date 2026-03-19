"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: "BASIC",
    price: "49",
    period: "/mo",
    features: [
      "24/7 Gym Access",
      "Basic Cardio Equipment",
      "Locker Room Access",
      "Group Classes (2/week)",
    ],
    cta: "GET STARTED",
    highlighted: false,
  },
  {
    name: "PRO",
    price: "89",
    period: "/mo",
    features: [
      "Unlimited Gym Access",
      "All Group Classes",
      "1 Personal Session/mo",
      "Sauna & Steam Room",
      "Nutrition Guide",
    ],
    cta: "JOIN NOW",
    highlighted: true,
    badge: "BEST POPULAR",
  },
  {
    name: "ELITE",
    price: "149",
    period: "/mo",
    features: [
      "Everything in Pro",
      "Weekly Personal Training",
      "Nutrition Coaching",
      "Private Locker & Laundry",
      "Priority Booking",
    ],
    cta: "GO ELITE",
    highlighted: false,
  },
];

export default function MembershipSection() {
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

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="membership"
      ref={ref}
      className="bg-[#111111] py-20 md:py-32"
    >
      <div className="section-container">

        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white">
            MEMBERSHIP{" "}
            <span className="text-gold">PLANS</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col transition-all duration-700 p-8 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${
                plan.highlighted
                  ? "bg-[#1a1500] border-2 border-gold md:scale-105 md:py-10 shadow-2xl shadow-gold/10"
                  : "bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a]"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-black text-xs font-black uppercase tracking-widest px-5 py-1.5 whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">
                {plan.name}
              </p>

              {/* Price */}
              <div className="flex items-end gap-0.5 mb-6 pb-6 border-b border-[#2a2a2a]">
                <span className="text-gold text-xl font-black self-start mt-2">$</span>
                <span
                  className={`text-6xl font-black leading-none ${
                    plan.highlighted ? "text-gold" : "text-white"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm mb-2 ml-1">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    <Check className="w-4 h-4 text-gold flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className={`w-full py-3.5 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 ${
                  plan.highlighted
                    ? "bg-gold text-black hover:bg-gold-light"
                    : "border border-[#3a3a3a] text-gray-300 hover:border-gold hover:text-gold"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}