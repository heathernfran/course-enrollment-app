import { useCourses } from "@/app/context/CoursesContext";
import { postEnrollment } from "@/app/lib/actions";
import "./EnrollButton.css";

export default function EnrollButton() {
  const { state } = useCourses();

  const handleEnroll = () => {
    if (state.selectedCourseId !== null) {
      postEnrollment(state.selectedCourseId);
    }
  };

  return (
    <button
      disabled={!state.selectedCourseId}
      onClick={handleEnroll}
      className="enroll-button"
    >
      Enroll in Course
    </button>
  );
}
