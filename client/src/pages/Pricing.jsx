function Pricing() {
  return (
    <main className="pt-5 mt-5">
      <section className="py-5 bg-light" style={{ minHeight: '80vh' }}>
        <div className="container">
          <h2 className="text-center mb-4">Harga Layanan</h2>

          {/* ✅ wrapper grid Bootstrap */}
          <div className="row justify-content-center">
            {/* ✅ kolom yang diratakan ke tengah */}
            <div className="col-lg-8">
              <div className="table-responsive shadow rounded bg-white">
                <table className="table table-bordered mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Layanan</th>
                      <th>Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Laundry Kiloan</td><td>Rp 7.000/kg</td></tr>
                    <tr><td>Dry Cleaning</td><td>Mulai dari Rp 20.000/pcs</td></tr>
                    <tr><td>Antar Jemput</td><td>Gratis*</td></tr>
                    <tr><td>Selimut</td><td>Mulai dari Rp 25.000/item</td></tr>
                    <tr><td>Karpet</td><td>Mulai dari Rp 35.000/m²</td></tr>
                    <tr><td>Cuci Sepatu</td><td>Mulai dari Rp 30.000/pasang</td></tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted small mt-3">
                *Gratis antar jemput untuk area tertentu.<br />
                Harga bisa berubah sewaktu-waktu tergantung jenis bahan dan ukuran.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pricing;
