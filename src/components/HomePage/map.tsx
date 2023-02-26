import { Button, Form, Image, Select } from "antd";
import "../../styles/HomePage/map.css";
import Title from "./Title";
import { useState } from "react";

export default function Map() {
  const optionsSearchLocation = [
    {
      img: "./assets/interesting-news.png",
      value: "vinpearl",
      name: "Vinpearl",
    },
    {
      img: "./assets/interesting-news.png",
      value: "vitoria",
      name: "Khách sạn Victoria",
    },
    {
      img: "./assets/interesting-news.png",
      value: "resort",
      name: "Cần Thơ Resort",
    },
  ];
  const [location, setLocations] = useState(optionsSearchLocation);
  return (
    <section id="section-map">
      <Title
        msg="bản đồ"
        colorText="var(--green)"
        colorDivider="var(--grey)"
      ></Title>
      <div className="map max-width-default align-center">
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
            <Button className="btn-menu">
              <img src="./assets/home-icon.png" alt="" />
            </Button>
            <Button className="btn-menu">
              <img src="./assets/cafe-icon.png" alt="" />
            </Button>
            <Button className="btn-menu">
              <img src="./assets/camera-icon.png" alt="" />
            </Button>
            <Button className="btn-menu">
              <img src="./assets/shopping-icon.png" alt="" />
            </Button>
            <Button className="btn-menu">
              <img src="./assets/recorder-icon.png" alt="" />
            </Button>
          </div>
          <Form id="form-search">
            <p style={{ textAlign: "end" }}>Bộ lọc</p>

            <div className="search-bar">
              <input type="text" name="input-search" id="" />
              <Button>
                <img src="./assets/feSearch2.png" alt="" />
              </Button>
            </div>
            <Select
              id="select-area"
              placeholder="Chọn khu vực"
              options={optionsSearchLocation.map((element) => {
                return {
                  value: element.value,
                  label: (
                    <div style={{ display: "flex", width: "120px" }}>
                      <Image
                        src={element.img}
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "cover",
                        }}
                      />
                      <p>{element.name}</p>
                    </div>
                  ),
                };
              })}
            ></Select>
          </Form>
        </div>
      </div>
    </section>
  );
}
