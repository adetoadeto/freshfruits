const OrderDetails = ({src, name, quantity}) => {

  const PRICE = 2000;
  
  return (
    <>
      <div className="order-details">
        <img src={src} alt="" />
        <p className="name">{name} ({quantity})</p>
        <p className="price"># {quantity * PRICE}</p>
      </div>
      <hr />
    </>
  );
};

export default OrderDetails;
