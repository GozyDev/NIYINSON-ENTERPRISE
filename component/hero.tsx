import Image from "next/image";
export default function Hero() {
  return (
    <section id="home" className="w-full pt-   ">
      <div className="relative h-screen flex bg-amber-100 gap-2">
        <div className="bg-black/50 backdrop-blur absolute z-10 h-full w-full block md:hidden" />
        <div className=" relative z-20  flex justify-center items-center md:w-1/2 md:pl-5">
          <div className=" flex flex-col gap-y-5 items-center md:items-start">
            <p className="text-sm text-amber-100 md:text-amber-700 italic">
              # From raw wood to masterpiece.
            </p>

            <h1 className="text-5xl text-white md:text-black md:text-7xl font-bold uppercase tracking-tight text-center md:text-left">
              Custom Woodwork That Lasts a Lifetime
            </h1>
            <p className="text-md md:text-2xl text-white/70 tracking-wide md:text-black/70 text-center md:text-left">
              Handcrafted furniture, cabinets, and décor made with precision and
              passion
            </p>
            <a href="#work" className="text-white w-max bg-amber-700 py-3 px-5 rounded flex items-center gap-1 cursor-pointer font-medium">
              Preview My Work <Image src='/eye-svgrepo-com.f919aed0.svg' alt="eye" width={30} height={30}></Image>
            </a>
          </div>
        </div>
        <div className="absolute md:relative w-full h-screen md:w-1/2 ">
          <Image
            src="/furniture image.png"
            alt="hero image"
            width={300}
            height={300}
            className=" w-full h-full object-cover"
          ></Image>
        </div>
      </div>
    </section>
  );
}
