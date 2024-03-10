"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function getCoursesById(id: number) {
  try {
    const response = await fetch(
      `${getProtocolHost()}/api/courses/${id}/schedule`,
      {
        method: "GET",
      }
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
      `${getProtocolHost()}/api/profile/saved/courses/${id}`,
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
      `${getProtocolHost()}/api/profile/saved/courses/${id}`,
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
      `${getProtocolHost()}/api/profile/saved/courses`,
      { method: "GET" }
    );
    if (!response.ok) {
      throw new Error(`Network error in response`);
    }
    return response.json() || [];
  } catch (err) {
    throw new Error(`Failed to getSavedCourses: ${err}`);
  }
}

export async function postEnrollment(id: number) {
  // The delay is only to test latency in the API call, before redirecting to
  // the enrollment confirmation page.
  // Note: I did not see an API contract for posting course enrollments, and
  // therefore did not stub out an API handler for this.
  await simulateDelay(1000);

  redirect(`/courses/${id}/enroll`);
}

function getHost() {
  return headers().get("host");
}

function getProtocol() {
  return process.env.NODE_ENV === "development" ? "http" : "https";
}

function getProtocolHost() {
  return `${getProtocol()}://${getHost()}`;
}

function simulateDelay(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
