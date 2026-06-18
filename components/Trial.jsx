"use client";

import Button from "./ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

const Trial = () => {
  return (
    <section className="mt-10 sm:mt-14">
      {/* On mobile: stack vertically with a solid bg; on md+: background image side-by-side */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[url('/trial.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center md:justify-end min-h-[400px] sm:min-h-[500px] md:h-[610px] px-5 sm:px-8 md:px-10 py-12 md:py-0"
      >
        <div className="w-full max-w-sm md:w-[400px] md:mr-20 lg:mr-30 text-center md:text-left bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl md:rounded-none p-6 md:p-0 shadow-lg md:shadow-none">
          <div className="text-[#1E3E85] font-semibold text-sm sm:text-base">Are you ready?</div>

          <h2 className="font-semibold leading-tight sm:leading-[57px] text-[#11142D] text-2xl sm:text-[36px] md:text-[44px] pt-3 sm:pt-5">
            Help is only a few clicks away!
          </h2>

          <p className="font-normal mb-6 sm:mb-10 text-[#767784] leading-[30px] sm:leading-[35px] pt-3 sm:pt-5 text-sm sm:text-base max-w-[260px] mx-auto md:mx-0">
            Click below to get set up quickly and find help now!
          </p>

          <div className="flex justify-center md:justify-start">
            <Button variant="trial">
              <div className="bg-[#52B4DA] -ml-4 mr-2 w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
                <Image src="/arrow.png" width={16} height={16} alt="arrow" />
              </div>
              Get Started
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Trial;
