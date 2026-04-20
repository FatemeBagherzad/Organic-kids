import './UserMenu.scss';

function UserMenu({ isOpen, onPreferences, onLogout }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="user-menu" role="menu" aria-label="User menu">
      <button role="menuitem" onClick={onPreferences}>
        Add your kids
      </button>
      <button role="menuitem">Payment Method</button>
      <button role="menuitem" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
