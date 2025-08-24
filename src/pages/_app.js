import '../styles/globals.css';
import Header from '../components/Header';
import { ProjectHoverProvider } from '../context/ProjectHoverContext'; // <-- NUEVO IMPORT

function MyApp({ Component, pageProps }) {
  return (
    // Envuelve todo con el proveedor del contexto
    <ProjectHoverProvider> {/* <-- AÑADIDO */}
      <Header />
      <Component {...pageProps} />
    </ProjectHoverProvider> 
  );
}

export default MyApp;