import { useLocale } from "@/app/hooks/useLocale";
import type {
  Location as LocationType,
  Pricing as PricingType,
} from "@/app/lib/definitions";
import { formatCurrency, formatMonthAndDate } from "@/app/lib/utilities";

export default function Pricing({
  location,
  pricing,
}: {
  location: LocationType;
  pricing: PricingType;
}) {
  const locale = useLocale();

  const { timezone } = location;
  const { amount, currency, valid_until } = pricing;

  return (
    <div className="my-6">
      <span className="font-bold">
        {formatCurrency(amount, currency, locale)}
      </span>{" "}
      Until {formatMonthAndDate(valid_until, timezone, locale)}
    </div>
  );
}
