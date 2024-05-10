import React from 'react'
import Link from 'next/link'
import "./navstyles.css"
import BotonFiltro from './Filtros/botones/BotonFiltro'
const Navbar = () => {
  return (
    <nav className="navbar">
          <Link href="/">
          <h1 className="text-3xl font-bold text-red-500">Uhelp</h1>
          </Link>
          <ul>
            <li ><Link href="/">Home</Link></li>
            <li><Link href="/auxiliatura">Auxiliaturas</Link></li>
            <li><Link href="/Documentacion">Documentación</Link></li>
            <li><Link href="/donaciones">???</Link></li>
          </ul>
          <div>
            <BotonFiltro/>
          </div>
        </nav>
  )
}

export default Navbar