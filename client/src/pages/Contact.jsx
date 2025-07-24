const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone, message }),
  });
  const data = await response.json();
  alert(data.message);
};

import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  return (
    <main className="pt-5 mt-5">
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Hubungi Kami</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4 text-center mb-5">
            <div className="col">
              <div className="contact-detail card h-100 shadow-sm p-4">
                <i className="fas icon-large mb-3 text-primary"></i>
                <h3 className="card-title text-secondary">Telepon</h3>
                <p className="card-text text-muted">0819-3511-1157</p>
              </div>
            </div>
            <div className="col">
              <div className="contact-detail card h-100 shadow-sm p-4">
                <i className="fas icon-large mb-3 text-primary"></i>
                <h3 className="card-title text-secondary">Email</h3>
                <p className="card-text text-muted"><a href="mailto:FreshClean@email.com">FreshClean@email.com</a></p>
              </div>
            </div>
            <div className="col">
              <div className="contact-detail card h-100 shadow-sm p-4">
                <i className="fas icon-large mb-3 text-primary"></i>
                <h3 className="card-title text-secondary">Alamat</h3>
                <p className="card-text text-muted">Jl. Ahmad Yani No. 5, Pemalang</p>
              </div>
            </div>
          </div>

          <div className="card shadow-sm p-4 mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <h3 className="text-center mb-4 text-secondary">Kirim Pesan kepada Kami</h3>
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold text-muted">Nama Lengkap</label>
                <input type="text" className="form-control" value={form.name} readOnly />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-muted">Email</label>
                <input type="email" className="form-control" value={form.email} readOnly />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-muted">Nomor Telepon (Opsional)</label>
                <input type="tel" className="form-control" value={form.phone} readOnly />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-muted">Pesan Anda</label>
                <textarea className="form-control" rows="5" value={form.message} readOnly></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 py-2" disabled>Kirim Pesan</button>
            </form>
          </div>

          <div className="map-container rounded shadow-sm overflow-hidden">
            <img src="/images/lokasi.png" className="img-fluid w-100" alt="Lokasi" style={{ height: '450px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
