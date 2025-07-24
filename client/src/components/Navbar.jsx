import { Link, useLocation } from 'react-router-dom';
const logo = "/images/logo2.png";

function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center fw-bold text-primary" to="/">
          <img src={logo} alt="Logo" width="40" height="40" className="me-2 rounded-circle" />
          FreshClean Laundry
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Beranda</Link></li>
            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/tentang' ? 'active' : ''}`} to="/tentang">Tentang Kami</Link></li>
            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/layanan' ? 'active' : ''}`} to="/layanan">Layanan</Link></li>
            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/harga' ? 'active' : ''}`} to="/harga">Harga</Link></li>
            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/galeri' ? 'active' : ''}`} to="/galeri">Galeri</Link></li>
            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/kontak' ? 'active' : ''}`} to="/kontak">Kontak</Link></li>
            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/testimoni' ? 'active' : ''}`} to="/testimoni">Testimoni</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
