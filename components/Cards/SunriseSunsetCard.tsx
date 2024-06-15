import { format, getHours, getMinutes } from "date-fns";
import { Sunrise, Sunset } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
    type: "SUNRISE" | "SUNSET";
    time: number | undefined; // ISO format date string
    loading?: boolean;
}

export default function SunriseSunsetCard({
    type,
    time,
    loading = true,
}: Props) {
    if (!time || loading)
        return <Skeleton className="flex-1 rounded-none bg-white/10 py-10" />;

    const Icon = type === "SUNRISE" ? Sunrise : Sunset;
    const label = type === "SUNRISE" ? "Sunrise" : "Sunset";

    const now = new Date();
    const eventTime = new Date(time * 1000);
    const formattedTime = format(eventTime, "hh:mm aa");

    const currentHours = getHours(now);
    const currentMinutes = getMinutes(now);
    const eventHours = getHours(eventTime);
    const eventMinutes = getMinutes(eventTime);

    const currentTotalMinutes = currentHours * 60 + currentMinutes;
    const eventTotalMinutes = eventHours * 60 + eventMinutes;
    const minutesDifference = eventTotalMinutes - currentTotalMinutes;

    const hoursDifference = Math.abs(Math.floor(minutesDifference / 60));

    let timeDifferenceLabel;
    const hourLabel = Math.abs(hoursDifference) <= 1 ? "hour" : "hours";

    if (minutesDifference > 0) {
        timeDifferenceLabel = `In ${hoursDifference} ${hourLabel}`;
    } else {
        timeDifferenceLabel = `${hoursDifference} ${hourLabel} ago`;
    }

    return (
        <div className="p-4 bg-white/10 flex items-center justify-between">
            <div className="flex items-end gap-4">
                <Icon className="h-10 w-10 text-white" />
                <div className="flex flex-col gap-1">
                    <p className="text-gray-400">{label}</p>
                    <p className="text-2xl font-bold text-white">
                        {formattedTime}
                    </p>
                </div>
            </div>
            <p className="text-gray-400">{timeDifferenceLabel}</p>
        </div>
    );
}
