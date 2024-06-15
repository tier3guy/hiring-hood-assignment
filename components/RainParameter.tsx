import ProgressBar from "./ProgressBar";

export default function RainParameters() {
    return (
        <div className="my-8">
            <p className="text-gray-300 text-xl">Chance of rain</p>

            <div className="flex flex-col gap-4 mt-6">
                <ProgressBar time="7 PM" value={44} />
                <ProgressBar time="8 PM" value={30} />
                <ProgressBar time="9 PM" value={67} />
                <ProgressBar time="10 PM" value={24} />
            </div>
        </div>
    );
}
