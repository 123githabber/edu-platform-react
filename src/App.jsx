import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LecturerModal from './components/LecturerModal.jsx';
import BookingModal from './components/BookingModal.jsx';
import HomePage from './pages/HomePage.jsx';
import LecturersPage from './pages/LecturersPage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import { allCourses, lecturers } from './data/lecturers.js';

export default function App() {
  const [page, setPage] = useState('home');
  const [selectedLecturer, setSelectedLecturer] = useState(null);
  const [bookingLecturer, setBookingLecturer] = useState(undefined);

  const navigate = (target) => {
    if (target === 'about' || target === 'partners') {
      if (page !== 'home') {
        setPage('home');
        window.setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }), 40);
      } else {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBook = (lecturer = null) => setBookingLecturer(lecturer);
  const closeBook = () => setBookingLecturer(undefined);

  useEffect(() => {
    const title = page === 'home' ? 'Lecture Hub — учебная платформа' : page === 'lecturers' ? 'Лекторы — Lecture Hub' : 'Лекции — Lecture Hub';
    document.title = title;
  }, [page]);

  return (
    <div className="app-shell">
      <Header page={page} onNavigate={navigate} onBook={() => openBook(null)} />

      {page === 'home' && (
        <HomePage
          lecturers={lecturers}
          onNavigate={navigate}
          onOpenLecturer={setSelectedLecturer}
          onBook={openBook}
        />
      )}
      {page === 'lecturers' && (
        <LecturersPage lecturers={lecturers} onOpenLecturer={setSelectedLecturer} onBook={openBook} />
      )}
      {page === 'courses' && (
        <CoursesPage courses={allCourses} lecturers={lecturers} onOpenLecturer={setSelectedLecturer} onBook={openBook} />
      )}

      <Footer onNavigate={navigate} />

      <LecturerModal
        lecturer={selectedLecturer}
        onClose={() => setSelectedLecturer(null)}
        onBook={(lecturer) => {
          setSelectedLecturer(null);
          openBook(lecturer);
        }}
      />

      {bookingLecturer !== undefined && (
        <BookingModal lecturer={bookingLecturer} onClose={closeBook} />
      )}
    </div>
  );
}
