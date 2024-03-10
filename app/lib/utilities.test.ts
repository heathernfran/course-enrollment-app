import { describe, expect, test } from "vitest";
import {
  formatCurrency,
  formatDate,
  formatMonthAndDate,
  formatTime,
  formatTimeZone,
  parseDate,
} from "./utilities";

const MOCK_LOCALE = "en-US";

describe("formatCurrency()", () => {
  test("returns the currency formatted for the locale", () => {
    const result = "$1,234";

    expect(formatCurrency(1234, "USD", MOCK_LOCALE)).toBe(result);
  });
});

describe("formatDate()", () => {
  test("returns the date formatted for the locale", () => {
    const timestamp = 1713538800;
    const result = "Friday, April 19";

    expect(formatDate(timestamp, MOCK_LOCALE)).toBe(result);
  });
});

describe("formatMonthAndDate()", () => {
  test("returns the formatted month and date only", () => {
    const timestamp = 1709182800;
    const timezone = "America/New_York";
    const result = "February 29";

    expect(formatMonthAndDate(timestamp, timezone, MOCK_LOCALE)).toBe(result);
  });
});

describe("formatTime()", () => {
  test("returns the time formatted for the locale in the America/New_York timezone", () => {
    const timestamp = 1713564000;
    const timezone = "America/New_York";
    const result = "6:00 PM";

    expect(formatTime(timestamp, timezone, MOCK_LOCALE)).toBe(result);
  });

  test("returns the time formatted for the locale in the America/Los_Angeles timezone", () => {
    const timestamp = 1713564000;
    const timezone = "America/Los_Angeles";
    const result = "3:00 PM";

    expect(formatTime(timestamp, timezone, MOCK_LOCALE)).toBe(result);
  });
});

describe("formatTimeZone()", () => {
  test("returns the formatted timezone for America/New_York", () => {
    const timezone = "America/New_York";

    expect(formatTimeZone(timezone)).toBe("New York City");
  });

  test("returns the formatted timezone for America/Los_Angeles", () => {
    const timezone = "America/Los_Angeles";

    expect(formatTimeZone(timezone)).toBe("Los Angeles");
  });
});

describe("parseDate()", () => {
  test("returns an object with day, month, and date", () => {
    const timestamp = 1711465200;
    const result = {
      date: "26",
      day: "Tuesday",
      month: "March",
    };

    expect(parseDate(timestamp, MOCK_LOCALE)).toMatchObject(result);
  });
});
