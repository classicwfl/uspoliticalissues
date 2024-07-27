import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";


export const metadata: Metadata = {
    title: "Political Issues in the United States",
    description: "These are just a few of the political issues being faced in the United States for 2024.",
    metadataBase: new URL('https://uspoliticalissues.com'),
    icons: {
        icon: '/smoa-icon-16.png',
        shortcut: '/smoa-icon-512.png',
        apple: '/smoa-icon-512.png',
    },
    openGraph: {
        images: '/smoa-og2.jpg',
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
            <body className="font-sans bg-pageBg">{children}</body>
        </html>
    );
}
