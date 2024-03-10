"use client";

import { useEffect, useState } from "react";

const DEFAULT_LOCALE = "en-US";

export function useLocale() {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    setLocale(window.navigator.language ?? DEFAULT_LOCALE);
  }, []);

  return locale;
}
