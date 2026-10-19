import { useEffect, useState } from 'react';

export default function LecturerModal({ lecturer, onClose, onBook }) {
  const [openCourse, setOpenCourse] = useState(0);

  useEffect(() => {
    if (!lecturer) return undefined;
    const onKey = (event) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.classList.add('modal-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('modal-open');
    };
  }, [lecturer, onClose]);

  if (!lecturer) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="modal modal--large" role="dialog" aria-modal="true" aria-label={`Профиль ${lecturer.name}`} onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" aria-label="Закрыть" onClick={onClose}>×</button>

        <div className="profile-head">
          <img src={lecturer.photo} alt={lecturer.name} />
          <div>
            <span className="eyebrow">Профиль лектора</span>
            <h2>{lecturer.name}</h2>
            <p className="profile-tagline">{lecturer.tagline}</p>
            <div className="profile-facts">
              <div><span>Образование</span><strong>{lecturer.education}</strong></div>
              <div><span>Стаж</span><strong>{lecturer.experience} лет</strong></div>
              <div><span>Учёная степень</span><strong>{lecturer.degree}</strong></div>
            </div>
          </div>
        </div>

        <div className="modal-grid">
          <div>
            <h3 className="modal-subtitle">Дисциплины и темы</h3>
            <div className="course-accordion">
              {lecturer.courses.map((course, index) => (
                <section className={`course-panel ${openCourse === index ? 'course-panel--open' : ''}`} key={course.title}>
                  <button type="button" onClick={() => setOpenCourse(openCourse === index ? -1 : index)}>
                    <span>
                      <strong>{course.title}</strong>
                      <small>{course.description}</small>
                    </span>
                    <b>{openCourse === index ? '−' : '+'}</b>
                  </button>
                  {openCourse === index && (
                    <ol>
                      {course.topics.map((topic) => <li key={topic}>{topic}</li>)}
                    </ol>
                  )}
                </section>
              ))}
            </div>
          </div>

          <aside className="price-panel">
            <h3>Тарифы</h3>
            {lecturer.prices.map((item) => (
              <div className="price-row" key={`${item.label}-${item.price}`}>
                <div>
                  <strong>{item.label}</strong>
                  {item.details && <span>{item.details}</span>}
                </div>
                <b>{item.price}</b>
              </div>
            ))}
            <button className="button button--full" type="button" onClick={() => onBook(lecturer)}>
              Записаться к лектору
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}
