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
    <div className="w-[500px] h-[343px] bg-white rounded-b-[28px] shadow-xl p-8 flex flex-col">

      {/* Top Section */}
      <div className="flex flex-1 justify-between gap-8">

        {/* Left Side */}
        <div className="w-[140px] flex-shrink-0">
          <div
            className={`w-[120px] h-[150px] rounded-[16px] flex flex-col items-center justify-center relative ${
              isPremium
                ? "bg-[#ECF2FF] text-white"
                : "bg-[#ECF2FF] text-[#1E3E85]"
            }`}
          >

            {/* Premium Only Tag */}
            {isPremium && (
              <div className="absolute flex items-center gap-1 -top-3 bg-[#C2EEFF] text-[#11142D] text-[13px] font-semibold px-3 py-[7px] rounded-full">
                <Image width={25} height={25} alt="premium" src='/premium.png'/>
                <p>Premium</p>
              </div>
            )}

            <span className={`text-[24px] font-medium ${isPremium ? "text-[#1E3E85]" : "text-[#52B4DA]" } `}>
              {badge}
            </span>

            <span className="text-[18px] font-semibold mt-1 text-[#11142D65]">
              {title}
            </span>

          </div>
        </div>

        {/* Right Side Features */}
        <div className="flex-1 space-y-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <Image
                src={feature.included ? "/active.svg" : "/cross.svg"}
                alt="icon"
                width={18}
                height={18}
              />

              <span className="text-[16px] text-[#11142D]">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <Button
        variant={isPremium ? "premium" : "free"}
        className="w-full mt-6"
      >
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;