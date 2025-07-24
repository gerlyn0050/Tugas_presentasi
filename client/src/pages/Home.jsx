function Home() {
  return (
    <main className="pt-5">
      <section
        className="d-flex align-items-center text-white"
        style={{
          minHeight: "100vh",
          backgroundImage: "url('/images/logo2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {/* Overlay gelap agar teks terbaca */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>

        {/* Konten */}
        <div className="container position-relative text-center">
          <h1 className="display-3 fw-bold text-white mb-4" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}>
            Selamat Datang di FreshClean Laundry
          </h1>
          <p className="lead mb-4" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
            Layanan laundry cepat, bersih, dan wangi untuk semua jenis pakaian Anda.
          </p>
          <a href="/layanan" className="btn btn-lg btn-warning fw-semibold px-4 py-2 shadow">
            Lihat Layanan Kami
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
