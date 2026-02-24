import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeSlider from "../components/HomeSlider";
import { useSelector } from "react-redux";
import { DynamicIcon, iconNames } from "lucide-react/dynamic";
import Services from "./Services";
import Company from "./Company";
import OffersSlider from "../components/OffersSlider";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const siteData = useSelector((state) => state.json.siteData.home);
    const apiBase = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // service-card-home animation
    gsap.utils.toArray(".service-card-home").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.1,
        ease: "power2.out",
      });
    });

    // stat-item animation
    const cards = gsap.utils.toArray(".stat-item");

    cards.forEach((card, index) => {
      let startX = 0,
        startY = 0;

      switch (index) {
        case 0:
          startX = -100;
          startY = -100;
          break;
        case 1:
          startX = 100;
          startY = -100;
          break;
        case 2:
          startX = -100;
          startY = 100;
          break;
        case 3:
          startX = 100;
          startY = 100;
          break;
        default:
          break;
      }

      // initial state
      gsap.set(card, { x: startX, y: startY, opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
        .to(card, {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.2)",
        });
    });

    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [siteData]);

  const experties = siteData?.expertise;
  const whyChoose = siteData?.whyChoose;
  const numerics = siteData?.numerics;
 const offers = [
    {
      image: `${apiBase}/images/offerSlide1.png`,
      title: "Student Visa Special",
      description: "Complete guidance for top universities",
      discount: "20% OFF",
      originalPrice: 999,
      offerPrice: 799,
      validTill: "Mar 2024"
    },
    {
      image: `${apiBase}/images/offerSlide2.png`,
      title: "Family Immigration",
      description: "Sponsor your family with ease",
      discount: "15% OFF",
      originalPrice: 1499,
      offerPrice: 1274,
      validTill: "Apr 2024"
    },
    {
      image: "/images/offer3.jpg",
      title: "Work Permit Package",
      description: "Fast-track work visa processing",
      discount: "25% OFF",
      originalPrice: 1299,
      offerPrice: 974,
      validTill: "Mar 2024"
    },
    {
      image: "/images/offer4.jpg",
      title: "PR Application",
      description: "Complete PR application assistance",
      discount: "10% OFF",
      originalPrice: 1999,
      offerPrice: 1799,
      validTill: "May 2024"
    },
    {
      image: "/images/offer5.jpg",
      title: "Tourist Visa",
      description: "Hassle-free tourist visa processing",
      discount: "30% OFF",
      originalPrice: 499,
      offerPrice: 349,
      validTill: "Mar 2024"
    }
  ];
  return (
    <div className="home-page">
      <HomeSlider />
      {/* Carousel Section */}
<OffersSlider offers={offers}/>
      {/* Main Content */}
      <div className="main-content">
        {/* Services Overview */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row text-center mb-5">
              <div className="col-lg-8 mx-auto">
                <h2 className="section-title">Our Expertise</h2>
                <p className="lead">{experties?.subTitle}</p>
              </div>
            </div>

            <div class="row g-4" id="service-cards-container">
              {experties?.items?.map((item) => {
                return (
                  <div
                    key={item?.title}
                    class="col-md-6 col-lg-3 service-card-home"
                  >
                    <div class="service-card h-100">
                      <div
                        class="align-items-center d-flex justify-content-center m-auto service-icon service-icon mb-3"
                        style={{
                          background: "#c4373e",
                          height: "60px",
                          width: "60px",
                          borderRadius: "10px",
                        }}
                      >
                        <DynamicIcon
                          name={item.icon}
                          color="white"
                          height={35}
                          width={35}
                        />
                      </div>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-5 home-why-choose-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="section-title">
                  Why Choose VSP Visa Consultant?
                </h2>
                <div className="feature-list">
                  {whyChoose?.map((item) => {
                    return (
                      <div key={item.title} className="feature-item">
                        <i className="fas fa-check-circle text-primary me-3"></i>
                        <div>
                          <h6>{item.title}</h6>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="stats-grid overflow-hidden">
                  {numerics?.map((item) => {
                    return (
                      <div key={item.label} className="stat-item">
                        <h3 className="stat-number">
                          {item.count}
                          {item.status || "+"}
                        </h3>
                        <p>Happy Clients</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services showBanner={false} />

        <Company showBanner={false} />
        {/* CTA Section */}
        <section className="py-5 bg-primary text-white">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="mb-4">
                  Ready to Start Your Immigration Journey?
                </h2>
                <p className="lead mb-4">
                  Get expert guidance and personalized consultation for your
                  visa application
                </p>
                <Link to="/contact" className="btn btn-light btn-lg">
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
