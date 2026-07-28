import { CityId } from "../city";

export default {
    cities: {
        seoul: "서울",
        busan: "부산",
        incheon: "인천",
        daegu: "대구",
        cheongju: "청주",
    } satisfies Record<CityId, string>,
    dailyWeather: "주간 예보",
    date: "날짜",
    weather: "날씨",
    max: "최고 기온",
    min: "최저 기온",
    code: "날씨 코드",
    language: "언어",
    changeLanguage: "언어 변경",
    lightDark: "라이트/다크모드",
    clockF: "",
    clockB: "시 기준",
    unknown: "알 수 없음",
    close: "닫기",
};
