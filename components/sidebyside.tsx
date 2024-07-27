type Props = {
    children: React.ReactNode,
    heading: string,
  }

export default function SideBySide({children, heading}: Props ) {
    return (
        <div className="flex flex-col lg:flex-row gap-10 md:gap-40 w-full">
            <h2 className="font-bighead uppercase italic text-6xl md:text-sideby block leading-neg md:min-w-[400px] lg:max-w-[400px]">{heading}</h2>
            <div className="grow max-w-2xl m-auto">
                {children}
            </div>
        </div>
    )
}