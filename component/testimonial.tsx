// components/Testimonials.js
"use client";

import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Michael Brown",
    rating: 5,
    quote:
      "Incredible attention to detail. You can tell they really care about their work.",
  },
  {
    name: "John Doe",
    rating: 5,
    quote:
      "Absolutely fantastic craftsmanship! My custom furniture came out even better than I imagined.",
  },
  {
    name: "Sarah Williams",
    rating: 4.5,
    quote:
      "Very professional and skilled. The cabinets were installed perfectly and on time.",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scrollTestimonials = (direction: "left" | "right") => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.clientWidth; // Scroll by container width

      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Initial check
      checkScrollPosition();

      // Add scroll event listener
      container.addEventListener("scroll", checkScrollPosition);

      // Clean up
      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
      };
    }
  }, []);

  return (
    <section id="testimonial" className="py-16">
      <div className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-5xl font-bold  text-amber-900 uppercase tracking-tight  text-center   mb-8">
          Clients Reviews
        </h2>
        <p className="text-center text-xl text-gray-600 mb-8">
          Our Clients Say It Best.
        </p>

        <div className="flex flex-col-reverse md:flex-row gap-2 md:items-center">
          <div className="md:w-1/2  ">
            <Image
              src="/capenterSmile.png"
              alt="Capenter image "
              width={400}
              height={0}
              className="mx-auto w-full"
            ></Image>
          </div>
          <div className="md:w-1/2 relative">
            {/* Left scroll button */}
            {showLeftButton && (
              <button
                onClick={() => scrollTestimonials("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full shadow-lg p-1.5 hover:bg-amber-700 transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Right scroll button */}
            {showRightButton && (
              <button
                onClick={() => scrollTestimonials("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full shadow-lg p-1.5 hover:bg-amber-700 transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}

            <div
              ref={containerRef}
              className="overflow-x-auto flex gap-3 snap-x snap-mandatory scroll-smooth no-scrollbar w-full shadow"
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="bg-amber-50 p-6 py-20 min-w-full w-full snap-center rounded"
                >
                  <h4 className="text-xl font-semibold text-gray-900">
                    {t.name}
                  </h4>

                  <p className="text-gray-700 italic mb-4">"{t.quote}"</p>

                  <div className="flex mb-3">
                    {Array.from({ length: Math.floor(t.rating) }, (_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                    {t.rating % 1 !== 0 && (
                      <FaStar
                        key="half"
                        className="text-yellow-500 opacity-50"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
