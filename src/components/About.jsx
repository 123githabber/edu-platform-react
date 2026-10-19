import SectionTitle from './SectionTitle.jsx';

const advantages = [
  ['01', 'Проверенные специалисты', 'В профиле каждого лектора указаны образование, опыт, учёная степень и программы дисциплин.'],
  ['02', 'Гибкий формат', 'Индивидуальные занятия, пакеты, интенсивы, корпоративные тренинги и сопровождение проектов.'],
  ['03', 'Прозрачная программа', 'До записи можно изучить темы курса, стоимость и опыт преподавателя.'],
  ['04', 'Для людей и компаний', 'Платформа подходит физическим и юридическим лицам, образовательным организациям и НКО.']
];

export default function About() {
  return (
    <section className="section section--soft" id="about">
      <div className="container">
        <SectionTitle
          eyebrow="О платформе"
          title="Подбор эксперта без лишней переписки"
          text="Мы упрощаем процесс поиска, бронирования и организации лекций — от выбора направления до записи на занятие."
        />
        <div className="advantages-grid">
          {advantages.map(([number, title, text]) => (
            <article className="advantage-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
