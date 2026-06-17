import Image from "next/image";
import PricingCard from "../components/ui/PricingCard";

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
    <footer className="relative mt-[400px]">
      {/* Heading */}
      <div className="absolute left-1/2 -top-[220px] -translate-x-1/2 z-20 w-full">
        <h2 className="text-center text-[40px] leading-[52px] font-semibold text-[#11142D]">
          Help Is One Click Away
        </h2>
      </div>

      {/* Overlay Cards */}
      <div className="absolute left-1/2 -top-[140px] -translate-x-1/2 z-20 flex gap-8">
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

      {/* Footer Background */}
      <div className="h-screen bg-[url('/footer-background.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-end">
        <div className="px-30 pb-20">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <Image
              src="/logo.png"
              alt="Logo"
              width={123}
              height={50}
              className="h-[50px] w-auto"
            />

            <div className="flex items-center gap-4">
              <Image src="/socials/facebook.png" width={24} height={24} alt="Facebook" />
              <Image src="/socials/instagram.png" width={24} height={24} alt="Instagram" />
              <Image src="/socials/x.png" width={24} height={24} alt="X" />
              <Image src="/socials/twitter.png" width={24} height={24} alt="Twitter" />
              <Image src="/socials/linkedin.png" width={24} height={24} alt="LinkedIn" />
              <Image src="/socials/snap.png" width={24} height={24} alt="Snapchat" />
            </div>
          </div>
        </div>

        <hr className="border-white/30" />

        <div>
          <Image
            className="mx-auto pt-7 pb-4"
            src="/rr-icon.png"
            width={40}
            height={40}
            alt="RR logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;