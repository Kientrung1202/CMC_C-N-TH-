import { useState } from "react";
import "../../styles/HomePage/suggestions.css";
import Title from "./title";

type Suggestion = {
  img?: string | undefined;
  question?: string | undefined;
  answer?: string | undefined;
};

const SuggestionDetail = (props: Suggestion) => {
  return (
    <div className="a-suggest">
      <img src={props.img} alt="" />
      <div className="question">
        <p className="medium-bold-text">{props.question}</p>
        <p className="light-text very-small-text">{props.answer}</p>
      </div>
    </div>
  );
};

const mockSuggestion: Suggestion[] = [
  {
    img: "./assets/food.png",
    question: "ĂN GÌ?",
    answer: "Các món ăn nổi tiếng",
  },
  {
    img: "./assets/homestay.png",
    question: "Ở ĐÂU?",
    answer: "Các món ăn nổi tiếng",
  },
  {
    img: "./assets/items.png",
    question: "MUA GÌ?",
    answer: "Các món ăn nổi tiếng",
  },
  {
    img: "./assets/place.png",
    question: "ĐI ĐÂU?",
    answer: "Các món ăn nổi tiếng",
  },
];

const Suggestions = () => {
  const [suggestions, setSuggestion] = useState(mockSuggestion);
  return (
    <section id="suggestion">
      <Title
        msg="đến với cần thơ"
        colorText="var(--white)"
        colorDivider="var(--green)"
      ></Title>
      <div className="suggestion-detail">
        {suggestions.map((suggestion: Suggestion) => (
          <SuggestionDetail {...suggestion} />
        ))}
      </div>
    </section>
  );
};

export default Suggestions;
