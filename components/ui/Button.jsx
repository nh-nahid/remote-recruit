

const Button = ({
    children,
    type = "button",
    variant = "primary",

}) => {
    const variants = {
        primary: "bg-[#4DA8CCE5] w-[92px] h-[44px] text-[14px] font-semibold rounded-[16px] text-white hover:bg-[#2e7e9de3] cursor-pointer",
        secondary: "w-[92px] h-[44px] text-[14px] font-semibold rounded-[16px] text-white hover:border cursor-pointer",  
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


}

export default Button;