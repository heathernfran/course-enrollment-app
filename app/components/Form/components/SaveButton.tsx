import { useCourses } from "@/app/context/CoursesContext";
import { deleteSavedCourse, postSaveCourse } from "@/app/lib/actions";
import "./SaveButton.css";

export default function SaveButton() {
  const { state, dispatch } = useCourses();

  const isSavedCourse = () =>
    state.selectedCourseId !== null &&
    state.saved.includes(state.selectedCourseId);

  const handleSave = () => {
    if (state.selectedCourseId !== null) {
      const nextSelectedCourseId = state.selectedCourseId;
      if (isSavedCourse()) {
        dispatch({ type: "UNSAVE_COURSE", id: nextSelectedCourseId });
        deleteSavedCourse(nextSelectedCourseId);
      } else {
        dispatch({ type: "SAVE_COURSE", id: nextSelectedCourseId });
        postSaveCourse(nextSelectedCourseId);
      }
    }
  };

  return (
    <button
      disabled={!state.selectedCourseId}
      onClick={handleSave}
      className="save-button"
    >
      {isSavedCourse() ? `Unsave Course` : `Save Course`}
    </button>
  );
}
