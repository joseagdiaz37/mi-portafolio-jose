import Head from 'next/head';
import styles from '../styles/About.module.css'; // Crearemos este archivo pronto

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Acerca de Mí - José Gutiérrez</title>
        <meta name="description" content="Información sobre José Gutiérrez, Desarrollador Full Stack y Especialista SEO." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Acerca de Mí</h1>
        <p className={styles.description}>
          Aquí podrás encontrar más detalles sobre mi trayectoria, filosofía y cómo puedo contribuir a tus proyectos.
        </p>
        {/* Aquí irá el contenido detallado de tu CV */}
      </main>
    </div>
  );
}