"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, CheckCircle, Mail } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

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

  const onSubmit = async (data: FormData) => {
    // Simulate API call / replace with real endpoint
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#111111] py-20 md:py-32"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Info */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-6 text-white">
              READY TO START{" "}
              <span className="text-gold">YOUR JOURNEY?</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-md">
              Have questions about our facilities or membership plans? Drop us a
              message and our team will get back to you within 24 hours.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">
                    Call Us
                  </p>
                  <p className="text-white font-semibold text-sm">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">
                    Email Us
                  </p>
                  <p className="text-white font-semibold text-sm">
                    info@fitnesssportscenter.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">
                    Visit Us
                  </p>
                  <p className="text-white font-semibold text-sm">
                    123 Unity Plaza, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className={`w-full bg-[#0d0d0d] text-white text-sm px-4 py-3.5 border transition-colors duration-200 focus:outline-none placeholder:text-gray-700 ${
                      errors.name
                        ? "border-red-500/60 focus:border-red-400"
                        : "border-[#2a2a2a] focus:border-gold"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className={`w-full bg-[#0d0d0d] text-white text-sm px-4 py-3.5 border transition-colors duration-200 focus:outline-none placeholder:text-gray-700 ${
                      errors.email
                        ? "border-red-500/60 focus:border-red-400"
                        : "border-[#2a2a2a] focus:border-gold"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your fitness goals..."
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    className={`w-full bg-[#0d0d0d] text-white text-sm px-4 py-3.5 border transition-colors duration-200 focus:outline-none placeholder:text-gray-700 resize-none ${
                      errors.message
                        ? "border-red-500/60 focus:border-red-400"
                        : "border-[#2a2a2a] focus:border-gold"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold text-black text-xs font-black uppercase tracking-widest py-4 hover:bg-gold-light transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      SENDING...
                    </>
                  ) : (
                    "SEND MESSAGE"
                  )}
                </button>
              </form>
            ) : (
              /* Success State */
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-12 text-center">
                <div className="flex justify-center mb-5">
                  <CheckCircle className="w-16 h-16 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-black text-xl uppercase tracking-wider mb-3">
                  MESSAGE SENT!
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Thank you for reaching out. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-gold text-xs font-bold uppercase tracking-widest hover:text-gold-light transition-colors underline underline-offset-4"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}