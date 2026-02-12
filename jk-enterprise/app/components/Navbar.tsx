'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        J K <span className="text-gradient">Enterprise</span>
                    </div>

                    <div className={`${styles.links} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
                        <a href="#" className={styles.link}>Home</a>
                        <a href="#services" className={styles.link}>Services</a>
                        <a href="#about" className={styles.link}>About</a>
                        <a href="#contact" className={styles.link}>Contact</a>
                        <a
                            href="https://wa.me/919825535055"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.cta}
                        >
                            WhatsApp Us
                        </a>
                    </div>

                    <button
                        className={styles.mobileToggle}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
