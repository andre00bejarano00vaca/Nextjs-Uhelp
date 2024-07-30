"use client";
import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import Link from "next/link";
const BuscarPage = () => {
  const [docentes, setDocentes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const obtenerDocentes = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Docentes"));
      const docentesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDocentes(docentesData);
    } catch (error) {
      console.log("Error al obtener los datos: ", error);
    }
  };
  useEffect(() => {
    obtenerDocentes();
  }, []);

  const filteredDocente = docentes.filter((docente) =>
    docente.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="text-center  border-white  h-1/2 w-3/4 rounded-md ">
      <input
        autoFocus
        className=" w-full bg-black border-white border-4 text-center"
        id="buscadorDeNombres"
        name="search"
        type="text"
        placeholder="Buscar Docente"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="text-center border-4 border-white overflow-auto h-full w-full rounded-md ">
        {searchTerm && (
          <ul>
            {filteredDocente.map((doc, index) => (
              <li
                className="bg-slate-400 mb-2 p-4 rounded-md font-bold"
                key={index}
              >
                <Link href={`/buscar/${doc.id}`}>
                  <h5>{doc.nombre}</h5>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BuscarPage;
