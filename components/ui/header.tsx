import { useWallet } from '@/store/wallet';
import { ZeroAddress } from 'ethers';
import Image from 'next/image';

export default function Header() {
    const { walletAddress, balance, connectWallet } = useWallet();

    return (
        <header className="h-54 w-90vw top-20 left-60 row-start-3 flex gap-6 flex-wrap items-center justify-between absolute">
            <div className="flex items-center justify-between w-720 h-54">
                <Image src="img/klink-logo.svg" alt="Klink logo" width={246.47} height={40} />
                <nav>
                    <ul className='flex flex-row items-center'>
                        <li className='items-center text-base font-medium font-header tracking-tighter leading-none'>Home</li>
                        <li className='items-center text-base font-medium font-header tracking-tighter leading-none'>Buy $KLINK</li>
                        <li className='items-center text-base font-medium font-header tracking-tighter leading-none'>Stake $KLINK</li>
                    </ul>
                </nav>
            </div>
            <div>
                <button
                    className="bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-900 hidden md:flex py-1.5 px-2 h-fit md:h-[34px] order-4 md:ml-auto"
                    onClick={connectWallet}
                >
                    {walletAddress !== ZeroAddress ? `Wallet: ${walletAddress}` : "Connect Wallet"}
                </button>
                <p>{balance}</p>
            </div>
        </header>
    )
}