interface Props {
    time: string;
    value: number;
}

export default function ProgressBar({ time, value }: Props) {
    return (
        <div className="flex items-center justify-between text-gray-300">
            <div className="flex items-center flex-1">
                <p className="w-14">{time}</p>
                <div className="rounded-full w-[100px] bg-gray-300 h-8 overflow-hidden flex-1 relative">
                    <div
                        className="h-full absolute top-0 left-0 bg-prime-light rounded-full"
                        style={{
                            width: `${value}%`,
                        }}
                    ></div>
                </div>
            </div>
            <p className="w-12 text-end">{value}%</p>
        </div>
    );
}