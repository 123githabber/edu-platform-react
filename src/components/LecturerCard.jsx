export default function LecturerCard({ lecturer, onOpen, onBook }) {
  const minPrice = lecturer.prices[0]?.price;

  return (
    <article className="lecturer-card">
      <button className="lecturer-photo-button" type="button" onClick={() => onOpen(lecturer)}>
        <img className="lecturer-photo" src={lecturer.photo} alt={lecturer.name} loading="lazy" />
      </button>
      <div className="lecturer-card-content">
        <div className="lecturer-meta">
          <span>{lecturer.experience} лет опыта</span>
          <span>от {minPrice}</span>
        </div>
        <h3>{lecturer.name}</h3>
        <p className="lecturer-degree">{lecturer.degree}</p>
        <p className="lecturer-tagline">{lecturer.tagline}</p>
        <div className="tag-list">
          {lecturer.courses.slice(0, 3).map((course) => (
            <span key={course.title}>{course.title}</span>
          ))}
        </div>
        <div className="card-actions">
          <button className="link-button" type="button" onClick={() => onOpen(lecturer)}>Подробнее →</button>
          <button className="button button--tiny" type="button" onClick={() => onBook(lecturer)}>Записаться</button>
        </div>
      </div>
    </article>
  );
}
