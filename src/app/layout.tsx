import React from 'react'

import { Roboto } from 'next/font/google'

import ToastProvider from '@/providers/toast'

import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'
import { NextAuthProvider } from '@/providers/auth'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '500', '900'],
  style: ['normal', 'italic'],
})

export const metadata = {
  title: 'KX Trips',
  description: 'Sistema de Reserva de Viagens TOP!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="flex flex-col h-full">
          <NextAuthProvider>
            <ToastProvider>
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </ToastProvider>
          </NextAuthProvider>
        </div>
      </body>
    </html>
  )
}
