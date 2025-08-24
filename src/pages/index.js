import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { useState, useEffect, forwardRef } from 'react';
import { useProjectHover } from '../context/ProjectHoverContext';

// Componente auxiliar MotionLink (se mantiene)
const MotionLink = forwardRef(({ href, children, ...props }, ref) => {
  return (
    <motion.a href={href} ref={ref} {...props}>
      {children}
    </motion.a>
  );
});
MotionLink.displayName = 'MotionLink';

export default function Home() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [pageIsDark, setPageIsDark] = useState(false);

  // Usa el hook del contexto para obtener el fondo hovered y la función para establecerlo
  const { hoveredPageColor, setHoveredPageColor } = useProjectHover(); // <-- CAMBIO AQUÍ

  // Datos de tus proyectos (se mantiene)
  const projects = [
    {
      id: 'proj1',
      name: 'E-commerce Personalizado',
      description: '...',
      logo: '/images/logo1.svg',
      backgroundImage: '/images/bg1.jpg', // Este será el fondo de la TARJETA
      hoverBackgroundColor: 'rgb(6, 55, 128)', // Color para el fondo de la PÁGINA al hover (ej: gris oscuro)
      overlayColor: 'rgb(14, 86, 194)', // <-- AZUL con 40% de opacidad
    },
    {
      id: 'proj2',
      name: 'Sistema CRM',
      description: '...',
      logo: '/images/logo2.svg',
      backgroundImage: '/images/bg2.jpg',
      hoverBackgroundColor: '#3a3a3a', // Otro color
    },
    {
      id: 'proj3',
      name: 'Plataforma Educativa',
      description: '...',
      logo: '/images/logo3.png',
      backgroundImage: '/images/bg3.jpg',
      hoverBackgroundColor: '#4a4a4a', // Otro color
    },
    {
      id: 'proj4',
      name: 'Web Corporativa',
      description: '...',
      logo: '/images/logo4.svg',
      backgroundImage: '/images/bg4.jpg',
      hoverBackgroundColor: '#5a5a5a',
    },
    {
      id: 'proj5',
      name: 'Aplicación Móvil (PWA)',
      description: '...',
      logo: '/images/logo5.webp',
      backgroundImage: '/images/bg5.jpg',
      hoverBackgroundColor: '#6a6a6a',
    },
    {
      id: 'proj6',
      name: 'Sistema POS Integrado',
      description: '...',
      logo: '/images/logo6.svg',
      backgroundImage: '/images/bg6.jpg',
      hoverBackgroundColor: '#7a7a7a',
    },
  ];

  // Lógica del scroll (se mantiene)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }

      if (window.scrollY > 100) {
        setPageIsDark(true);
      } else {
        setPageIsDark(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div
        className={`${styles.container} ${pageIsDark ? styles.containerDarkBackground : ''}`}
        // <-- CAMBIO: Ahora aplica backgroundColor
        style={{ backgroundColor: hoveredPageColor || (pageIsDark ? '#000' : '#fff') }} // Si hay hover, usa color del hover, sino, el color por scroll
      >
      <Head>
        <title>Portafolio de José Gutiérrez</title>
        <meta name="description" content="Portafolio de José Gutiérrez, Desarrollador Full Stack y Especialista SEO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Sección de Introducción/Héroe */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          CREANDO EXPERIENCIAS <br/> DIGITALES IMPACTANTES.
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Desarrollo Full Stack, Diseño UX/UI y Estrategia SEO.
        </motion.p>
      </main> {/* FIN DEL MAIN */}

      {/* Sección "Mis Proyectos Destacados" - AHORA FUERA DE SECTIONCONTAINER Y CON MAPEO */}
      <section className={styles.projectsSection}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Mis Proyectos Destacados
        </motion.h2>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={styles.projectCard}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            // <-- CAMBIO: Pasa hoverBackgroundColor
            onMouseEnter={() => setHoveredPageColor(project.hoverBackgroundColor)}
            onMouseLeave={() => setHoveredPageColor(null)} // Al salir, el fondo vuelve al color definido por el scroll (blanco o negro)
          >
            {/* El logo dentro de la tarjeta */}
            <img src={project.logo} alt={`${project.name} Logo`} className={styles.projectLogo} />
            {/* <-- AÑADIDO: Elemento para el fondo de la tarjeta al hover --> */}
            <motion.div
                className={styles.projectCardBackground}
                style={{ backgroundImage: `url(${project.backgroundImage})` }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }} // Se vuelve visible al hover
                transition={{ duration: 0.4 }}
            ></motion.div>

            {/* <-- AÑADIDO: La nueva capa de color OVERLAY --> */}
            <motion.div
              className={styles.projectCardOverlay}
              style={{ backgroundColor: project.overlayColor }} // Color dinámico para el overlay
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }} // Se vuelve visible al hover
              transition={{ duration: 0.4 }}
            ></motion.div>

          </motion.div>
        ))}
      </div>
      </section> {/* Fin de projectsSection */}


      {/* Contenedor para el resto de las secciones adicionales */}
      <div className={styles.sectionContainer}>

        {/* Sección "Acerca de Mí" */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Acerca de Mí</h2>
          <p className={styles.sectionText}>
            Como Desarrollador Full Stack y Especialista SEO, gestiono activos digitales, desde administración de servidores y CRM hasta estrategias SEO y Google Ads. Domino automatizaciones con APIs, diseño UX/UI y desarrollo de aplicaciones.
          </p>
        </motion.section>

        {/* Sección "Habilidades" */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>Habilidades Clave</h2>
          <ul className={styles.skillsList}>
            <li>HTML, CSS, JavaScript, React, Next.js</li>
            <li>PHP, WordPress, Shopify</li>
            <li>Backend, APIs, Bases de Datos</li>
            <li>Diseño UX/UI</li>
            <li>SEO, Google Ads, Analytics, GTM, Search Console</li>
            <li>Administración de Servidores, Dominios, CRM</li>
          </ul>
        </motion.section>

        {/* Sección "Mi Propuesta de Valor" */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2 className={styles.sectionTitle}>Mi Propuesta de Valor</h2>
          <p className={styles.sectionText}>
            Mi enfoque se centra en crear soluciones digitales robustas y atractivas que no solo funcionan, sino que también generan resultados medibles y mejoran la experiencia del usuario.
          </p>
        </motion.section>

      </div> {/* Fin de sectionContainer */}

      <footer className={styles.footer}> {/* FOOTER FUERA DEL MAIN */}
        Hecho con ❤️ y código por José Gutiérrez
      </footer>
    </div>
  );
}