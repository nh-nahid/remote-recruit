"use client";

import Button from './ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Showcase = () => {
  return (
    <section className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="content flex flex-col-reverse md:flex-row justify-between items-center px-5 sm:px-10 md:px-16 lg:px-25 pt-10 sm:pt-14 gap-10 md:gap-8"
      >

        {/* Text */}
        <div className="right w-full md:w-[500px] text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Button variant="feature">Custom Profile</Button>
          </div>
          <h2 className="font-medium text-[28px] sm:text-[34px] md:text-[40px] pt-4 sm:pt-5 leading-tight">
            Showcase Your Talents
          </h2>
          <p className="font-normal leading-[32px] sm:leading-[35px] pt-4 sm:pt-5 text-sm sm:text-base text-[#767784] max-w-full md:max-w-[420px] mx-auto md:mx-0">
            Personalize your profile with everything that makes you unique. Add an introductory
            video and other media for a personal touch that stands out to employers and candidates.
          </p>
        </div>

        {/* Image */}
        <div className="left flex-shrink-0 transition-transform duration-500 hover:scale-[1.02]">
          <Image
            src="/showcase.png"
            width={451}
            height={454}
            alt="Showcase profile illustration"
            className="w-[260px] sm:w-[340px] md:w-[380px] lg:w-[451px] h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Showcase;
