import { useState } from 'react';
import './NavBar.scss';
import ourStoryIcon from '../assets/Our Story.png';
import ourAmazingFriendsIcon from '../assets/Our Amazing friends.png';
import howScrumptiousIcon from '../assets/How Scrumptious.png';
import theBigDifferenceIcon from '../assets/The Big Difference.png';
import notSoSweetIcon from '../assets/Not So Sweet.png';
import organicKidsTvIcon from '../assets/Organic Kids TV.png';

const preferenceGroups = [
  {
    title: 'Allergy-safe tags',
    options: [
      'Nut-free',
      'Peanut-free',
      'Dairy-free',
      'Egg-free',
      'Soy-free',
      'Gluten-free',
      'Sesame-free',
      'Shellfish-free',
    ],
  },
  {
    title: 'Dietary type',
    options: ['Vegetarian', 'Vegan', 'Halal', 'Kosher', 'Pescatarian'],
  },
  {
    title: 'Nutrition / health',
    options: [
      'Low sugar',
      'Low sodium',
      'High protein',
      'Whole grain',
      'No added sugar',
      'Organic',
    ],
  },
];

const createKidPreferences = () =>
  preferenceGroups.reduce((groups, group) => {
    groups[group.title] = group.options.reduce((options, option) => {
      options[option] = false;
      return options;
    }, {});

    return groups;
  }, {});

const createKid = (id) => ({
  id,
  name: '',
  isCollapsed: false,
  showNameInput: true,
  preferences: createKidPreferences(),
});

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

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mainMenuOpen, setMainMenuOpen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [kids, setKids] = useState([]);

  const mainMenuItems = [
    { label: 'Our Story', icon: ourStoryIcon },
    { label: 'Our Amazing Friends', icon: ourAmazingFriendsIcon },
    { label: 'How Scrumptious', icon: howScrumptiousIcon },
    { label: 'The Big Difference', icon: theBigDifferenceIcon },
    { label: 'Not So Sweet', icon: notSoSweetIcon },
    { label: 'Organi kids TV', icon: organicKidsTvIcon },
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserMenuOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserMenuOpen(false);
    setPreferencesOpen(false);
  };

  const handlePreferences = () => {
    setPreferencesOpen(true);
    setUserMenuOpen(false);
  };

  const handleClosePreferences = () => {
    setPreferencesOpen(false);
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
    <>
      {/* Nav Bar 1 — hamburger left, login/user right */}
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
                  onClick={() => setMainMenuOpen(false)}
                >
                  <img src={item.icon} alt="" aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="account-area">
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

          {isLoggedIn && userMenuOpen && (
            <div className="user-menu" role="menu" aria-label="User menu">
              <button role="menuitem" onClick={handlePreferences}>
                Preferences
              </button>
              <button role="menuitem">Payment Method</button>
              <button role="menuitem" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Nav Bar 2 — Order Now & Week Menu centred */}
      <nav className="nav-bar nav-bar-2" aria-label="Actions">
        <div className="nav-actions">
          <button className="btn btn--primary">Order Now</button>
          <button className="btn btn--secondary">See This Week Menu</button>
        </div>
      </nav>

      {preferencesOpen && (
        <div
          className="preferences-modal-overlay"
          role="presentation"
          onClick={handleClosePreferences}
        >
          <div
            className="preferences-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="preferences-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="preferences-modal__header">
              <h2 id="preferences-modal-title">Preferences</h2>
              <button
                type="button"
                className="preferences-modal__close"
                aria-label="Close preferences"
                onClick={handleClosePreferences}
              >
                ×
              </button>
            </div>

            <div className="preferences-modal__content">
              {kids.length === 0 && (
                <button
                  type="button"
                  className="preferences-modal__add-first"
                  onClick={handleAddKid}
                >
                  Add Kid 1
                </button>
              )}

              {kids.map((kid) => (
                <section key={kid.id} className="kid-preferences-card">
                  <button
                    type="button"
                    className="kid-preferences-card__title"
                    onClick={() => handleKidCollapseToggle(kid.id)}
                    aria-expanded={!kid.isCollapsed}
                  >
                    <span>{kid.name.trim() || 'Kid Name'}</span>
                    <span className="kid-preferences-card__toggle-icon">
                      {kid.isCollapsed ? '+' : '−'}
                    </span>
                  </button>

                  {!kid.isCollapsed && (
                    <div className="kid-preferences-card__body">
                      {kid.showNameInput && (
                        <div className="kid-preferences-card__name-field">
                          <label htmlFor={`kid-name-${kid.id}`}>Kid name</label>
                          <input
                            id={`kid-name-${kid.id}`}
                            type="text"
                            value={kid.name}
                            placeholder="Enter kid name"
                            onChange={(event) =>
                              handleKidNameChange(kid.id, event.target.value)
                            }
                            onBlur={() => handleKidNameDone(kid.id)}
                            onKeyDown={(event) => {
                              if (event.key === 'Enter') {
                                handleKidNameDone(kid.id);
                              }
                            }}
                          />
                        </div>
                      )}

                      {preferenceGroups.map((group, groupIndex) => (
                        <div
                          key={group.title}
                          className={`kid-preferences-card__group kid-preferences-card__group--${groupIndex + 1}`}
                        >
                          <h4>{group.title}:</h4>

                          <div className="kid-preferences-card__options">
                            {group.options.map((option) => (
                              <label
                                key={option}
                                className="kid-preferences-card__option"
                              >
                                <span>{option}</span>
                                <input
                                  type="checkbox"
                                  checked={kid.preferences[group.title][option]}
                                  onChange={() =>
                                    handlePreferenceToggle(
                                      kid.id,
                                      group.title,
                                      option,
                                    )
                                  }
                                />
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              {kids.length > 0 && (
                <button
                  type="button"
                  className="preferences-modal__add-more"
                  onClick={handleAddKid}
                >
                  Add Another Kid
                </button>
              )}
            </div>

            <div className="preferences-modal__footer">
              <button
                type="button"
                className="preferences-modal__button preferences-modal__button--secondary"
                onClick={handleClosePreferences}
              >
                Cancel
              </button>
              <button
                type="button"
                className="preferences-modal__button preferences-modal__button--primary"
                onClick={handleSavePreferences}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
