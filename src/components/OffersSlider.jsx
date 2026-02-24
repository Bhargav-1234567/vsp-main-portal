// components/OffersSlider.jsx (Simpler version)
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DynamicIcon } from "lucide-react/dynamic";
const apiBase = process.env.REACT_APP_API_URL;

const OffersSlider = ({ offers }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        gap: 20,

        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: true,
        dotsClass: "slick-dots offers-simple-dots",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <section className="offers-section py-5" style={{ background: '#f8f9fa' }}>
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-lg-8 mx-auto">
                        <h2 className="section-title" >Special Offers</h2>
                        <p className="lead ">Exclusive deals to make your immigration journey affordable</p>
                    </div>
                </div>

                <Slider {...settings}>
                    {[1, 2, 3, 4, 5]?.map((offer, index) => (
                        <div key={index} className={'px-3'}>
                            <div className="offer-card border-0 rounded-4 overflow-hidden shadow-sm"
                                style={{
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(196,55,62,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                                }}
                            >
                                <div className="position-relative">
                                    <img
                                        src={`${apiBase}/images/offerSlide${index + 1}.png`}
                                        alt={offer.title}
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            objectFit: 'cover',
                                            aspectRatio: '1/1'
                                        }}
                                    />

                                </div>


                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <style jsx>{`
        :global(.offers-simple-dots) {
          bottom: -40px;
        }
        :global(.offers-simple-dots li button:before) {
          color: #c4373e;
          opacity: 0.3;
        }
        :global(.offers-simple-dots li.slick-active button:before) {
          color: #c4373e;
          opacity: 1;
        }
      `}</style>
        </section>
    );
};

export default OffersSlider;