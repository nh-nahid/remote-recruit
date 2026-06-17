import Button from "./ui/Button";
import Image from "next/image";

const Trial = () => {
  return (
    <section>
      <div className="h-[610px] bg-[url('/trial.png')] bg-cover bg-center bg-no-repeat flex items-center justify-end px-10">
        <div className="w-[400px] mr-30 -mt-5">
          <div className="text-[#1E3E85] font-semibold">Are you ready?</div>

          <h2 className="font-semibold leading-[57px] text-[#11142D] text-[44px] pt-5">
            Help is only a few clicks away!
          </h2>

          <p className="font-normal mb-10 text-[#767784] leading-[35px] pt-5 w-[300px]">
            Click Below to get set up super quickly and find help now!
          </p>
          <Button variant="trial">
            <div className="bg-[#52B4DA] -ml-4 mr-2 w-9 h-9 rounded-full flex items-center justify-center">
              <Image src="/arrow.png" width={16} height={16} alt="arrow" />
            </div>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Trial;
