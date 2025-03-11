import { ReactNode } from "react";

export type ProviderProps = Readonly<{ children: ReactNode }>;

export type WalletContextProps = {
    walletAddress: string;
    balance: string;
    connectWallet: () => void;
};