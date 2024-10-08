import BuscarPage from '@/app/buscar/page'
import React from 'react'

const Fetch = async () => {
  const res = await fetch(`https://uhelp-api-springboot-production.up.railway.app/api/docentes`);
  const datas = await res.json();
  return (
    <BuscarPage props={datas}/>
  )
}

export default Fetch;