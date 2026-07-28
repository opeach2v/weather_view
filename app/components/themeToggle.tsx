"use client";

import { useState } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    const toggleHandler = () => {
        const nextMode = !isDark;

        setIsDark(nextMode);

        if (nextMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <button
            onClick={toggleHandler}
            className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors"
        >
            <span
                className={`
                    absolute
                    top-1
                    left-1
                    w-5
                    h-5
                    rounded-full
                    bg-white
                    transition-transform
                    duration-300
                    ${isDark ? "translate-x-7" : "translate-x-0"}
                `}
            />
        </button>
    );
}
