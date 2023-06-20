import './globals.css'
// import { Inter } from 'next/font/google'
import { Navbar, Footer } from '@/components'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Carma',
  description: 'Find Your Perfect Car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className='relative'>
      <Navbar />
        {children}
        <Footer />
        </body>
      
    </html>
  )
}
