import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import Product from "../components/Product"
import db from "../fireStoreConfig.js"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router"
import { async } from "@firebase/util"

export default function ContainProduct() {

  const [products, setProducts] = useState([])
  const { modelo } = useParams()

  // nombre Coleccion: Comidas
  // const [comidas, setComidas] = useState([])
  useEffect(() => {
    console.log("Modelo recibido por useParams:", modelo)
    const getCalzados = async () => {
      try {
        const calzadosRef = collection(db, 'billetera');
        const snapshot = await getDocs(calzadosRef);
        let aux = [];
        snapshot.forEach(doc => {
          aux.push({ id: doc.id, ...doc.data() });
        });
        console.log(aux)
        console.log("3", aux)
        setProducts(aux)

      } catch (error) {
        console.log(error)
      }
    }


    
      const getCalzadosByCategory = async () => {
        try {
          const q = query(collection(db, "billetera"), where("modelo", "==", modelo));
          const querySnapshot = await getDocs(q);
          let aux = [];
          querySnapshot.forEach((doc) => {
            aux.push({ id: doc.id, ...doc.data() });
          });
          setProducts(aux);
        } catch (error) {
          console.log("Error al filtrar por modelo:", error);
        }
      };
    if (modelo) {
getCalzadosByCategory()
    } else {
      getCalzados()
    }

  }, [modelo])

  return <Grid
    container
    direction="row"
    spacing={3}
    sx={{
      mt: "2rem",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {
      products.map(({ id, img, categoria, descripcion, marca, modelo, precio, stock }) => <Product
        key={id}
        img={img}
        id={id}
        categoria={categoria}
        descripcion={descripcion}
        marca={marca}
        modelo={modelo}
        precio={precio}
        stock={stock}
      />)

    }
  </Grid>
}
