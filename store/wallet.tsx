"use client";

import { WalletContextProps } from '@/models/store.model';
import { ethers, ZeroAddress } from 'ethers';
import { createContext, useContext, useState } from "react";

const WalletContext = createContext<WalletContextProps | null>(null!);

export const useWallet = () => {
    const context = useContext(WalletContext);

    if (!context) throw new Error('Wallet context is out of scope!');

    return context;
}

export default function WalletProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    const [walletAddress, setWalletAddress] = useState<string>(ZeroAddress);
    const [balance, setBalance] = useState<string>('');

    async function connectWallet() {
        if (!window.ethereum)
            return alert("Download MetaMask or another provider plugin to your browser");

        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const accounts = await provider.send("eth_requestAccounts", []);

            if (accounts[0]) {
                setWalletAddress(accounts[0]);

                const balanceWei = await provider.getBalance(accounts[0]);
                const balanceETH = ethers.formatEther(balanceWei);
                setBalance(balanceETH);
            }
        } catch (error) {
            console.error(`Error connecting wallet: ${error}`);
        }
    }

    return (
        <WalletContext.Provider value={{ walletAddress, balance, connectWallet }}>
            {children}
        </WalletContext.Provider>
    )
}