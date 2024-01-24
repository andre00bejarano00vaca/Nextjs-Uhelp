'use client'
import React,{useState,useEffect} from 'react'
import { collection, addDoc, query, onSnapshot, QuerySnapshot, getDocs } from "firebase/firestore"; 
import { db } from '../firebase';
const BuscarPage = () => {
  const [docentes, setDocentes] = useState([]);
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
    
  return (
    <div>
        <form >
        <input type="text" />
        <button type='submit'>enviar</button>
        </form> 
        {docentes.map((doc,index)=>(
          <ul key={index}>
            <li>{doc.id}</li>
          </ul>
    ))}
        </div>
  )
}

export default BuscarPage