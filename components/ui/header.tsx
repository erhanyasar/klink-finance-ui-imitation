import { useWallet } from '@/store/wallet';
import { ZeroAddress } from 'ethers';
import Image from 'next/image';

export default function Header() {
    const { walletAddress, balance, connectWallet } = useWallet();

    return (
        <>
            {/* Mobile */}
            <header className="inline-flex sm:hidden absolute top-50 left-55 h-[54px] w-[80vw] gap-6 flex-wrap items-center justify-between gap-175">
                <Image src="/img/mobile/header.png" alt="Header" width={327} height={32} className="w-full" />
                <Image src="/img/mobile/klink.png" alt="Klink" width={327} height={218} className="w-full" />
                <Image src="/img/mobile/listed-on.png" alt="Listed on" width={351} height={182} className="w-lg z-2" />
            </header>

            {/* Desktop */}
            <header className="hidden sm:block h-54 w-[90vw] top-1 left-55 row-start-3 flex gap-6 flex-wrap items-center justify-between absolute">
                <div className="flex items-center justify-between w-720 h-54">
                    {/*
                    <Image src="img/klink-logo.svg" alt="Klink logo" width={246.67} height={40} className="w-full" />
                    <nav>
                        <ul className='flex flex-row items-center'>
                            <li className='items-center text-base font-medium font-header tracking-tighter leading-none'>Home</li>
                            <li className='items-center text-base font-medium font-header tracking-tighter leading-none'>Buy $KLINK</li>
                            <li className='items-center text-base font-medium font-header tracking-tighter leading-none'>Stake $KLINK</li>
                        </ul>
                    </nav>
                    */}
                </div>
                <div>
                    <button
                        className="text-zinc-50 hidden md:flex py-1.5 px-2 h-fit md:h-[34px] order-4 md:ml-auto"
                        onClick={connectWallet}
                    >
                        {walletAddress !== ZeroAddress ? `Wallet: ${walletAddress } | ${balance}` : "Connect Wallet"}
                    </button>
                    <p className="text-zinc-50 hidden md:flex py-1.5 px-2 h-fit md:h-[34px] order-4 md:ml-auto">{walletAddress !== ZeroAddress ? `Wallet: ${walletAddress } | ${balance}` : null}</p>
                </div>
            </header>
      </>
    )
}