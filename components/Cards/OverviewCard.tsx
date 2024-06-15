import { ChevronDown, ChevronUp, LucideProps } from "lucide-react";

interface Props {
    icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    label: string;
    value: string;
    movement: "UP" | "DOWN";
    movementBy: string;
}

export default function OverviewCard({
    icon: Icon,
    label,
    value,
    movement,
    movementBy,
}: Props) {
    return (
        <div className="flex-1 p-3 bg-grayish flex items-center gap-6 border">
            <div>
                <Icon className="text-prime h-8 w-8" />
            </div>
            <div className="flex flex-col flex-1">
                <p className="text-gray-400 font-medium">{label}</p>
                <div className="flex items-end justify-between mt-2">
                    <h1 className="font-bold text-prime text-2xl">{value}</h1>
                    <div className="flex items-center gap-1">
                        {movement === "UP" ? (
                            <ChevronUp className="h-4 w-4 text-blue-500" />
                        ) : (
                            <ChevronDown className="h-4 w-4 text-red-500" />
                        )}
                        <p className="text-sm text-gray-400">{movementBy}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
