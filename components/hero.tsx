"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Hero() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div id="#top" className="w-full flex items-start md:gap-2 text-center h-maxv flex-wrap md:flex-nowrap justify-between">
            <div className="w-30 md:w-drop">
                <img
                    src="/bluedrop.png"
                    alt=""
                    className="h-auto w-auto"
                />
            </div>
            
            <h1 className="font-black text-xl md:text-4xl lg:text-5xl uppercase grow md:self-center leading-relaxed order-3 md:order-2 w-full md:w-auto absolute top-[35vh] md:static" ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
            }}>Here are just a few <span className="text-3xl md:text-7xl lg:text-8xl block leading-tight">political issues</span> in the United States.</h1>
            <div className="w-30 md:w-drop order-2 md:order-3">
                <img
                    src="/reddrop.png"
                    alt=""
                    className=""
                />
            </div>
        </div>
    );
}
