import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Acerca de Mí - José Gutiérrez</title>
        <meta name="description" content="Información sobre José Gutiérrez, Desarrollador Full Stack y Especialista SEO." />
      </Head>

      {/* Hero / Intro (blanco) */}
      <section className={`${styles.section} ${styles.light} ${styles.hero}`}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>Acerca de mí</h1>
          <p className={styles.lead}>
            Competencia y creatividad corren por mis venas. Desarrollo experiencias digitales con enfoque
            en performance, UX/UI y SEO.
          </p>
        </div>
      </section>

      {/* About (oscuro con opacidad) */}
      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.wrap}>
          <h2 className={styles.h2}>Sobre mí</h2>
          <p>
            Soy Desarrollador Full Stack y Especialista SEO. He trabajado en e‑commerce, apps y sitios
            corporativos; administro servidores, integro APIs y diseño productos con enfoque en negocio.
          </p>
        </div>
      </section>

      {/* Educación (oscuro con opacidad) */}
      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.wrapGrid}>
          <div>
            <h3 className={styles.h3}>Educación</h3>
            <ul className={styles.list}>
              <li><strong>Universidad X</strong> — Ing. de Software</li>
              <li><strong>Certificaciones</strong> — Google Analytics, Meta, AWS (ejemplos)</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.h3}>Experiencia</h3>
            <ul className={styles.list}>
              <li><strong>Global Connection</strong> — Dev / SEO</li>
              <li><strong>Proyectos Freelance</strong> — Webs, PWA, integraciones</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Expertise (vuelve a blanco) */}
      <section className={`${styles.section} ${styles.light}`}>
        <div className={styles.wrap}>
          <h2 className={styles.h2}>Expertise</h2>
          <div className={styles.expertiseGrid}>
            <div>
              <h4 className={styles.h4}>Strategy</h4>
              <ul className={styles.bullets}>
                <li>Research & Analytics</li>
                <li>Product & Roadmap</li>
                <li>SEO & Content</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>Design</h4>
              <ul className={styles.bullets}>
                <li>UX/UI & Prototyping</li>
                <li>Design Systems</li>
                <li>Brand Identity</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>Digital</h4>
              <ul className={styles.bullets}>
                <li>React/Next.js</li>
                <li>WordPress/Shopify</li>
                <li>APIs & Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Afiliaciones / Clientes / Premios (negro con parallax) */}
      <section className={`${styles.section} ${styles.darkParallax}`}>
        <div className={styles.wrap}>
          <h2 className={styles.h2}>Afiliaciones</h2>
          <div className={styles.logosRow}>
            <span>LA</span><span>The One Club</span><span>Designed</span><span>UK Creator</span>
          </div>

          <h2 className={styles.h2} style={{marginTop: '4rem'}}>Clientes</h2>
          <div className={styles.clientsGrid}>
            {Array.from({length: 24}).map((_,i)=>(
              <div key={i} className={styles.clientBox}>Logo</div>
            ))}
          </div>

          <h2 className={styles.h2} style={{marginTop: '4rem'}}>Awards</h2>
          <div className={styles.tableWrap}>
            <table className={styles.awardsTable}>
              <thead>
                <tr><th>Proyecto</th><th>Premio</th><th>Año</th></tr>
              </thead>
              <tbody>
                <tr><td>Proyecto X</td><td>Best UX</td><td>2024</td></tr>
                <tr><td>Proyecto Y</td><td>Web Excellence</td><td>2023</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.darkParallax}`}>
        <div className={styles.wrapCenter}>
          <h3 className={styles.cta}>Want to move forward? Drop a line.</h3>
        </div>
      </section>
    </div>
  );
}
