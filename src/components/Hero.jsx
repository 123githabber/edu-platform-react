export default function Hero({ featured, onOpen, onLecturers, onBook }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Знания от практиков</span>
          <h1>Найдите лектора, который сопроводит вас в научных дисциплинах</h1>
          <p>
            Учебная платформа соединяет студентов, компании, образовательные учреждения
            и НКО с профессиональными лекторами, спикерами и тренерами.
          </p>
          <div className="hero-actions">
            <button className="button" type="button" onClick={onLecturers}>Найти лектора</button>
            <button className="button button--ghost" type="button" onClick={onBook}>Оставить заявку</button>
          </div>
        </div>

        <div className="hero-card-wrap">
          <div className="hero-orbit hero-orbit--one" />
          <div className="hero-orbit hero-orbit--two" />
          <article className="hero-lecturer-card">
            <div className="hero-photo-wrap">
              <img src={featured.photo} alt={featured.name} />
              <span className="hero-badge">Лектор недели</span>
            </div>
            <div className="hero-lecturer-content">
              <span className="muted">{featured.degree}</span>
              <h3>{featured.name}</h3>
              <p>{featured.tagline}</p>
              <button className="link-button" type="button" onClick={() => onOpen(featured)}>
                Смотреть профиль <span>→</span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
