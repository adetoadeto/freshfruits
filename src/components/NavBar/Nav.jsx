import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Nav = () => {
  const [selected, setSelected] = useState(false)

  const handleShowNav = ()=> {
    setSelected((prevValue) => !prevValue)
  }

  return (
    <nav>
      <div className="main-nav">
        <div id="links">
          <Logo />
          <ul>
            <li>
              <Link to="/freshfruits" className="list">
                Home
              </Link>
            </li>
            <li>
              <Link to="/freshfruits/about" className="list">
                About
              </Link>
            </li>
            <li>
              <Link to="/freshfruits/products" className="list">
                Products
              </Link>
            </li>
          </ul>
        </div>

        <div className="icons">
          <Link to="/freshfruits/account">
            <i className="fa-solid fa-user"> </i>
          </Link>

          <Link to="/freshfruits/checkout">
            <i className="fa-solid fa-cart-shopping "></i>
          </Link>

          <button className="hamburger-icon" onClick={handleShowNav}><i className="fa-solid fa-bars"></i></button>
        </div>
      </div>

      <div className={`mobile-nav ${selected && "block"}`}>
        <ul>
            <li>
              <Link to="/freshfruits" className="list">
                Home
              </Link>
            </li>
            <li>
              <Link to="/freshfruits/about" className="list">
                About
              </Link>
            </li>
            <li>
              <Link to="/freshfruits/products" className="list">
                Products
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  );
};
export default Nav;
