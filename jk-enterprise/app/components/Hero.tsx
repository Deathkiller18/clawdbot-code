import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`${styles.overlay} container`}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className={styles.subtitle}
                    >
                        Welcome to
                    </motion.span>
                    <h1 className={styles.title}>
                        J K <span className="text-gradient">Enterprise</span>
                    </h1>
                    <p className={styles.tagline}>
                        Experts in Finding Right Manpower, Service Provider, and Staff Management Support.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className={styles.actions}
                    >
                        <button className={styles.primaryBtn}>Our Services</button>
                        <button className={styles.secondaryBtn}>Contact Us</button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
