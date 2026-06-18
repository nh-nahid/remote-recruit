import Image from 'next/image';
import Button from '../../components/ui/Button';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-5 sm:px-8 md:px-10 h-[80px] sm:h-[108px]">
      <Image
        src="/logo.png"
        alt="Logo"
        width={123}
        height={50}
        className="h-[38px] sm:h-[50px] w-auto"
      />
      <div className="auth-button flex justify-center gap-2 sm:gap-3 items-center">
        <Button variant="secondary">Sign In</Button>
        <Button variant="primary">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Nav;
