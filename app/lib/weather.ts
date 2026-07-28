// Open-Meteo API 호출

// 현재 날씨
export async function getCurrentWeather(latitude: number, longitude: number) {
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code&timezone=Asia/Seoul`,
    );

    if (!response.ok) {
        throw new Error("현재 날씨 정보를 가져오지 못했습니다.");
    }

    return response.json();
}

// 주간 날씨
export async function getDailyWeather(latitude: number, longitude: number) {
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Asia/Seoul`,
    );

    if (!response.ok) {
        throw new Error("주간 날씨 정보를 가져오지 못했습니다.");
    }

    return response.json();
}
