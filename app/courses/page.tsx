import Form from "@/app/components/Form/Form";
import { getCoursesById } from "@/app/lib/actions";
import { COURSE_ID } from "@/app/lib/data";

export default async function Page() {
  const courses = await getCoursesById(COURSE_ID);

  return (
    <div>
      <h1>Course Dates</h1>
      <Form courses={courses} />
    </div>
  );
}
