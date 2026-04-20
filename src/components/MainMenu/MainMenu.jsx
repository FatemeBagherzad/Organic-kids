import './MainMenu.scss';

function MainMenu({ isOpen, items, onSelect }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="main-menu"
      className="main-menu"
      role="menu"
      aria-label="Main menu"
    >
      {items.map((item) => (
        <button
          key={item.label}
          className="main-menu__item"
          role="menuitem"
          onClick={() => onSelect?.(item)}
        >
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}

export default MainMenu;
