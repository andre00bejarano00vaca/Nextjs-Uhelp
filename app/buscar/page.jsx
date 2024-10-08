"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ScrollShadow,Input } from "@nextui-org/react";

const BuscarPage = ({props}) => {
  const [docentes, setDocentes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

   const obtenerDocentes = async () => {
    try {
      const formattedData = props.map((prop) => ({
        id: prop.id,
        ...prop,
      }));
      setDocentes(formattedData);
    } catch (error) {
      console.log("Error al obtener los datos: ", error);
    }
  };

  useEffect(() => {
    obtenerDocentes();
  }, []);
  //--------NEXTUI INPUT
  const [value, setValue] = React.useState("junior2nextui.org");

  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);
  //-----NEXTUI INPUT
  
  // FILTRO PARA LA BUSQUEDA
  const filteredDocente = docentes.filter((docente) =>
    docente.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="text-center  border-white  h-1/2 w-3/4">
       <Input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      type="text"
      label="Busca al docente"
      variant="bordered"
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "warning"}
      errorMessage="apellido paterno, materno y nombre"
      onValueChange={setValue}
      className="w-full"
      />
      <ScrollShadow className=" h-[400px]">
        {searchTerm && (
          <ul>
            {filteredDocente.map((doc, index) => (
              <li
                className="backdrop-blur-sm bg-zinc-800	 text-orange-400 mb-2 p-4 rounded-md font-bold"
                key={index}
              >
                <Link href={`/buscar/${doc.id}`}>
                  <h5>{doc.nombre}</h5>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </ScrollShadow>
    </div>
  );
};

export default BuscarPage;
