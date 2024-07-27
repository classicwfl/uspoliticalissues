type Props = {
    children: React.ReactNode,
}

export default function Pg({children}: Props ) {
    return (
        <p className="mb-6">
            {children}
        </p>
    )
}