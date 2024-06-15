import { format } from "date-fns";

export default function DateComponent() {
    const date = new Date();

    const monthDay = format(date, "MMMM d");
    const fullDate = format(date, "EEEE, MMM do, yyyy");

    return (
        <div>
            <h1 className="text-3xl font-bold">{monthDay}</h1>
            <p className="text-sm text-gray-500 mt-1 font-medium">{fullDate}</p>
        </div>
    );
}
