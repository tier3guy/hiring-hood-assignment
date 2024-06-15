import CustomLineChart from "./Linechart";
import { ArrowUpRight, CloudHail, Sun, Tornado, Wind } from "lucide-react";

export default function AverageTemperatureChart() {
    return (
        <div className="p-6">
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="text-xl text-blue-900 font-semibold">
                        Average Weekly Temperature
                    </h2>

                    <div>
                        <button className="flex items-center gap-2 text-prime-light underline">
                            More Details
                            <ArrowUpRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div className="mt-6">
                    <CustomLineChart />
                </div>
            </div>
        </div>
    );
}
