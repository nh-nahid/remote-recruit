import Image from "next/image";
import Button from "../../components/ui/Button";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-10 h-[108px]">
      <Image src="/logo.png" alt="Logo" width={123.31} height={50} />
      <div className="auth-button flex justify-center gap-3 items-center">
        <Button variant="secondary"> Sign In </Button>
        <Button variant="primary"> Sign Up </Button>
      </div>
    </nav>
  );
};

export default Nav;
