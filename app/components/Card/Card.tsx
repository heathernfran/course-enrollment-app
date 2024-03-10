import type { Course } from "@/app/lib/definitions";
import { formatTimeZone } from "@/app/lib/utilities";
import Dates from "@/app/components/Card/components/Dates";
import Instructor from "@/app/components/Card/components/Instructor";
import Pricing from "@/app/components/Card/components/Pricing";
import Times from "@/app/components/Card/components/Times";
import { useCourses } from "@/app/context/CoursesContext";
import "./Card.css";

export default function Card({ course }: { course: Course }) {
  const { state, dispatch } = useCourses();

  const { dates, id, location, instructors, pricing } = course;

  function handleChange() {
    // setIsChecked(!isChecked);
    // onChange(id);
    dispatch({ type: "UPDATE_SELECTED_COURSE_ID", id });
  }

  // console.log("id === state.selectedCourseId", id === state.selectedCourseId);

  return (
    <div
      className={`card ${
        id === state.selectedCourseId
          ? "border-blue-50"
          : "border-neutral-80 hover:border-primary-20"
      }`}
    >
      {/* Begin left column */}
      <div>
        <div className="mb-4 mt-6 ml-2">
          <input
            type="radio"
            id={id.toString()}
            name="course"
            value={id}
            checked={id === state.selectedCourseId}
            onChange={handleChange}
          />
          <label
            htmlFor={id.toString()}
            className="text-primary-30 font-bold ml-2"
          >
            Virtual Course
          </label>
        </div>
        <div className="mx-8">
          <Dates dates={dates} />
          <Times dates={dates} location={location} />
          <div className="my-2">{`${formatTimeZone(
            location.timezone
          )} Time`}</div>
          <Pricing location={location} pricing={pricing} />
        </div>
      </div>
      {/* End left column */}
      {/* Begin right column */}
      <div>
        {instructors.map((instructor, index) => (
          <Instructor key={index} instructor={instructor} />
        ))}
      </div>
      {/* End right column */}
    </div>
  );
}
