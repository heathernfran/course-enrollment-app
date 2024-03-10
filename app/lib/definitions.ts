import { type Dispatch } from "react";

export type Timestamps = number[][];

export type Instructor = {
  first_name: string;
  last_name: string;
  portrait_image: string;
};

export type Location = {
  timezone: string;
};

export type Pricing = {
  amount: number;
  currency: string;
  valid_until: number;
};

export type Course = {
  id: number;
  dates: Timestamps;
  instructors: Instructor[];
  location: Location;
  pricing: Pricing;
};

export type CoursesState = {
  saved: number[];
};

interface SaveCourse {
  type: "SAVE_COURSE";
  id: number;
}
interface UnsaveCourse {
  type: "UNSAVE_COURSE";
  id: number;
}
export type CoursesAction = SaveCourse | UnsaveCourse;

export type CoursesContextType = {
  state: CoursesState;
  dispatch: Dispatch<CoursesAction>;
};
