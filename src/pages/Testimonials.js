import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
import { DynamicIcon } from "lucide-react/dynamic";
const Testimonials = () => {
  const siteData = useSelector((state) => state.json.siteData.testimonials);
  const numerics = siteData?.numerics;
  const clientReview = siteData?.clientReview;
  const moreClientReview = siteData?.moreClientReview;
  const reviewByService = siteData?.reviewByService;
  const videos = siteData?.videos;
  const [stats, setStats] = useState({});
  useEffect(() => {
    setStats(
      siteData?.numerics.map(() => 0) // initialize all counters to 0
    );
  }, [siteData]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    siteData?.numerics.forEach((item, index) => {
      const obj = { val: 0 };

      gsap.to(obj, {
        val: item.count,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: `.stat-item-white:nth-child(${index + 1})`,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          setStats((prev) => {
            const newStats = [...prev];
            newStats[index] = Math.round(obj.val);
            return newStats;
          });
        },
      });
    });
  }, [siteData]);

  return (
    <>
      <section className="banner-section">
        <div className="banner-image">
          <img
            src="images/banner-testimonials.svg"
            alt="Client Success Stories"
            className="img-fluid w-100"
          />
        </div>
        <div className="banner-overlay">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold text-white mb-4">
                  Success Stories
                </h1>
                <p className="lead text-white mb-4">
                  Real stories from real clients who achieved their immigration
                  dreams with our help
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="main-content">
        <section className="py-5 bg-primary text-white">
          <div className="container">
            <div className="row text-center">
              {numerics?.map((item, index) => {
                return (
                  <div className="col-md-3" key={item?.label}>
                    <div className="stat-item-white">
                      <h2 className="display-4 fw-bold number-counter">
                        {stats?.[index]}
                        {item?.status}
                      </h2>
                      <p className="lead">{item?.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="lead">
                Hear directly from those who have successfully achieved their
                immigration goals
              </p>
            </div>

            <div className="row g-4">
              {clientReview?.map((item) => {
                return (
                  <div className="col-lg-4" key={item?.name}>
                    <div className="testimonial-card featured">
                      <div className="testimonial-header">
                        <div className="client-avatar">
                          <i className="fas fa-user-circle"></i>
                        </div>
                        <div className="client-info">
                          <h6>{item?.name}</h6>
                          <span className="text-muted">{item?.position}</span>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <i className="fas fa-quote-left quote-icon"></i>
                        <p>"{item?.description}"</p>
                        <div className="testimonial-meta">
                          <span
                            className="badge"
                            style={{ background: item?.tag?.color }}
                          >
                            {item.tag?.label}
                          </span>
                          <span className="text-muted">
                            •{" "}
                            {new Date(item?.dateTime).toLocaleDateString(
                              "en-US",
                              {
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <div className="row g-4">
              {moreClientReview?.map((item) => {
                return (
                  <div className="col-lg-6" key={item?.name}>
                    <div className="testimonial-card">
                      <div className="testimonial-header">
                        <div className="client-avatar">
                          <i className="fas fa-user-circle"></i>
                        </div>
                        <div className="client-info">
                          <h6>{item?.name}</h6>
                          <span className="text-muted">{item?.position}</span>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <p>"{item?.description}"</p>
                        <div className="testimonial-meta">
                          <div className="testimonial-meta">
                            <span
                              className="badge"
                              style={{ background: item?.tag?.color }}
                            >
                              {item.tag?.label}
                            </span>
                            <span className="text-muted">
                              •{" "}
                              {new Date(item?.dateTime).toLocaleDateString(
                                "en-US",
                                {
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Video Testimonials</h2>
              <p className="lead">
                Watch our clients share their immigration journey experiences
              </p>
            </div>

            <div className="row g-4">
              {videos?.map((item) => {
                return (
                  <div className="col-lg-4" key={item?.title}>
                    <div className="video-testimonial-card">
                      <div className="video-placeholder">
                        <i className="fas fa-play-circle"></i>
                        <div className="video-overlay">
                          <h6>{item?.title}</h6>
                          <p>{item?.duration} minutes</p>
                        </div>
                      </div>
                      <div className="video-info">
                        <h6>{item?.subTitle}</h6>
                        <p className="text-muted">{item?.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Reviews by Service Category</h2>
            </div>

            <div className="row">
              {reviewByService?.map((item) => {
                return (
                  <div className="col-lg-3 mb-4" key={item?.title}>
                    <div className="category-review-card">
                      <div className="category-header">
                        <div class="align-items-center d-flex justify-content-center service-icon service-icon mb-3">
                          <DynamicIcon
                            name={item.icon}
                            height={50}
                            width={50}
                          />
                        </div>
                        <h5>{item?.title}</h5>
                        <div className="rating-large">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span className="rating-number">
                            {item?.rating}/5
                          </span>
                        </div>
                      </div>
                      {/* <p className="review-count">Based on 1,250+ reviews</p> */}
                      <div className="recent-review">
                        <p className="small">"{item?.review}"</p>
                        <span className="review-author">- {item?.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-5 bg-primary text-white">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="mb-4">Ready to Write Your Success Story?</h2>
                <p className="lead mb-4">
                  Join thousands of satisfied clients who have achieved their
                  immigration goals with our expert guidance
                </p>
                <div className="cta-buttons">
                  <a href="contact.html" className="btn btn-light btn-lg me-3">
                    Start Your Journey
                  </a>
                  <a
                    href="services.html"
                    className="btn btn-outline-light btn-lg"
                  >
                    View Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Testimonials;
