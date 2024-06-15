"use client";

import React, { createContext, useContext } from "react";
import useGetWeatherData from "@/hooks/useGetWeatherData";
import { ErrorType } from "@/types/error";

interface WeatherDataContext {
    loading: boolean;
    error: ErrorType | null;
    data: any;
    coords: any;
}

const WeatherDataContext = createContext<WeatherDataContext | undefined>(
    undefined
);

export const useWeatherData = () => {
    const context = useContext(WeatherDataContext);
    if (!context) {
        throw new Error(
            "useWeatherData must be used within a WeatherDataProvider"
        );
    }
    return context;
};

export default function WeatherDataProvider({
    children,
}: {
    children: Readonly<React.ReactNode>;
}) {
    const { loading, error, data, coords } = useGetWeatherData();
    return (
        <WeatherDataContext.Provider value={{ loading, error, data, coords }}>
            {children}
        </WeatherDataContext.Provider>
    );
}
