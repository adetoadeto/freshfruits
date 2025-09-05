import { Link } from "react-router-dom";
import Button from "../../Buttons/Button";
import Total from "../Total";
import OrderDetails from "./OrderDetails";

const OrderSummary = () => {
  const cartData = JSON.parse(localStorage.getItem("data"))

  const handleClearData = ()=> {
    localStorage.clear()
  }

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      {cartData.map((item)=> (
        <OrderDetails key={item.id} {...item}/>
      ))}
      <Total data={cartData}/>
      <Button id="proceed-btn" onClick={handleClearData}><Link to="/freshfruits/checkout/successful">Confirm Order</Link></Button>
    </div>
  );
};

export default OrderSummary;
