import './style.scss';
import bgImage from './assets/bg_index.jpg';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import FocalLogo from './components/FocalLogo/FocalLogo';
import BrandsScroll from './components/BrandsScroll/BrandsScroll';
import HomeSticker from './components/HomeSticker/HomeSticker';
import HomeCards from './components/HomeCards/HomeCards';
import ContactPage from './components/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';

function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    document.documentElement.style.setProperty('--page-bg', `url(${bgImage})`);
  }, []);

  return (
    <div className="app-shell">
      <NavBar
        onNavigateContact={() =>
          setActivePage((currentPage) =>
            currentPage === 'contact' ? 'home' : 'contact',
          )
        }
        onNavigateHome={() => setActivePage('home')}
      />

      <FocalLogo />

      {activePage === 'home' ? (
        <main className="home-page" aria-label="Home page">
          <BrandsScroll />
          <HomeSticker />
          <HomeCards onSelect={() => setActivePage('home')} />
        </main>
      ) : (
        <ContactPage />
      )}

      <Footer />
    </div>
  );
}

export default App;
