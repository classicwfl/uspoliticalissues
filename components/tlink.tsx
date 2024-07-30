import Link from "next/link"

type Props = {
    children: React.ReactNode,
    link: string,
    target?: string,
}

export default function TLink({children, link, target="_blank"}: Props ) {
    return (
        <Link href={link} target={target} className="text-accent-1 hover:underline hover:text-text-color transition-all duration-300">
            {children}
        </Link>
    )
}