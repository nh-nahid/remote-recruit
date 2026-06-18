"use client";

import Button from './ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Feature2 = () => {
  return (
    <section className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="content flex flex-col md:flex-row justify-between items-center px-5 sm:px-10 md:px-20 lg:px-35 pt-10 sm:pt-14 gap-10 md:gap-8"
      >

        {/* Image */}
        <div className="left flex-shrink-0 transition-transform duration-500 hover:scale-[1.02]">
          <Image
            src="/feature2.png"
            width={451}
            height={454}
            alt="Fee-free illustration"
            className="w-[260px] sm:w-[340px] md:w-[380px] lg:w-[451px] h-auto"
          />
        </div>

        {/* Text */}
        <div className="right w-full md:w-[400px] text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Button variant="feature">Actually Fee Free</Button>
          </div>
          <h2 className="font-medium text-[28px] sm:text-[34px] md:text-[40px] pt-4 sm:pt-5 leading-tight">
            Fee-Free Forever
          </h2>
          <p className="font-normal leading-[32px] sm:leading-[35px] pt-4 sm:pt-5 text-sm sm:text-base text-[#767784]">
            We don&apos;t charge you fees and we don&apos;t put up paywalls. We&apos;re the bridge
            that connects job opportunities with the best candidates, with no middleman involved.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Feature2;
