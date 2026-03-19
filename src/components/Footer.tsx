import Link from "next/link";
import { Dumbbell, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#membership", label: "Membership" },
  { href: "#trainers", label: "Trainers" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#1a1a1a]">
      <div className="section-container py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-2 mb-4 w-fit">
              <Dumbbell className="w-5 h-5 text-gold" />
              <span className="text-white font-bold text-sm tracking-widest uppercase">
                FITNESS <span className="text-gold">SPORTS</span> CENTER
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Premier fitness destination designed to elevate your strength and
              transform your lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-5">
              Follow Us
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-xs">
              Stay connected for tips, updates, and community events.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Fitness Sports Center. All rights reserved.
          </p>
          <a
            href="#home"
            className="text-xs text-gray-700 hover:text-gold transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}