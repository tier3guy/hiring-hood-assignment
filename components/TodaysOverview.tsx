import OverviewCard from "@/components/Cards/OverviewCard";
import { ArrowUpRight, CloudHail, Sun, Tornado, Wind } from "lucide-react";

export default function TodaysOverview() {
    return (
        <div className="p-6">
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="text-xl text-blue-900 font-semibold">
                        Todays overview
                    </h2>

                    <div>
                        <button className="flex items-center gap-2 text-prime-light underline">
                            More Details
                            <ArrowUpRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                    <OverviewCard
                        icon={Wind}
                        label={"Wind Speed"}
                        value={"12Km/h"}
                        movement={"DOWN"}
                        movementBy={"2Km/h"}
                    />
                    <OverviewCard
                        icon={CloudHail}
                        label={"Rain Chance"}
                        value={"24%"}
                        movement={"UP"}
                        movementBy={"10%"}
                    />
                    <OverviewCard
                        icon={Tornado}
                        label={"Pressue"}
                        value={"720 hpa"}
                        movement={"UP"}
                        movementBy={"32 hpa"}
                    />
                    <OverviewCard
                        icon={Sun}
                        label={"UV Index"}
                        value={"2,3"}
                        movement={"DOWN"}
                        movementBy={"0,3"}
                    />
                </div>
            </div>
        </div>
    );
}
