import { useState } from "react";
import "../../styles/HomePage/breaking-news.css";
import Title from "./Title";

interface News {
  name: string | undefined;
  img: string | undefined;
  title: string | undefined;
  time: string | undefined;
  shortDetail: string | undefined;
}

const InterestingNew = (props: News) => {
  return (
    <div
      className="child-news"
      style={{
        background: `url('./assets/gradient.png') center bottom no-repeat, url('${props.img}')`,
      }}
    >
      <div className="content">
        <div className="tag">
          <p className="light-text very-small-text">{props.name}</p>
        </div>
        <p className="medium-bold-text">{props.title}</p>
        <div className="time">
          <img src="./assets/oclock.png" alt="" />
          <p className="very-small-text light-text">{props.time}</p>
        </div>

        <p className="small-text light-text">{props.shortDetail}</p>
      </div>
    </div>
  );
};

const OtherNews = (props: News) => {
  return (
    <div className="child-other-news">
      <div className="thumbnail">
        <img src={props.img} alt="" />
      </div>
      <div className="detail">
        <div className="tag">
          <p className="light-text very-small-text">{props.name}</p>
        </div>
        <p className="medium-bold-text medium-text">{props.title}</p>
        <div className="time">
          <img src="./assets/dark-oclock.png" alt="" />
          <p className="small-text light-text">{props.time}</p>
        </div>
        <p className="small-text light-text">{props.shortDetail}</p>
      </div>
    </div>
  );
};

const mockInterestingNews: News[] = [
  {
    img: "./assets/interesting-news.png",
    name: "Tên chuyên mục",
    title: "Chuyên mục tin tức thú vị về Cần Thơ",
    time: "15/01/2023",
    shortDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a orci , vitae, molestie magna.",
  },
  {
    img: "./assets/interesting-news.png",
    name: "Tên chuyên mục",
    title: "Chuyên mục tin tức thú vị về Cần Thơ",
    time: "15/01/2023",
    shortDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a orci , vitae, molestie magna.",
  },
  {
    img: "./assets/interesting-news.png",
    name: "Tên chuyên mục",
    title: "Chuyên mục tin tức thú vị về Cần Thơ",
    time: "15/01/2023",
    shortDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a orci , vitae, molestie magna.",
  },
];

const mockOtherNews: News[] = [
  {
    img: "./assets/interesting-news.png",
    name: "Tên chuyên mục",
    title: "Chuyên mục tin tức thú vị về Cần Thơ",
    time: "15/01/2023",
    shortDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a orci , vitae, molestie magna.",
  },
  {
    img: "./assets/other-news.png",
    name: "Tên chuyên mục",
    title: "Chuyên mục tin tức thú vị về Cần Thơ",
    time: "15/01/2023",
    shortDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a orci , vitae, molestie magna.",
  },
  {
    img: "./assets/other-news.png",
    name: "Tên chuyên mục",
    title: "Chuyên mục tin tức thú vị về Cần Thơ",
    time: "15/01/2023",
    shortDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a orci , vitae, molestie magna.",
  },
  {
    img: "./assets/other-news.png",
    name: "Tên chuyên mục",
    title: "Chuyên mục tin tức thú vị về Cần Thơ",
    time: "15/01/2023",
    shortDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a orci , vitae, molestie magna.",
  },
  {
    img: "./assets/other-news.png",
    name: "Tên chuyên mục",
    title: "Chuyên mục tin tức thú vị về Cần Thơ",
    time: "15/01/2023",
    shortDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a orci , vitae, molestie magna.",
  },
  {
    img: "./assets/other-news.png",
    name: "Tên chuyên mục",
    title: "Chuyên mục tin tức thú vị về Cần Thơ",
    time: "15/01/2023",
    shortDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a orci , vitae, molestie magna.",
  },
];

const BreakingNews = () => {
  const [interestingNews, setInterestingNews] = useState(mockInterestingNews);
  const [otherNews, setOtherNews] = useState(mockOtherNews);
  return (
    <section id="breaking-news">
      <Title
        msg="tin tức nổi bật"
        colorText="var(--green)"
        colorDivider="var(--grey)"
      ></Title>
      <div className="max-width-default align-center">
        <div className="interesting-news ">
          {interestingNews.map((news: News) => (
            <InterestingNew {...news} />
          ))}
        </div>
        <p className="devider medium-bold-text">TIN TỨC KHÁC</p>
        <div className="other-news">
          {otherNews.map((news: News) => (
            <OtherNews {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreakingNews;
