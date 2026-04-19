import { weeklyMenu } from './navData';

function QuickOrderForm({ isOpen, onAddToCart }) {
  if (!isOpen) {
    return null;
  }

  return (
    <section
      id="order-form-panel"
      className="order-form-inline"
      aria-label="Quick order form"
    >
      <div className="order-form-card">
        <div className="order-form-card__header">
          <h2>Quick Order Form</h2>
          <p>Tap add to include any item in your cart.</p>
        </div>

        <div className="order-form-list">
          {weeklyMenu.map((dayMenu) => (
            <section key={`order-${dayMenu.day}`} className="order-form-day">
              <h3>{dayMenu.day}</h3>
              <div className="order-form-day__items">
                {dayMenu.items.map((item, index) => (
                  <div
                    key={`order-${dayMenu.day}-${index}`}
                    className="order-form-item"
                  >
                    <p>{item.name}</p>
                    <button
                      type="button"
                      className="order-form-item__add"
                      onClick={() => onAddToCart(dayMenu.day, item)}
                    >
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickOrderForm;
