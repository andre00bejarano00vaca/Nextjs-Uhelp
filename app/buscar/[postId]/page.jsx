import React, { Suspense } from "react";
import Comentario from "@/components/comentarios/SetComentario";

async function obtenerUsuarioPorId(userId) {
  try {
    const res = await fetch(`https://localhost:8080/api/docentes`);
    const datas = await res.json();
    const filtros = datas.filter(function (dato) {
      return dato.id == userId;
    });
    return filtros;
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    return null;
  }
}

const postPage = async ({ params }) => {
  const nombreDocente = await obtenerUsuarioPorId(params.postId);

  return (
    <div className="h-screen">
      <h2 className="text-2xl p-5 text-white">{nombreDocente[0].nombre}</h2>
      <Comentario id={nombreDocente[0].id} />
    </div>
  );
};

export default postPage;
