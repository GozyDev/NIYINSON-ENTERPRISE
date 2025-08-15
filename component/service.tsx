// ServicesSection.jsx
import Image from "next/image";
import { services } from "@/data/servicesData";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 ">
      <div className="max-w-7x mx-auto px-4 md:px-12">
        <h2 className="text-5xl uppercase text-amber-900 font-bold text-center mb-12 tracking-tight">MY  Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow p-6 py-12 rounded-xl text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl tracking-tight text-black font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
