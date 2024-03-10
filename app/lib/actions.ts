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

export async function postSaveCourse(id: number) {
  try {
    const response = await fetch(
      `${process.env.URL}/api/profile/saved/courses/${id}`,
      {
        method: "POST",
      }
    );
    return await response.json();
  } catch (err) {
    throw new Error(`Failed to postSaveCourse: ${err}`);
  }
}

export async function deleteSavedCourse(id: number) {
  try {
    const response = await fetch(
      `${process.env.URL}/api/profile/saved/courses/${id}`,
      { method: "DELETE" }
    );
    return await response.json();
  } catch (err) {
    throw new Error(`Failed to deleteSavedCourse: ${err}`);
  }
}

export async function getSavedCourses() {
  try {
    const response = await fetch(
      `${process.env.URL}/api/profile/saved/courses`
    );
    if (!response.ok) {
      throw new Error(`Network error in response`);
    }
    return response.json() || [];
  } catch (err) {
    throw new Error(`Failed to get saved courses: ${err}`);
  }
}
