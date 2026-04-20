import './style.scss';
import bgImage from './assets/bg_index.jpg';
import focalLogo from './assets/focal_logo.png';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import BrandsScroll from './components/BrandsScroll';
import { homeIconItems } from './components/nav/navData';

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

          <section className="home-sticker" aria-label="Key message">
            <p>Different kids. Different needs. One simple order.</p>
          </section>

          <section className="home-menu-grid" aria-label="Home topics">
            {homeIconItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className="home-menu-grid__card"
                onClick={() => setActivePage('home')}
                aria-label={item.label}
              >
                <img src={item.icon} alt="" aria-hidden="true" />
              </button>
            ))}
          </section>
        </main>
      ) : (
        <ContactPage />
      )}

      <Footer />
    </div>
  );
}

export default App;
