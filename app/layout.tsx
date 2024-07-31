import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";


export const metadata: Metadata = {
    title: "Political Issues in the United States",
    description: "These are just a few of the political issues being faced in the United States for 2024.",
    metadataBase: new URL('https://uspoliticalissues.com'),
    icons: {
        icon: '/favicon-16x16.png',
        shortcut: '/android-chrome-512x512.png',
        apple: '/android-chrome-512x512.png',
    },
    openGraph: {
        images: '/uspolissuesposter.jpg',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/izf8xxn.css"
                />
            </Head>
            <body className="font-sans bg-pageBg text-[1.1rem]">{children}</body>
        </html>
    );
}
