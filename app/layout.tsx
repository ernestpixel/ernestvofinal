import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and bold weights
});

export const metadata: Metadata = {
  title: "Ernest Slach – Voice Actor",
  description: "Professional voice over talent portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
