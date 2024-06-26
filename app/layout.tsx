import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Analytics from "../components/Analytics";
import WeatherDataProvider from "@/providers/WeatherDataProvider";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const font = Inter({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "Weatherrr",
    // description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <WeatherDataProvider>
                <Sheet>
                    <body className={font.className}>
                        <div className="h-screen w-screen overflow-hidden flex">
                            <div className="h-full w-1/5 hidden md:block">
                                <Sidebar />
                            </div>
                            <div className="h-full flex-1 overflow-y-auto">
                                <div className="flex h-full w-full flex-1 overflow-hidden">
                                    <div className="h-full flex-1 overflow-y-auto">
                                        {children}
                                    </div>
                                    <div className="h-full overflow-y-auto overflow-x-hidden w-1/3 hidden md:block">
                                        <Analytics />
                                    </div>
                                    <SheetContent className="p-0 w-full md:hidden">
                                        <div className="h-full overflow-y-auto overflow-x-hidden">
                                            <Analytics />
                                        </div>
                                    </SheetContent>
                                </div>
                            </div>
                        </div>
                    </body>
                </Sheet>
            </WeatherDataProvider>
        </html>
    );
}
