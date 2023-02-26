import { useState } from "react";
import { animated, useSpring } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import "../../styles/HomePage/favorite-place.css";
import Title from "./Title";

interface IPlace {
  img: string;
  name: string;
}

const mockFavoritePlaces: IPlace[] = [
  {
    img: "./assets/favorite1.png",
    name: "ĐỊA ĐIỂM",
  },
  {
    img: "./assets/favorite1.png",
    name: "ĐỊA ĐIỂM",
  },
  {
    img: "./assets/favorite1.png",
    name: "ĐỊA ĐIỂM",
  },
  {
    img: "./assets/favorite1.png",
    name: "ĐỊA ĐIỂM",
  },
  {
    img: "./assets/favorite1.png",
    name: "ĐỊA ĐIỂM",
  },
  {
    img: "./assets/favorite1.png",
    name: "ĐỊA ĐIỂM",
  },
  {
    img: "./assets/favorite1.png",
    name: "ĐỊA ĐIỂM",
  },
  {
    img: "./assets/favorite1.png",
    name: "ĐỊA ĐIỂM",
  },
  {
    img: "./assets/favorite1.png",
    name: "ĐỊA ĐIỂM",
  },
];

const FavouritePlace = (props: IPlace) => {
  const [show, setShown] = useState(false);
  const propTransform = useSpring({
    from: { scale: show ? 1 : 1.02 },
    to: { scale: show ? 1.02 : 1 },
  });
  return (
    <animated.div
      className="a-favorite-place"
      style={propTransform}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={props.img} alt="" />
      <p className="medium-bold-text big-text">{props.name}</p>
    </animated.div>
  );
};

export default function FavoritePlaces() {
  const [favouritePlaces, setFavoritePlaces] = useState(mockFavoritePlaces);
  const table = favouritePlaces.map((element, index) => {
    return {
      key: index,
      content: <FavouritePlace {...element} />,
      onClick: () => setGoToSlide(index),
    };
  });
  const [offsetRadius, setOffsetRadius] = useState(4);
  const [goToSlide, setGoToSlide] = useState(-1);
  const [cards] = useState(table);
  return (
    <section id="favorite-places">
      <Title
        msg="điểm đến yêu thích"
        colorText="var(--white)"
        colorDivider="var(--green)"
      />
      <div className="max-width-default align-center">
        <div className="carousel">
          <Carousel
            slides={cards}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            showNavigation={false}
          />
        </div>
      </div>
    </section>
  );
}
