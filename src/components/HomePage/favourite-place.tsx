import { useState } from "react";
import { useSpring } from "react-spring";

interface IPlace {
  img: string;
  name: string;
}

const FavouritePlace = (props: IPlace) => {
  const POSITION = {
    third: {
      position: "third",
      scale: 1,
    },
    second: {
      postion: "second",
      scale: 1.02,
    },
    first: {
      position: "first",
      scale: 1.22,
    },
    center: {
      position: "center",
      scale: 1.48,
    },
  };
  const [position, setPosition] = useState(POSITION.third);
  //   const props = useSpring({});
  return <div></div>;
};
