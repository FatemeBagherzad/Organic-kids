import './style.scss';
import bgImage from './assets/bg_index.jpg';
import focalLogo from './assets/focal_logo.png';
import footerLogos from './assets/footer_logos.png';
import iconFacebook from './assets/Icons/Icon-facebook.svg';
import iconInstagram from './assets/Icons/Icon-instagram.svg';
import iconTwitter from './assets/Icons/Icon-twitter.svg';
import { useEffect } from 'react';
import NavBar from './components/NavBar';

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--page-bg', `url(${bgImage})`);
  }, []);

  const footerItems = [
    'Inspection Report',
    'Certifications',
    'Request A Quote',
    'Contact Us',
  ];

  const socialLinks = [
    { label: 'Facebook', icon: iconFacebook },
    { label: 'Instagram', icon: iconInstagram },
    { label: 'Twitter', icon: iconTwitter },
  ];

  return (
    <div className="app-shell">
      <NavBar />
      <div className="top-focal-logo" aria-hidden="true">
        <img src={focalLogo} alt="" />
      </div>

      <footer className="site-footer" aria-label="Footer">
        <div className="site-footer__top-art" aria-hidden="true">
          <img src={footerLogos} alt="" />
        </div>

        <div className="site-footer__content">
          <ul className="site-footer__items">
            {footerItems.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>

          <div className="site-footer__social" aria-label="Social links">
            {socialLinks.map((social) => (
              <a key={social.label} href="#" aria-label={social.label}>
                <img src={social.icon} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
