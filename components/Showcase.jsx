import Button from './ui/Button';
import Image from 'next/image';

const Showcase = () => {
    return (
        <section>
            <div className="content flex justify-between items-center px-25">
                <div className="right w-[500px] -mt-15">
                    <Button variant='feature'>Custom Profile</Button>
                    <h2 className='font-medium text-[40px] pt-5'>Showcase Your Talents</h2>
                    <p className='font-normal leading-[35px] pt-5 max-w-[420px]'>Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.</p>
                </div>
                <div className="left">
                    <Image src="/showcase.png" width={451} height={454} className='' />
                </div>
            </div>
        </section>
    );
};

export default Showcase;