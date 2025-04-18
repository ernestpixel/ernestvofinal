import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import VoiceDemos from '@/app/components/VoiceDemos';
import About from '@/app/components/About';
import Contact from '@/app/components/Contact'; // ✅ Import was missing

// ✅ Make this function async
export default async function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale;

  return (
    <main>
      <Header locale={locale} />
      <Hero locale={locale} />
      <VoiceDemos locale={locale} />
      <About locale={locale} />
      <Contact locale={locale} />
    </main>
  );
}
