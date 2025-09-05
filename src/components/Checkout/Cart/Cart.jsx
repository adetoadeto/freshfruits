import { Link } from "react-router-dom";
import Button from "../../Buttons/Button";
import CartItem from "./CartItem";
import Total from "../Total";
import { useState } from "react";

const Cart = () => {
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
    <div className="cart">
      <h3>Your Cart ({cartList.length})</h3>
      {cartList.map((item)=> (
        <CartItem key={item.id} {...item} onDelete={handleDelete}/>
      ))}
     
      <Total data={cartList}/>
      <Button id="proceed-btn" className={cartList.length === 0 ? "disabled" : null}>
        <Link to="/freshfruits/checkout/confirm-order">Checkout</Link>
      </Button>
    </div>
  );
};

export default Cart;
