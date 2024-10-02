import Link from "next/link";

export default function  Test() {
    return (
        <main className="bg-[#15202b]">
            <header>
                <nav>
                    <ul className="flex items-center justify-between text-white p-5">
                        <li>
                            <button className="size-10 rounded-full bg-red-400"></button>
                        </li>
                        <li>
                            X
                        </li>
                        <li className="flex items-center gap-2">
                            <Link href="/upgrade">Upgrade</Link>
                            <Link href="/more">+</Link>
                        </li>
                    </ul>
                </nav>
                <section>
                    <ul className="flex items-center justify-between">
                        {["For you", "Following", "THE BOYS", "Indie Game Devs"].map(tab => {
                            return (
                                <li key={tab}>
                                    <Link href={`/${tab}`} className="text-slate-500 font-semibold">{tab}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </header>

        </main>
    )
}