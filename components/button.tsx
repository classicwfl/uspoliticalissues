import Link from "next/link"

type Props = {
    children: React.ReactNode,
    link: string,
    target: string,
}

export default function Button({children, link, target="_self"}: Props ) {
    return (
        <Link href={link} target={target} className="font-bighead uppercase italic text-2xl p-4 inline-block leading-neg hover:shadow-inactive shadow-active text-darkbg hover:text-white transition-all duration-300">
            {children}
        </Link>
    )
}