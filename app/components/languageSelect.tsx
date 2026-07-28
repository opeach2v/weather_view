"use client";

import { useState } from "react";
import { useLanguage } from "../context/languageContext";

export default function LanguageSelect() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center justify-between px-5">
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as "ko" | "en")}
                className="
                    rounded-lg
                    border
                    border-gray-300
                    dark:border-zinc-700
                    bg-white
                    dark:bg-zinc-800
                    text-gray-900
                    dark:text-white
                    px-3
                    py-2
                    cursor-pointer
                    text-lg
                "
            >
                <option value="ko" className="text-lg">
                    한국어
                </option>

                <option value="en" className="text-lg">
                    English
                </option>
            </select>
        </div>
    );
}
