// app/page.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import VoiceDemos from './components/VoiceDemos';
import About from './components/About';
import Contact from './components/Contact';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <VoiceDemos />
      <About />
      <Contact />
    </>
  );
}
