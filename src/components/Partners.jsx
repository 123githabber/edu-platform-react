import SectionTitle from './SectionTitle.jsx';

export default function Partners() {
  return (
    <section className="section" id="partners">
      <div className="container">
        <SectionTitle
          eyebrow="Партнёры"
          title="Платформа для образовательных и корпоративных задач"
        />
        <div className="partners-grid">
          <article className="partner-card">
            <div className="partner-logo partner-logo--icl">ICL</div>
            <div>
              <h3>ICL</h3>
              <p>
                Высокотехнологичная российская группа компаний, работающая в ИТ-услугах,
                проектах, решениях и продуктах.
              </p>
            </div>
            <a href="https://ICL.ru" className="partner-link">
              <span className="partner-arrow">↗</span>
            </a>
          </article>
          <article className="partner-card">
            <div className="partner-logo partner-logo--tat">TATNEFT</div>
            <div>
              <h3>Татнефть</h3>
              <p>
                Одна из крупнейших российских вертикально-интегрированных компаний,
                объединяющая производственные и технологические направления.
              </p>
            </div>
            <a href="https://tatneft.ru" className="partner-link">
              <span className="partner-arrow">↗</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
