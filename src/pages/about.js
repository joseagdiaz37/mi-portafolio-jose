import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/About.module.css';

export default function About() {
  const [overlayColor, setOverlayColor] = useState('rgba(255,255,255,1)');
  const [darkText, setDarkText] = useState(false);
  const expertiseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const expertiseTop = expertiseRef.current ? expertiseRef.current.offsetTop : 0;
      if (window.scrollY > expertiseTop - window.innerHeight) {
        setOverlayColor('transparent');
        setDarkText(false);
      } else if (window.scrollY > 120) {
        setOverlayColor('rgba(0,0,0,0.8)');
        setDarkText(true);
      } else {
        setOverlayColor('rgba(255,255,255,1)');
        setDarkText(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      <Head>
        <title>Acerca de Mí - José Gutiérrez</title>
        <meta
          name="description"
          content="Información sobre José Gutiérrez, Desarrollador Full Stack y Especialista SEO."
        />
      </Head>

      {/* Overlay que cambia de color según el scroll */}
      <div className={styles.overlay} style={{ backgroundColor: overlayColor }}></div>

      {/* Primera sección: hero + about + education/experience */}
      <section className={`${styles.heroSection} ${darkText ? styles.dark : ''}`}>
        <h1 className={styles.heroTitle}>
          COMPETITION AND CREATIVITY RUNS HARD IN HIS VEINS.
        </h1>
        <div className={styles.aboutText}>
          <p>
            Given that Anthony grew up in Chicago rooting for sports legends like
            <strong> MICHAEL JORDAN</strong> and <strong>WALTER PAYTON</strong> that&apos;s no
            surprise.
          </p>
          <p>
            Anthony brings that competitive spirit to his branding and design work,
            leading brands to big wins, being listed in Web Designer Magazine&apos;s
            “HOT 100” list twice.
          </p>
          <p>
            In addition to helping clients like ESPN and Nestlé rise to victory
            against their competitors, Anthony teaches workshops at USC&apos;s Annenberg
            Digital Lounge, served on the board of AIGA Los Angeles and has earned a
            special merit award at the annual GlobalTrend Marketing Awards.
          </p>
        </div>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>EDUCATION</h3>
            <ul>
              <li>
                <strong>Woodbury University</strong>
                <br />BFA Graphic Design, 2006
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>EXPERIENCE</h3>
            <ul>
              <li>
                <strong>Principal, Creative Director</strong>
                <br />AQV Design, 2008–2017
              </li>
              <li>
                <strong>Creative Director</strong>
                <br />Odopod, 2017–2021
              </li>
              <li>
                <strong>Creative Director</strong>
                <br />Stamen Design Group, 2013–2015
              </li>
              <li>
                <strong>Marketing Art Director</strong>
                <br />Sotheby&apos;s Real Estate, 2005–2008
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sección de Expertice */}
      <section ref={expertiseRef} className={styles.expertiseSection}>
        <h2 className={styles.expertiseTitle}>EXPERTISE</h2>
        <div className={styles.expertiseGrid}>
          <div className={styles.expertiseColumn}>
            <h4>STRATEGY</h4>
            <ul>
              <li>Research &amp; Analysis</li>
              <li>Trend &amp; Insight</li>
              <li>Customer Experience</li>
              <li>Brand Platform &amp; Positioning</li>
              <li>Go-to-Market Planning</li>
              <li>Content &amp; Messaging</li>
            </ul>
          </div>
          <div className={styles.expertiseColumn}>
            <h4>DESIGN</h4>
            <ul>
              <li>Brand Identity</li>
              <li>Visual Language</li>
              <li>Packaging Design</li>
              <li>Brand Campaign</li>
              <li>Signature Assets</li>
              <li>Brand Guidelines</li>
            </ul>
          </div>
          <div className={styles.expertiseColumn}>
            <h4>DIGITAL</h4>
            <ul>
              <li>Creative Technology</li>
              <li>UX Strategy</li>
              <li>UI &amp; Web Design</li>
              <li>App Design</li>
              <li>CMS Integration</li>
              <li>Digital Advertising</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Afiliaciones */}
      <section className={styles.affiliationsSection}>
        <h2 className={styles.affiliationsTitle}>AFFILIATIONS</h2>
        <div className={styles.affiliationsLogos}>
          <img src="/images/Logo1.svg" alt="AIGA" />
          <img src="/images/Logo2.svg" alt="One Club" />
          <img src="/images/Logo3.png" alt="IMC" />
          <img src="/images/Logo4.svg" alt="Designel" />
          <img src="/images/Logo5.webp" alt="USC" />
        </div>
      </section>

      {/* Clientes */}
      <section className={styles.clientsSection}>
        <h2 className={styles.clientsTitle}>CLIENTS</h2>
        <div className={styles.clientsLogos}>
          <img src="/images/Logo6.svg" alt="Client 1" />
          <img src="/images/Logo7.svg" alt="Client 2" />
          <img src="/images/Logo8.svg" alt="Client 3" />
          <img src="/images/Logo9.svg" alt="Client 4" />
        </div>
      </section>

      {/* Contacto */}
      <section className={styles.contactSection}>
        <p className={styles.smallLabel}>GET IN TOUCH</p>
        <p className={styles.socials}>TW. IG. LN. BE. M.</p>
        <h2 className={styles.contactTitle}>
          WANT TO MOVE FORWARD?
          <br />DROP A LINE.
        </h2>
      </section>
    </div>
  );
}

