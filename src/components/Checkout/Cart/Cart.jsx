import CartItem from "./CartItem";
import Total from "../Total";

const Cart = ({ cartList, onDelete }) => {
  return (
    <div className="cart">
      <div className="heading">
        <h3>Your Cart ({cartList.length})</h3>
        <strong>fixed product price: #2000</strong>
      </div>

      {cartList.map((item) => (
        <CartItem key={item.id} {...item} onDelete={onDelete} />
      ))}

      <Total data={cartList} />
    </div>
  );
};

export default Cart;
