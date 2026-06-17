import Button from './ui/Button';
import Image from 'next/image';

const Feature1 = () => {
    return (
        <section>
            <div className="content flex justify-between items-center px-25 pt-20">
                <div className="right w-[500px]">
                    <Button variant='feature'> Global Reach</Button>
                    <h2 className='font-medium text-[40px] pt-5'>The First Fully Global Job Board, Anywhere, Ever</h2>
                    <p className='font-normal leading-[35px] pt-5'>RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.</p>
                </div>
                <div className="left">
                    <Image src="/feature.png" width={451} height={454} className='' />
                </div>
            </div>
        </section>
    );
};

export default Feature1;