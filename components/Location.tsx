"use client";

import useGetLocation from "@/hooks/useGetLocation";

export default function Location() {
    const { notAvailable, data, loading } = useGetLocation();

    return (
        <div className="flex flex-col gap-1">
            <h2
                className="text-2xl font-semibold text-gray-100"
                suppressHydrationWarning
            >
                {loading
                    ? "Loading..."
                    : notAvailable
                    ? "Cannot Locate You"
                    : `${data?.locality}, ${data?.city}`}
            </h2>
            <p className="text-sm text-gray-300 w-3/4" suppressHydrationWarning>
                {loading
                    ? "Loading..."
                    : notAvailable
                    ? "This could be either beacuse your browser does not support geolocation or you do not have given the required persmission"
                    : `${data?.principalSubdivision}, ${data?.countryName}`}
            </p>
        </div>
    );
}
