"use client";

import Nav from './header/Nav';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat min-h-[100svh]">
      <Nav />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="content justify-center mt-12 sm:mt-20 text-center items-center max-w-[90%] sm:max-w-[700px] md:max-w-[1040px] mx-auto px-4"
      >
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight animate-fade-in-up">
          RemoteRecruit&apos;s Difference
        </h1>
        <p className="font-medium text-white text-center opacity-60 max-w-xl sm:max-w-2xl mx-auto mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed">
          RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time,
          part-time, and freelance workers showcase their talents to businesses that need them.
          With no paywalls, no fees, and no barriers, there&apos;s nothing but you, your talents,
          and the next step in your career.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
