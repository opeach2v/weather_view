export type CityId = "seoul" | "busan" | "incheon" | "daegu" | "cheongju";

export type City = {
    id: CityId;
    lat: number;
    lon: number;
};

export const CITIES: City[] = [
    {
        id: "seoul",
        lat: 37.5665,
        lon: 126.978,
    },
    {
        id: "busan",
        lat: 35.1796,
        lon: 129.0756,
    },
    {
        id: "incheon",
        lat: 37.4563,
        lon: 126.7052,
    },
    {
        id: "daegu",
        lat: 35.8714,
        lon: 128.6014,
    },
    {
        id: "cheongju",
        lat: 36.6424,
        lon: 127.489,
    },
];
