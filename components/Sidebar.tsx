"use client";
import Image from "next/image";
// @ts-ignore
import Logo from "@/public/logo.svg";
import {
    CalendarCheck2,
    CloudRainWind,
    LogOut,
    Map,
    MapPinned,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar() {
    const pathname = usePathname();

    const tabs = [
        {
            label: "Dashboard",
            path: "/",
            icon: CloudRainWind,
            disabled: false,
        },
        {
            label: "Map",
            path: "/map",
            icon: Map,
            disabled: true,
        },
        {
            label: "Saved Location",
            path: "/saved-location",
            icon: MapPinned,
            disabled: true,
        },
        {
            label: "Calendar",
            path: "/calendar",
            icon: CalendarCheck2,
            disabled: true,
        },
    ];

    return (
        <div className="h-full bg-grayish flex flex-col justify-between border-e">
            <div>
                <div className="border-b-2 p-4 flex items-center gap-3">
                    <Image src={Logo} alt="logo" width={30} height={30} />
                    <h1 className="text-3xl font-semibold text-prime">
                        weatherrr
                    </h1>
                </div>
                <div className="flex flex-col gap-1 my-4">
                    {tabs.map(({ path, icon: Icon, label, disabled }) => {
                        return (
                            <Link
                                href={path}
                                key={path}
                                className={cn(
                                    "flex items-center gap-3 hover:bg-gray-200 px-6 py-2",
                                    pathname === path
                                        ? "text-prime"
                                        : "text-gray-500",
                                    disabled ? "cursor-not-allowed" : ""
                                )}
                            >
                                <Icon className="h-5 w-5" />
                                <p>{label}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <button className="flex items-center gap-3 hover:bg-gray-200 px-6 py-2 my-4">
                <LogOut className="h-5 w-5 text-gray-500" />
                <p className="text-gray-500">Logout</p>
            </button>
        </div>
    );
}
