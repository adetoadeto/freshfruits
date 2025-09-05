import aboutImg from "../assets/images/about.jpg";
import Icon from "../components/About/Icon";

const About = () => {
  return (
    <section id="about">
      <article>
        <h2>
          <span>Get</span> to 
          <span> know </span> us
        </h2>
        <p className="paragraph-text">
          We pride in being able to deliver fresh fruits at an affordable price
          within minutes regardless of your location or budget
        </p>
        <ul>
          <Icon text="Fresh produce" />
          <Icon text="Affordable prices" />
          <Icon text="Convenient payment options"/>
          <Icon text="Timely delivery"/>
          <Icon text="24hrs customer support" />
          <Icon text="Return on delivery (applicable only to goods damaged in transit)" />
        </ul>
      </article>
      <img src={aboutImg} alt="fruits" />
    </section>
  );
};

export default About;
