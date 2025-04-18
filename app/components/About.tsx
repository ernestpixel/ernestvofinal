'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { getTranslation } from '@/lib/translations';

export default function About() {
  const [animate, setAnimate] = useState(false);
  const { locale } = useParams();
  const t = (key: string) => getTranslation(locale as string, key);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="About"
      className="w-full bg-black text-white border-b-[5px] border-white px-6 md:px-12 py-16"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Container */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center md:items-start">
          {/* Translated "ABOUT" */}
          <h2
            className={clsx(
              'text-3xl uppercase font-light tracking-widest transition-all duration-700',
              animate ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            )}
          >
            {t('about')}
          </h2>

          {/* Image */}
          <div
            className={clsx(
              'relative mt-2 w-full flex justify-center md:justify-start transition-opacity duration-1000 delay-200',
              animate ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Image
              src="/images/voiceover-actor-ernest-slach-about.webp"
              alt="Voiceover actor Ernest Slach"
              width={350}
              height={500}
              className="object-contain w-[250px] md:w-[300px] lg:w-[350px]"
            />
          </div>

          {/* "ERNEST" */}
          <h1
            className={clsx(
              'text-6xl md:text-8xl font-bold uppercase mt-4 text-center md:text-left transition-all duration-700 delay-300',
              animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            )}
          >
            Ernest
          </h1>
        </div>

        {/* Right Container: BIO */}
        <div className="w-full md:w-1/2 text-base leading-relaxed text-center md:text-justify space-y-6">
          <p>{t('aboutBio1')}</p>
          <p>{t('aboutBio2')}</p>
          <p>{t('aboutBio3')}</p>
        </div>
      </div>
    </section>
  );
}
