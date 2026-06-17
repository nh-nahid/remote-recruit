import Nav from './header/Nav'
const Hero = () => {
  return (
    <div className="bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat h-[100vh]">
        <Nav />

        <div className="content justify-center mt-20 text-center items-center max-w-[1040px] mx-auto">
            <h1 className='font-bold text-5xl text-white'>RemoteRecruit’s Difference</h1>
            <p className='font-medium text-white text-center opacity-60 max-w-2xl mx-auto mt-5 '>RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there’s nothing but you, your talents, and the next step in your career.</p>
        </div>
    </div>
  );
};

export default Hero;
