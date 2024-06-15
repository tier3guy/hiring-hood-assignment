"use client";
import { useState, useEffect } from "react";
import { format } from "date-fns";

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <p className="text-xl text-gray-300 font-semibold text-end">
                {format(time, "hh:mm aa")}
            </p>
        </div>
    );
}
