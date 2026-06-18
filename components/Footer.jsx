"use client";

import Image from "next/image";
import PricingCard from "../components/ui/PricingCard";
import { motion } from "framer-motion";

const Footer = () => {
  const basicFeatures = [
    { text: "1 Active Job", included: true },
    { text: "Basic List Placement", included: true },
    { text: "Unlimited Job Applicants", included: false },
    { text: "Invite Anyone to Apply to Your Jobs", included: false },
  ];

  const premiumFeatures = [
    { text: "Unlimited Job Posts", included: true },
    { text: "Instant Job Post Approval", included: true },
    { text: "Premium List Placement", included: true },
    { text: "Unlimited Job Applicants", included: true },
  ];

  return (
    <footer className="relative mt-[360px] sm:mt-[400px]">
      {/* Heading */}
      <div className="absolute left-1/2 -top-[230px] sm:-top-[220px] -translate-x-1/2 z-20 w-full px-4">
        <h2 className="text-center text-[28px] sm:text-[36px] md:text-[40px] leading-tight sm:leading-[52px] font-semibold text-[#11142D]">
          Help Is One Click Away
        </h2>
      </div>

      {/* Overlay Cards */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-1/2 -top-[160px] sm:-top-[140px] -translate-x-1/2 z-20 w-full px-4 sm:px-6"
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center sm:items-stretch justify-center">
          <PricingCard
            badge="Free"
            title="Basic"
            price="$0/month"
            features={basicFeatures}
          />
          <PricingCard
            badge="$79.99"
            title="Per Month"
            price="$29/month"
            features={premiumFeatures}
            isPremium
          />
        </div>
      </motion.div>

      {/* Footer Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-[60vh] sm:h-screen bg-[url('/footer-background.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-end"
      >
        <div className="px-5 sm:px-10 md:px-16 lg:px-30 pb-10 sm:pb-20">
          <div className="flex flex-col sm:flex-row items-center justify-between flex-wrap gap-6">
            <Image
              src="/logo.png"
              alt="Logo"
              width={123}
              height={50}
              className="h-[40px] sm:h-[50px] w-auto"
            />

            <div className="flex items-center gap-3 sm:gap-4">
              {[
                { src: "/socials/facebook.png", alt: "Facebook" },
                { src: "/socials/instagram.png", alt: "Instagram" },
                { src: "/socials/x.png", alt: "X" },
                { src: "/socials/twitter.png", alt: "Twitter" },
                { src: "/socials/linkedin.png", alt: "LinkedIn" },
                { src: "/socials/snap.png", alt: "Snapchat" },
              ].map(({ src, alt }) => (
                <a
                  key={alt}
                  href="#"
                  className="opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-200"
                  aria-label={alt}
                >
                  <Image src={src} width={22} height={22} alt={alt} className="sm:w-[24px] sm:h-[24px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-white/30" />

        <div>
          <Image
            className="mx-auto pt-6 pb-4"
            src="/rr-icon.png"
            width={40}
            height={40}
            alt="RR logo"
          />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
