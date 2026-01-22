import Button from "../Buttons/Button";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const products = useSelector((state)=> state.data.value);
  // All fruit Data

  const [displayProduct, setDisplayProduct] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({ items: [] });
  const [quantity, setQuantity] = useState(0);
  const [cartMessage, setCartMessage] = useState("");

  // Get params
  const { name } = useParams();

  const PRICE = 2000;

  // Search and display by params
  useEffect(() => {
    const handleDisplay = () => {
      let localStorageData = localStorage.getItem("data");

      if (localStorageData) {
        localStorageData = JSON.parse(localStorageData);
      } else {
        localStorageData = [];
      }

      const existingProduct = localStorageData.find(
        (item) => item.name.toLowerCase() === name
      );
      if (existingProduct) {
        setDisplayProduct(existingProduct);
        setQuantity(existingProduct.quantity);
      } else {
        const product = products.find(
          (item) => item.name.toLowerCase() === name
        );
        setDisplayProduct(product);
      }
    };
    handleDisplay();
  }, products);

  // Increase Quantity
    const handleIncreaseQty = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Decrease Quantity
  const handleDecreaseQty = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity === 0) {
        return 0;
      } else {
        return prevQuantity - 1;
      }
    });
  };

  // Add to Cart
  const handleAddToCart = (id, qty) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );

      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: qty,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = products.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.name,
          src: product.src,
          quantity: qty,
        });
      }
      return {
        items: updatedItems,
      };
    });

    // Confirms item has been added to cart
    setCartMessage("Item added to cart");
    setTimeout(() => {
      setCartMessage("");
    }, 2000);
  };

  // Local storage: products added to cart
  useEffect(() => {
    const handleDataStorage = () => {
      //Cart not empty
      if (shoppingCart.items.length !== 0) {
        const id = shoppingCart.items[0].id;

        let storedData = localStorage.getItem("data");

        if (storedData) {
          storedData = JSON.parse(storedData);
        } else {
          storedData = [];
        }

        const existingItemIndex = storedData.findIndex(
          (item) => item.id === id
        );
        const existingCartItem = storedData[existingItemIndex];

        if (existingCartItem) {
          const updateItem = {
            ...existingCartItem,
            quantity: shoppingCart.items[0].quantity,
          };
          storedData[existingItemIndex] = updateItem;
        } else {
          const newData = {
            id: shoppingCart.items[0].id,
            name: shoppingCart.items[0].name,
            src: shoppingCart.items[0].src,
            quantity: shoppingCart.items[0].quantity,
          };
          storedData.push(newData);
        }

        // Stores data in local storage
        localStorage.setItem("data", JSON.stringify(storedData));
      }
    };
    handleDataStorage();
  }, [shoppingCart]);

  return (
    <section className="product-details-container">
      <div className="product-details">
        <div className="product-image">
          <img src={displayProduct.src} alt="image of fruit" />
        </div>

        <div className="product-content">
          <h2 className="title">{displayProduct.name}</h2>
          <p className="price">Price: #{PRICE}</p>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ex
            at saepe maxime et vel magnam commodi vero dignissimos tempora!
          </p>
          <div className="quantity">
            <button onClick={handleDecreaseQty} className="qty-btn">
              <i className="fa-solid fa-minus"></i>
            </button>
            <p>{quantity}kg</p>
            <button onClick={handleIncreaseQty} className="qty-btn">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          <div className="add-to-cart-controls">
            <Button
              disabled={quantity < 1 && true}
              className="add-to-cart-btn"
              onClick={() => {
                handleAddToCart(displayProduct.id, quantity);
              }}
            >
              Add to Cart
            </Button>
            <p id="cart-message">{cartMessage}</p>
          </div>
        </div>
      </div>
      <div className="controls">
        <Button className="add-to-cart-btn">
          <Link to="/products"> Continue Shopping</Link>
        </Button>

        <Button className="add-to-cart-btn">
          <Link to="/checkout"> Proceed to checkout</Link>
        </Button>
      </div>
    </section>
  );
};

export default ProductDetail;
