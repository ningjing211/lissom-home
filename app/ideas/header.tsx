'use client';

import { useState } from 'react';
import '@/app/ui/ideas/header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <nav className="header-nav container flex-container">
                <h1 className="logo">
                    <a className="logo-link" href="/">
                        <img src="/logoB-web.png" alt="LISSOM CASA" />
                    </a>
                </h1>
                
                {/* 菜單按鈕 */}
                <button 
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <div className={`menu-main-links ${isMenuOpen ? 'active' : ''}`}>
                    {/* 主要菜單 */}
                    <div className="w-layout-vflex flex-block-4">
                        <a href="/philosophy" className="menu-link w-inline-block" onClick={closeMenu}>
                            <div>About</div>
                        </a>
                        <a href="/core_value" className="menu-link w-inline-block" onClick={closeMenu}>
                            <div>Service</div>
                        </a>
                        <a href="/roots" className="menu-link w-inline-block" onClick={closeMenu}>
                            <div>Lissom Gallery</div>
                        </a>
                        <a href="/vision" className="menu-link w-inline-block" onClick={closeMenu}>
                            <div>Living Inspiration</div>
                        </a>
                        <a href="/blog/index.html" className="menu-link w-inline-block" onClick={closeMenu}>
                            <div>Blog</div>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}