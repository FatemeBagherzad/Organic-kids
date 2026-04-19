import { weeklyMenu } from './navData';

function WeeklyMenuBoard({ isOpen }) {
  if (!isOpen) {
    return null;
  }

  return (
    <section id="weekly-menu-panel" className="weekly-menu-inline" aria-label="Weekly menu">
      <div className="weekly-menu-modal weekly-menu-modal--inline">
        <div className="weekly-menu-modal__header">
          <div>
            <p className="weekly-menu-modal__eyebrow">School Lunch Board</p>
            <h2 id="weekly-menu-title">Sample of Menu Items</h2>
          </div>
        </div>

        <div className="weekly-menu-board">
          {weeklyMenu.map((dayMenu) => (
            <section key={dayMenu.day} className="menu-day-card">
              <div
                className="menu-day-card__label"
                style={{ '--menu-accent': dayMenu.accent }}
              >
                <span>{dayMenu.day}</span>
              </div>

              <div className="menu-day-card__content">
                <div
                  className="menu-day-card__items"
                  style={{ '--menu-stripe': dayMenu.stripe }}
                >
                  {dayMenu.items.map((item, index) => (
                    <div key={`${dayMenu.day}-${index}`} className="menu-line">
                      <div>
                        <p
                          className={`menu-line__name${item.vegetarian ? ' menu-line__name--vegetarian' : ''}`}
                        >
                          {item.name}
                        </p>
                        {item.note && <p className="menu-line__note">{item.note}</p>}
                      </div>
                    </div>
                  ))}

                  {dayMenu.callout && (
                    <div
                      className="menu-day-card__callout"
                      style={{ '--callout-accent': dayMenu.calloutAccent }}
                    >
                      <span className="menu-day-card__callout-icon">V</span>
                      <span>{dayMenu.callout}</span>
                    </div>
                  )}
                </div>

                <div className="menu-day-card__legend-rail">
                  {dayMenu.items.map((item, index) => (
                    <div
                      key={`${dayMenu.day}-legend-${index}`}
                      className="menu-day-card__legend-slot"
                    >
                      <span
                        className={`legend-ring${item.organic ? ' legend-ring--filled' : ''}`}
                      />
                    </div>
                  ))}
                </div>

                <div className="menu-day-card__marker-rail">
                  {dayMenu.markers.map((marker) => (
                    <span
                      key={`${dayMenu.day}-${marker}`}
                      className={`marker-dot marker-dot--${marker}`}
                    />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="weekly-menu-key" aria-label="Menu key">
          <span>
            <i className="legend-ring" aria-hidden="true" /> Organic
          </span>
          <span>
            <i className="marker-dot marker-dot--green" aria-hidden="true" /> Green Vegetables
          </span>
          <span>
            <i className="marker-dot marker-dot--orange" aria-hidden="true" /> Orange Vegetables
          </span>
        </div>
      </div>
    </section>
  );
}

export default WeeklyMenuBoard;
