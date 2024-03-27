
import { useState } from "react"
import cartContext from "./context"

// eslint-disable-next-line react/prop-types
const Cartcontext = ({children}) => {

    const Products = [
      {id: 1, name: "Product-1", price:100 , quantity : 0},
      {id: 2, name: "Product-2", price:200 , quantity : 0},
      {id: 3, name: "Product-3", price:300 , quantity : 0}
    ]
      
  const [product , setProduct] = useState([...Products]);
  const [price , setPrice] = useState(0);
  return (
    <cartContext.Provider value={{price , setPrice , product , setProduct}}>
        {children}
    </cartContext.Provider>
  )
}

export default Cartcontext