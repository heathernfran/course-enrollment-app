import { getCoursesById } from "@/app/lib/actions";
import { COURSE_ID } from "@/app/lib/data";
import { Course as CourseType } from "@/app/lib/definitions";

export default async function Page() {
  const courses = await getCoursesById(COURSE_ID);

  return (
    <div>
      <h1>Course page</h1>
      <ul>
        {courses.map((course: CourseType) => (
          <li key={course.id}>{course.id}</li>
        ))}
      </ul>
    </div>
  );
}
