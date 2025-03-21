import Image from 'next/image';
import Animations from '../animations';
import Header from '../ui/header';

export default function Hero() {
    return (
        <>
            <Header />
            <Image
                src="/img/mobile/mobile-hero.png"
                alt="Hero Mobile"
                className="object-cover sm:hidden top-0 left-0"
                width={491}
                height={788}
                priority
            />

            <Image
                src="/img/desktop-hero.png"
                alt="Hero Desktop"
                className="object-cover hidden sm:block radius-5xl"
                width={1690}
                height={995}
                priority
            />

            <Animations />
        </>
    )
}