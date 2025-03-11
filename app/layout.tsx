import WalletProvider from "@/store/wallet";
import { geistMono, geistSans } from "@/utils/fonts";
import { ProviderProps } from "@/utils/types/store.model";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klink Finance - Your Gateway to Exclusive Offers",
  description: "Klink Finance | UI Imitation Challenge",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: ProviderProps) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
