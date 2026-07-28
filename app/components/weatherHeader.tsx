"use client";

import { useState } from "react";
import { BsList } from "react-icons/bs";
import SideBar from "./sideBar";
import { useLanguage } from "../context/languageContext";
import { messages } from "../lib/messages";

export default function WeatherHeader({ baseHour }: { baseHour: number }) {
    const { language } = useLanguage();

    const t = messages[language];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="flex w-full justify-between items-center">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 md:gap-8 ml-5">
                    <h1 className="whitespace-nowrap m-0">WEATHER</h1>

                    <p className="text-gray-500 text-lg">
                        {t.clockF}
                        {baseHour}
                        {t.clockB}
                    </p>
                </div>

                <button
                    className="text-5xl mr-5 text-gray-500 hover:text-gray-800 cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    <BsList />
                </button>
            </header>

            <SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
