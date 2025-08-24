import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect, forwardRef } from 'react'; // Asegúrate de importar forwardRef
import styles from '../styles/Header.module.css';

// 1. Define las variantes (estas ya las tienes, solo asegúrate de que estén aquí)
const logoContainerVariants = {
  rest: { transition: { staggerChildren: 0.1 } },
  hover: { transition: { staggerChildren: 0.1 } }
};

const logoNameVariants = {
  rest: { opacity: 0, x: -10, transition: { duration: 0.2 } },
  hover: { opacity: 1, x: 0, transition: { duration: 0.2 } }
};

// 2. Crea un componente MotionLink usando forwardRef
// Este componente envuelve motion.a y pasa la ref que Link necesita.
const MotionLink = forwardRef(({ href, children, ...props }, ref) => {
  return (
    <motion.a href={href} ref={ref} {...props}>
      {children}
    </motion.a>
  );
});
MotionLink.displayName = 'MotionLink';

// Ahora, tu componente Header
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      {/* Uso del logo - AHORA CON MotionLink */}
      <Link href="/" passHref legacyBehavior>
        <MotionLink
          className={styles.logoContainer}
          variants={logoContainerVariants}
          initial="rest"
          whileHover="hover"
        >
          <div className={styles.logo}>
            JG
          </div>
          <motion.span
            className={styles.logoName}
            variants={logoNameVariants}
          >
            José Gutiérrez
          </motion.span>
        </MotionLink>
      </Link>

      <nav className={styles.nav}>
        {/* Uso para el enlace "Portafolio" - AHORA CON MotionLink */}
        <Link href="/" passHref legacyBehavior>
          <MotionLink
            className={styles.navLink}
            whileHover={{ textDecorationLine: 'underline' }}
          >
            Portafolio
          </MotionLink>
        </Link>
        {/* Uso para el enlace "Acerca de" - AHORA CON MotionLink */}
        <Link href="/about" passHref legacyBehavior>
          <MotionLink
            className={styles.navLink}
            whileHover={{ textDecorationLine: 'underline' }}
          >
            Acerca de
          </MotionLink>
        </Link>
      </nav>
    </header>
  );
}