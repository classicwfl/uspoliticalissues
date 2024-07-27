type Props = {
    children: React.ReactNode,
    id: string
  }

export default function Section({children, id}: Props ) {
    return (
        <div className="py-30 px-4" id={id}>
            {children}
        </div>
    )
}