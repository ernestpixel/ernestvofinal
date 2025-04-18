'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookF,
  faTiktok,
  faXTwitter,
  faYoutube,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { getTranslation } from '@/lib/translations';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Robust locale handling
  const params = useParams();
  const locale = Array.isArray(params?.locale) ? params.locale[0] : params?.locale || 'en';

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="relative top-0 left-0 w-full z-50 bg-black text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4 md:py-6">
        {/* Logo */}
        <div className="text-lg font-medium md:text-left">Ernest Slach</div>

        {/* Nav - Desktop */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm">
          <button onClick={() => scrollTo('VoiceDemos')} className="cursor-pointer">
            {getTranslation(locale, 'voiceDemos')}
          </button>
          <button onClick={() => scrollTo('About')} className="cursor-pointer">
            {getTranslation(locale, 'about')}
          </button>
          <button onClick={() => scrollTo('Contact')} className="cursor-pointer">
            {getTranslation(locale, 'contact')}
          </button>
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-xl">
          <a href="https://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://tiktok.com" target="_blank"><FontAwesomeIcon icon={faTiktok} /></a>
          <a href="https://x.com" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a>
          <a href="https://youtube.com" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>

        {/* Hamburger - Mobile */}
        <div
          className="md:hidden absolute right-6 top-[18px] flex flex-col space-y-1 cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`h-[2px] w-6 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <div className={`h-[2px] w-6 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black text-white px-6 py-6 z-40 transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-4 text-lg">
          <button onClick={() => scrollTo('VoiceDemos')} className="cursor-pointer">
            {getTranslation(locale, 'voiceDemos')}
          </button>
          <button onClick={() => scrollTo('About')} className="cursor-pointer">
            {getTranslation(locale, 'about')}
          </button>
          <button onClick={() => scrollTo('Contact')} className="cursor-pointer">
            {getTranslation(locale, 'contact')}
          </button>
        </nav>
        <div className="flex justify-center space-x-4 text-xl pt-4">
          <a href="https://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://tiktok.com" target="_blank"><FontAwesomeIcon icon={faTiktok} /></a>
          <a href="https://x.com" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a>
          <a href="https://youtube.com" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </div>
    </header>
  );
}
