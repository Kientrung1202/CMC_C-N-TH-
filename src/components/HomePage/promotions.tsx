import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../styles/HomePage/promotions.css";
import Title from "./title";

interface IPromotion {
  img: string | undefined;
  link: string;
}

const Promotion = (props: IPromotion) => {
  return (
    <div className="a-promotion">
      <Link to={props.link}>
        <img src={props.img} alt="" />
      </Link>
    </div>
  );
};

const mockPromotion: IPromotion[] = [
  {
    link: "/",
    img: "./assets/promotion1.png",
  },
  {
    link: "/",
    img: "./assets/promotion2.png",
  },
  {
    link: "/",
    img: "./assets/promotion3.png",
  },
  {
    link: "/",
    img: "./assets/promotion3.png",
  },
];

export default function Promotions() {
  const [promotions, setPromotions] = useState(mockPromotion);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "25px",
  };
  return (
    <section id="promotions">
      <Title
        msg="về chúng tôi"
        colorText="var(--white)"
        colorDivider="var(--green)"
      ></Title>
      <Slider {...settings} className="slider">
        {promotions.map((promotion: IPromotion) => (
          <Promotion {...promotion} />
        ))}
      </Slider>
    </section>
  );
}
