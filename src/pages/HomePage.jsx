import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Partners from '../components/Partners.jsx';
import LecturerCard from '../components/LecturerCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

export default function HomePage({ lecturers, onNavigate, onOpenLecturer, onBook }) {
  const featured = lecturers[8];

  return (
    <main>
      <Hero
        featured={featured}
        onOpen={onOpenLecturer}
        onLecturers={() => onNavigate('lecturers')}
        onBook={() => onBook(null)}
      />

      <About />
      <Partners />

      <section className="section section--dark">
        <div className="container">
          <SectionTitle
            eyebrow="Лекторы"
            title="Эксперты из разных областей"
            text="В каталоге собраны преподаватели по IT, естественным наукам, экономике, дизайну, психологии, гуманитарным дисциплинам и международным отношениям."
          />
          <div className="lecturers-grid lecturers-grid--home">
            {lecturers.slice(0, 4).map((lecturer) => (
              <LecturerCard key={lecturer.id} lecturer={lecturer} onOpen={onOpenLecturer} onBook={onBook} />
            ))}
          </div>
          <div className="section-cta">
            <button className="button button--light" type="button" onClick={() => onNavigate('lecturers')}>
              Смотреть всех лекторов
            </button>
          </div>
        </div>
      </section>

      <section className="section steps-section">
        <div className="container">
          <SectionTitle eyebrow="Как это работает" title="От поиска до занятия — три шага" align="center" />
          <div className="steps-grid">
            <article><span>1</span><h3>Выберите эксперта</h3><p>Используйте каталог и фильтр по дисциплине.</p></article>
            <article><span>2</span><h3>Изучите программу</h3><p>Откройте профиль и сравните темы и тарифы.</p></article>
            <article><span>3</span><h3>Оставьте заявку</h3><p>Укажите удобный формат занятия и контакты.</p></article>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-cta-card">
          <div>
            <span className="eyebrow">Начнём?</span>
            <h2>Не знаете, какой преподаватель подойдёт?</h2>
            <p>Оставьте заявку и укажите интересующую дисциплину или задачу.</p>
          </div>
          <button className="button button--light" type="button" onClick={() => onBook(null)}>Подобрать лектора</button>
        </div>
      </section>
    </main>
  );
}
