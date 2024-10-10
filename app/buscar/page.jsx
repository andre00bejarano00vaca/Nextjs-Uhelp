"use client";
import React, { useState, useEffect } from "react";
import { Input, Button } from "@nextui-org/react";
import DocentesCard from "@/components/DocenteCard";
import { SkeletonComp } from "@/components/comentarios/SkeletonComp";
const FetchoFront = async() =>{
  const res = await fetch(`https://localhost:8080/api/docentes`);
  const datas = await res.json();
  return datas;
}
const BuscarPage = () => {
  const [docentes, setDocentes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [itemsPerPage] = useState(5); // Número de elementos por página

  const obtenerDocentes = async () => {
    try {
      const docentesFetchData = await FetchoFront(); // Llamas a FetchoFront aquí para obtener los datos
      const docentesData = docentesFetchData.map((prop) => ({
        id: prop.id,
        ...prop,
      }));
      setDocentes(docentesData);
      setLoading(false); // Cambiamos el estado de carga a false después de obtener los datos
    } catch (error) {
      console.log("Error al obtener los datos: ", error);
      setLoading(false); // Incluso si hay error, detener el estado de carga
    }
  };

  useEffect(() => {
    obtenerDocentes();
  }, []);

  // FILTRO PARA LA BUSQUEDA
  const filteredDocente = docentes.filter((docente) =>
    docente.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Si no hay searchTerm, mostramos la lista completa
  const docentesParaMostrar = searchTerm ? filteredDocente : docentes;

  // Calcular el índice de los docentes que se mostrarán en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = docentesParaMostrar.slice(indexOfFirstItem, indexOfLastItem);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(docentesParaMostrar.length / itemsPerPage);

  // Cambiar de página
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex text-center flex-col justify-between h-full ">
      <div>

      {/* Input para búsqueda */}
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado searchTerm
        type="text"
        label="Busca al docente"
        variant="bordered"
        color="warning"
        errorMessage="Apellido paterno, materno o nombre"
      />

      {/* Renderiza los docentes (filtrados o completos) */}
      <div className="flex flex-wrap gap-4 justify-center p-4 w-full">
        {loading ? (
          <SkeletonComp />
        ) : currentItems.length > 0 ? (
          currentItems.map((doc, index) => (
            <DocentesCard key={index} docente={doc} />
          ))
        ) : (
          <p>No se encontraron docentes.</p>
        )}
      </div>
      </div>

      {/* Paginación */}
      <div className="flex justify-center gap-2 mb-12 ">
        <Button
          disabled={currentPage === 1}
          onPress={prevPage}
          auto
          flat
        >
          Anterior
        </Button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <Button
          disabled={currentPage === totalPages}
          onPress={nextPage}
          auto
          flat
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default BuscarPage;
