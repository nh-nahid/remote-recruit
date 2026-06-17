const Button = ({ children, type = "button", variant = "primary" }) => {
  const variants = {
    primary:
      "bg-[#4DA8CCE5] w-[92px] h-[44px] text-[14px] font-semibold rounded-[16px] text-white hover:bg-[#2e7e9de3] cursor-pointer",
    secondary:
      "w-[92px] h-[44px] text-[14px] font-semibold rounded-[16px] text-white hover:border cursor-pointer",
    feature:
      "w-[127px] h-[36px] bg-[#C2EEFF] rounded-full text-[12px] font-semibold text-[#11142D]",
    trial:
      "w-[160px] h-[46px] bg-[#CFE0F7] rounded-full text-[12px] font-semibold text-[#1E3E85] px-4 py-2 cursor-pointer",
    free: "h-[50px] rounded-[18px] text-[#1E3E85] cursor-pointer font-semibold border-2 border-[#52B4DA] transition-all duration-300 hover:bg-[#52B4DA] hover:text-white hover:shadow-md",
    premium:
      "h-[50px] rounded-[18px] bg-gradient-to-b from-[#21799c] to-[#1E3E85] text-white font-semibold border-2 border-[#52B4DA] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:brightness-110",
  };

  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center
        font-medium
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        
      `}
    >
      {children}
    </button>
  );
};

export default Button;
