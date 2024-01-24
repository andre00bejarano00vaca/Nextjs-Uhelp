import React from 'react'
import Link from 'next/link'
import "./navstyles.css"
const Navbar = () => {
  return (
    <nav className="navbar">
          <Link href="/">
          <h1 className="text-3xl font-bold text-red-500">Uhelp</h1>
          </Link>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/mejordocente">Mejores docentes</Link></li>
            <li><Link href="/donaciones">Donaciones a la pagina</Link></li>
          </ul>
        </nav>
  )
}

export default Navbar