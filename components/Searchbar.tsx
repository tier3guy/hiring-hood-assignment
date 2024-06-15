import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="bg-grayish p-3 flex items-center gap-2 w-[300px]">
            <Search className="h-5 w-5 text-gray-400" />
            <input
                className="text-sm font-medium outline-none border-none bg-transparent w-full flex-1 text-gray-500"
                placeholder="Search location here"
            />
        </div>
    );
}
