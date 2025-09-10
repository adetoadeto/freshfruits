const Total = ({data}) => {
  const PRICE = 2000;
  
  // Get all total for each product
  let total = data.map((item)=> {
    return item.quantity * PRICE
  })

  // Sum total of all products
  const sumTotal = (total.reduce((acc, currVal)=> acc + currVal, 0)).toLocaleString("en-US")

  return (
    <div className="total">
      <strong>Order Total</strong>
      <h4>{sumTotal}</h4>
    </div>
  );
};

export default Total;
