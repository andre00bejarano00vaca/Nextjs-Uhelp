"use client"
import React from 'react'
import { useState,useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/firebase';
import Registrado from './Registrado';
import NoRegistrado from './NoRegistrado';

const PaginasFiltro = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, usuarioFirebase => {
        if(usuarioFirebase){console.log(usuarioFirebase);
          setUser(usuarioFirebase);}else{
            setUser(null)
          }
          
      });

      return () => {
          unsubscribe(); // Desuscribirse cuando el componente se desmonte
      };
  }, []); // Vacío como segundo argumento para que se ejecute solo una vez al montar el componente

  return (
    user ? <Registrado/>:<NoRegistrado/>
  )
}

export default PaginasFiltro