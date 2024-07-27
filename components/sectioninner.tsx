type Props = {
    children: React.ReactNode,
  }

export default function SectionInner({children}: Props ) {
    return (
        <div className="max-w-contentinner m-auto">
            {children}
        </div>
    )
}