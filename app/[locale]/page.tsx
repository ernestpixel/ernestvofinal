import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import VoiceDemos from '@/app/components/VoiceDemos';
import About from '@/app/components/About';
import Contact from '@/app/components/Contact';

// ✅ Make this function async and support Promise-based params
export default async function HomePage({
  params,
}: {
  params: { locale: string } | Promise<{ locale: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.locale;

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
