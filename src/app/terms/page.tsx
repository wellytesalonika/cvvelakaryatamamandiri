'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Shield, Users, AlertTriangle, CheckCircle, Scale } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VKM</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">CV VELA KARYATAMA MANDIRI</h1>
                <p className="text-xs text-gray-600">Syarat & Ketentuan</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan <span className="text-blue-600">CV VELA KARYATAMA MANDIRI</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Syarat dan ketentuan ini mengatur penggunaan layanan perdagangan eceran yang kami sediakan. 
              Dengan menggunakan layanan kami, Anda menyetujui syarat dan ketentuan berikut.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            {[
              { id: 'definisi', icon: FileText, title: 'Definisi', desc: 'Istilah-istilah yang digunakan' },
              { id: 'layanan', icon: Users, title: 'Layanan', desc: 'Jasa yang kami sediakan' },
              { id: 'kewajiban', icon: Shield, title: 'Kewajiban', desc: 'Hak dan kewajiban pengguna' }
            ].map((item) => (
              <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer" onClick={() => scrollToSection(item.id)}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                
                {/* Pendahuluan */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Selamat datang di CV VELA KARYATAMA MANDIRI. Syarat dan ketentuan ini ("Syarat") 
                      mengatur penggunaan layanan perdagangan eceran yang disediakan oleh CV VELA KARYATAMA MANDIRI 
                      ("Perusahaan," "kami," atau "milik kami").
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan 
                      ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak 
                      boleh menggunakan layanan kami.
                    </p>
                  </div>
                </div>

                {/* Definisi */}
                <div id="definisi" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-6 h-6 text-blue-600 mr-3" />
                    1. Definisi
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Dalam Syarat dan Ketentuan ini, istilah-istilah berikut memiliki makna sebagai berikut:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>"Layanan"</strong> - Layanan perdagangan eceran yang disediakan oleh CV VELA KARYATAMA MANDIRI</li>
                      <li><strong>"Pengguna"</strong> - Individu atau entitas yang menggunakan layanan kami</li>
                      <li><strong>"Produk"</strong> - Barang atau jasa yang ditawarkan untuk dijual eceran</li>
                      <li><strong>"Transaksi"</strong> - Pembelian produk atau penggunaan layanan oleh Pengguna</li>
                      <li><strong>"Website"</strong> - Platform online kami di www.velakaryatama.co.id</li>
                      <li><strong>"Akun"</strong> - Akses pribadi Pengguna untuk menggunakan layanan kami</li>
                      <li><strong>"Konten"</strong> - Informasi, teks, gambar, dan materi lain di website kami</li>
                    </ul>
                  </div>
                </div>

                {/* Layanan */}
                <div id="layanan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Users className="w-6 h-6 text-blue-600 mr-3" />
                    2. Layanan yang Kami Sediakan
                  </h2>
                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      CV VELA KARYATAMA MANDIRI menyediakan layanan perdagangan eceran meliputi:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Penjualan produk eceran berkualitas</li>
                      <li>Konsultasi produk dan kebutuhan</li>
                      <li>Layanan pengiriman dan logistik</li>
                      <li>Layanan purna jual dan garansi</li>
                      <li>Informasi produk dan promosi</li>
                      <li>Layanan pelanggan 24/7</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Ketersediaan Layanan</h3>
                  <p className="text-gray-700 mb-4">
                    Kami berusaha untuk menyediakan layanan yang stabil dan kontinyu. Namun, kami tidak menjamin 
                    bahwa layanan akan selalu tersedia tanpa gangguan. Kami berhak untuk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Memodifikasi atau menghentikan sementara layanan untuk pemeliharaan</li>
                    <li>Mengubah fitur layanan dari waktu ke waktu</li>
                    <li>Membatasi akses ke layanan jika diperlukan</li>
                  </ul>
                </div>

                {/* Pendaftaran dan Akun */}
                <div id="pendaftaran" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Pendaftaran dan Akun Pengguna</h2>
                  <div className="bg-purple-50 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Persyaratan Pendaftaran</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Untuk menggunakan layanan kami, Anda mungkin perlu mendaftar dan membuat akun. Anda setuju untuk:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Memberikan informasi yang akurat, lengkap, dan terkini</li>
                      <li>Menjaga kerahasiaan informasi akun Anda</li>
                      <li> Bertanggung jawab atas semua aktivitas di akun Anda</li>
                      <li>Memberitahu kami segera jika ada penggunaan yang tidak sah</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Penangguhan dan Penghentian Akun</h3>
                  <p className="text-gray-700">
                    Kami berhak untuk menangguhkan atau menghentikan akun Anda jika:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Anda melanggar syarat dan ketentuan ini</li>
                    <li>Anda menggunakan layanan untuk tujuan ilegal</li>
                    <li>Anda membahayakan keamanan sistem kami</li>
                    <li>Diperlukan oleh hukum atau peraturan yang berlaku</li>
                  </ul>
                </div>

                {/* Produk dan Harga */}
                <div id="produk" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Produk dan Harga</h2>
                  <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Informasi Produk</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Kami berusaha untuk menyediakan informasi produk yang akurat. Namun:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Warna produk mungkin sedikit berbeda karena faktor tampilan</li>
                      <li>Spesifikasi produk dapat berubah tanpa pemberitahuan sebelumnya</li>
                      <li>Ketersediaan produk dapat berubah sewaktu-waktu</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Harga dan Pembayaran</h3>
                  <p className="text-gray-700 mb-4">
                    Ketentuan harga dan pembayaran:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Harga yang tercantum adalah dalam Rupiah dan belum termasuk PPN</li>
                    <li>Harga dapat berubah tanpa pemberitahuan sebelumnya</li>
                    <li>Pembayaran harus dilakukan sesuai metode yang tersedia</li>
                    <li>Promo dan diskon berlaku sesuai syarat dan ketentuan masing-masing</li>
                  </ul>
                </div>

                {/* Kewajiban Pengguna */}
                <div id="kewajiban" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-6 h-6 text-blue-600 mr-3" />
                    5. Kewajiban dan Larangan Pengguna
                  </h2>
                  <div className="bg-red-50 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Kewajiban Pengguna</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Sebagai pengguna layanan kami, Anda wajib untuk:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Menggunakan layanan sesuai dengan tujuan yang dimaksud</li>
                      <li>Memberikan informasi yang benar dan akurat</li>
                      <li>Menghormati hak-hak pihak ketiga</li>
                      <li>Mematuhi semua hukum dan peraturan yang berlaku</li>
                      <li>Tidak mencoba merusak atau mengganggu sistem kami</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Larangan Penggunaan</h3>
                  <p className="text-gray-700 mb-4">
                    Anda dilarang untuk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Menggunakan layanan untuk aktivitas ilegal</li>
                    <li>Mengirimkan virus atau malware ke sistem kami</li>
                    <li>Mencoba mendapatkan akses tidak sah ke sistem</li>
                    <li>Menyalin atau mendistribusikan konten secara ilegal</li>
                    <li>Menggunakan layanan untuk menipu atau menyesatkan</li>
                  </ul>
                </div>

                {/* Privasi dan Data */}
                <div id="privasi" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privasi dan Perlindungan Data</h2>
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Privasi Anda adalah prioritas kami. Penggunaan data pribadi Anda diatur oleh:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Kebijakan Privasi kami yang tersedia terpisah</li>
                      <li>Hukum dan peraturan perlindungan data yang berlaku</li>
                      <li>Persetujuan yang Anda berikan saat pengumpulan data</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Dengan menggunakan layanan kami, Anda setuju dengan pengumpulan dan penggunaan data 
                      pribadi Anda sesuai dengan Kebijakan Privasi kami.
                    </p>
                  </div>
                </div>

                {/* Pengiriman dan Pengembalian */}
                <div id="pengiriman" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Pengiriman dan Pengembalian</h2>
                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Kebijakan Pengiriman</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Pengiriman produk dilakukan dengan ketentuan:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Estimasi waktu pengiriman tergantung lokasi dan ketersediaan kurir</li>
                      <li>Biaya pengiriman ditanggung oleh pembeli kecuali ada promo khusus</li>
                      <li>Kami tidak bertanggung jawab atas keterlambatan yang disebabkan pihak ketiga</li>
                      <li>Resi pengiriman akan diberikan setelah produk dikirim</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kebijakan Pengembalian</h3>
                  <p className="text-gray-700 mb-4">
                    Pengembalian produk dapat dilakukan jika:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Produk rusak atau cacat saat diterima</li>
                    <li>Produk tidak sesuai dengan pesanan</li>
                    <li>Pengembalian diajukan maksimal 7 hari setelah penerimaan</li>
                    <li>Produk masih dalam kondisi baik dan lengkap</li>
                  </ul>
                </div>

                {/* Hak Kekayaan Intelektual */}
                <div id="hak-cipta" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Hak Kekayaan Intelektual</h2>
                  <div className="bg-purple-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Semua konten di website kami, termasuk namun tidak terbatas pada:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Teks, gambar, video, dan desain grafis</li>
                      <li>Logo, merek dagang, dan nama perusahaan</li>
                      <li>Software dan kode pemrograman</li>
                      <li>Database dan informasi produk</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Merupakan milik CV VELA KARYATAMA MANDIRI atau dilindungi oleh hak cipta pihak ketiga. 
                      Anda tidak diperbolehkan menyalin, mendistribusikan, atau menggunakan konten kami tanpa izin tertulis.
                    </p>
                  </div>
                </div>

                {/* Pembatasan Tanggung Jawab */}
                <div id="tanggung-jawab" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-blue-600 mr-3" />
                    9. Pembatasan Tanggung Jawab
                  </h2>
                  <div className="bg-orange-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Sejauh diizinkan oleh hukum, CV VELA KARYATAMA MANDIRI tidak bertanggung jawab atas:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                      <li>Kehilangan data atau keuntungan</li>
                      <li>Gangguan layanan atau kerusakan sistem</li>
                      <li>Konten dari pihak ketiga yang terhubung dengan layanan kami</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Tanggung jawab kami maksimal sebesar jumlah yang Anda bayar untuk layanan yang bermasalah.
                    </p>
                  </div>
                </div>

                {/* Ganti Rugi */}
                <div id="ganti-rugi" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Ganti Rugi</h2>
                  <p className="text-gray-700 mb-4">
                    Anda setuju untuk mengganti rugi CV VELA KARYATAMA MANDIRI dan afiliasinya dari:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Semua klaim, tuntutan, atau kerugian yang timbul dari penggunaan layanan Anda</li>
                    <li>Pelanggaran syarat dan ketentuan ini</li>
                    <li>Pelanggaran hak-hak pihak ketiga</li>
                    <li> Aktivitas ilegal atau tidak sah yang Anda lakukan</li>
                  </ul>
                </div>

                {/* Pemutusan Hubungan */}
                <div id="pemutusan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Pemutusan Hubungan</h2>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Kami berhak untuk menghentikan atau menangguhkan akses Anda ke layanan kami:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Secara sepihak dengan atau tanpa pemberitahuan sebelumnya</li>
                      <li>Jika Anda melanggar syarat dan ketentuan ini</li>
                      <li>Jika diperlukan untuk keamanan atau kepatuhan hukum</li>
                      <li>Jika layanan tidak lagi tersedia atau layak</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Setelah pemutusan, hak Anda untuk menggunakan layanan akan berakhir segera.
                    </p>
                  </div>
                </div>

                {/* Perubahan Syarat */}
                <div id="perubahan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Perubahan Syarat dan Ketentuan</h2>
                  <p className="text-gray-700 mb-4">
                    Kami berhak untuk mengubah syarat dan ketentuan ini dari waktu ke waktu. Perubahan akan:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Diinformasikan melalui website atau email</li>
                    <li>Berlaku efektif setelah pemberitahuan</li>
                    <li>Dianggap disetujui dengan penggunaan lanjutan layanan</li>
                  </ul>
                  <div className="bg-blue-100 rounded-lg p-4 mt-4">
                    <p className="text-gray-700">
                      <strong>Rekomendasi:</strong> Periksa syarat dan ketentuan ini secara berkala untuk mengetahui perubahan.
                    </p>
                  </div>
                </div>

                {/* Hukum yang Berlaku */}
                <div id="hukum" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Scale className="w-6 h-6 text-blue-600 mr-3" />
                    13. Hukum yang Berlaku dan Yurisdiksi
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Syarat dan ketentuan ini diatur oleh:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Hukum Republik Indonesia</li>
                      <li>Peraturan perundang-undangan yang berlaku di Indonesia</li>
                      <li>Prinsip-prinsip hukum internasional yang diakui</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Sengketa yang timbul dari syarat dan ketentuan ini akan diselesaikan melalui:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Negosiasi damai terlebih dahulu</li>
                      <li>Mediasi atau arbitrase jika perlu</li>
                      <li>Pengadilan yang berwenang di Banjarmasin, Kalimantan Selatan</li>
                    </ul>
                  </div>
                </div>

                {/* Kontak */}
                <div id="kontak-syarat" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Kontak dan Informasi</h2>
                  <p className="text-gray-700 mb-4">
                    Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
                  </p>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">CV VELA KARYATAMA MANDIRI</h4>
                        <p className="text-gray-700">
                          JL. 9 OKTOBER KOMP. NUSA INDAH GG.IV RT.017 RW.002<br />
                          Desa/Kelurahan Pekauman, Kec. Banjarmasin Selatan<br />
                          Kota Banjarmasin, Provinsi Kalimantan Selatan<br />
                          Kode Pos: 70243
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Informasi Kontak</h4>
                        <p className="text-gray-700">
                          <strong>Telepon:</strong> 0822-3305-9428<br />
                          <strong>Email:</strong> legal@velakaryatama.co.id<br />
                          <strong>Website:</strong> www.velakaryatama.co.id
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pernyataan Akhir */}
                <div className="bg-blue-600 text-white rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Terima Kasih</h3>
                  <p className="text-blue-100">
                    Terima kasih telah mempercayai CV VELA KARYATAMA MANDIRI sebagai mitra perdagangan eceran Anda. 
                    Kami berkomitmen untuk menyediakan layanan terbaik dan membangun hubungan bisnis yang saling menguntungkan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back to Top */}
          <div className="text-center mt-8">
            <Button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Kembali ke Atas
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">VKM</span>
            </div>
            <span className="font-semibold">CV VELA KARYATAMA MANDIRI</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Syarat & Ketentuan - Dasar Hubungan Bisnis yang Profesional
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Beranda</Link>
            <span className="text-gray-600">•</span>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</Link>
            <span className="text-gray-600">•</span>
            <Link href="#kontak-syarat" className="text-gray-400 hover:text-white transition-colors">Kontak</Link>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            &copy; 2024 CV VELA KARYATAMA MANDIRI. Hak Cipta Dilindungi.
          </p>
        </div>
      </footer>
    </div>
  )
}