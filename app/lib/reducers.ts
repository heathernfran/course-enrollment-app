import type { CoursesAction, CoursesState } from "@/app/lib/definitions";

export const coursesInitialState = {
  saved: [],
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
    default: {
      throw new Error(`Unknown action: ${action}`);
    }
  }
}
