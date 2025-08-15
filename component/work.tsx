// PreviewMyWork.jsx
import React from "react";

const furnitureImages = Array.from({ length: 12 }, (_, i) => ({
  image: `/work/funiture${i + 1}.jpg`
}));

export default function PreviewMyWork() {
  return (
    <section id="work" className="py-12 px-4 bg-white">
      <h2 className="text-5xl text-center font-bold  text-amber-900 uppercase tracking-tight mb-8">Preview My Work</h2>
      <div className=" max-w-7xl mx-auto columns-2 md:columns-3 lg:columns-4 space-y-2 gap-2  md:gap-4 md:space-y-4">
        {furnitureImages.map((item, index) => (
          <div key={index} className="break-inside-avoid">
            <img
              src={item.image}
              alt={`Furniture ${index + 1}`}
              className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
