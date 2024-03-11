export function formatCurrency(
  amount: number,
  currency: string,
  locale: string
) {
  const options: Intl.NumberFormatOptions = {
    currency,
    maximumFractionDigits: 0,
    style: "currency",
  };

  const currencyWithOptions = new Intl.NumberFormat(locale, options).format(
    amount
  );

  return currencyWithOptions;
}

export function formatDate(timestamp: number, locale: string) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const date = getNewDate(timestamp);
  const dateWithOptions = date.toLocaleDateString(locale, options);

  return dateWithOptions;
}

export function formatMonthAndDate(
  timestamp: number,
  timeZone: string,
  locale: string
) {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    timeZone,
  };

  const date = getNewDate(timestamp);
  const dateWithOptions = date.toLocaleDateString(locale, options);

  return dateWithOptions;
}

export function formatTime(
  timestamp: number,
  timeZone: string,
  locale: string
) {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
    timeZone,
  };

  const date = getNewDate(timestamp);
  const timeWithOptions = date
    .toLocaleTimeString(locale, options)
    .toLocaleLowerCase()
    .replace(":00", "");

  return timeWithOptions;
}

export function formatTimeZone(timezone: string): string {
  const TIME_ZONES: { [key: string]: string } = {
    "America/New_York": "New York City",
    "America/Chicago": "Chicago",
    "America/Denver": "Denver",
    "America/Los_Angeles": "Los Angeles",
    "America/Phoenix": "Phoenix",
    "America/Anchorage": "Anchorage",
  };

  return TIME_ZONES[timezone] ?? timezone;
}

export function parseDate(timestamp: number, locale: string) {
  const [day, month, date] = formatDate(timestamp, locale).split(" ");
  const modifiedDay = day.replace(",", "");

  return { day: modifiedDay, month, date };
}

function getNewDate(timestamp: number) {
  return new Date(timestamp * 1000);
}
