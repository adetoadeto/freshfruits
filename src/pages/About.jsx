import Icon from "../components/About/Icon";
import aboutImg from "../assets/images/about.jpg";

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
          {["Fresh produce", "Affordable prices", "Convenient payment options", "Timely delivery", "24hrs customer support", "Return on delivery (applicable only to goods damaged in transit)"].map(item => <Icon key={item} text={item} />)
          }
        </ul>
      </article>
      <img src={aboutImg} alt="fruits" />
    </section>
  );
};

export default About;
