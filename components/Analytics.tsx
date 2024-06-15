import Clock from "./Clock";
import Location from "./Location";
import Temperature from "./Temperature";
import RainParameters from "./RainParameter";

export default function Analytics() {
    return (
        <div
            className="h-full overflow-y-auto overflow-x-hidden w-1/3 p-6"
            style={{
                background:
                    "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)",
            }}
        >
            <div className="flex justify-between">
                <Location />
                <Clock />
            </div>

            <Temperature />
            <RainParameters />
        </div>
    );
}
