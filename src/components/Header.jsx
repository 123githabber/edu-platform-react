import { useState } from 'react';

const items = [
  { id: 'home', label: 'Главная' },
  { id: 'lecturers', label: 'Лекторы' },
  { id: 'courses', label: 'Лекции' }
];

export default function Header({ page, onNavigate, onBook }) {
  const [open, setOpen] = useState(false);

  const go = (target) => {
    onNavigate(target);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand" onClick={() => go('home')} aria-label="На главную">
          <span className="brand-mark">L</span>
          <span>
            <strong>Lecture Hub</strong>
            <small>учебная платформа</small>
          </span>
        </button>

        <button
          className="mobile-menu"
          type="button"
          aria-label="Открыть меню"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${open ? 'main-nav--open' : ''}`}>
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={page === item.id ? 'active' : ''}
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button type="button" onClick={() => go('about')}>О нас</button>
          <button type="button" onClick={() => go('partners')}>Партнёры</button>
        </nav>

        <button className="button button--small header-action" type="button" onClick={onBook}>
          Записаться
        </button>
      </div>
    </header>
  );
}
