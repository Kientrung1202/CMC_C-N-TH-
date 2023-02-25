import "../../styles/HomePage/about-us.css";
import Title from "./title";

const AboutUs = () => {
  return (
    <section id="about-us">
      <Title
        msg="về chúng tôi"
        colorText="var(--green)"
        colorDivider="var(--grey)"
      ></Title>
      <p className="maxim">We Provide Best Tour Packages In Your Budget</p>
      <div className="illustrating">
        <div className="image"></div>
        <div className="description">
          <img src="./assets/logo.png" alt="" />
          <p className="light-text medium-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            viverra sem. Integer consequat turpis non orci pharetra, sed
            ultrices ipsum sollicitudin. Nam non ipsum a velit pellentesque
            scelerisque quis id nisi. In convallis lacus vestibulum dui congue
            faucibus.
          </p>
        </div>
      </div>
      <div className="strength">
        <div className="one-strength">
          <div className="frame-image">
            <img src="./assets/strength1.png" alt="" />
          </div>
          <div className="medium-text">
            <h5>Giá cả cạnh tranh</h5>
            <p>
              Donec vitae erat vulputate, efficitur magna sed, ultrices elit
              euismod nisi arcu.
            </p>
          </div>
        </div>
        <div className="one-strength">
          <div className="frame-image">
            <img src="./assets/strength2.png" alt="" />
          </div>
          <div>
            <h5>Dịch vụ hàng đầu</h5>
            <p>
              Donec vitae erat vulputate, efficitur magna sed, ultrices elit
              euismod nisi arcu.
            </p>
          </div>
        </div>
        <div className="one-strength">
          <div className="frame-image">
            <img src="./assets/strength3.png" alt="" />
          </div>
          <div>
            <h5>Phủ sóng toàn cầu</h5>
            <p className="light-text">
              Donec vitae erat vulputate, efficitur magna sed, ultrices elit
              euismod nisi arcu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
