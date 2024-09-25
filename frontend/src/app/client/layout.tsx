export default function ServerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <nav></nav>

            {children}
        </section>
    )
}