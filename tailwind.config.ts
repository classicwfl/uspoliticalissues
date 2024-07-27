import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "accent-1": "#e50003",
                "accent-2": "#1b89bf",
                "text-color": "#22323a",
            },
            spacing: {
                "13": "3.25rem",
                "15": "3.75rem",
                "30": "7.5rem",
                "60": "15rem",
                "128": "32rem",
                "144": "36rem",
            },
            letterSpacing: {
                tighter: "-.04em",
            },
            lineHeight: {
                tight: "1",
                neg: ".8",
            },
            fontFamily: {
                sans: ["effra", "sans-serif"],
            },
            fontSize: {
                "5xl": "2.5rem",
                "6xl": "3.25rem",
                "7xl": "4.5rem",
                "sideby": "6rem",
                "8xl": "7.25rem",
                "9xl": "9.25rem",
            },
            maxWidth: {
                contentinner: "1150px",
                big: "1600px",
            },
            width: {
                "drop": "250px"
            },
            height: {
                "maxv": "100vh"
            },
            backgroundImage: {
                pageBg:
                    "url('/bg.jpg')"
            },
            screens: {
                'heromax': '1800px',
            },
        },
    },
    plugins: [],
};
export default config;
