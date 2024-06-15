import { useState, useEffect } from "react";
import { useGeolocated } from "react-geolocated";
import { ErrorType } from "@/types/error";

export default function useGetWeatherData() {
    const { coords } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: true,
        },
        userDecisionTimeout: 1000,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ErrorType | null>(null);
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchLocation = async (latitude: number, longitude: number) => {
            setLoading(true);
            setError(null);
            setData(null);

            const url = `https://open-weather13.p.rapidapi.com/city/latlon/${latitude}/${longitude}`;
            const options = {
                method: "GET",
                hostname: "open-weather13.p.rapidapi.com",
                headers: {
                    "x-rapidapi-key": process.env.NEXT_PUBLIC_X_RAPID_API_KEY!,
                    "x-rapidapi-host":
                        process.env.NEXT_PUBLIC_X_RAPID_API_HOST!,
                },
            };

            try {
                const resp = await fetch(url, options);
                const data = await resp.json();

                setData(data);
            } catch (error: any) {
                setError({ message: error.message });
            } finally {
                setLoading(false);
            }
        };

        if (coords) {
            fetchLocation(coords.latitude, coords.longitude);
        }
    }, [coords]);

    return { loading, error, data, coords };
}
