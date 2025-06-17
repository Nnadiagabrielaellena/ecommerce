import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import {doc, getDoc} from 'firebase/firestore'
import Swal from 'sweetalert2'
import { useState } from 'react'
import db from '../fireStoreConfig'







function DetailProduct() {
  const {idProduct}= useParams()
  const [product, setProduct]= useState({})

  useEffect(()=>{
    async function obtenerProducto(){
      try {
        const documentoRef= doc(db,"billetera",idProduct)
        const docSnap = await getDoc(documentoRef)

        if(docSnap.exists()){
         setProduct(docSnap.data())
        }else{
          await Swal.fire({
          title :"no existe el producto",
          icon:"error",
          timer:3000,
          showCancelButton:false,
          showConfirmButton:false
         })
        }


      } catch (error) {
        console.log(error)
      }
    }
    obtenerProducto()
  },[])
  


  return (
    <>
    <div sx={{ backgroundColor:"#E6F0E6",color:"#2E5939"}}>
    <h1 sx={{display:"flex",
  
  
  }}>{product.descripcion}</h1>  
     <h2>STOCK DISPONIBLES :{product.stock}</h2> 
     </div>
    </>
  )
}

export default DetailProduct
