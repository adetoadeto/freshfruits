import Button from "../components/Buttons/Button";
import IndicatorMessage from "../components/Products/IndicatorMessage";
import ProductCard from "../components/Products/ProductCard";

const Products = ({fruitData, filteredData, errorMessage, onSearch, onShowAll, ref }) => {

  return (

    <section id="products">
      <div id="products-header">
        <h2>Choose your desired fruit(s)</h2>
        <div>
          <Button onClick={onShowAll}>All Products</Button>
          <form>
            <input
              ref={ref}
              type="text"
              placeholder="Search Product"
              onChange={onSearch}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </form>
        </div>
      </div>

      {/* Renders error message */}
      {errorMessage && <IndicatorMessage text={`${errorMessage}. Check your internet connection and reload`} />}
      
      {/* Shows data is loading */}
      {!errorMessage && fruitData.length === 0 && (
        <IndicatorMessage text="Data loading, please wait" />
      )}

      <div id="product-cards">
        {/* Handles item not found */}
        {!errorMessage &&
          fruitData.length !== 0 &&
          filteredData.length === 0 && (
            <IndicatorMessage text="Item not found" />
          )
        }

        {filteredData.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>
    </section>

  
  );
};

export default Products;
