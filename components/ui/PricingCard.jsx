import Image from "next/image";
import Button from "./Button";



const PricingCard = ({
  badge,
  title,
  price,
  features,
  isPremium = false,
}) => {
  return (
    <div className="w-full sm:w-[440px] md:w-[500px] bg-white rounded-b-[28px] shadow-xl p-6 sm:p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Top Section */}
      <div className="flex flex-1 justify-between gap-4 sm:gap-8">

        {/* Left Side */}
        <div className="w-[110px] sm:w-[140px] flex-shrink-0">
          <div
            className={`w-[100px] sm:w-[120px] h-[130px] sm:h-[150px] rounded-[16px] flex flex-col items-center justify-center relative ${
              isPremium ? "bg-[#ECF2FF] text-white" : "bg-[#ECF2FF] text-[#1E3E85]"
            }`}
          >
            {isPremium && (
              <div className="absolute flex items-center gap-1 -top-3 bg-[#C2EEFF] text-[#11142D] text-[11px] sm:text-[13px] font-semibold px-2 sm:px-3 py-[7px] rounded-full whitespace-nowrap">
                <Image width={20} height={20} alt="premium" src="/premium.png" />
                <p>Premium</p>
              </div>
            )}

            <span className={`text-[20px] sm:text-[24px] font-medium ${isPremium ? "text-[#1E3E85]" : "text-[#52B4DA]"}`}>
              {badge}
            </span>

            <span className="text-[15px] sm:text-[18px] font-semibold mt-1 text-[#11142D65]">
              {title}
            </span>
          </div>
        </div>

        {/* Right Side Features */}
        <div className="flex-1 space-y-2 sm:space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 sm:gap-3">
              <Image
                src={feature.included ? "/active.svg" : "/cross.svg"}
                alt="icon"
                width={16}
                height={16}
                className="flex-shrink-0 sm:w-[18px] sm:h-[18px]"
              />
              <span className="text-[13px] sm:text-[16px] text-[#11142D] leading-tight">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <Button variant={isPremium ? "premium" : "free"} className="w-full mt-5 sm:mt-6">
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;
