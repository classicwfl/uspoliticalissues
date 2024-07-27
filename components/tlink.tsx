import Link from "next/link"

type Props = {
    children: React.ReactNode,
    link: string,
    target?: string,
}

export default function TLink({children, link, target="_self"}: Props ) {
    return (
        <Link href={link} target={target} className="underline shadow-inactive hover:shadow-active hover:text-darkbg transition-all duration-300">
            {children}
        </Link>
    )
}