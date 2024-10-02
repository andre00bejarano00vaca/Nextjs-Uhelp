"use client"
import React, { useState, useEffect } from "react";

async function fetchComentarios(id) {
  const res = await fetch(`https://uhelp-api-springboot-production.up.railway.app/mensajes/docente/${id}`);
  const datas = await res.json();
  return datas;
}

const GetComentarios = ({ id }) => {
  const [comentarioData, setComentarioData] = useState([]);

  useEffect(() => {
    // Llamamos a fetchComentarios cuando el componente se monta o cambia el id
    const obtenerComentarios = async () => {
      const datos = await fetchComentarios(id);
      setComentarioData(datos);
    };

    obtenerComentarios();
  }, [id]);
  //data, index   key index data.texto flex flex-col-reverse
  return (
    <div className="flex flex-col-reverse">   
    {comentarioData.map((data,index) => (
      <div key={index}>
            <p className="backdrop-blur-sm bg-zinc-800	 text-orange-400 mb-2 p-4 rounded-md font-bold break-words">{data.texto}</p>
          </div>
        ))}
        </div>

  );
};

export default GetComentarios;
