
function Gallery() {
  const items = [
    { src: '/images/laundry7.png', caption: 'Pakaian Kotor Siap Cuci' },
    { src: '/images/laundry3.png', caption: 'Laundry Bersih dan Rapi' },
    { src: '/images/laundry4.png', caption: 'Pakaian Siap Dikembalikan' },
    { src: '/images/laundry1.png', caption: 'Peralatan Modern Kami' },
    { src: '/images/laundry5.png', caption: 'Staf Profesional Kami' },
    { src: '/images/sepatu.png', caption: 'Produk Terbaik untuk Pakaian Anda' }
  ];

  return (
    <main className="pt-5 mt-5">
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Galeri FreshClean Laundry</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {items.map((item, i) => (
              <div className="col" key={i}>
                <div className="gallery-item position-relative overflow-hidden rounded shadow-sm">
                  <img src={item.src} className="img-fluid w-100 rounded-circle" style={{ height: '250px', objectFit: 'cover' }} alt={item.caption} />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50 text-white">
                    {item.caption}
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

export default Gallery;
