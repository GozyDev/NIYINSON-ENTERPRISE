// AboutSection.jsx
import Image from "next/image";

export const beliefs = [
  {
    id: 1,
    text: "Your furniture should be more than something you use — it should be a story you’re proud to tell.",
  },
  {
    id: 2,
    text: "It should fit your space perfectly, not force your space to adapt.",
  },
  {
    id: 3,
    text: "It should be made with care, using quality materials that last for decades.",
  },
  {
    id: 4,
    text: "Every curve, joint, and finish should be chosen to match your vision, not someone else’s trend.",
  },
  {
    id: 5,
    text: "We believe in creating pieces that grow richer with age, becoming part of your family’s memories.",
  },
];

export default function VisionSection() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center gap-4 md:space-x-[-100px] py-12 px-4 md:px-12 bg-gray-50"
    >
      {/* Text */}
      <div className="flex-1 rounded relative z-10 bg-gray-50/30 backdrop-blur-lg">
        <div className="p-[5px] md:p-[20px] md:border-l  border-l-amber-800 ">
          <h2 className="text-5xl font-bold mb-4 text-amber-900 uppercase tracking-tight">
            I Believe . . .
          </h2>
          <div>
            <ul className="space-y-5">
              {beliefs.map((belief) => (
                <li key={belief.id} className="flex  gap-3">
                  <Image
                    src="/check-all-big-svgrepo-com.svg"
                    alt="check"
                    width={30}
                    height={30}
                  ></Image>{" "}
                  <p className="text-lg text-black/70 font-medium">{belief.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="flex-1 h-[600px]">
        <Image
          src="/woodWork.jpg"
          alt="Workshop photo"
          width={400}
          height={400}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
