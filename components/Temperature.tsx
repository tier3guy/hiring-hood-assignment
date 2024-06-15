import { Cloudy } from "lucide-react";

export default function Temperature() {
    return (
        <div className="mt-14 pb-6 border-b border-gray-400">
            <div>
                <Cloudy className="w-14 h-14 text-gray-400" />
                <div className="flex items-end justify-between">
                    <h1 className="text-7xl text-gray-100">20° C</h1>
                    <p className="text-lg w-1/3 text-end font-semibold text-gray-300">
                        Dramatic Cloudy
                    </p>
                </div>
            </div>
        </div>
    );
}
