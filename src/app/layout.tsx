import React from 'react'

import { Poppins } from 'next/font/google'

import { Header } from '../components/Header'

import { NextAuthProvider } from '@/providers/auth'

import { Footer } from '@/components/Footer'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Amaral Trips',
  description: 'Sistema de Reserva de Viagens TOP!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
