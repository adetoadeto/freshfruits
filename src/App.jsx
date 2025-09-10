import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/NavBar/Nav";
import Home from "./pages/Home";
import About from "./pages/About";

import Products from "./pages/Products";
import ProductDetail from "./components/Products/ProductDetail";

import Checkout from "./pages/Checkout";
import Output from "./components/Checkout/Output";
import SuccessPage from "./components/Checkout/SuccessPage";

import Account from "./pages/Account";
import SignUpPage from "./components/Account/SignUpPage";
import LoginPage from "./components/Account/LoginPage";

import Footer from "./components/Footer";

const App = () => {
 
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/freshfruits" element={<Home />} />
          <Route path="/freshfruits/about" element={<About />}/>
          <Route
            path="/freshfruits/products"
            element={
              <Products/>
            }
          />
          <Route
            path="/freshfruits/products/:name"
            element={<ProductDetail />}
          />
          <Route path="/freshfruits/account" element={<Account />}>
            <Route index element={<SignUpPage/>}/>
            <Route path="/freshfruits/account/login" element={<LoginPage/>}/>
          </Route>
          <Route path="/freshfruits/checkout" element={<Checkout />}>
            <Route index element={<Output/>}/>
            <Route
              path="/freshfruits/checkout/successful"
              element={<SuccessPage />}
            />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
