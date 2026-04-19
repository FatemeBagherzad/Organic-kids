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

          <section className="big-difference">
            <div className="big-difference__inner">
              <p className="big-difference__eyebrow">The Big Difference</p>
              <h2 className="big-difference__title">Why Choose Organic Kids</h2>
              <p className="big-difference__intro">
                <strong>Strong Customer Focus.</strong> We always put our
                customers first. Focusing on YOUR needs enables us to achieve
                high levels of quality and service, with a strong competitive
                advantage.
              </p>
              <p className="big-difference__sub">
                With Organic Kids Catering, you can trust in the following:
              </p>
              <ul className="big-difference__list">
                <li>Our 40+ Year Name &amp; Reputation</li>
                <li>
                  Organic, Local &amp; Environmental Product Choices{' '}
                  <em>(Industry Leading)</em>
                </li>
                <li>Dedicated Focus on Customer Service</li>
                <li>Management Culture that focuses on Clients&apos; Needs</li>
                <li>Community Involvement</li>
                <li>Desire to Continuously Improve Service</li>
                <li>Top-Quality of Our Employees</li>
                <li>Corporate Resources</li>
              </ul>
            </div>
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
