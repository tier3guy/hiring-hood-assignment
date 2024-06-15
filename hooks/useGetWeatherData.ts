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

            const URL = `http://localhost:3000/api/get-weather-data`;
            try {
                const resp = await (
                    await fetch(URL, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify({
                            lat: latitude,
                            lon: longitude,
                        }),
                    })
                ).json();

                setData(resp?.data);
                setError(resp?.error);
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
