import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { lat, lon } = await request.json();

        if (!lat || !lon) {
            return NextResponse.json(
                {
                    error: "Latitude and longitude are required",
                    data: null,
                    message: "Latitude and longitude are required",
                    status: 400,
                },
                {
                    status: 400,
                    statusText: "Bad Request",
                }
            );
        }

        const url = `https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${lon}`;
        const options = {
            method: "GET",
            hostname: "open-weather13.p.rapidapi.com",
            headers: {
                "x-rapidapi-key": process.env.X_RAPID_API_KEY!,
                "x-rapidapi-host": process.env.X_RAPID_API_HOST!,
            },
        };
        const resp = await fetch(url, options);
        const data = await resp.json();

        return NextResponse.json(
            {
                error: null,
                data: data,
                message: "Weather data fetched successfully",
                status: 200,
            },
            {
                status: 200,
                statusText: "OK",
            }
        );
    } catch (error) {
        console.log(error);

        NextResponse.json(
            {
                error: error,
                data: null,
                message:
                    "Oops, Internal Server Error, Please try again after sometime",
                status: 500,
            },
            {
                status: 500,
                statusText: "Internal Server Error",
            }
        );
    }
}
