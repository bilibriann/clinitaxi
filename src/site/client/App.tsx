import { siteData } from './siteData';
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
  return (
    <>
      <Header nav={siteData.nav} />
      <main>
        <Hero yearsOfExperience={siteData.stats.yearsOfExperience} />
        <TrustBar yearsOfExperience={siteData.stats.yearsOfExperience} />
        <Services stats={siteData.stats} />
        <Products />
        <Coverage regions={siteData.regions} />
        <News />
        <Contact contact={siteData.contact} />
      </main>
      <Footer
        contact={siteData.contact}
        socialLinks={siteData.socialLinks}
        yearsOfExperience={siteData.stats.yearsOfExperience}
      />
    </>
  );
}
