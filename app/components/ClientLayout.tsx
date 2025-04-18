'use client';

import LanguageSwitcher from './LanguageSwitcher';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LanguageSwitcher />
      {children}
    </>
  );
}
