import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_HK } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./StoreProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansHK = Noto_Sans_HK({
  subsets: ['latin'], // Add subsets as required
  weight: ['400', '700'], // Specify font weights
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Using Noto Sans HK as the default font',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansHK.className} ${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
