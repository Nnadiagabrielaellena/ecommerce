

import { Grid, TextField } from '@mui/material'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';


import { useContext } from 'react';
import { CartContext } from '../contex/CartContext';



function Cart() {

  const { cart, setCantidadInProduct} = useContext(CartContext)
  return (
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
      <TextField type="number" onChange={(e)=>setCantidadInProduct(productInCart.id,Number(e.target.value))} defaultValue={productInCart.cantidad} label="cantidad" variante="Outlined" />
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
      }} onClick={() => navigate(`/detail/${id}`)} size="small">Ver Detalle</Button>
     {/* <Button
sx={{
backgroundColor: "#A0522D",
color: "#fff",
"&:hover": {
  backgroundColor: "#C47A3E",
},
textTransform: "none",
borderRadius: "6px",
padding: "6px 12px",
fontWeight: 500,
}}
size="small"
onClick={() =>
cartContex.addToCard(
  { id, img, categoria, descripcion, marca, modelo, precio, stock, color },
  1
)
}
>
Agregar al carrito
</Button>*/}

    </CardActions>
  </Card>
</Grid>
  )
      }
    </Grid>
  )
}

export default Cart
