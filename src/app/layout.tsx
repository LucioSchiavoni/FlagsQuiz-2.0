import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flags Quiz',
  description: 'Adivina la bandera',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <body className="bg-home min-h-screen">
        <Providers>
             {children}
       
              <div className='absolute bottom-0 w-full'>
              <Navbar/>
             </div>
        </Providers>

        </body>
    </html>
  )
}
