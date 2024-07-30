import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Comentario from "@/components/comentarios/SetComentario";
import GetComentarios from "@/components/comentarios/GetComentarios";

async function obtenerUsuarioPorId(userId) {
  try {
    const userDoc = await getDoc(doc(db, "Docentes", userId));

    if (userDoc.exists()) {
      return userDoc.data(); // Puedes devolver los datos del usuario si lo necesitas
    } else {
      console.log("No se encontró el usuario con el ID proporcionado.");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    return null;
  }
}

const postPage = async ({ params }) => {
  const nombreDocente = await obtenerUsuarioPorId(params.postId);

  return (
    <div>
      <h2 className="text-2xl p-5">{nombreDocente.nombre}</h2>
      <Comentario id={params.postId} />
      <GetComentarios id={params.postId} />
      
    </div>
  );
};

export default postPage;
