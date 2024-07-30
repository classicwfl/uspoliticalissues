type Props = {
    children: React.ReactNode,
    img: string,
    reverse?: boolean,
    headline: string,
  }

export default function SideBySide({children, img, headline, reverse = false}: Props ) {
    return (
        <div className={`flex flex-col lg:flex-row gap-10 md:gap-40 w-full ${reverse ? 'lg:flex-row-reverse' : ''}`}>
            <div className="md:min-w-[400px] lg:max-w-[400px]">
                <img src={img} alt="" />
            </div>
            <div className="grow max-w-2xl m-auto">
                <h2 className="font-black text-2xl md:text-5xl uppercase leading-neg mb-8">{headline}</h2>
                {children}
            </div>
        </div>
    )
}