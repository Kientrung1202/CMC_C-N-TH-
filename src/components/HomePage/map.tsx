import "../../styles/HomePage/map.css";
import Title from "./title";

export default function Map() {
  return (
    <section id="section-map">
      <Title
        msg="bản đồ"
        colorText="var(--green)"
        colorDivider="var(--grey)"
      ></Title>
      <div className="map">
        <div className="embed-map">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="850"
                height="425"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=cần thơ&t=&z=11&ie=UTF8&iwloc=&output=embed"
              ></iframe>
              <br />
            </div>
          </div>
        </div>
        <div className="search-map">
          <div className="menu">
            <button className="btn-menu">
              <img src="./assets/home-icon.png" alt="" />
            </button>
            <button className="btn-menu">
              <img src="./assets/cafe-icon.png" alt="" />
            </button>
            <button className="btn-menu">
              <img src="./assets/camera-icon.png" alt="" />
            </button>
            <button className="btn-menu">
              <img src="./assets/shopping-icon.png" alt="" />
            </button>
            <button className="btn-menu">
              <img src="./assets/recorder-icon.png" alt="" />
            </button>
          </div>
          <form id="form-search">
            <p style={{ textAlign: "end" }}>Bộ lọc</p>

            <div className="search-bar">
              <input type="text" name="input-search" id="" />
              <button>
                <img src="./assets/feSearch2.png" alt="" />
              </button>
            </div>
            <select name="" id="select-area">
              <option value="" disabled selected>
                Chọn khu vực
              </option>
            </select>
          </form>
        </div>
      </div>
    </section>
  );
}
