"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

type Props = {
    children: React.ReactNode,
    img: string,
    reverse?: boolean,
    headline: string,
}

export default function SideBySide({children, img, headline, reverse = false}: Props ) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className={`flex flex-col lg:flex-row gap-10 md:gap-40 w-full ${reverse ? 'lg:flex-row-reverse' : ''}`} ref={ref}
        style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}>
            <div className="md:min-w-[400px] lg:max-w-[400px]">
                <img src={img} alt="" />
            </div>
            <div className="grow max-w-2xl m-auto">
                <h2 className="font-black text-2xl md:text-5xl uppercase leading-tight mb-8">{headline}</h2>
                {children}
            </div>
        </div>
    )
}