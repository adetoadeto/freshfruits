import { Link } from "react-router-dom";
import heroImg from "../assets/images/heroImg.png";
import Button from "../components/Buttons/Button";

const Home = () => {
  return (
    <>
      <main>
        <article>
          <p id="tagline">Shopping made easier!</p>
          <h2>
            Get <span>Fresh Fruits</span> Delivered To Your
            <span> Doorstep </span>
            Within<span> Minutes</span>
          </h2>
          <p>
            Purchase fresh fruits from your comfort zone and have them delivered
            to your doorstep within minutes.
          </p>
          <Button><Link to="/about">Learn More</Link></Button>
        </article>

        <div className="image-container">
          <img src={heroImg} alt="woman holding fruit" />
        </div>
      </main>
      <section id="banner">
        <h3>
          Smash those fitness goals with ease. Choose from our list of fruit
          varieties
        </h3>
        <Button><Link to="/products">Shop Now</Link></Button>
      </section>
    </>
  );
};

export default Home;
