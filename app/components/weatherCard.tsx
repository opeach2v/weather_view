"use client";

import WeatherModal from "./dailyWeatherModal";

import { useState } from "react";

import { WEATHER } from "@/app/lib/weather_code";
import { CurrentWeather, DailyWeather } from "@/app/lib/type";

// 이모지
import { FaTemperatureHalf } from "react-icons/fa6";
import { IoWater } from "react-icons/io5";
import { useLanguage } from "../context/languageContext";
import { messages } from "../lib/messages";
import { City } from "../lib/city";

export default function WeatherCard({
    city,
    daily,
    current,
}: {
    city: City;
    daily: DailyWeather;
    current: CurrentWeather;
}) {
    const { language } = useLanguage();
    const t = messages[language];
    const weatherText =
        WEATHER[language][current.current.weather_code] ?? "Unknown";

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <article
                className="h-45 border hover:border-2 border-gray-200 hover:border-blue-400 rounded-xl shadow-md hover:shadow-blue-300 p-4 w-full cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3>{t.cities[city.id]}</h3>
                <div className="flex items-center justify-center gap-15 mt-2 text-xl">
                    <div className="flex items-center gap-2">
                        <p className="text-2xl text-red-600">
                            <FaTemperatureHalf />
                        </p>
                        <p>{current.current.temperature_2m}</p>
                        <p>℃</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-2xl text-blue-500">
                            <IoWater />
                        </p>
                        <p>{current.current.relative_humidity_2m}</p>
                        <p>%</p>
                    </div>
                </div>
                <div
                    className="
                    text-center
                    mt-4
                    text-2xl
                    bg-green-200
                    rounded-2xl
                    w-fit
                    max-w-full
                    mx-auto
                    py-1
                    px-4
                    break-words
                    dark:text-black
                "
                >
                    {weatherText ?? t.unknown}
                </div>
            </article>
            {isOpen && (
                <WeatherModal
                    cityName={t.cities[city.id]}
                    daily={daily}
                    onClose={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
