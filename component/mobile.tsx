"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const links = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" },
];

export default function MobileNavbar() {
  return (
    <nav className="w-full bg-transparent fixed top-o left-0 z-[999] md:hidden">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between bg-black/80 backdrop-blur  ">
        {/* Logo */}
        <Image
          src="/Dr Fogelfield Logo Design (2).png"
          alt="logo"
          width={70}
          height={70}
        ></Image>

        <Sheet>
          <SheetTrigger>
            <Menu size={30} className="text-white cursor-pointer " />
          </SheetTrigger>
          <SheetContent className="z-[999] p-6">
            <SheetHeader className="hidden">
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4">
              {/* Menu Links */}
              <ul className="flex flex-col space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-black hover:text-amber-600 transition-colors"
                    >
                      {link.name}
                    </Link>
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
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
