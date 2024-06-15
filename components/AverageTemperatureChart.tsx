"use client";

import { useWeatherData } from "@/providers/WeatherDataProvider";
import CustomLineChart from "./Linechart";
import { ArrowUpRight } from "lucide-react";

export default function AverageTemperatureChart() {
    const { loading } = useWeatherData();

    return (
        <div className="p-6">
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="text-xl text-blue-900 font-semibold">
                        Average Weekly Temperature
                    </h2>

                    <div>
                        <button className="flex items-center gap-2 text-prime-light underline">
                            More Details
                            <ArrowUpRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div className="mt-6">
                    <CustomLineChart loading={loading} />
                </div>
            </div>
        </div>
    );
}
