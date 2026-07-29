"use client";

import { DailyWeather } from "@/app/lib/type";
import DailyTable from "./dailyTable";
import { WEATHER } from "../lib/weather_code";
import { useLanguage } from "../context/languageContext";
import { messages } from "../lib/messages";

export default function DailyWeatherModal({
    cityName,
    daily,
    onClose,
}: {
    cityName: string;
    daily: DailyWeather;
    onClose: () => void;
}) {
    const { language } = useLanguage();
    const t = messages[language];

    const dailyRowData = daily.daily.time.map((date, index) => ({
        date,
        max: daily.daily.temperature_2m_max[index],
        min: daily.daily.temperature_2m_min[index],
        code: WEATHER[language][daily.daily.weather_code[index]] ?? t.unknown,
    }));

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-[#272727] rounded-xl h-[80vh] md:h-[55vh] xl:h-[60vh] flex flex-col p-8 w-100 md:w-160 lg:w-200 xl:w-260 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="text-xl font-bold ml-2 mb-2">
                    {cityName} {t.dailyWeather}
                </div>
                <div className="flex-1 overflow-y-auto min-h-0 h-full">
                    <DailyTable data={dailyRowData} />
                </div>

                <button
                    onClick={onClose}
                    className="mt-5 bg-gray-200 dark:bg-[#3f3f3f] hover:bg-gray-300 dark:hover:bg-[#4d4d4d] rounded-md w-full py-1 text-lg font-extrabold"
                >
                    <p className="text-gray-600 dark:text-gray-300">
                        {t.close}
                    </p>
                </button>
            </div>
        </div>
    );
}
