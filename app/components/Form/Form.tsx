"use client";

import Card from "@/app/components/Card/Card";
import EnrollButton from "./components/EnrollButton";
import SaveButton from "./components/SaveButton";
import type { Course } from "@/app/lib/definitions";

export default function Form({ courses }: { courses: Course[] }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <fieldset>
        {courses.map((course: Course) => (
          <div key={course.id} className="my-6">
            <Card course={course} />
          </div>
        ))}
      </fieldset>
      <EnrollButton />
      <SaveButton />
    </form>
  );
}
