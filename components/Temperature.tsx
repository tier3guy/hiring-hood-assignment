"use client";
import { useWeatherData } from "@/providers/WeatherDataProvider";
import { Cloudy } from "lucide-react";

export default function Temperature() {
    const { data } = useWeatherData();
    const tempInCelcius = ((data?.main?.temp || 0) - 273.15).toFixed(0);

    return (
        <div className="mt-14 pb-6 border-b border-gray-400">
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
        </div>
    );
}
