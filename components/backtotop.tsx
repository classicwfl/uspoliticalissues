import Link from "next/link"

export default function BackToTop() {
    return (
        <Link href="#top" className="text-2xl rounded-full flex font-bold items-center justify-center w-10 h-10 hover:shadow-inactive leading-neg shadow-active text-darkbg hover:text-white transition-all duration-300 fixed bottom-2 right-2 z-50 pointer-events-auto">
            <span className="hidden">Back To Top</span>
            <span className="mt-2">^</span>
        </Link>
    )
}