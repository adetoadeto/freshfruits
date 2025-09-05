const Total = ({data}) => {
  const PRICE = 2000;
  
  // Get all total for each product
  let total = data.map((item)=> {
    return item.quantity * PRICE
  })

  // Sum total of all products
  const sumTotal = total.reduce((acc, currVal)=> acc + currVal, 0)

  return (
    <div className="total">
      <p>Order Total</p>
      <h4>{sumTotal}</h4>
    </div>
  );
};

export default Total;
