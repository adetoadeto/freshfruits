import { Link } from "react-router-dom";
import Button from "../../Buttons/Button";
import Total from "../Total";
import OrderDetails from "./OrderDetails";

const OrderSummary = ({cartList}) => {
 
  const handleClearData = ()=> {
    localStorage.clear()
  }

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      {cartList.map((item)=> (
        <OrderDetails key={item.id} {...item}/>
      ))}
      <Total data={cartList}/>
      <Button id="confirm-btn" onClick={handleClearData}><Link to= {cartList.length === 0 ? "/freshfruits/products" : "/freshfruits/account"}>Confirm Order</Link></Button>
    </div>
  );
};

export default OrderSummary;
