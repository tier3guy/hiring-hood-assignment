import { Bell } from "lucide-react";

export default function NotificationButton() {
    return (
        <button className="bg-grayish p-3 hidden md:block">
            <Bell className="h-5 w-5 text-gray-400" />
        </button>
    );
}
