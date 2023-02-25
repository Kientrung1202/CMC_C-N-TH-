import { Link } from "react-router-dom";
import "../../styles/Layouts/footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="infomation">
        <div className="social-media">
          <img src="./assets/logo.png" alt="" />
          <div className="link-social-media">
            <button
              className="social-icon"
              style={{
                background: "url(./assets/fb-icon.png) no-repeat center",
                backgroundSize: "contain",
              }}
            >
              <a href="fb.com"></a>
            </button>
            <button
              className="social-icon"
              style={{
                background: "url('./assets/ins-icon.png') no-repeat center",
                backgroundSize: "contain",
              }}
            >
              <a href="fb.com"></a>
            </button>
            <button
              className="social-icon"
              style={{
                background: "url(./assets/yt-icon.png) no-repeat center",
                backgroundSize: "contain",
              }}
            >
              <a href="yt.com"></a>
            </button>
          </div>
        </div>
        <div>
          <h2 className="medium-bold-text, big-text">
            SỞ VĂN HOÁ, THỂ THAO VÀ DU LỊCH CẦN THƠ
          </h2>
          <h2 className="medium-bold-text, big-text">
            Trung tâm phát triển du lịch thành phố Cần Thơ
          </h2>
          <div className="contact">
            <img src="./assets/place-green.png" alt="" className="item1" />
            <p className="medium-bold-text small-text-13">Địa chỉ:</p>
            <p className="light-text small-text-13">
              10B1 Lê Thánh Tôn, P. Bến Nghé, Quận 1, Tp.HCM
            </p>

            <img src="./assets/phone-green.png" alt="" className="item1" />
            <p className="medium-bold-text small-text-13">Điện thoại:</p>
            <div>
              <p className="light-text small-text-13">+84 28 38 251 250</p>
              <p className="light-text small-text-13">+84 28 38 251 250</p>
            </div>

            <img src="./assets/email-green.png" alt="" className="item1" />
            <p className="medium-bold-text small-text-13">Địa chỉ:</p>
            <p className="light-text small-text-13">rsv@senspa.com.vn</p>

            <img src="./assets/clock-green.png" alt="" className="item1" />
            <p className="medium-bold-text small-text-13">Giờ mở cửa:</p>
            <p className="light-text small-text-13">09:30 AM - 20:00 PM</p>
          </div>
        </div>
        <div className="short-link">
          <h2 className="medium-bold-text, big-text">LIÊN KẾT NHANH</h2>
          <ul>
            <li>
              <Link to="" className="light-text">
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link to="" className="light-text">
                Dịch vụ
              </Link>
            </li>
            <li>
              <Link to="" className="light-text">
                Sản phẩm
              </Link>
            </li>
            <li>
              <Link to="" className="light-text">
                Tin tức và sự kiện
              </Link>
            </li>
          </ul>
          <div className="count-user">
            <img src="./assets/user.png" alt="" />
            <p className="light-text small-text-13">1,000,000 người xem</p>
          </div>
        </div>
      </div>
      <div className="devider"></div>
      <div className="copy-by">
        <p className="small-text">2020 TOP TOP. All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
