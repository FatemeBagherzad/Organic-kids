function CartMenu({ cartOpen, cartItems, onClearCart, onRemoveItem }) {
  if (!cartOpen) {
    return null;
  }

  return (
    <section className="cart-menu" aria-label="Cart">
      <div className="cart-menu__header">
        <h3>Cart</h3>
        {cartItems.length > 0 && (
          <button type="button" className="cart-menu__clear" onClick={onClearCart}>
            Clear
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <p className="cart-menu__empty">No items yet.</p>
      ) : (
        <>
          <ul className="cart-menu__list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-menu__item">
                <div className="cart-menu__meta">
                  <p className="cart-menu__kid">{item.kidName || 'Kid'}</p>
                  <p className="cart-menu__day">{item.day}</p>
                </div>
                <div className="cart-menu__item-row">
                  <p className="cart-menu__name">{item.name}</p>
                  <div className="cart-menu__actions">
                    <span className="cart-menu__qty">x{item.quantity}</span>
                    <button type="button" onClick={() => onRemoveItem(item.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button type="button" className="cart-menu__pay-now">
            Pay Now
          </button>
        </>
      )}
    </section>
  );
}

export default CartMenu;
