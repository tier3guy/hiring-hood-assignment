import NotificationButton from "@/components/Buttons/NotificationButton";
import UserButton from "@/components/Buttons/UserButton";
import SearchBar from "@/components/Searchbar";
import DateComponent from "./Date";

export default function Header() {
    return (
        <div className="p-6 border-b-2 flex items-center justify-between">
            <DateComponent />
            <div className="flex items-center gap-3">
                <SearchBar />
                <NotificationButton />
                <UserButton />
            </div>
        </div>
    );
}
