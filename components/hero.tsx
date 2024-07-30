type Props = {
    link: string;
    linkText: string;
};

function NavLink({ link, linkText }: Props) {
    return (
        <a
            href={link}
            className="w-full h-full flex items-center rounded-full p-4 shadow-inactive hover:shadow-active hover:text-darkbg transition-all duration-300"
        >
            <span
                className="font-bighead uppercase text-center italic text-[5.8vw] 
            sm:text-[5vw] md:text-[3.5vw] lg:text-[2.5vw] heromax:text-5xl leading-neg"
            >
                {linkText}
            </span>
        </a>
    );
}

export default function Hero() {
    return (
        <div id="#top" className="w-full flex items-start md:gap-2 text-center h-maxv flex-wrap md:flex-nowrap justify-between">
            <div className="w-30 md:w-drop">
                <img
                    src="/bluedrop.png"
                    alt=""
                    className="h-auto w-auto"
                />
            </div>
            
            <h1 className="font-black text-xl md:text-4xl lg:text-5xl uppercase grow md:self-center leading-relaxed order-3 md:order-2 w-full md:w-auto absolute top-[35vh] md:static">Here are just a few <span className="text-3xl md:text-7xl lg:text-8xl block leading-tight">political issues</span> in the United States.</h1>
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
