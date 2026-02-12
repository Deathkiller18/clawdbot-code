'use client';
import styles from './Footer.module.css';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandCol}>
                        <a href="#" className={styles.logo}>
                            J K <span className="text-gradient">Enterprise</span>
                        </a>
                        <p className={styles.tagline}>
                            Your trusted partner in workforce solutions. We bridge the gap between talent and opportunity, ensuring growth for businesses and individuals alike.
                        </p>
                        <div className={styles.social}>
                            <a href="#" className={styles.socialLink} aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" className={styles.socialLink} aria-label="Instagram"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h3 className={styles.columnHeading}>Company</h3>
                        <div className={styles.links}>
                            <a href="#" className={styles.link}>About Us</a>
                            <a href="#vision" className={styles.link}>Our Vision</a>
                            <a href="#how-we-work" className={styles.link}>How We Work</a>
                            <a href="#certificates" className={styles.link}>Certifications</a>
                            <a href="#contact" className={styles.link}>Contact Us</a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className={styles.column}>
                        <h3 className={styles.columnHeading}>Services</h3>
                        <div className={styles.links}>
                            <a href="#" className={styles.link}>Manpower Supply</a>
                            <a href="#" className={styles.link}>Staffing Solutions</a>
                            <a href="#" className={styles.link}>Compliance Management</a>
                            <a href="#" className={styles.link}>Payroll Outsourcing</a>
                            <a href="#" className={styles.link}>Facility Management</a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className={styles.column}>
                        <h3 className={styles.columnHeading}>Get In Touch</h3>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <MapPin size={20} className={styles.icon} />
                                <span>123, Business Growth Hub,<br />SG Highway, Ahmedabad<br />Gujarat - 380054</span>
                            </div>
                            <div className={styles.contactItem}>
                                <Phone size={20} className={styles.icon} />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className={styles.contactItem}>
                                <Mail size={20} className={styles.icon} />
                                <span>info@jkenterprise.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} J K Enterprise. All rights reserved.
                    </p>
                    <div className={styles.legalLinks}>
                        <a href="#" className={styles.link}>Privacy Policy</a>
                        <a href="#" className={styles.link}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
