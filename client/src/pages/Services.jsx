
function Services() {
  return (
    <main className="pt-5 mt-5">
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Layanan Lengkap Kami</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
            <div className="col">
              <div className="service-item card h-100 shadow-sm text-center p-4">
                <i className="fas icon-large mb-3"></i>
                <h3 className="card-title text-primary">Laundry Kiloan</h3>
                <p className="card-text text-secondary">Cuci & Kering, Setrika (opsional), Parfum, dan cocok untuk pakaian harian.</p>
              </div>
            </div>
            <div className="col">
              <div className="service-item card h-100 shadow-sm text-center p-4">
                <i className="fas fa-dry-cleaning icon-large mb-3"></i>
                <h3 className="card-title text-primary">Dry Cleaning</h3>
                <p className="card-text text-secondary">Perawatan khusus bahan sensitif, tanpa air, cocok untuk jas dan gaun.</p>
              </div>
            </div>
            <div className="col">
              <div className="service-item card h-100 shadow-sm text-center p-4">
                <i className="fas icon-large mb-3"></i>
                <h3 className="card-title text-primary">Antar Jemput</h3>
                <p className="card-text text-secondary">Gratis untuk area tertentu, hemat waktu, dan fleksibel.</p>
              </div>
            </div>
            <div className="col">
              <div className="service-item card h-100 shadow-sm text-center p-4">
                <i className="fas fa-blanket icon-large mb-3"></i>
                <h3 className="card-title text-primary">Selimut & Karpet</h3>
                <p className="card-text text-secondary">Pembersihan menyeluruh, higienis dan harum.</p>
              </div>
            </div>
            <div className="col">
              <div className="service-item card h-100 shadow-sm text-center p-4">
                <i className="fas icon-large mb-3"></i>
                <h3 className="card-title text-primary">Cuci Sepatu & Tas</h3>
                <p className="card-text text-secondary">Pembersihan mendetail dan perawatan bahan khusus.</p>
              </div>
            </div>
            <div className="col">
              <div className="service-item card h-100 shadow-sm text-center p-4">
                <i className="fas icon-large mb-3"></i>
                <h3 className="card-title text-primary">Pewangi Tambahan</h3>
                <p className="card-text text-secondary">Aroma premium tahan lama untuk semua layanan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;