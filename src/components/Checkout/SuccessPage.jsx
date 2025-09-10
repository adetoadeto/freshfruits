import shoppingBag from "../../assets/images/fruits/shoppingBag.jpg"
const SuccessPage = () => {
  return (
    <div className="success-page">
      <img src={shoppingBag} alt="shopping bag" />
      <div>
        <i className="fa-solid fa-circle-check"></i>
        <h2>Order Confirmed</h2>
      </div>
    </div>
  );
};

export default SuccessPage;
