"use client";
import Clock from "./Clock";
import Location from "./Location";
import Temperature from "./Temperature";
import RainParameters from "./RainParameter";
import SunriseSunsetCard from "./Cards/SunriseSunsetCard";
import { useWeatherData } from "@/providers/WeatherDataProvider";

export default function Analytics() {
    const { data, loading } = useWeatherData();

    return (
        <div
            className="h-full overflow-y-auto overflow-x-hidden w-1/3 p-6"
            style={{
                background:
                    "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)",
            }}
        >
            <div className="flex justify-between">
                <Location />
                <Clock />
            </div>

            <Temperature />
            <RainParameters />

            <div>
                <p className="text-gray-300 text-xl">Sunrise & Sunset</p>
                <div className="flex flex-col gap-4 mt-6">
                    <SunriseSunsetCard
                        type="SUNRISE"
                        time={data?.sys?.sunrise}
                        loading={loading}
                    />
                    <SunriseSunsetCard
                        type="SUNSET"
                        time={data?.sys?.sunset}
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    );
}
