import {
  ArrowBigRight,
  ArrowLeft,
  ArrowLeftRight,
  ArrowRight,
  ArrowRightFromLine,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const apiBase = process.env.REACT_APP_API_URL;

const HomeSlider = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteData = useSelector((state) => state.json.siteData);

  // Sample API call - replace with your actual API endpoint
  useEffect(() => {
    if (siteData?.home) {
      setSlides(siteData?.home?.sliderItems);
      setLoading(false);
    }
  }, [siteData]);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
    cssEase: "linear",
  };

  if (loading) {
    return <div className="carousel-loading">Loading...</div>;
  }

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="carousel-slide">
            <div
              className="slide-background"
              style={{
                backgroundImage: `url(${apiBase}/images/Slide${index + 1}.png)`,
                backgroundPosition: "center",
              }}
            >
              <div className="slide-content">
                <div className="slide-location">{slide.mainTitle}</div>
                <h1 className="slide-title">{slide.subTitle}</h1>
                <p className="slide-description">{slide.description}</p>
                <Link to={"/services"} className="slide-button">
                  <ArrowRight /> Explore More
                </Link>
              </div>
              <div className="banner-overlay"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
