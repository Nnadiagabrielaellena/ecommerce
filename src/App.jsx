
import ContainProduct from "./views/ContainProduct"
import Footer from "./components/Footer"
import Header from "./components/Header"


import { BrowserRouter, Routes, Route } from "react-router"
import { ThemeProvider, createTheme } from "@mui/material/styles" // ✅ Correcto

import DetailProduct from "./views/DetailProduct"
import Cart from "./views/Cart"

function App() {

  const theme = createTheme({})
  return (
    <>
    <ThemeProvider theme={theme} >
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/productos/:modelo" element={<ContainProduct />} />

        <Route path="" element={<ContainProduct />} />
        <Route path="/detail/:idProduct" element={<DetailProduct />} />
      <Route path="/cart"  element={<Cart/>}/>
      
      
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App