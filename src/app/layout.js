import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BlogVista',
  description: 'App where you can share knowledge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app">
          <Nav />
          {children}
        </div>

      </body>
    </html >
  )
}
