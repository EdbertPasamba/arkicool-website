import React from "react";
import { motion } from "framer-motion";

import logo1 from "../assets/images/brands/Logo1.png";
import logo2 from "../assets/images/brands/Logo2.png";
import logo3 from "../assets/images/brands/Logo3.png";
import logo4 from "../assets/images/brands/Logo4.png";

const brands = [
  { id: "logo1", src: logo1 },
  { id: "logo2", src: logo2 },
  { id: "logo3", src: logo3 },
  { id: "logo4", src: logo4 },
];

export default function BrandCarousel() {
  return (
    <section className="py-10 bg-gray-100 overflow-hidden">
      <h2 className="text-center text-2xl font-semibold text-gray-600 mb-6">
        Trusted by
      </h2>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-10 min-w-max"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }} // Move left continuously
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          }}
        >
           {[...brands].map((brand) => (
            <img
              key={brand.id}
              src={brand.src}
              alt="Brand Logo"
              className="h-16 w-auto object-contain"
            />
           ))}
        </motion.div>
      </div>
    </section>
  );
}
