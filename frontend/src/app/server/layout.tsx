import { NavbarComp } from "../components/navbar";

export default function ServerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {children}
        </section >
    )
}