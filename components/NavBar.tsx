import Link from "next/link";

const navItems = [
    { href: "/", label: "Home"},
    { href: "/projects", label: "Projects"},
    { href: "/resume", label: "Resume"},
    { href: "/contact", label: "Contact"},
];


export default function Navbar() {
    return (
        <header className = "sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">{/* stick top-0 keeps the navbar visible when scrolling and the blackdrop-blur + bg-black/40 adds a nice effect */}
            <nav className ="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"> {/* max-w-5xl px-6 keeps the site consistent everywhere */}
                <Link href = "/" className ="font-semibold tracking-tight"> 
                    Krish Desai
                </Link>

                <ul className ="flex items-center gap-6 text-sm text-white/80">
                {/* navItems array makes the navbar easy to update and maintain (add/remove pages without rewriting markup) */}
                    {navItems.map((item) => ( 
                        <li key={item.href}>
                            <Link 
                            href={item.href}
                            className="transition hover:text-white"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

