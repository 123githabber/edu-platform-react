export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand--footer">
            <span className="brand-mark">L</span>
            <span><strong>Lecture hub</strong><small>учебная платформа</small></span>
          </div>
          <p>Онлайн и офлайн занятия с преподавателями из разных профессиональных областей.</p>
        </div>
        <div>
          <strong>Разделы</strong>
          <button type="button" onClick={() => onNavigate('home')}>Главная</button>
          <button type="button" onClick={() => onNavigate('lecturers')}>Лекторы</button>
          <button type="button" onClick={() => onNavigate('courses')}>Лекции</button>
        </div>
        <div>
          <strong>Форматы</strong>
          <span>Индивидуальные занятия</span>
          <span>Интенсивы</span>
          <span>Корпоративные тренинги</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2010-2026 LectureHub. email: info@lecturehub.ru ;  </span>
      </div>
    </footer>
  );
}
