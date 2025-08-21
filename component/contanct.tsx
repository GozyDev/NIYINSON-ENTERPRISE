// components/ContactSection.tsx
"use client";

import { Phone } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle sending data (API or service)
  };

  return (
    <section id="contact" className="bg--50 py-14 pb-[100px] px-6">
      <div className="max-w-7xl mx-auto  ">
        {/* Form */}
        <div>
          <div className="flex flex-col gap-4 md:gap-0  md:flex-row  w-full  max-w-7xl">
            <div className="w-full flex flex-col  justify-center">
              <span className="space-y-3">
                <h2 className="text-5xl uppercase text-amber-900 font-bold  mb-[16px] tracking-tight flex items-center ">
                  Contact me
                </h2>
                <p className="text-black/70">
                  Reach out today custom woodwork that fits your vision starts
                  with a conversation.
                </p>
                <a href="mailto:niyosonenterprise137@gmail.com ">
                  <h3 className="text-xl md:text-4xl text-gray-500 animate-pulse ">
                    niyosonenterprise137@gmail.com
                  </h3>
                </a>
              </span>
              {/* WhatsApp & Call */}
              <div className="mt-6 flex gap-4">
                <a
                  href="https://wa.me/2348137058129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center gap-2"
                >
                  WhatsApp{" "}
                  <Image
                    src="/whatsapp-svgrepo-com.svg"
                    alt="whatsapp Logo"
                    width={30}
                    height={30}
                  ></Image>
                </a>
                <a
                  href="tel:+2348137058129"
                  className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 flex items-center gap-1"
                >
                  Call Me{" "}
                  <Image
                    src="smartphone-12-svgrepo-com.svg"
                    alt="phone"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
            <div className="w-full h-96 bg-gray-300 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.951733780113!2d3.2744482747544605!3d6.6529049933418305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b90b534ef3f51%3A0xc4282020a0a6c7a0!2s120%20Old%20Ota%20Rd%2C%20Abule%20Egba%2C%20Lagos%20100276%2C%20Lagos!5e0!3m2!1sen!2sng!4v1755752709393!5m2!1sen!2sng"
                width="600"
                height="450"
                style={{border:0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Map (optional) */}
      </div>
    </section>
  );
}
