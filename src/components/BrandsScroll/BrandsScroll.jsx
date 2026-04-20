import partners1 from '../../assets/brands/partners1.png';
import partners2 from '../../assets/brands/partners2.png';
import partners3 from '../../assets/brands/partners3.png';
import partners4 from '../../assets/brands/partners4.png';
import partners5 from '../../assets/brands/partners5.png';
import partners6 from '../../assets/brands/partners6.png';
import partners7 from '../../assets/brands/partners7.png';
import partners8 from '../../assets/brands/partners8.png';
import partners9 from '../../assets/brands/partners9.png';
import partners10 from '../../assets/brands/partners10.png';
import './BrandsScroll.scss';

const images = [
  partners1,
  partners2,
  partners3,
  partners4,
  partners5,
  partners6,
  partners7,
  partners8,
  partners9,
  partners10,
];

function BrandsScroll() {
  return (
    <section className="brands-scroll-container" aria-label="Partners">
      <div className="brands-scroll-track">
        {images.concat(images).map((image, index) => (
          <div key={`${image}-${index}`} className="brands-scroll-item">
            <img src={image} alt={`Partner ${(index % images.length) + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrandsScroll;
