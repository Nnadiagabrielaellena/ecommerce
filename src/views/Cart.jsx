

import {  Grid, TextField } from '@mui/material'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';


import { useContext,  } from 'react';
import { CartContext } from '../contex/CartContext';

import { useNavigate } from 'react-router';



function Cart() {

  const { cart, setCantidadInProduct,eliminarProductInCartXid,  valorTotalInCart, valorTotalProductInCartxId} = useContext(CartContext)

  const navigate = useNavigate()

  function controladorSetcontadorInProduct(id,e, stock){
    if(e.target.value>0 && e.target.value <= stock){
      setCantidadInProduct(id,Number(e.target.value))
    }
    
  }
  return (
    <>
    <Grid
    container
    direction= "row"
    spacing={3}
    sx={{
      mt:"2rem",
      justifyContent:"center",
      alignItems:"center"
    }}
    >
      {
cart.map(productInCart=>
  <Grid key ={productInCart.id}>
  <Card sx={{
    maxWidth: 345,
    backgroundColor: "#9F6F1",
    borderRadius: "12px",
    boxShadow: "0 4px  10px rgba(0,0,0,0.05"
  }}>
    <CardMedia
      component="img"
      alt={`${productInCart.marca} ${productInCart.modelo}`}
      height="400"
      image={productInCart.img}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        ${productInCart.precio} - {productInCart.modelo}
      </Typography>
      <Typography variant="body2" sx={{ color: "#555" }}>
        
      </Typography>
      <TextField type="number" value={productInCart.cantidad||1} onChange={(e)=>controladorSetcontadorInProduct(productInCart.id, e, productInCart.stock)}  label="antidad" variant="outlined" />
    
    </CardContent>
    <CardActions>
      <Button sx={{
        backgroundColor: "#A0522D",
        color: " #fff",
        "&:hover": {
          backgroundColor: "#C47A3E",
        },
        textTransform:"none",
        borderRadius:"6px",
        padding:"6px 12px",
        fontWeight:500,
      }}onClick={() => navigate(`/detail/${productInCart.id}`)} size="small">Ver Detalle</Button>
      <Button sx={{
        backgroundColor: "#A0522D",
        color: " #fff",
        "&:hover": {
          backgroundColor: "#C47A3E",
        },
        textTransform:"none",
        borderRadius:"6px",
        padding:"6px 12px",
        fontWeight:500,
      }} onClick={()=>eliminarProductInCartXid(productInCart.id)} size="small">eliminar</Button>
     <Grid>
     <Typography variant="body2" sx={{ color: "#555" }}>
  Total: ${valorTotalProductInCartxId(productInCart.id)}
</Typography>
    </Grid>
    </CardActions>
  </Card>
</Grid>
  )
      }
    </Grid>
    <Grid sx={{ mt: 4, textAlign: "center" }}>
  <Typography variant="h6">Total del carrito: ${valorTotalInCart()}</Typography>
</Grid>

    </> 
  )
}

export default Cart
