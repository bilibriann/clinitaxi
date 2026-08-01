import { useEffect, useState } from 'react';
import type { SiteViewModel } from '../site.service';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Products from './components/Products';
import Coverage from './components/Coverage';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [data, setData] = useState<SiteViewModel | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/site')
      .then((res) => {
        if (!res.ok) throw new Error('Request failed');
        return res.json() as Promise<SiteViewModel>;
      })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-on-surface-variant">
        No pudimos cargar la información. Intenta nuevamente más tarde.
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-on-surface-variant">
        Cargando…
      </div>
    );
  }

  return (
    <>
      <Header nav={data.nav} />
      <main>
        <Hero yearsOfExperience={data.stats.yearsOfExperience} />
        <TrustBar yearsOfExperience={data.stats.yearsOfExperience} />
        <Services stats={data.stats} />
        <Products />
        <Coverage regions={data.regions} />
        <News />
        <Contact contact={data.contact} />
      </main>
      <Footer
        contact={data.contact}
        socialLinks={data.socialLinks}
        yearsOfExperience={data.stats.yearsOfExperience}
      />
    </>
  );
}
