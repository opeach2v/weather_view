"use client";

import ThemeToggle from "./themeToggle";
import LanguageSelect from "./languageSelect";
import { BsList } from "react-icons/bs";
import { useLanguage } from "../context/languageContext";
import { messages } from "../lib/messages";

export default function SideBar({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const { language } = useLanguage();

    const t = messages[language];

    return (
        <>
            {/* 배경 */}
            <div
                className={`
                    fixed
                    inset-0
                    bg-black/40
                    z-40
                    transition-opacity
                    duration-300
                    ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
                onClick={onClose}
            />

            {/* 사이드바 */}
            <aside
                className={`
        fixed
        bottom-0
        right-0
        h-[93%]
        w-80
        bg-white
        dark:bg-[#272727]
        text-gray-900
        dark:text-white
        shadow-xl
        z-50
        transition-transform
        duration-300
        ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
    `}
            >
                <div className="flex justify-front p-5">
                    <button
                        className="text-5xl text-gray-500 hover:text-gray-800 dark:hover:text-white"
                        onClick={onClose}
                    >
                        <BsList />
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center mt-6">
                    <p className="text-xl font-semibold mb-2">{t.lightDark}</p>
                    <ThemeToggle />
                </div>
                <div className="flex flex-col justify-center items-center mt-20">
                    <p className="text-xl font-semibold mb-2">
                        {t.changeLanguage}
                    </p>
                    <LanguageSelect />
                </div>
            </aside>
        </>
    );
}
