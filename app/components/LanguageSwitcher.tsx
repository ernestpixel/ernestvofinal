'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useTransition, useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const { locale } = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const [, startTransition] = useTransition(); // ✅ fixed unused var

  const [detectedLocale, setDetectedLocale] = useState('en');

  useEffect(() => {
    if (!locale) {
      const browserLang = navigator.language || navigator.languages?.[0] || 'en';
      if (browserLang.toLowerCase().startsWith('ro')) {
        setDetectedLocale('ro');
      }
    }
  }, [locale]);

  const currentLocale = locale || detectedLocale;
  const newLocale = currentLocale === 'en' ? 'ro' : 'en';

  const handleChange = () => {
    const pathWithoutLocale = pathname.replace(/^\/(en|ro)/, '');
    const newPath = `/${newLocale}${pathWithoutLocale || '/'}`;

    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div
      className="fixed bottom-4 left-4 z-50 bg-white text-black font-medium px-5 py-2 rounded-2xl shadow-md text-sm cursor-pointer hover:bg-gray-100 transition"
      onClick={handleChange}
    >
      {newLocale.toUpperCase()}
    </div>
  );
}
