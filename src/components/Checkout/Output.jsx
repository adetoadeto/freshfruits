import { useState } from "react";
import Cart from "./Cart/Cart"
import OrderSummary from './OrderSummary/OrderSummary'

const Output = () => {
    // Get data from local storage
      const storedData = JSON.parse(localStorage.getItem("data")) || [];
      const [cartList, setCartList] = useState(storedData)
     
      // Delete item from cart
      const handleDelete = (productId)=> {
        const updatedData = storedData.filter((item)=> 
          item.id !== productId
        )
    
        localStorage.setItem("data", JSON.stringify(updatedData))
        setCartList(JSON.parse(localStorage.getItem("data"))) 
      }
    
  return (
    <div className="output">
        <Cart cartList={cartList} onDelete={handleDelete} />
        <OrderSummary cartList={cartList}/>
      </div> 
  )
}

export default Output
