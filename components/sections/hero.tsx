import Image from 'next/image';
import Header from '../ui/header';

export default function Hero() {
    return (
        <>
            <Image src="pointed-background.svg" alt="Klink logo" fill />
            <Header />
        </>
    )
}