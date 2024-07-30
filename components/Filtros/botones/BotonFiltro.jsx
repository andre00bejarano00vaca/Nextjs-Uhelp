"use client"
import React from 'react';
import { auth } from '@/app/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState,useEffect } from 'react';
import NoLogin from './NoLogin';
const BotonFiltro = () => {
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

    return(<NoLogin/>);
}

export default BotonFiltro