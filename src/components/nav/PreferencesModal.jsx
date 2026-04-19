import { preferenceGroups } from './navData';

function PreferencesModal({
  isOpen,
  kids,
  onClose,
  onAddKid,
  onKidNameChange,
  onKidNameDone,
  onKidCollapseToggle,
  onPreferenceToggle,
  onSave,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="preferences-modal-overlay" role="presentation" onClick={onClose}>
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
            onClick={onClose}
          >
            x
          </button>
        </div>

        <div className="preferences-modal__content">
          {kids.length === 0 && (
            <button
              type="button"
              className="preferences-modal__add-first"
              onClick={onAddKid}
            >
              Add your first child&apos;s preferences
            </button>
          )}

          {kids.map((kid) => (
            <section key={kid.id} className="kid-preferences-card">
              <button
                type="button"
                className="kid-preferences-card__title"
                onClick={() => onKidCollapseToggle(kid.id)}
                aria-expanded={!kid.isCollapsed}
              >
                <span>{kid.name.trim() || 'Kid Name'}</span>
                <span className="kid-preferences-card__toggle-icon">
                  {kid.isCollapsed ? '+' : '-'}
                </span>
              </button>

              {!kid.isCollapsed && (
                <div className="kid-preferences-card__body">
                  {kid.showNameInput && (
                    <div className="kid-preferences-card__name-field">
                      <label htmlFor={`kid-name-${kid.id}`}>Your child&apos;s name</label>
                      <input
                        id={`kid-name-${kid.id}`}
                        type="text"
                        value={kid.name}
                        placeholder="Enter kid name"
                        onChange={(event) =>
                          onKidNameChange(kid.id, event.target.value)
                        }
                        onBlur={() => onKidNameDone(kid.id)}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter') {
                            onKidNameDone(kid.id);
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
                          <label key={option} className="kid-preferences-card__option">
                            <span>{option}</span>
                            <input
                              type="checkbox"
                              checked={kid.preferences[group.title][option]}
                              onChange={() =>
                                onPreferenceToggle(kid.id, group.title, option)
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
              onClick={onAddKid}
            >
              Add your next child&apos;s preferences
            </button>
          )}
        </div>

        <div className="preferences-modal__footer">
          <button
            type="button"
            className="preferences-modal__button preferences-modal__button--secondary"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="preferences-modal__button preferences-modal__button--primary"
            onClick={onSave}
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreferencesModal;
