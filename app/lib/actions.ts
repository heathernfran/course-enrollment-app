"use server";

export async function getCoursesById(id: number) {
  try {
    const response = await fetch(
      `${process.env.URL}/api/courses/${id}/schedule`
    );
    if (!response.ok) {
      throw new Error(`Network error`);
    }
    const { courses } = await response.json();
    return courses;
  } catch (err) {
    throw new Error(`Failed to getCoursesById: ${err}`);
  }
}
