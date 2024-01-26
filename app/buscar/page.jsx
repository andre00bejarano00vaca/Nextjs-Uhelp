'use client'
import React,{useState,useEffect} from 'react'
import { collection, addDoc, query, onSnapshot, QuerySnapshot, getDocs } from "firebase/firestore"; 
import { db } from '../firebase';
const BuscarPage = () => {
  const [docentes, setDocentes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const obtenerDocentes = async ()=>{
    try{
      const querySnapshot= await getDocs(collection(db,"Docentes"));
      const docentesData = querySnapshot.docs.map(doc=>({id:doc.id, ...doc.data()}))
      setDocentes(docentesData)
    }catch(error){
      console.log("Error al obtener los datos: ",error)
    }
  };
  useEffect(()=>{
    obtenerDocentes();
  },[]);
  
  const filteredDocente =  docentes.filter((docente) => docente.id.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div>
        <form >
        <input 
        className="text-black"
        type="text"
        placeholder='Buscar Docente'
        value={searchTerm}
        onChange={e=>setSearchTerm(e.target.value)}/>
        </form> 
        {searchTerm && (
  <ul>
    {filteredDocente.map((doc, index) => (
      <li className='bg-slate-400 mb-2 p-4 rounded-md font-bold' key={index}><h5>{doc.id}</h5></li>
    ))}
  </ul>
)}
        </div>
  )
}

export default BuscarPage