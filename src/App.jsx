import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import images from "./utils/main";
import Nav from "./components/NavBar/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./components/Products/ProductDetail";
import Checkout from "./pages/Checkout";
import OrderSummary from "./components/Checkout/OrderSummary/OrderSummary";
import SuccessPage from "./components/Checkout/SuccessPage";
import Cart from "./components/Checkout/Cart/Cart";
import Account from "./pages/Account";

const App = () => {
  const [fruitData, setFruitData] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState(fruitData);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    handleGetData();
  }, []);

  // Sets filteredSearch to fruitData
  useEffect(() => {
    setFilteredSearch(fruitData);
  }, [fruitData]);

  // Get Data from API Function
  const handleGetData = async () => {
    const options = {
      method: "GET",
      url: "https://fruits-api1.p.rapidapi.com/traicay",
      headers: {
        "x-rapidapi-key": "a9c4ed52ddmsh9d992ad0f516bdep1de089jsn99532e42a26a",
        "x-rapidapi-host": "fruits-api1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const data = await response.data;

      // Stores only the fruit names
      const fruitNames = data.map((item) => item.name);

      // Stores fruits whose images are in the image folder
      const namesArray = [];

      // Find fruits whose images are in the image folder
      fruitNames.map((name) => {
        const matchingName = images.find((item) => item.name === name);

        if (matchingName) {
          namesArray.push(matchingName);
        }
      });
      setFruitData(namesArray);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  // Search Keyword (user input)
  const searchKeyword = useRef();

  // Filter Logic
  const handleSearch = () => {
    // const userInput = (searchKeyword.current.value).toLowerCase();
    const userInput = searchKeyword.current.value.toLowerCase();

    // If the input field is blank after a search is deleted
    if (userInput.trim() === "") {
      return setFilteredSearch(fruitData);
    }

    // Filter By Search
    const foundFruit = fruitData.filter(
      (item) => item.name.toLowerCase() === userInput
    );
    setFilteredSearch(foundFruit);
  };

  // Shows all products
  const handleShowAllProducts = () => {
    searchKeyword.current.value = "";
    setFilteredSearch(fruitData);
  };

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/freshfruits" element={<Home />}></Route>
          <Route path="/freshfruits/about" element={<About />}></Route>
          <Route
            path="/freshfruits/products"
            element={
              <Products
                ref={searchKeyword}
                fruitData={fruitData}
                filteredData={filteredSearch}
                errorMessage={errorMessage}
                onSearch={handleSearch}
                onShowAll={handleShowAllProducts}
              />
            }
          ></Route>
          <Route
            path="/freshfruits/products/:name"
            element={<ProductDetail fruitData={fruitData} />}
          ></Route>
          <Route path="/freshfruits/account" element={<Account />} />
          <Route path="/freshfruits/checkout" element={<Checkout />}>
            <Route index element={<Cart />}></Route>
            <Route
              path="/freshfruits/checkout/confirm-order"
              element={<OrderSummary />}
            ></Route>
            <Route
              path="/freshfruits/checkout/successful"
              element={<SuccessPage />}
            ></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
