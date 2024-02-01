import React from 'react'
import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../../firebase';

async function obtenerUsuarioPorId(userId) {
  try {
    const userDoc = await getDoc(doc(db, "Docentes", userId));

    if (userDoc.exists()) {
      console.log(`${userDoc.id} => ${userDoc.data().nombre}`);
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
 
 const postPage =async ({params}) => {
  const nombreDocente=await obtenerUsuarioPorId(params.postId);
  
  return (
    <div><h2 className='text-2xl'>{nombreDocente.nombre}</h2></div>
  )
}

export default postPage