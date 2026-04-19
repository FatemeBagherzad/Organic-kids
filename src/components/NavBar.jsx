import { useState, useEffect, useRef } from 'react';
import './NavBar.scss';
import CartMenu from './nav/CartMenu';
import QuickOrderForm from './nav/QuickOrderForm';
import WeeklyMenuBoard from './nav/WeeklyMenuBoard';
import PreferencesModal from './nav/PreferencesModal';
import { createKid, mainMenuItems } from './nav/navData';

const HamburgerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line
      x1="3"
      y1="6"
      x2="21"
      y2="6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="3"
      y1="12"
      x2="21"
      y2="12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="3"
      y1="18"
      x2="21"
      y2="18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

function NavBar({ onNavigateContact, onNavigateHome }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mainMenuOpen, setMainMenuOpen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [weeklyMenuOpen, setWeeklyMenuOpen] = useState(false);
  const [orderFormOpen, setOrderFormOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [kids, setKids] = useState([]);

  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const clickedInsideOrderForm = event.target.closest('#order-form-panel');
      const clickedOrderFormToggle = event.target.closest(
        '[data-order-form-toggle="true"]',
      );

      if (orderFormOpen && !clickedInsideOrderForm && !clickedOrderFormToggle) {
        setOrderFormOpen(false);
      }

      if (navRef.current && !navRef.current.contains(event.target)) {
        setMainMenuOpen(false);
        setUserMenuOpen(false);
        setCartOpen(false);
        setWeeklyMenuOpen(false);
        setOrderFormOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [orderFormOpen]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserMenuOpen(false);
    setWeeklyMenuOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserMenuOpen(false);
    setPreferencesOpen(false);
    setOrderFormOpen(false);
  };

  const handlePreferences = () => {
    setPreferencesOpen(true);
    setUserMenuOpen(false);
  };

  const handleClosePreferences = () => {
    setPreferencesOpen(false);
  };

  const handleOpenContactPage = () => {
    if (typeof onNavigateContact === 'function') {
      onNavigateContact();
    }

    setMainMenuOpen(false);
    setUserMenuOpen(false);
    setCartOpen(false);
  };

  const handleToggleWeeklyMenu = () => {
    setWeeklyMenuOpen((open) => !open);
    setMainMenuOpen(false);
    setUserMenuOpen(false);
  };

  const handleToggleOrderForm = () => {
    if (!isLoggedIn) {
      return;
    }

    setOrderFormOpen((open) => !open);
    setMainMenuOpen(false);
    setUserMenuOpen(false);
  };

  const handleToggleCart = () => {
    setCartOpen((open) => !open);
    setUserMenuOpen(false);
    setMainMenuOpen(false);
  };

  const handleAddToCart = (day, item) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (cartItem) => cartItem.day === day && cartItem.name === item.name,
      );

      if (existingItem) {
        return currentItems.map((cartItem) => {
          if (cartItem.day === day && cartItem.name === item.name) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }

          return cartItem;
        });
      }

      return [
        ...currentItems,
        {
          id: `${day}-${item.name}`,
          day,
          name: item.name,
          quantity: 1,
        },
      ];
    });
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId),
    );
  };

  const handleDecreaseCartItem = (itemId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddKid = () => {
    setKids((currentKids) => [
      ...currentKids,
      createKid(currentKids.length + 1),
    ]);
  };

  const handlePreferenceToggle = (kidId, groupTitle, option) => {
    setKids((currentKids) =>
      currentKids.map((kid) => {
        if (kid.id !== kidId) {
          return kid;
        }

        return {
          ...kid,
          preferences: {
            ...kid.preferences,
            [groupTitle]: {
              ...kid.preferences[groupTitle],
              [option]: !kid.preferences[groupTitle][option],
            },
          },
        };
      }),
    );
  };

  const handleKidNameChange = (kidId, value) => {
    setKids((currentKids) =>
      currentKids.map((kid) => {
        if (kid.id !== kidId) {
          return kid;
        }

        return {
          ...kid,
          name: value,
        };
      }),
    );
  };

  const handleKidNameDone = (kidId) => {
    setKids((currentKids) =>
      currentKids.map((kid) => {
        if (kid.id !== kidId) {
          return kid;
        }

        const trimmedName = kid.name.trim();

        return {
          ...kid,
          name: trimmedName,
          showNameInput: trimmedName.length === 0,
        };
      }),
    );
  };

  const handleKidCollapseToggle = (kidId) => {
    setKids((currentKids) =>
      currentKids.map((kid) => {
        if (kid.id !== kidId) {
          return kid;
        }

        return {
          ...kid,
          isCollapsed: !kid.isCollapsed,
        };
      }),
    );
  };

  const handleSavePreferences = () => {
    setPreferencesOpen(false);
  };

  return (
    <div ref={navRef}>
      <nav className="nav-bar nav-bar-1" aria-label="Main navigation">
        <div className="main-menu-area">
          <button
            className="nav-icon-btn"
            aria-label="Open menu"
            aria-expanded={mainMenuOpen}
            aria-controls="main-menu"
            onClick={() => setMainMenuOpen((open) => !open)}
          >
            <HamburgerIcon />
          </button>

          <button
            type="button"
            className="nav-contact-btn"
            onClick={handleOpenContactPage}
          >
            Contact Us
          </button>

          {mainMenuOpen && (
            <div
              id="main-menu"
              className="main-menu"
              role="menu"
              aria-label="Main menu"
            >
              {mainMenuItems.map((item) => (
                <button
                  key={item.label}
                  className="main-menu__item"
                  role="menuitem"
                  onClick={() => {
                    setMainMenuOpen(false);
                    if (typeof onNavigateHome === 'function') {
                      onNavigateHome();
                    }
                  }}
                >
                  <img src={item.icon} alt="" aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="account-area">
          <div className="account-controls">
            {isLoggedIn ? (
              <button
                className="nav-icon-btn"
                aria-label="Open user menu"
                onClick={() => setUserMenuOpen((o) => !o)}
              >
                <UserIcon />
              </button>
            ) : (
              <button className="nav-login-btn" onClick={handleLogin}>
                Login
              </button>
            )}

            <button
              type="button"
              className="nav-cart-btn"
              aria-label="Open cart"
              aria-expanded={cartOpen}
              onClick={handleToggleCart}
            >
              Cart
              <span className="nav-cart-btn__count">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </button>
          </div>

          {isLoggedIn && userMenuOpen && (
            <div className="user-menu" role="menu" aria-label="User menu">
              <button role="menuitem" onClick={handlePreferences}>
                Add your kids{' '}
              </button>
              <button role="menuitem">Payment Method</button>
              <button role="menuitem" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}

          <CartMenu
            cartOpen={cartOpen}
            cartItems={cartItems}
            onClearCart={handleClearCart}
            onRemoveItem={handleRemoveFromCart}
          />
        </div>
      </nav>

      <nav className="nav-bar nav-bar-2" aria-label="Actions">
        <div className="nav-actions">
          <button
            className="btn btn--primary"
            type="button"
            data-order-form-toggle="true"
            onClick={handleToggleOrderForm}
            aria-expanded={orderFormOpen}
            aria-controls="order-form-panel"
          >
            {isLoggedIn
              ? orderFormOpen
                ? 'Hide Order Form'
                : 'Order Now'
              : 'Order Now'}
          </button>

          {!isLoggedIn && (
            <button
              className="btn btn--secondary"
              type="button"
              aria-expanded={weeklyMenuOpen}
              aria-controls="weekly-menu-panel"
              onClick={handleToggleWeeklyMenu}
            >
              {weeklyMenuOpen ? 'Hide This Week Menu' : 'See This Week Menu'}
            </button>
          )}
        </div>
      </nav>

      <QuickOrderForm
        isOpen={isLoggedIn && orderFormOpen}
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onDecreaseCartItem={handleDecreaseCartItem}
      />

      <WeeklyMenuBoard isOpen={!isLoggedIn && weeklyMenuOpen} />

      <PreferencesModal
        isOpen={preferencesOpen}
        kids={kids}
        onClose={handleClosePreferences}
        onAddKid={handleAddKid}
        onKidNameChange={handleKidNameChange}
        onKidNameDone={handleKidNameDone}
        onKidCollapseToggle={handleKidCollapseToggle}
        onPreferenceToggle={handlePreferenceToggle}
        onSave={handleSavePreferences}
      />
    </div>
  );
}

export default NavBar;
