"use client";

import { useCourses } from "@/app/context/CoursesContext";

export default function Saved() {
  const { state } = useCourses();

  return (
    <div>
      {state.saved.length ? (
        <ul>
          {state.saved.map((savedId: number) => (
            <li key={savedId}>{savedId}</li>
          ))}
        </ul>
      ) : (
        <p>No courses saved</p>
      )}
    </div>
  );
}
