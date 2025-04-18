import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ernest Slach – Voice Actor",
  description: "Professional voice over talent portfolio",
  alternates: {
    canonical: '/',
    languages: {
      en: 'https://yourdomain.com/',
      ro: 'https://yourdomain.com/ro',
      'x-default': 'https://yourdomain.com/',
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);

  return (
    <html lang={resolvedParams.locale} className="bg-black text-white">
      <head>
        {/* These will be rendered automatically by metadata.alternates */}
      </head>
      <body className={`${poppins.className} antialiased`}>
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  );
}
