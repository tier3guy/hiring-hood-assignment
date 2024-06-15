import { useState, useEffect } from "react";
import { useGeolocated } from "react-geolocated";

interface LocationError {
    message: string;
}

export default function useGetLocation() {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 1000,
        });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<LocationError | null>(null);
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchLocation = async (latitude: number, longitude: number) => {
            setLoading(true);
            setError(null);
            setData(null);

            const URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
            try {
                const resp = await (await fetch(URL)).json();
                setData(resp);
            } catch (error: any) {
                setError({ message: error.message });
            } finally {
                setLoading(false);
            }
        };

        if (coords) {
            fetchLocation(coords.latitude, coords.longitude);
        } else {
            setLoading(false);
        }
    }, [coords]);

    const notAvailable =
        !isGeolocationAvailable || !isGeolocationEnabled || !data;

    return { loading, error, data, notAvailable, coords };
}
