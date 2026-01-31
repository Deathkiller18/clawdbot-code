'use client';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        J K <span className="text-gradient">Enterprise</span>
                    </div>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} J K Enterprise. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
