export default function Footer() {
    return (
        <footer className = "border-t border-white/10"> {/* gives a clean divider */}
            <div className = "mx-auto max-w-5xl px-6 py-10 text-sm text-white/60"> {/* max --- px6 keeps content centered and not stretched to the edge while the text-white/60 keeps the texts slightly muted */}
                © {new Date().getFullYear()} Krish Desai. All rights reserved.
            </div>
        </footer>
    );
}