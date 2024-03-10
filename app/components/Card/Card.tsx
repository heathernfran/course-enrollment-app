import Dates from "@/app/components/Card/components/Dates";
import Instructor from "@/app/components/Card/components/Instructor";
import Pricing from "@/app/components/Card/components/Pricing";
import Times from "@/app/components/Card/components/Times";
import type { Course } from "@/app/lib/definitions";
import { formatTimeZone } from "@/app/lib/utilities";
import "./Card.css";

export default function Card({ course }: { course: Course }) {
  const { dates, id, location, instructors, pricing } = course;

  return (
    <div className="card">
      {/* Begin left column */}
      <div>
        <div className="mb-4 mt-6 ml-2">
          <input type="radio" id={id.toString()} name="course" value={id} />
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
