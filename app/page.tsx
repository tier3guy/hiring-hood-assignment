import Header from "@/components/Header";
import TodaysOverview from "@/components/TodaysOverview";
import AverageTemperatureChart from "@/components/AverageTemperatureChart";

export default function Home() {
    return (
        <>
            <Header />
            <div>
                <TodaysOverview />
                <AverageTemperatureChart />
            </div>
        </>
    );
}
