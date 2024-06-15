"use client";

import useGetLocation from "@/hooks/useGetLocation";
import { useWeatherData } from "@/providers/WeatherDataProvider";
import { Skeleton } from "./ui/skeleton";

export default function Location() {
    const { data, loading } = useGetLocation();
    const { data: dt, loading: ld } = useWeatherData();

    if (loading || ld) {
        return <Skeleton className="py-4 bg-white/10 rounded-none w-full" />;
    }

    return (
        <div className="flex flex-col gap-1">
            <h2
                className="text-2xl font-semibold text-gray-100"
                suppressHydrationWarning
            >
                {dt?.name}, {data?.city}
            </h2>

            <p className="text-sm text-gray-300 w-3/4" suppressHydrationWarning>
                {data?.principalSubdivision}, {data?.countryName}
            </p>
        </div>
    );
}
