import { useCourses } from "@/app/context/CoursesContext";
import "./EnrollButton.css";

export default function EnrollButton() {
  const { state } = useCourses();

  return (
    <button disabled={!state.selectedCourseId} className="enroll-button">
      Enroll in Course
    </button>
  );
}
