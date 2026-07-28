// 라이브러리
import { CITIES } from "@/app/lib/city";

import { getCurrentWeather, getDailyWeather } from "../lib/weather";

import WeatherCard from "../components/weatherCard";
import WeatherHeader from "../components/weatherHeader";

export default async function WeatherPage() {
    const currentWeather = await Promise.all(
        CITIES.map((city) => getCurrentWeather(city.lat, city.lon)),
    );

    const baseHour = new Date(currentWeather[0].current.time).getHours();

    const dailyWeather = await Promise.all(
        CITIES.map((city) => getDailyWeather(city.lat, city.lon)),
    );

    return (
        <main>
            <WeatherHeader baseHour={baseHour} />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {CITIES.map((city, index) => (
                    <WeatherCard
                        key={city.id}
                        city={city}
                        current={currentWeather[index]}
                        daily={dailyWeather[index]}
                    />
                ))}
            </section>
        </main>
    );
}
