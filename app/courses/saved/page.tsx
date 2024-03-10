import Saved from "@/app/components/Saved";
import { getSavedCourses } from "@/app/lib/actions";

export default async function Page() {
  const courses = await getSavedCourses();

  const renderSavedCourses = () => (
    <ul>
      {courses.map((courseId: number) => (
        <li key={courseId}>{courseId}</li>
      ))}
    </ul>
  );

  // renderSavedCourses() and <Saved /> are effectively doing the same thing.
  // Once the API is built for getting saved courses, the courses from the
  // response can be used instead of the coureses from the reducer state.

  // Next.js treats page.tsx components as React server components by default,
  // and components must be client components in order to access React state.
  // The <Saved /> component is getting its data from state, therefore it needs
  // to be a client component.
  return (
    <div>
      <h1>Saved Courses</h1>
      {courses.length ? renderSavedCourses() : <Saved />}
    </div>
  );
}
