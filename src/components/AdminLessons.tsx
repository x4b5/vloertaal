import { courseUnits } from '../content/courses';

/**
 * The admin page's list of every lesson of the Dutch course, one tap to open it. A lesson
 * opened here is a look-through: no progress is saved and nothing is counted (App.tsx, `admin`).
 * The work-rules and Belgian tracks load their own file later, so they are not listed yet.
 */
export function AdminLessons({ onLesson }: { onLesson: (lessonId: string) => void }) {
  return (
    <div className="admin-lessons">
      {courseUnits('taal').map((unit) => (
        <section key={unit.id} className="admin-card">
          <h3>{unit.emoji} {unit.titleNl}</h3>
          <ol className="admin-lesson-list">
            {unit.lessons.map((lesson) => (
              <li key={lesson.id}>
                <button type="button" className="btn admin-lesson" data-lesson={lesson.id} onClick={() => onLesson(lesson.id)}>
                  {lesson.title}
                </button>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
