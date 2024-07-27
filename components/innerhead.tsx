type Props = {
    children: React.ReactNode,
}

export default function InnerHead({children}: Props ) {
    return (
        <h3 className="font-bighead uppercase italic text-3xl md:text-6xl block leading-neg mb-4">
            {children}
        </h3>
    )
}