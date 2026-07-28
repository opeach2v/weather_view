import type { Metadata } from "next";
import "./globals.css";
import { seoulNamsan } from "./font";
import { LanguageProvider } from "./context/languageContext";

export const metadata: Metadata = {
    title: "Weather View",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body
                className={`${seoulNamsan.className} min-h-full flex flex-col`}
            >
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
