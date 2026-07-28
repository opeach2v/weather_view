export type CurrentWeather = {
    current: {
        time: string;
        temperature_2m: number;
        relative_humidity_2m: number;
        weather_code: number;
    };
};

export type DailyWeather = {
    daily: {
        time: string[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        weather_code: number[];
    };
};
