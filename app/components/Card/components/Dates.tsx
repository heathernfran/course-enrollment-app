import { useLocale } from "@/app/hooks/useLocale";
import type { Timestamps } from "@/app/lib/definitions";
import { formatDate, parseDate } from "@/app/lib/utilities";
import "./Dates.css";

export default function Dates({ dates }: { dates: Timestamps }) {
  const locale = useLocale();

  const start = dates[0][0];

  if (dates[1]) {
    const {
      day: startDay,
      month: startMonth,
      date: startDate,
    } = parseDate(start, locale);

    const end = dates[1][1];
    const {
      day: endDay,
      month: endMonth,
      date: endDate,
    } = parseDate(end, locale);

    return (
      <p className="start-end-dates">
        {startDay} & {endDay},
        <br />
        {startMonth} {startDate} & {endMonth} {endDate}
      </p>
    );
  }

  return <p className="start-end-dates">{formatDate(start, locale)}</p>;
}
