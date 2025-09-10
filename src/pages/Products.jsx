import Button from "../components/Buttons/Button";
import IndicatorMessage from "../components/Products/IndicatorMessage";
import ProductCard from "../components/Products/ProductCard";
import axios from "axios";
import { useState, useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {generate} from "../utils/state/dataSlice"
import images from "../utils/main";

const Products = () => {

    const [fruitData, setFruitData] = useState([]);
    const [filteredSearch, setFilteredSearch] = useState(fruitData);
    const [errorMessage, setErrorMessage] = useState("");
   
    const dispatch = useDispatch();
    dispatch(generate(fruitData))
   
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
  
     // Filter Logic
    const searchKeyword = useRef();

    const handleSearch = () => {
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

    <section id="products">
      <div id="products-header">
        <h2>Choose your desired fruit(s)</h2>
        <div>
          <Button onClick={handleShowAllProducts}>All Products</Button>
          <form>
            <input
              ref={searchKeyword}
              type="text"
              placeholder="Search Product"
              onChange={handleSearch}
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
          filteredSearch.length === 0 && (
            <IndicatorMessage text="Item not found" />
          )
        }

        {filteredSearch.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>
    </section>

  
  );
};

export default Products;
