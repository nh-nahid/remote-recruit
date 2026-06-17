import Button from './ui/Button';
import Image from 'next/image';

const Feature2 = () => {
    return (
        <section>
            <div className="content flex justify-between items-center px-35 pt-10">
                <div className="left">
                    <Image src="/feature2.png" width={451} height={454} className='' />
                </div>
                <div className="right w-[400px] -mt-10">
                    <Button variant='feature'>Actually Fee Free</Button>
                    <h2 className='font-medium text-[40px] pt-5'>Fee-Free Forever</h2>
                    <p className='font-normal leading-[35px] pt-5'>We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved.</p>
                </div>
                
            </div>
        </section>
    );
};

export default Feature2;