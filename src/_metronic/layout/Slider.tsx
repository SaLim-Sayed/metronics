import React from "react";
import { toAbsoluteUrl } from "../helpers";

const Carousel: React.FC = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide  "
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div style={{ width: "100%", height: "80vh" }}>
            <video
              src={toAbsoluteUrl("media/video/Dash & Dez.mp4")}
              preload="auto"
              autoPlay={true}
              controls={true}
              loop={true}
            ></video>
          </div>
          <div className="carousel-caption d-none d-md-block text-white ">
            <h1 className="text-white fs-1">عنوان هذا الفيديو</h1>

            <p>وصف هذا الفيديو</p>
          </div>
        </div>
        <div className="carousel-item">
          <div style={{ width: "100%", height: "80vh" }}>
            <video
              src={toAbsoluteUrl("media/video/Dash & Dez_2.mp4")}
              preload="auto"
              autoPlay={true}
              controls={true}
              loop={true}
            ></video>
          </div>
          <div className="carousel-caption d-none d-md-block text-white">
            <h1 className="text-white fs-1">عنوان هذا الفيديو</h1>
            <p>وصف هذا الفيديو</p>
          </div>
        </div>
        <div className="carousel-item">
          <div style={{ width: "100%", height: "80vh" }}>
            <video
              src={toAbsoluteUrl("media/video/Dash & Dez.mp4")}
              preload="auto"
              autoPlay={true}
              controls={true}
              loop={true}
            ></video>
          </div>
          <div className="carousel-caption d-none d-md-block text-white">
            <h1 className="text-white fs-1">عنوان هذا الفيديو</h1>

            <p>وصف هذا الفيديو</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
