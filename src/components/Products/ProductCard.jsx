import stars from "../../assets/images/Stars.png";

import Button from "../Buttons/Button";
import {Link} from "react-router-dom";

const ProductCard = ({name, src}) => {
  
  return (
    <div className="product-card">
      <Button><Link to={`/freshfruits/products/${name.toLowerCase()}`}>View product</Link></Button>
      <img src={src} alt="image of a fruit" className="product-image" />
      <div className="product-text">
        <img src={stars} alt="image of stars" className="product-review"/>
        <div>
          <p>{name}</p>
          <p># 2000</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
