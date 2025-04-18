'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { getTranslation } from '@/lib/translations';

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const { locale } = useParams();
  const t = (key: string) => getTranslation(locale as string, key);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="w-full bg-black overflow-hidden border-b-[5px] border-white relative h-[60vh] md:h-[75vh]">
      <div className="mx-auto max-w-screen-xl h-full px-6 md:px-12 relative">
        {/* ERNEST top-left */}
        <div className="absolute top-10 left-6 md:left-12 text-white text-8xl md:text-[120px] font-semibold">
          ERNEST
        </div>

        {/* WEBP Image bottom center */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
          <Image
            src="/images/voiceover-actor-ernest-slach.webp"
            alt="voiceover actor"
            width={500}
            height={500}
            className="object-contain w-[90vw] max-w-[700px] md:w-[500px] h-auto"
          />
        </div>

        {/* SLACH + Voiceover text bottom-right */}
        <div className="absolute bottom-10 right-6 md:right-12 text-white text-right z-10">
          <div
            className={clsx(
              'text-8xl md:text-[120px] font-bold transform transition-all duration-700',
              animate ? 'translate-x-0 opacity-100' : 'translate-x-[-100%] opacity-0'
            )}
          >
            SLACH
          </div>
          <div
            className={clsx(
              'text-xl md:text-2xl uppercase tracking-wide transform transition-all duration-700 delay-200',
              animate ? 'translate-x-0 opacity-100' : 'translate-x-[100%] opacity-0'
            )}
          >
            {t('heroRole')}
          </div>
        </div>
      </div>
    </section>
  );
}
