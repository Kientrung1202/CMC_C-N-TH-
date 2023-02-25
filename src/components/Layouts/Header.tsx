import { Link } from "react-router-dom";
import "../../styles/global.css";
import "../../styles/Layouts/header.css";
import { useState } from "react";

const mockUtilData = {
  email: "user@gmail.com",
  phone: "012344555",
};

const Header = ({
  handleSignIn,
  signedIn,
}: {
  handleSignIn: () => void;
  signedIn: boolean;
}) => {
  const [utilData, setUtilData] = useState(mockUtilData);
  const [currentNav, setCurrentNav] = useState("home");
  return (
    <div>
      <div id="util-info">
        <div className="info small-text">
          <div className="sub-info">
            <img src="./assets/email.png" alt="" />
            <span id="email-info">{utilData.email}</span>
          </div>
          <div className="sub-info">
            <img src="./assets/phone.png" alt="" />
            <span id="phone-info">{utilData.phone}</span>
          </div>
        </div>
        <div className="info">
          <img src="./assets/feSearch2.png" alt="" />
          <div className="sub-info">
            <span>ENG</span>
            <img src="./assets/eng-flag.png" alt="" />
          </div>
          <div className="sub-info">
            <span>VIE</span>
            <img src="./assets/vi-flag.png" alt="" />
          </div>
        </div>
      </div>

      <div id="nav">
        <img className="logo" src="./assets/logo.png" alt="" />
        <div className="title">
          <ul>
            <li
              className={currentNav === "home" ? "appear-border" : ""}
              onClick={() => setCurrentNav("home")}
            >
              <Link to="#login" className="medium-bold-text medium-text">
                TRANG CHỦ
              </Link>
            </li>
            <li
              className={currentNav === "news" ? "appear-border" : ""}
              onClick={() => setCurrentNav("news")}
            >
              <Link to="#login" className="medium-bold-text">
                TIN TỨC
              </Link>
            </li>
            <li onClick={() => setCurrentNav("services")}>
              <Link to="#login" className="medium-bold-text">
                DỊCH VỤ <img src="./assets/more.png" alt="" />
              </Link>
              <div className="underline"></div>
              <div
                className={`sub-nav ${
                  currentNav !== "services" ? "invisible" : ""
                }`}
                id="sub-nav-1"
              >
                <div className="a-sub-nav">
                  <Link className="medium-text" to="/">
                    Dịch vụ giải trí
                  </Link>
                </div>
                <div className="a-sub-nav">
                  <Link className="medium-text" to="/">
                    Dịch vụ mua sắm
                  </Link>
                </div>
              </div>
            </li>
            <li
              className={currentNav === "store" ? "appear-border" : ""}
              onClick={() => setCurrentNav("store")}
            >
              <Link to="#login" className="medium-bold-text">
                LƯU TRỮ
              </Link>
            </li>
            <li
              className={currentNav === "place" ? "appear-border" : ""}
              onClick={() => setCurrentNav("place")}
            >
              <Link to="#login" className="medium-bold-text">
                ĐIỂM ĐẾN
              </Link>
            </li>
            <li
              className={currentNav === "food" ? "appear-border" : ""}
              onClick={() => setCurrentNav("food")}
            >
              <Link to="#login" className="medium-bold-text">
                ẨM THỰC
              </Link>
            </li>
            <li
              className={currentNav === "map" ? "appear-border" : ""}
              onClick={() => setCurrentNav("map")}
            >
              <Link to="#section-map" className="medium-bold-text">
                BẢN ĐỒ
              </Link>
            </li>
            <li
              className={currentNav === "photos" ? "appear-border" : ""}
              onClick={() => setCurrentNav("photos")}
            >
              <Link to="#login" className="medium-bold-text">
                ẢNH 360
              </Link>
            </li>
            <li
              className={currentNav === "contact" ? "appear-border" : ""}
              onClick={() => setCurrentNav("contact")}
            >
              <Link to="#login" className="medium-bold-text">
                LIÊN HỆ
              </Link>
            </li>
          </ul>
        </div>
        {!signedIn && (
          <button
            className="little-small-text medium-bold-text"
            onClick={() => handleSignIn()}
          >
            Đăng nhập
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
