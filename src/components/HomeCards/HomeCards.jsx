import { homeIconItems } from '../../data/siteData';
import './HomeCards.scss';

function HomeCards({ onSelect }) {
  return (
    <section className="home-menu-grid" aria-label="Home topics">
      {homeIconItems.map((item) => (
        <button
          key={item.label}
          type="button"
          className="home-menu-grid__card"
          onClick={() => onSelect?.(item)}
          aria-label={item.label}
        >
          <img src={item.icon} alt="" aria-hidden="true" />
        </button>
      ))}
    </section>
  );
}

export default HomeCards;
