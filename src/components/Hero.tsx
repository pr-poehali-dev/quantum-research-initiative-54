import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/c8385b83-1b8b-4997-a10f-6700f78bc6ed/files/4f20ff45-e58e-44d7-9daf-3b5d7abac7c3.jpg"
          alt="Цветы и букеты"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/30 z-[1]" />
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 drop-shadow-lg">
          ЦВЕТЫ<br />И ШАРЫ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8 drop-shadow">
          Букеты и воздушные шары для любого повода — с доставкой по городу
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-black px-8 py-3 uppercase text-sm tracking-wide font-medium hover:bg-neutral-200 transition-colors duration-300"
        >
          Заказать букет
        </a>
      </div>
    </div>
  );
}