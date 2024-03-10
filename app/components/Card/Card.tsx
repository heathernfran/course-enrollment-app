import { Course } from "@/app/lib/definitions";
import Image from "next/image";

export default function Card({ course }: { course: Course }) {
  const { dates, id, location, instructors, pricing } = course;

  return (
    <div>
      {/* Begin left column */}
      <div>
        <input type="radio" id={id.toString()} name="course" value={id} />
        <label htmlFor={id.toString()}>Virtual Course</label>
        <div>
          {dates[0][0]} - {dates[0][1]}
        </div>
        <div>{location.timezone}</div>
        <div>
          {pricing.amount} {pricing.currency} Until {pricing.valid_until}
        </div>
      </div>
      {/* End left column */}
      {/* Begin right column */}
      <div>
        {instructors.map((instructor, index) => (
          <div key={index}>
            <Image
              src={instructor.portrait_image}
              alt={`Photo of ${instructor.first_name} ${instructor.last_name}`}
              width={100}
              height={100}
            />
            <div>
              Instructor: <br />
              {instructor.first_name}
            </div>
          </div>
        ))}
      </div>
      {/* End right column */}
    </div>
  );
}
