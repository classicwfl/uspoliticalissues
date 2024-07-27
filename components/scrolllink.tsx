import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

type AnchorProps = Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
// component definition
const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();
        //remove everything before the hash
        const targetId = e.currentTarget.href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        window.scrollTo({
            top: elem?.getBoundingClientRect().top,
            behavior: "smooth",
        });
    };
    return (
        <Link
            {...props}
            className="w-full h-full flex items-center rounded-full p-4 shadow-inactive hover:shadow-active hover:text-darkbg transition-all duration-300"
            onClick={handleScroll}
        >
            <span
                className="font-bighead uppercase text-center italic text-[5.8vw] 
            sm:text-[5vw] md:text-[3.5vw] lg:text-[2.5vw] heromax:text-6xl leading-neg"
            >
                {children}
            </span>
        </Link>
    );
};

export default ScrollLink;