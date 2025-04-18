'use client';
import { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaDownload } from 'react-icons/fa';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { getTranslation } from '@/lib/translations';

function VoiceDemoPlayer({
  label,
  src,
  isActive,
  isCurrentPlaying,
  setActive,
  pauseOthers,
}: {
  label: string;
  src: string;
  isActive: boolean;
  isCurrentPlaying: boolean;
  setActive: () => void;
  pauseOthers: () => void;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!playing) {
      pauseOthers(); // Pause all other players
      setActive();
      if (!hasStarted) {
        audio.currentTime = 0;
        setHasStarted(true);
      }
      audio.play();
    } else {
      audio.pause();
    }

    setPlaying(!playing);
  };

  const updateProgress = () => {
    const audio = audioRef.current;
    if (audio) {
      const percentage = (audio.currentTime / audio.duration) * 100;
      setProgress(isNaN(percentage) ? 0 : percentage);
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hasStarted) return; // Disable seeking until playback has started
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = percent * audio.duration;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && !isCurrentPlaying) {
      audio.pause();
      setPlaying(false);
      setHasStarted(false);
    }
  }, [isCurrentPlaying]);

  return (
    <div
      className="relative bg-[#212121] text-white w-full max-w-[95vw] md:max-w-[400px] lg:max-w-[450px] flex items-center justify-between px-6 py-6 gap-4 cursor-pointer"
      onClick={seek}
    >
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={updateProgress}
        onEnded={() => setPlaying(false)}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
      >
        {playing ? <FaPause /> : <FaPlay />}
      </button>
      <div className="flex-1 text-base text-left uppercase">{label}</div>
      <a href={src} download onClick={(e) => e.stopPropagation()}>
        <FaDownload />
      </a>
      {isActive && (
        <div
          className="absolute bottom-0 left-0 h-[4px] bg-[#9F9F9F] opacity-30"
          style={{ width: `${progress}%` }}
        />
      )}
    </div>
  );
}

export default function VoiceDemos() {
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const [animateText, setAnimateText] = useState(false);
  const { locale } = useParams();
  const t = (key: string) => getTranslation(locale as string, key);

  const demos = [
    { label: t('demoCommercial'), src: '/audio/Dorinta-Massif.mp3' },
    { label: t('demoVideoGames'), src: '/audio/videogames.mp3' },
    { label: t('demoAudiobook'), src: '/audio/audiobook.mp3' },
    { label: t('demoCorporate'), src: '/audio/corporate.mp3' },
    { label: t('demoELearning'), src: '/audio/elearning.mp3' },
    { label: t('demoNetworkPromo'), src: '/audio/networkpromo.mp3' },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => setAnimateText(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="VoiceDemos" className="w-full bg-black py-16 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left */}
        <div className="flex flex-col gap-6">
          {demos.slice(0, 3).map((demo) => (
            <VoiceDemoPlayer
              key={demo.label}
              label={demo.label}
              src={demo.src}
              isActive={activeSrc === demo.src}
              isCurrentPlaying={activeSrc === demo.src}
              pauseOthers={() => setActiveSrc(null)}
              setActive={() => setActiveSrc(demo.src)}
            />
          ))}
        </div>

        {/* Center */}
        <div className="flex flex-col items-center justify-center text-white text-center md:w-[300px] relative">
          <div
            className={clsx(
              'text-xl md:text-base font-light mb-1 transition-all duration-700',
              animateText ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            )}
          >
            {t('demoEvery')}
          </div>
          <div
            className={clsx(
              'font-bold leading-none transition-all duration-700 delay-100',
              locale === 'ro' ? 'text-[80px] md:text-9xl' : 'text-[100px] md:text-9xl',
              animateText ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            )}
          >
            {t('demoStory')}
          </div>
          <div
            className={clsx(
              'text-xl md:text-base font-light mt-1 transition-all duration-700 delay-200',
              animateText ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            )}
          >
            {t('demoHasA')}
          </div>
          <div
            className={clsx(
              'text-[100px] md:text-9xl font-bold text-[#E6252E] leading-none transition-all duration-700 delay-300',
              animateText ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            )}
          >
            {t('demoVoice')}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6">
          {demos.slice(3).map((demo) => (
            <VoiceDemoPlayer
              key={demo.label}
              label={demo.label}
              src={demo.src}
              isActive={activeSrc === demo.src}
              isCurrentPlaying={activeSrc === demo.src}
              pauseOthers={() => setActiveSrc(null)}
              setActive={() => setActiveSrc(demo.src)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
