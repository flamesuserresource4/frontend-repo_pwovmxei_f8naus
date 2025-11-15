import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-800">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500" />
              <span className="font-semibold">Portofolio</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollTo('home')} className="text-sm font-medium hover:text-blue-600">Beranda</button>
              <button onClick={() => scrollTo('services')} className="text-sm font-medium hover:text-blue-600">Jasa</button>
              <button onClick={() => scrollTo('hire')} className="text-sm font-medium hover:text-blue-600">Pakai Jasa Saya</button>
              <button onClick={() => scrollTo('alamat')} className="text-sm font-medium hover:text-blue-600">Alamat</button>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-300"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-3 space-y-2">
              <button onClick={() => scrollTo('home')} className="block w-full text-left px-2 py-2 rounded-md hover:bg-slate-50">Beranda</button>
              <button onClick={() => scrollTo('services')} className="block w-full text-left px-2 py-2 rounded-md hover:bg-slate-50">Jasa</button>
              <button onClick={() => scrollTo('hire')} className="block w-full text-left px-2 py-2 rounded-md hover:bg-slate-50">Pakai Jasa Saya</button>
              <button onClick={() => scrollTo('alamat')} className="block w-full text-left px-2 py-2 rounded-md hover:bg-slate-50">Alamat</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="pt-24 md:pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Saya Membangun Website Modern yang Cepat dan Menarik
              </h1>
              <p className="mt-4 text-slate-600">
                Portofolio profesional dengan fokus pada desain bersih, performa, dan pengalaman pengguna yang mulus.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => scrollTo('services')} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-semibold">
                  Lihat Jasa
                </button>
                <button onClick={() => scrollTo('hire')} className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-md font-semibold">
                  Pakai Jasa Saya
                </button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                  Siap Menerima Project
                </div>
                <div>Respons cepat via WhatsApp & Email</div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl bg-white shadow-md hidden md:block" />
              <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-white shadow-md hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Jasa</h2>
          <p className="mt-2 text-slate-600">Pilihan layanan untuk kebutuhan digital Anda.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Pembuatan Website', desc: 'Landing page, company profile, portofolio, custom web app.' },
              { title: 'Redesign & Optimasi', desc: 'Perbaikan UI/UX, peningkatan performa dan SEO.' },
              { title: 'Integrasi API', desc: 'Menghubungkan website dengan layanan pihak ketiga.' },
              { title: 'Toko Online', desc: 'Katalog produk, keranjang belanja, pembayaran, dan dashboard.' },
              { title: 'Maintenance', desc: 'Pemeliharaan rutin, backup, dan monitoring.' },
              { title: 'Konsultasi', desc: 'Diskusi kebutuhan dan solusi terbaik untuk bisnis Anda.' },
            ].map((s, i) => (
              <div key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 mb-4" />
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
                <button onClick={() => scrollTo('hire')} className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Minta Penawaran →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Me */}
      <section id="hire" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">Pakai Jasa Saya</h2>
          <p className="mt-2 text-slate-600 text-center">Isi form singkat di bawah, saya akan balas secepatnya.</p>

          <form onSubmit={(e) => { e.preventDefault(); alert('Terima kasih! Saya akan menghubungi Anda segera.'); }} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium mb-1">Nama</label>
              <input required type="text" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nama Anda" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input required type="email" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="email@contoh.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">WhatsApp</label>
              <input type="tel" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="08xxxx" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Deskripsi Project</label>
              <textarea required rows={5} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ceritakan kebutuhan Anda..." />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-4">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" /> Chat WhatsApp
              </a>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-semibold">Kirim</button>
            </div>
          </form>
        </div>
      </section>

      {/* Address */}
      <section id="alamat" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold">Alamat</h2>
              <p className="mt-2 text-slate-600">Silakan datang atau hubungi saya terlebih dahulu untuk janji temu.</p>
              <div className="mt-6 space-y-3 text-slate-700">
                <p className="font-medium">Nama Usaha / Personal</p>
                <p>Jl. Contoh Alamat No. 123, Kota Anda, Indonesia</p>
                <p>Email: anda@example.com</p>
                <p>WhatsApp: 0812-3456-7890</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
              <iframe
                title="Lokasi"
                src="https://maps.google.com/maps?q=Jakarta%20Indonesia&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Portofolio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="hover:text-blue-600" href="#services">Jasa</a>
            <a className="hover:text-blue-600" href="#hire">Pakai Jasa</a>
            <a className="hover:text-blue-600" href="#alamat">Alamat</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
