import { UserRound } from "lucide-react";

export default function UserButton() {
    return (
        <button className="bg-grayish p-3 hidden md:block">
            <UserRound className="h-5 w-5 text-gray-400" />
        </button>
    );
}
