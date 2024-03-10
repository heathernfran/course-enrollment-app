"use client";

import { type ReactNode, createContext, useContext, useReducer } from "react";
import type { CoursesContextType } from "@/app/lib/definitions";
import { coursesInitialState, coursesReducer } from "@/app/lib/reducers";

const CoursesContext = createContext({});

export function useCourses() {
  return useContext(CoursesContext) as CoursesContextType;
}

export default function CoursesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(coursesReducer, coursesInitialState);

  return (
    <CoursesContext.Provider value={{ state, dispatch }}>
      {children}
    </CoursesContext.Provider>
  );
}
