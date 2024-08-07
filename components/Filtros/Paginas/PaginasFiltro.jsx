"use client";
import React from "react";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebase";
import Registrado from "./Registrado";

const PaginasFiltro = () => {
  const [user, setUser] = useState(null);
  const [loading, setLogading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,async (usuarioFirebase) => {
      const usuarioAwait = await usuarioFirebase;
      if (usuarioFirebase) {
        console.log(usuarioFirebase);
        setUser(usuarioFirebase);
        setLogading(false);
      } else {
        setUser(null);
        setLogading(false);
      }
    });

    return () => {
      unsubscribe(); // Desuscribirse cuando el componente se desmonte
    };
  }, []); // Vacío como segundo argumento para que se ejecute solo una vez al montar el componente
  return(
    <Registrado/>
  )
};

export default PaginasFiltro;
