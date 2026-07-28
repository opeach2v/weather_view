import localFont from "next/font/local";

export const seoulNamsan = localFont({
    src: [
        {
            path: "../public/font/SeoulNamsanM.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/font/SeoulNamsanEB.ttf",
            weight: "800",
            style: "normal",
        },
    ],
    display: "swap",
});
