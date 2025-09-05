const CartItem = ({name, src, quantity, id, onDelete}) => {
  const PRICE = 2000;

  return (
    <>
      <div className="cart-card">
        <div>
          <img src={src} alt="" />
          <p className="name">{name} ({quantity})</p>
        </div>
        <p className="price">#{quantity * PRICE}</p>
        <button className="remove-item" onClick={()=> onDelete(id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
