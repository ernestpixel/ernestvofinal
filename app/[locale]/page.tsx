import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import VoiceDemos from '@/app/components/VoiceDemos';
import About from '@/app/components/About';
import Contact from '@/app/components/Contact';

export default async function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <VoiceDemos />
      <About />
      <Contact />
    </main>
  );
}
