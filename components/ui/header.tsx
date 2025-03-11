import { useWallet } from '@/store/wallet';
import { ZeroAddress } from 'ethers';
import Image from 'next/image';

export default function Header() {
    const { walletAddress, balance, connectWallet } = useWallet();

    return (
        <>
            <style jsx >
            {`
                header {
                    width: 90vw;
                    height: 54px;
                    justify-content: space-between;
                    top: 20px;
                    left: 60px;
                    position: absolute;
                }
                .logo-and-nav-wrapper {
                    display: flex;
                    width: 720;
                    height: 54;
                    justify-content: space-between;
                    align-items: center;
                }
                ul {
                    display: flex;
                    flex-direction: row;
                }
                li {
                    font-family: Inter;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 100%;
                    letter-spacing: -1%;
                    text-align: center;
                }
            `}
            </style>
            <header className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <div className="logo-and-nav-wrapper">
                    <Image src="klink-logo.svg" alt="Klink logo" width={246.47} height={40} />
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Buy $KLINK</li>
                            <li>Stake $KLINK</li>
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
      </>
    )
}