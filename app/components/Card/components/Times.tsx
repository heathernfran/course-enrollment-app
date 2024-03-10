import { useLocale } from "@/app/hooks/useLocale";
import type { Location, Timestamps } from "@/app/lib/definitions";
import { formatTime } from "@/app/lib/utilities";

export default function Times({
  dates,
  location,
}: {
  dates: Timestamps;
  location: Location;
}) {
  const locale = useLocale();

  const { timezone } = location;

  return (
    <>
      {dates.map((time, index) => (
        <div key={index} className="my-2">
          {index === 0 && (
            <p className="text-title-small">
              {formatTime(time[0], timezone, locale)} -{" "}
              {formatTime(time[1], timezone, locale)}
            </p>
          )}
        </div>
      ))}
    </>
  );
}
