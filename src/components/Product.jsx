import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { CartContext } from '../contex/CartContext';

export default function Product({ id, img, categoria, descripcion, marca, modelo, precio, stock, color }) {
  
  const navigate = useNavigate()
  const cartContex = useContext(CartContext)

  return (
    <Grid>
      <Card sx={{
        maxWidth: 345,
        backgroundColor: "#9F6F1",
        borderRadius: "12px",
        boxShadow: "0 4px  10px rgba(0,0,0,0.05"
      }}>
        <CardMedia
          component="img"
          alt={`${marca} ${modelo}`}
          height="400"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ${precio} - {modelo}
          </Typography>
          <Typography variant="body2" sx={{ color: "#555" }}>
            
          </Typography>
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
          <Button
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
</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
