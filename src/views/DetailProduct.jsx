import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import {doc, getDoc} from 'firebase/firestore'
import Swal from 'sweetalert2'
import { useState } from 'react'
import db from '../fireStoreConfig'

import { Box, Card, CardContent, Typography, Chip, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";








function DetailProduct() {
  const {idProduct}= useParams()
  const [product, setProduct]= useState({})
  const [cantidadCarrito, setCantidadCarrito]=useState(1)

  useEffect(()=>{ zzz
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
      <Box sx={{ maxWidth: 700, mx: "auto", my: 4, px: 2 }}>
        <Card elevation={4} sx={{ backgroundColor: "#F9F9F9" }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
              {product?.titulo || "Cartera con Estilo Urbano"}
            </Typography>
  
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Elegancia que te acompaña todos los días 🖤👜
            </Typography>
  
            {/* Descripción dividida por puntos */}
            <Stack spacing={1} sx={{ mb: 2 }}>
              {product?.descripcion?.split("✓").filter(Boolean).map((item, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "start" }}>
                  <CheckIcon sx={{ color: "#2E7D32", mt: "2px", mr: 1 }} />
                  <Typography variant="body2">{item.trim()}</Typography>
                </Box>
              ))}
            </Stack>
  
           
          </CardContent>
        </Card>
      </Box>
    );
}

export default DetailProduct
