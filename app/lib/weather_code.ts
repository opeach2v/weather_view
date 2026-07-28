type WeatherCode = Record<number, string>;

export const WEATHER: {
    ko: WeatherCode;
    en: WeatherCode;
} = {
    ko: {
        0: "맑음 ☀️",
        1: "대체로 맑음 🌤️",
        2: "구름 조금 ⛅",
        3: "흐림 ☁️",
        45: "안개 🌫️",
        48: "짙은 안개 🌫️",
        51: "약한 이슬비 🌦️",
        53: "이슬비 🌦️",
        55: "강한 이슬비 🌧️",
        61: "약한 비 🌧️",
        63: "비 🌧️",
        65: "강한 비 ⛈️",
        71: "약한 눈 🌨️",
        73: "눈 🌨️",
        75: "강한 눈 ❄️",
        80: "소나기 🌦️",
        81: "소나기 🌧️",
        82: "강한 소나기 ⛈️",
        95: "천둥번개 ⛈️",
        96: "우박 동반 뇌우 ⛈️",
    },

    en: {
        0: "Clear ☀️",
        1: "Mainly clear 🌤️",
        2: "Partly cloudy ⛅",
        3: "Overcast ☁️",
        45: "Fog 🌫️",
        48: "Dense fog 🌫️",
        51: "Light drizzle 🌦️",
        53: "Drizzle 🌦️",
        55: "Heavy drizzle 🌧️",
        61: "Light rain 🌧️",
        63: "Rain 🌧️",
        65: "Heavy rain ⛈️",
        71: "Light snow 🌨️",
        73: "Snow 🌨️",
        75: "Heavy snow ❄️",
        80: "Rain showers 🌦️",
        81: "Rain showers 🌧️",
        82: "Heavy showers ⛈️",
        95: "Thunderstorm ⛈️",
        96: "Thunderstorm with hail ⛈️",
    },
};
