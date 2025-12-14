import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validasi input
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      )
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      )
    }

    // Simulasi pengiriman email atau penyimpanan ke database
    // Dalam implementasi nyata, Anda bisa:
    // 1. Mengirim email menggunakan service seperti Nodemailer
    // 2. Menyimpan ke database menggunakan Prisma
    // 3. Mengirim ke sistem CRM
    
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString()
    })

    // Response sukses
    return NextResponse.json(
      { 
        success: true, 
        message: 'Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.',
        data: {
          name,
          email,
          phone,
          submittedAt: new Date().toISOString()
        }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server. Silakan coba lagi.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { 
      message: 'Contact API endpoint untuk CV VELA KARYATAMA MANDIRI',
      methods: ['POST'],
      description: 'API untuk mengirimkan form kontak'
    },
    { status: 200 }
  )
}