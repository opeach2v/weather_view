import { CityId } from "../city";

export default {
    cities: {
        seoul: "Seoul",
        busan: "Busan",
        incheon: "Incheon",
        daegu: "Daegu",
        cheongju: "Cheongju",
    } satisfies Record<CityId, string>,
    date: "Date",
    weather: "Weather",
    max: "Max Temp",
    min: "Min Temp",
    code: "Code",
    language: "Language",
    changeLanguage: "Change language",
    lightDark: "Light/Dark Mode",
    clockF: "As of ",
    clockB: "o'clock",
    unknown: "Unknown",
    close: "Close",
};
