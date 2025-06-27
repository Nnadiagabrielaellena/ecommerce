import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
      const [cart, setCart] = useState([])// {id:54 , cantidad:3}

      function existeProducto(id) {
            const existe = cart.some(elem => elem.id == id)
            return existe

      }

      function addToCard(producto, cantidad) {
            console.log("hola agrego al carrito")

            if (existeProducto(producto.id)) {
                  const newCart = cart.map(productInCart => {
                        if (productInCart.id === producto.id) {
                              return {
                                    ...productInCart,
                                    cantidad: productInCart.cantidad + cantidad
                              }

                        } else {
                              return productInCart
                        }
                  })

                  setCart(newCart)

            } else {

                  const productoAgregar = { ...producto, cantidad }
                  console.log("producto agregado", { ...producto, cantidad })
                  setCart([...cart, productoAgregar])
            }
      }
      function countInCart() {
            return cart.reduce((acc, curr) => {
                  return acc + curr.cantidad
            }, 0)

      }
      function setCantidadInProduct(id, cantidad) {
            if (existeProducto(id)) {
                  if (cantidad> 0) {
                        const newCart = cart.map(productInCart => {

                              if (productInCart.id === id) {
                                    return {
                                          ...productInCart,
                                          cantidad: cantidad
                                    }

                              } else {
                                    return productInCart
                              }

                        })

                        setCart(newCart)
                  }
            }
      }
      const data = {
            addToCard,
            cart,
            countInCart,
            setCantidadInProduct

      }


      return <CartContext.Provider value={data}>{children}</CartContext.Provider>

}

export default CartContextProvider