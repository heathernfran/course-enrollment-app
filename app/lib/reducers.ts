import type { CoursesAction, CoursesState } from "@/app/lib/definitions";

export const coursesInitialState = {
  saved: [],
  selectedCourseId: null,
};

export function coursesReducer(state: CoursesState, action: CoursesAction) {
  switch (action.type) {
    case "SAVE_COURSE": {
      const nextSaved = [...state.saved, action.id];
      return {
        ...state,
        saved: nextSaved,
      };
    }
    case "UNSAVE_COURSE": {
      const nextSaved = state.saved.filter((id) => id !== action.id);
      return {
        ...state,
        saved: nextSaved,
      };
    }
    case "UPDATE_SELECTED_COURSE_ID": {
      const nextCourseId = action.id;
      return {
        ...state,
        selectedCourseId: nextCourseId,
      };
    }
    default: {
      throw new Error(`Unknown action: ${action}`);
    }
  }
}
