"use client";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Testimonial", href: "/#testimonial" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent fixed top-3 left-0 z-[999] hidden md:block px-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between bg-black/80 backdrop-blur  rounded">
        {/* Logo */}
        <Image
          src="/Dr Fogelfield Logo Design (2).png"
          alt="logo"
          width={70}
          height={70}
        ></Image>

        {/* Menu Links */}
        <ul className="flex space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white hover:text-amber  -600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a href="tel:+2348137058129">
            <button className="text-white w-max bg-amber-700 py-3 px-5 rounded flex items-center gap-1">
              Let Talk{" "}
              <Image
                src="smartphone-12-svgrepo-com.svg"
                alt="phone"
                width={30}
                height={30}
              />
            </button>
        </a>
      </div>
    </nav>
  );
}
