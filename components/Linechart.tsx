"use client";

import {
    CartesianGrid,
    XAxis,
    YAxis,
    AreaChart,
    Tooltip,
    Area,
    ResponsiveContainer,
} from "recharts";
import { Skeleton } from "./ui/skeleton";

const data = [
    {
        name: "Week 1",
        temperatue: 10,
    },
    {
        name: "Week 2",
        temperatue: 32,
    },
    {
        name: "Week 3",
        temperatue: 48,
    },
    {
        name: "Week 4",
        temperatue: 27,
    },
];

interface Props {
    loading?: boolean;
}

export default function CustomLineChart({ loading }: Props) {
    if (loading)
        return (
            <Skeleton className="bg-grayish border h-[300px] rounded-none" />
        );

    return (
        <ResponsiveContainer
            width="100%"
            height={300}
            // className={"border bg-grayish"}
        >
            <AreaChart
                data={data}
                margin={{ top: 10, right: 0, left: -30, bottom: 0 }}
            >
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#064ACB"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="#064ACB"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis domain={[10, 50]} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                    type="bump"
                    dataKey="temperatue"
                    stroke="#064ACB"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
