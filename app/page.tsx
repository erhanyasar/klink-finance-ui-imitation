"use client";

import { useWallet } from '@/store/wallet';
import { ZeroAddress } from 'ethers';

export default function Home() {
  const { walletAddress, balance, connectWallet } = useWallet();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <button
          className="bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-900 hidden md:flex py-1.5 px-2 h-fit md:h-[34px] order-4 md:ml-auto"
          onClick={connectWallet}
        >
          {walletAddress !== ZeroAddress ? `Wallet: ${walletAddress}` : "Connect Wallet"}
        </button>
        <p>{balance}</p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
