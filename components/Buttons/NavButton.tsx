"use client";
import { AlignLeft } from "lucide-react";
import { SheetTrigger } from "../ui/sheet";

export default function NavButton() {
    return (
        <SheetTrigger>
            <div className="bg-grayish p-3 md:hidden">
                <AlignLeft className="h-5 w-5 text-gray-400" />
            </div>
        </SheetTrigger>
    );
}
