'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
                <p className="text-xs text-gray-600">Kebijakan Privasi</p>
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
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi <span className="text-blue-600">CV VELA KARYATAMA MANDIRI</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
              Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            {[
              { id: 'pengumpulan', icon: Database, title: 'Pengumpulan Data', desc: 'Bagaimana kami mengumpulkan informasi Anda' },
              { id: 'penggunaan', icon: Eye, title: 'Penggunaan Data', desc: 'Tujuan penggunaan data pribadi' },
              { id: 'perlindungan', icon: Lock, title: 'Perlindungan Data', desc: 'Langkah keamanan yang kami terapkan' }
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
                
                {/* Pengumpulan Data */}
                <div id="pengumpulan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Database className="w-6 h-6 text-blue-600 mr-3" />
                    1. Pengumpulan Data Pribadi
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      CV VELA KARYATAMA MANDIRI mengumpulkan data pribadi Anda untuk menyediakan layanan perdagangan eceran yang lebih baik. 
                      Data yang kami kumpulkan meliputi:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Nama lengkap dan informasi identitas</li>
                      <li>Nomor telepon dan alamat email</li>
                      <li>Alamat pengiriman dan penagihan</li>
                      <li>Informasi transaksi dan pembelian</li>
                      <li>Preferensi produk dan layanan</li>
                      <li>Data penggunaan website dan aplikasi</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Metode Pengumpulan</h3>
                  <p className="text-gray-700 mb-4">
                    Kami mengumpulkan data melalui berbagai metode:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Formulir pendaftaran dan kontak</li>
                    <li>Transaksi pembelian produk</li>
                    <li>Komunikasi dengan layanan pelanggan</li>
                    <li>Penggunaan website dan layanan online</li>
                    <li>Cookies dan teknologi pelacakan</li>
                  </ul>
                </div>

                {/* Penggunaan Data */}
                <div id="penggunaan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Eye className="w-6 h-6 text-blue-600 mr-3" />
                    2. Penggunaan Data Pribadi
                  </h2>
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Data pribadi Anda kami gunakan untuk tujuan-tujuan berikut:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Memproses dan menyelesaikan transaksi pembelian</li>
                      <li>Menyediakan layanan pelanggan yang responsif</li>
                      <li>Mengirimkan informasi produk dan promosi</li>
                      <li>Meningkatkan kualitas produk dan layanan</li>
                      <li>Melakukan analisis pasar dan penelitian</li>
                      <li>Memenuhi kewajiban hukum dan peraturan</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Basis Hukum Penggunaan</h3>
                  <p className="text-gray-700 mb-4">
                    Penggunaan data pribadi Anda didasarkan pada:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Persetujuan yang Anda berikan secara eksplisit</li>
                    <li>Keperluan kontrak untuk menyediakan layanan</li>
                    <li>Kewajiban hukum yang harus kami penuhi</li>
                    <li>Kepentingan sah yang sah dan wajar</li>
                  </ul>
                </div>

                {/* Perlindungan Data */}
                <div id="perlindungan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Lock className="w-6 h-6 text-blue-600 mr-3" />
                    3. Perlindungan dan Keamanan Data
                  </h2>
                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Kami menerapkan berbagai langkah keamanan untuk melindungi data pribadi Anda:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Enkripsi data selama transmisi dan penyimpanan</li>
                      <li>Akses terbatas ke data pribadi</li>
                      <li>System monitoring dan deteksi intrusi</li>
                      <li>Backup data secara berkala</li>
                      <li>Pelatihan staf tentang keamanan data</li>
                      <li>Audit keamanan secara berkala</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Retensi Data</h3>
                  <p className="text-gray-700 mb-4">
                    Kami menyimpan data pribadi Anda selama diperlukan untuk:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Memenuhi tujuan pengumpulan data</li>
                    <li>Memenuhi persyaratan hukum dan peraturan</li>
                    <li>Menyelesaikan sengketa dan menegakkan hak</li>
                  </ul>
                </div>

                {/* Hak Pengguna */}
                <div id="hak-pengguna" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
                    4. Hak Anda sebagai Pengguna
                  </h2>
                  <div className="bg-purple-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Sebagai pemilik data pribadi, Anda memiliki hak untuk:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Mengakses data pribadi yang kami simpan</li>
                      <li>Memperbaiki data yang tidak akurat</li>
                      <li>Menghapus data pribadi Anda</li>
                      <li>Membatasi pemrosesan data Anda</li>
                      <li>Memindahkan data ke layanan lain</li>
                      <li>Menarik persetujuan yang telah diberikan</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cara Melaksanakan Hak Anda</h3>
                  <p className="text-gray-700 mb-4">
                    Untuk melaksanakan hak Anda, silakan hubungi kami melalui:
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>Email:</strong> privacy@velakaryatama.co.id<br />
                      <strong>Telepon:</strong> 0822-3305-9428<br />
                      <strong>Alamat:</strong> JL. 9 OKTOBER KOMP. NUSA INDAH GG.IV RT.017 RW.002, Pekauman, Banjarmasin Selatan
                    </p>
                  </div>
                </div>

                {/* Cookies */}
                <div id="cookies" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-6 h-6 text-blue-600 mr-3" />
                    5. Kebijakan Cookies
                  </h2>
                  <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Website kami menggunakan cookies untuk:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Mengingat preferensi pengguna</li>
                      <li>Menganalisis traffic website</li>
                      <li>Mempersonalisasi pengalaman pengguna</li>
                      <li>Menyediakan fitur keamanan</li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Pengelolaan Cookies</h3>
                  <p className="text-gray-700">
                    Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda. 
                    Namun, menonaktifkan cookies dapat mempengaruhi fungsionalitas website.
                  </p>
                </div>

                {/* Pihak Ketiga */}
                <div id="pihak-ketiga" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Berbagi Data dengan Pihak Ketiga</h2>
                  <p className="text-gray-700 mb-4">
                    Kami hanya akan berbagi data pribadi Anda dengan:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Penyedia layanan pembayaran</li>
                    <li>Jasa pengiriman dan logistik</li>
                    <li>Partner bisnis terpercaya</li>
                    <li>Otoritas hukum jika diperlukan</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Kami memastikan semua pihak ketiga memiliki komitmen keamanan data yang sama dengan kami.
                  </p>
                </div>

                {/* Perubahan Kebijakan */}
                <div id="perubahan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Perubahan Kebijakan Privasi</h2>
                  <p className="text-gray-700 mb-4">
                    Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                    Perubahan akan diumumkan melalui website atau email.
                  </p>
                  <div className="bg-blue-100 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>Rekomendasi:</strong> Silakan periksa kebijakan ini secara berkala untuk mengetahui perubahan terbaru.
                    </p>
                  </div>
                </div>

                {/* Kontak */}
                <div id="kontak-privasi" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Kontak Privasi</h2>
                  <p className="text-gray-700 mb-4">
                    Jika Anda memiliki pertanyaan tentang kebijakan privasi kami, silakan hubungi:
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
                          <strong>Email:</strong> privacy@velakaryatama.co.id<br />
                          <strong>Website:</strong> www.velakaryatama.co.id
                        </p>
                      </div>
                    </div>
                  </div>
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
            Kebijakan Privasi - Melindungi Data Anda adalah Prioritas Kami
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Beranda</Link>
            <span className="text-gray-600">•</span>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Syarat & Ketentuan</Link>
            <span className="text-gray-600">•</span>
            <Link href="#kontak-privasi" className="text-gray-400 hover:text-white transition-colors">Kontak</Link>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            &copy; 2024 CV VELA KARYATAMA MANDIRI. Hak Cipta Dilindungi.
          </p>
        </div>
      </footer>
    </div>
  )
}