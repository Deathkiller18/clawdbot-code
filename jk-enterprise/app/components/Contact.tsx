'use client';
import { motion } from 'framer-motion'; // Keep for form internal animations if needed, or replace
import { Phone, Mail, MapPin } from 'lucide-react';
import styles from './Contact.module.css';
import Reveal from './Reveal';

export default function Contact() {
    return (
        <section className={`section ${styles.bg}`} id="contact">
            <div className="container">
                <div className={styles.header}>
                    <Reveal width="100%">
                        <span className={styles.label}>Get In Touch</span>
                        <h2 className={styles.heading}>Contact <span className="text-gradient">Us</span></h2>
                    </Reveal>
                    <Reveal width="100%" delay={0.1}>
                        <p className={styles.subheading}>Ready to transform your workforce? We are here to help.</p>
                    </Reveal>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <Reveal width="100%" className={styles.itemWrapper}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><Phone size={32} /></div>
                                <div className={styles.details}>
                                    <h4 className={styles.infoTitle}>Call Us</h4>
                                    <a href="tel:+919876543210" className={styles.contactLink}>+91 98765 43210</a>
                                    <a href="tel:+911234567890" className={styles.contactLink}>+91 12345 67890</a>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal width="100%" delay={0.1} className={styles.itemWrapper}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><Mail size={32} /></div>
                                <div className={styles.details}>
                                    <h4 className={styles.infoTitle}>Email Us</h4>
                                    <a href="mailto:info@jkenterprise.com" className={styles.contactLink}>info@jkenterprise.com</a>
                                    <a href="mailto:support@jkenterprise.com" className={styles.contactLink}>support@jkenterprise.com</a>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal width="100%" delay={0.2} className={styles.itemWrapper}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><MapPin size={32} /></div>
                                <div className={styles.details}>
                                    <h4 className={styles.infoTitle}>Visit Us</h4>
                                    <p className={styles.infoText}>123, Business Park, Near Circle,</p>
                                    <p className={styles.infoText}>Ahmedabad, Gujarat - 380001</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
