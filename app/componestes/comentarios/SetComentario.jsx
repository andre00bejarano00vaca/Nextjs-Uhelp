"use client";
import { useState } from "react";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/app/firebase";
import getDateTime from "@/app/function/GetDate";

const Comentarios = ({ id }) => {
  const [comentario, setComentario] = useState("");
  const handleChange = (e) => {
    setComentario(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comentario !== "") {
      try {
        var comentarioId = getDateTime();
        const docRef = await setDoc(
          doc(collection(db, `Docentes/${id}/comentarios`)),
          {
            comentario: comentario,
            timesnap: serverTimestamp(),
          }
        );
        // puedes hacer otras acciones después de agregar el documento
      } catch (error) {
        console.error("Error al agregar el comentario:", error);
      }
      setComentario("");
    } else {
      alert("No escribio nada para ser enviado");
    }
  };

  return (
    <form id="enviarComentario" name="cajaComentario" onSubmit={handleSubmit}>
      <input
        id="inputComentario"
        name="cajaComentario"
        type="text"
        value={comentario}
        onChange={handleChange}
        className="text-black"
      />
      <button type="submit">Send</button>
      <p>{id}</p>
    </form>
  );
};

export default Comentarios;
