import './style.scss';
import bgImage from './assets/bg_index.jpg';
import focalLogo from './assets/focal_logo.png';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import BrandsScroll from './components/BrandsScroll';

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

      <div className="top-focal-logo" aria-hidden="true">
        <img src={focalLogo} alt="" />
      </div>

      {activePage === 'home' ? (
        <main className="home-page" aria-label="Home page">
          <BrandsScroll />
        </main>
      ) : (
        <ContactPage />
      )}

      <Footer />
    </div>
  );
}

export default App;
