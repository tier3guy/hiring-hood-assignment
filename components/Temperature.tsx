"use client";
import { useWeatherData } from "@/providers/WeatherDataProvider";
import { Cloudy } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export default function Temperature() {
    const { data, loading } = useWeatherData();
    const tempInCelcius = ((data?.main?.temp || 0) - 273.15).toFixed(0);

    return (
        <div className="mt-14 pb-6 border-b border-gray-400">
            {loading ? (
                <Skeleton className="bg-white/10 h-[200px] rounded-none" />
            ) : (
                <div>
                    <Cloudy className="w-14 h-14 text-gray-400" />
                    <div className="flex items-end justify-between">
                        <h1 className="text-7xl text-gray-100">
                            {tempInCelcius}° C
                        </h1>
                        <p className="text-lg w-1/3 text-end font-semibold text-gray-300">
                            {data?.weather?.[0]?.main}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
