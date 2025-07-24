import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Testimoni from './pages/Testimoni';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/layanan" element={<Services />} />
        <Route path="/harga" element={<Pricing />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/testimoni" element={<Testimoni />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
