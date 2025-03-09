export type WalletContextProps = {
    walletAddress: string;
    balance: string;
    connectWallet: () => void;
};