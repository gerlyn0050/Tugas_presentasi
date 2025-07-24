function Testimoni() {
  const testimonials = [
    {
      name: "Andi Saputra",
      comment: "Pelayanan sangat cepat dan hasil cucian bersih serta wangi. Recomended banget!",
      rating: 5,
    },
    {
      name: "Siti Nurhaliza",
      comment: "Harga terjangkau dan bisa antar jemput, sangat membantu untuk ibu rumah tangga.",
      rating: 5,
    },
    {
      name: "Rizky Pratama",
      comment: "Kualitas laundry-nya bagus dan rapih, saya sudah langganan 6 bulan!",
      rating: 5,
    },
  ];

  return (
    <main className="pt-5 mt-5">
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Apa Kata Pelanggan Kami?</h2>
          <div className="row g-4">
            {testimonials.map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <div className="mb-2">
                      {[...Array(item.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-warning me-1"></i>
                      ))}
                    </div>
                    <p className="card-text text-secondary">{item.comment}</p>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <h6 className="mb-0 fw-bold text-primary">{item.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Testimoni;
