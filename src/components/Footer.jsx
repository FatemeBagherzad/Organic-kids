import footerLogos from '../assets/footer_logos.png';
import iconFacebook from '../assets/Icons/Icon-facebook.svg';
import iconInstagram from '../assets/Icons/Icon-instagram.svg';
import iconTwitter from '../assets/Icons/Icon-twitter.svg';

const footerItems = ['Inspection Report', 'Certifications'];

const socialLinks = [
  { label: 'Facebook', icon: iconFacebook },
  { label: 'Instagram', icon: iconInstagram },
  { label: 'Twitter', icon: iconTwitter },
];

function Footer() {
  return (
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
  );
}

export default Footer;
