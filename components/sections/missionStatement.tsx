import Image from 'next/image';
import Figures from '../ui/figures';
import TheKlinkMission from '../ui/theKlinkMission';

export default function MissionStatement() {
    return (
        <div className="flex flex-col items-center gap-25">
            <p className="opacity-60">Trusted by the best in Web3</p>
            <Image
                src="/img/web3.png"
                alt="WEB3 group"
                className="top-464.41 left-0"
                width={778.9808349609375}
                height={105.8917236328125}
            />

            <Figures />

            <Image
                src="/img/hr.png"
                alt="Horizontal line"
                width={178.9808349609443}
                height={1.51}
                className="max-w-screen block lg:hidden h-[0.1rem]"
            />

            <TheKlinkMission />
        </div>
    )
}