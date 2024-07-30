"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/app/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"; // Agrega onSnapshot

const GetComentarios = ({ id }) => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, `Docentes/${id}/comentarios`),
      orderBy("timesnap", "asc")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let comentariosArr = [];
      querySnapshot.forEach((doc) => {
        comentariosArr.push({ ...doc.data(), id: doc.id });
      });
      setComentarios(comentariosArr.reverse());
    });

    return () => unsubscribe();
  }, [id]); // Agrega 'id' como dependencia para que se actualice cuando cambie

  return (
    <ul>
      {comentarios.map((comentario, index) => (
        <li key={index}>{comentario.comentario}</li>
      ))}
    </ul>
  );
};

export default GetComentarios;
