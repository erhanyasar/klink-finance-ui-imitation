import Image from 'next/image';

export default function Figures() {
    return (
        <div className="my-[5rem] flex flex-col lg:flex-row gap-[15px] items-center sm:items-start">
            <div className="flex flex-col lg:flex-row gap-[15px] items-center">
                <div className="flex flex-col items-center">
                    <div>
                        <span className='text-5xl'>500K</span>
                        <span className='text-5xl opacity-40'>+</span>
                    </div>
                    <span className="w-[225px] h-[41px] text-figures font-normal text-center leading-[170%]">
                        Users Across 127+ Countries
                    </span>
                </div>
                <Image src="/img/vr.png" alt="Vertical line" width={1.51} height={60.51} className="hidden lg:block" />
                <Image src="/img/hr.png" alt="Horizontal line" width={75.78} height={1.51} className="block lg:hidden h-[0.1rem]" />
            </div>
            <div className="flex flex-col lg:flex-row gap-[15px] items-center">
                <div className="flex flex-col items-center">
                    <div>
                        <span className='text-5xl'>120</span>
                        <span className='text-5xl opacity-40'>+</span>
                    </div>
                    <span className="w-[225px] h-[41px] text-figures font-normal text-center leading-[170%]">
                        Affeliate Partners
                    </span>
                </div>
                <Image src="/img/vr.png" alt="Vertical line" width={1.51} height={60.51} className="hidden lg:block" />
                <Image src="/img/hr.png" alt="Horizontal line" width={75.78} height={1.51} className="block lg:hidden h-[0.1rem]" />
            </div>
            <div className="flex flex-col lg:flex-row gap-[15px] items-center">
                <div className="flex flex-col items-center">
                    <div>
                        <span className='text-5xl'>10</span>
                        <span className='text-5xl opacity-40'>+</span>
                    </div>
                    <span className="w-[225px] h-[41px] text-figures font-normal text-center leading-[170%]">
                        Airdrops to Date
                    </span>
                </div>
                <Image src="/img/vr.png" alt="Vertical line" width={1.51} height={60.51} className="hidden lg:block" />
                <Image src="/img/hr.png" alt="Horizontal line" width={75.78} height={1.51} className="block lg:hidden h-[0.1rem]" />
            </div>
            <div className="flex flex-col lg:flex-row gap-[15px] items-center">
                <div className="flex flex-col items-center">
                    <div>
                        <span className='text-5xl'>30</span>
                        <span className='text-5xl opacity-40'>+</span>
                    </div>
                    <span className="w-[225px] h-[41px] text-figures font-normal text-center leading-[170%]">
                        SDK Waitlist Partners
                    </span>
                </div>
            </div>
        </div>
    )
}