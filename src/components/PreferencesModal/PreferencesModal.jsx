import { preferenceGroups } from '../../data/siteData';
import './PreferencesModal.scss';

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
    <div
      className="preferences-modal-overlay"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="preferences-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Child preferences"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="preferences-modal__header">
          <div className="preferences-modal__header-main">
            <button
              type="button"
              className="preferences-modal__add-first preferences-modal__add-first--header"
              onClick={onAddKid}
            >
              {kids.length === 0
                ? '+ Add your first child'
                : '+ Add next child'}
            </button>
          </div>

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
          {kids.map((kid) => (
            <section key={kid.id} className="kid-preferences-card">
              <div className="kid-preferences-card__title">
                {kid.showNameInput ? (
                  <div className="kid-preferences-card__name-field kid-preferences-card__name-field--title">
                    <label htmlFor={`kid-name-${kid.id}`}>
                      Your child&apos;s name
                    </label>
                    <input
                      id={`kid-name-${kid.id}`}
                      type="text"
                      value={kid.name}
                      placeholder="Type name"
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
                ) : (
                  <span className="kid-preferences-card__name-value">
                    {kid.name.trim() || "Your child's name"}
                  </span>
                )}

                <button
                  type="button"
                  className="kid-preferences-card__toggle-btn"
                  onClick={() => onKidCollapseToggle(kid.id)}
                  aria-expanded={!kid.isCollapsed}
                  aria-label={
                    kid.isCollapsed
                      ? 'Expand child preferences'
                      : 'Collapse child preferences'
                  }
                >
                  <span className="kid-preferences-card__toggle-icon">
                    {kid.isCollapsed ? '+' : '-'}
                  </span>
                </button>
              </div>

              {!kid.isCollapsed && (
                <div className="kid-preferences-card__body">
                  <div className="kid-preferences-card__groups">
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
                                  onPreferenceToggle(
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
                </div>
              )}
            </section>
          ))}
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
