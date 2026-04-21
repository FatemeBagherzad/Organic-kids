import { weeklyMenu } from '../../data/siteData';
import './QuickOrderForm.scss';

function QuickOrderForm({
  isOpen,
  onAddToCart,
  cartItems = [],
  onDecreaseCartItem,
  kids = [],
  selectedKidId,
  onSelectKid,
}) {
  if (!isOpen) {
    return null;
  }

  const activeKid =
    kids.find((kid) => kid.id === selectedKidId) || kids[0] || null;

  const getKidDisplayName = (kid) => kid.name.trim() || `Kid ${kid.id}`;

  const getActivePreferences = (kid) => {
    if (!kid?.preferences) return [];
    return Object.values(kid.preferences).flatMap((group) =>
      Object.entries(group)
        .filter(([, active]) => active)
        .map(([label]) => label),
    );
  };

  const getCartItem = (day, itemName, kidId) => {
    const targetKidId = kidId ?? 'no-kid';

    return (
      cartItems.find(
        (item) =>
          item.day === day &&
          item.name === itemName &&
          item.kidId === targetKidId,
      ) || null
    );
  };

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

          <div
            className="order-form-kids"
            role="tablist"
            aria-label="Select child"
          >
            {kids.length > 0 ? (
              kids.map((kid) => (
                <button
                  key={kid.id}
                  type="button"
                  role="tab"
                  aria-selected={activeKid?.id === kid.id}
                  className={`order-form-kids__button ${activeKid?.id === kid.id ? 'order-form-kids__button--active' : ''}`}
                  onClick={() => onSelectKid?.(kid.id)}
                >
                  {getKidDisplayName(kid)}
                </button>
              ))
            ) : (
              <p className="order-form-kids__empty">
                No kids added yet. You can still place a general order.
              </p>
            )}
          </div>

          {activeKid && getActivePreferences(activeKid).length > 0 && (
            <p className="order-form-kids__prefs">
              {getActivePreferences(activeKid).join(' · ')}
            </p>
          )}
        </div>

        <div className="order-form-list">
          {weeklyMenu.map((dayMenu) => (
            <section key={`order-${dayMenu.day}`} className="order-form-day">
              <h3>{dayMenu.day}</h3>
              <div className="order-form-day__items">
                {dayMenu.items.map((item, index) => {
                  const cartItem = getCartItem(
                    dayMenu.day,
                    item.name,
                    activeKid?.id,
                  );

                  return (
                    <div
                      key={`order-${dayMenu.day}-${index}`}
                      className="order-form-item"
                    >
                      <p>{item.name}</p>
                      {cartItem ? (
                        <div className="order-form-item__stepper">
                          <button
                            type="button"
                            className="order-form-item__stepper-btn"
                            aria-label="Increase quantity"
                            onClick={() =>
                              onAddToCart(dayMenu.day, item, activeKid)
                            }
                          >
                            ▲
                          </button>
                          <span className="order-form-item__qty">
                            {cartItem.quantity}
                          </span>
                          <button
                            type="button"
                            className="order-form-item__stepper-btn"
                            aria-label="Decrease quantity"
                            onClick={() => onDecreaseCartItem(cartItem.id)}
                          >
                            ▼
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          className="order-form-item__add"
                          onClick={() =>
                            onAddToCart(dayMenu.day, item, activeKid)
                          }
                        >
                          Add
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickOrderForm;
