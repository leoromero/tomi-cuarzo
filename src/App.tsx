import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import QuienesSomosPage from './pages/QuienesSomosPage';
import ServiciosPage from './pages/ServiciosPage';
import ContactoPage from './pages/ContactoPage';
import CertificacionesPage from './pages/CertificacionesPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quienes-somos" element={<QuienesSomosPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/certificaciones" element={<CertificacionesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
