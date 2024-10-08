"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

// Supongamos que este es el array de objetos que tienes.
const Auxiliares = [
  { nombre: "Juan Perez", materia: "INF119", zona: "Santa Cruz de la sierra" },
  { nombre: "Maria Lopez", materia: "MAT205", zona: "Santa Cruz de la sierra" },
  {
    nombre: "Carlos Gutierrez",
    materia: "FIS312",
    zona: "Santa Cruz de la sierra",
  },
  { nombre: "Ana Vargas", materia: "QUI118", zona: "Santa Cruz de la sierra" },
  {
    nombre: "Pedro Martinez",
    materia: "BIO223",
    zona: "Santa Cruz de la sierra",
  },
  {
    nombre: "Sofia Ramirez",
    materia: "CSO314",
    zona: "Santa Cruz de la sierra",
  },
  { nombre: "Luis Ortega", materia: "ENG150", zona: "Santa Cruz de la sierra" },
  {
    nombre: "Isabel Rojas",
    materia: "HIS205",
    zona: "Santa Cruz de la sierra",
  },
  {
    nombre: "David Flores",
    materia: "GEO119",
    zona: "Santa Cruz de la sierra",
  },
  {
    nombre: "Camila Suarez",
    materia: "ART318",
    zona: "Santa Cruz de la sierra",
  },
  {
    nombre: "Javier Morales",
    materia: "SOC411",
    zona: "Santa Cruz de la sierra",
  },
  {
    nombre: "Marta Espinoza",
    materia: "PSI227",
    zona: "Santa Cruz de la sierra",
  },
  {
    nombre: "Ricardo Fernandez",
    materia: "MUS109",
    zona: "Santa Cruz de la sierra",
  },
  {
    nombre: "Daniela Villalobos",
    materia: "BIO324",
    zona: "Santa Cruz de la sierra",
  },
  {
    nombre: "Sergio Castillo",
    materia: "INF215",
    zona: "Santa Cruz de la sierra",
  },
  {
    nombre: "Natalia Paredes",
    materia: "FIS301",
    zona: "Santa Cruz de la sierra",
  },
  {
    nombre: "Carlos Rivera",
    materia: "MAT207",
    zona: "Santa Cruz de la sierra",
  },
  {
    nombre: "Luisa Mendoza",
    materia: "QUI221",
    zona: "Santa Cruz de la sierra",
  },
  { nombre: "Andrea Ruiz", materia: "CSO320", zona: "Santa Cruz de la sierra" },
  {
    nombre: "Fernando Soto",
    materia: "ENG315",
    zona: "Santa Cruz de la sierra",
  },
];

const Auxiliatura = () => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <div>
      <p className="p-5">
        si estas interesado en registrarte como axiliar particular contactate
        con{" "}
        <Link isExternal showAnchorIcon>
          {" "}
          WhatsApp
        </Link>
      </p>
      <div className="flex flex-wrap gap-4 justify-center p-4 w-full">
        {Auxiliares.map(({ id, nombre, materia, zona, whatsapp }) => (
          <div key={id}>
            <Card className="max-w-[400px] w-[399px] dark">
              <CardHeader className="flex z-0 gap-3">
                <div className="flex flex-col">
                  <p className="text-md">{nombre}</p>
                  <p className="text-small text-default-500">
                    Materia: {materia}
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>zona: {zona}</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link isExternal showAnchorIcon href={whatsapp}>
                  WhatsApp
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auxiliatura;
