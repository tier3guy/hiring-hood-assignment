"use client";

import OverviewCard from "@/components/Cards/OverviewCard";
import { useWeatherData } from "@/providers/WeatherDataProvider";
import { ArrowUpRight, CloudSun, Sun, Tornado, Wind } from "lucide-react";

export default function TodaysOverview() {
    const { loading, data } = useWeatherData();
    return (
        <div className="p-6">
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="text-xl text-blue-900 font-semibold">
                        Todays overview
                    </h2>

                    <div>
                        <button className="flex items-center gap-2 text-prime-light underline">
                            More Details
                            <ArrowUpRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                    <OverviewCard
                        icon={Wind}
                        label={"Wind Speed"}
                        value={data?.wind?.speed + " Km/h"}
                        movement={"DOWN"}
                        movementBy={"2Km/h"}
                        loading={loading}
                    />
                    <OverviewCard
                        icon={CloudSun}
                        label={"Cloudiness"}
                        value={data?.clouds?.all + "%"}
                        movement={"UP"}
                        movementBy={"10%"}
                        loading={loading}
                    />
                    <OverviewCard
                        icon={Tornado}
                        label={"Pressue"}
                        value={data?.main?.pressure + " hpa"}
                        movement={"UP"}
                        movementBy={"32 hpa"}
                        loading={loading}
                    />
                    <OverviewCard
                        icon={Sun}
                        label={"Humidity"}
                        value={data?.main?.humidity}
                        movement={"DOWN"}
                        movementBy={"4"}
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    );
}
