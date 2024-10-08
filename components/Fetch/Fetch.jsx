import BuscarPage from '@/app/buscar/page'
import React from 'react'

const Fetch = async () => {
  const res = await fetch(`http://localhost:8080/api/docentes`);
  const datas = await res.json();
  return (
    <BuscarPage props={datas}/>
  )
}

export default Fetch;