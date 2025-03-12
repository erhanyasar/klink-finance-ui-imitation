import Image from 'next/image';

export default function Figures() {
    return (
        <div className="flex flex-col sm:flex-row gap-[45px] items-center sm:items-start">
            <div className="flex flex-col sm:flex-row gap-[35px]">
                <div className="flex flex-col items-center">
                    <span>500K+</span>
                    <span>Users Across 127+ Countries</span>
                </div>
                <Image src="/img/vr.png" alt="Vertical line" width={1.51} height={60.51} className="hidden sm:block" />
                <Image src="/img/hr.png" alt="Horizontal line" width={175.78} height={1.51} className="block sm:hidden h-[0.1rem]" />
            </div>
            <div className="flex flex-col sm:flex-row gap-[35px]">
                <div className="flex flex-col items-center">
                    <span>120+</span>
                    <span>Affeliate Partners</span>
                </div>
                <Image src="/img/vr.png" alt="Vertical line" width={1.51} height={60.51} className="hidden sm:block" />
                <Image src="/img/hr.png" alt="Horizontal line" width={175.78} height={1.51} className="block sm:hidden h-[0.1rem]" />
            </div>
            <div className="flex flex-col sm:flex-row gap-[35px]">
                <div className="flex flex-col items-center">
                    <span>10+</span>
                    <span>Airdrops to Date</span>
                </div>
                <Image src="/img/vr.png" alt="Vertical line" width={1.51} height={60.51} className="hidden sm:block" />
                <Image src="/img/hr.png" alt="Horizontal line" width={175.78} height={1.51} className="block sm:hidden h-[0.1rem]" />
            </div>
            <div className="flex flex-col sm:flex-row gap-[35px]">
                <div className="flex flex-col items-center">
                    <span>30+</span>
                    <span>SDK Waitlist Partners</span>
                </div>
            </div>
        </div>
    )
}