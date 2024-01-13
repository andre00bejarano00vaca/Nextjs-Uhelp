import Hola from '@/componestes/hola'
import Navbar from '@/componestes/Navbar'
import './globals.css'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        <Hola/>
        {children}
      </body>
    </html>
  )
}
