"use client";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useWeatherData } from "@/providers/WeatherDataProvider";

export default function Clock() {
    const [time, setTime] = useState(new Date());
    const { loading } = useWeatherData();

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (loading) return null;
    return (
        <div>
            <p className="text-xl text-gray-300 font-semibold text-end">
                {format(time, "hh:mm aa")}
            </p>
        </div>
    );
}
