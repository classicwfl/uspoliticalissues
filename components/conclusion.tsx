"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Section from "@/components/section";
import SectionInner from "@/components/sectioninner";
import Pg from "@/components/pg";

export default function Conclusion() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const isInView1 = useInView(ref1, { once: true });
    const isInView2 = useInView(ref2, { once: true });
    const isInView3 = useInView(ref3, { once: true });
    const isInView4 = useInView(ref4, { once: true });

    return (
        <Section id="footer">
            <SectionInner>
                <div className="text-center max-w-5xl m-auto">
                    <h2 className="font-black uppercase text-3xl md:text-7xl lg:text-8xl block leading-tight"
                        style={{
                            transform: isInView1 ? "none" : "translateY(200px)",
                            opacity: isInView1 ? 1 : 0,
                            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1)"
                        }}
                        ref={ref1}>
                        so.. What should you do?
                    </h2>
                    <img className="m-auto" src="donkey.png" alt="" 
                        style={{
                            transform: isInView2 ? "none" : "translateY(200px)",
                            opacity: isInView2 ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        ref={ref2}/>
                    <h2 className="font-black uppercase text-3xl md:text-7xl lg:text-8xl block leading-tight mb-8"
                        style={{
                            transform: isInView3 ? "none" : "translateY(200px)",
                            opacity: isInView3 ? 1 : 0,
                            transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        ref={ref3}>
                        <span className="text-xl md:text-2xl lg:text-6xl block mb-5">It's simple.</span>
                        Vote <span className="text-accent-2">blue</span>, no matter who.
                    </h2>
                    <div className="max-w-xl m-auto"
                        style={{
                            transform: isInView4 ? "none" : "translateY(200px)",
                            opacity: isInView4 ? 1 : 0,
                            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        ref={ref4}>
                        <Pg>In the past, splitting the ticket was no big deal. Most Republicans weren't as outwardly disturbing - or even willing to publicly entertain current far-right ideals - back before Trump.</Pg>

                        <Pg>Now, however, we've got extremist rhetoric taking a front seat for the Republican party.</Pg>

                        <Pg>We've got a Supreme Court primed and ready to rubber stamp as much as it can for the political right.</Pg>

                        <Pg>Many of the things we took for granted - the laws applying to even a president, or Roe v. Wade - are now left in our dreams.</Pg>

                        <Pg>The overton window has stepped back to the right this time.. In a big way.</Pg>

                        <Pg>The only way we can get back on the correct track is by voting in as many left-leaning folks at ALL levels of Government - both State and Federal - to hopefully stem the side of authoritarianism and fascism by convincing Republicans to <strong>put the stupid stuff back in the box..</strong></Pg>

                        <Pg>..And if that isn't enough, at least we can hopefully enact some real legislation that will secure our future better this time.
                        </Pg>
                    </div>
                    
                </div>
            </SectionInner>
        </Section>
    );
}
