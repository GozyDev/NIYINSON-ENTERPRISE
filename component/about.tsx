// AboutSection.jsx
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col-reverse md:flex-row items-center gap-4 md:space-x-[-100px] py-12 px-4 md:px-12 bg-gray-50"
    >
      {/* Image */}
      <div className="flex-1 h-[600px]">
        <Image
          src="/cansu-hangul-CbiyI2cl0V4-unsplash.jpg"
          alt="Workshop photo"
          width={400}
          height={400}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      {/* Text */}
      <div className="flex-1 rounded relative z-10 bg-gray-50/30 backdrop-blur-lg">
        <div className="p-[5px] md:p-[20px] md:border-r  border-r-amber-800 ">
          <h2 className="text-5xl font-bold mb-4 text-amber-900 uppercase tracking-tight flex items-center">
            About{" "}
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-[40px] tracking-wide">
            Hi, I’m <span className="font-semibold">David Cole</span>. I’ve been
            crafting unique wood pieces for over <strong>10 years</strong>,
            blending traditional craftsmanship with modern design to bring your
            vision to life. In that time, I’ve completed more than{" "}
            <strong>200 projects</strong> for clients who value detail and
            quality — and I’m proud to say we’ve achieved{" "}
            <strong>100% client satisfaction</strong>. Serving{" "}
            <strong>Lagos, Nigeria</strong> and beyond, my mission is simple: to
            turn raw wood into something you’ll treasure for a lifetime.
          </p>
        </div>
      </div>
    </section>
  );
}
