import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavItems from "./NavItems";

const Nav = () => {
  const [selected, setSelected] = useState(false)

  const handleShowNav = () => {
    setSelected((prevValue) => !prevValue)
  }

  return (
    <nav>
      <div className="desktop-nav">
     
          <Logo />
          <NavItems />
       

        <div className="icons">
          <Link to="/account">
            <i className="fa-solid fa-user"> </i>
          </Link>

          <Link to="/checkout">
            <i className="fa-solid fa-cart-shopping "></i>
          </Link>

          <button className="hamburger-icon" onClick={handleShowNav}><i className="fa-solid fa-bars"></i></button>
        </div>
      </div>

      <div className={`mobile-nav ${selected && "block"}`}>
        <NavItems />
      </div>
    </nav>
  );
};
export default Nav;
