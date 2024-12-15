'use client'

import Link from "next/link";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <header className="w-full shadow-xl bg-black text-white fixed z-50">
                <title>João Isisnaldo</title>
                <meta name="description" content="FullStack developer!" />
                <meta name="keywords" content="Next.js, SEO, React, Programação" />
                <meta name="author" content="Seu Nome" />
                <meta property="og:title" content="FullStack developer!" />
                <meta property="og:description" content="FullStack developer!" />
                <link rel="icon" href="/favicon.ico" />
                <nav className="flex justify-between items-center p-5 text-2xl">
                    <h1 className="font-bold text-black select-none">.</h1>
                    {/* Menu Hamburger */}
                    <button
                        className="lg:hidden text-neon focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? '✖' : '☰'}
                    </button>
                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex gap-5">
                        <li><Link href="#about" className="mx-2">About</Link></li>
                        <li><Link href="#projects" className="mx-2">Projects</Link></li>
                        <li><Link href="#contact" className="mx-2">Contact me</Link></li>
                    </ul>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <ul className="bg-black text-white flex flex-col items-center  shadow-lg lg:hidden">
                        <li className="p-3 border-b w-full text-center"><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li className="p-3 border-b w-full text-center"><Link href="#about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                        <li className="p-3 border-b w-full text-center"><Link href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
                        <li className="p-3 border-b w-full text-center"><Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact me</Link></li>
                    </ul>
                )}
            </header>
        </div>
    );
}
