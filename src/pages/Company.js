import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
import { DynamicIcon } from "lucide-react/dynamic";
const Company = () => {
  const siteData = useSelector((state) => state.json.siteData.company);

  const awards = siteData?.awards;
  const companyHistory = siteData?.companyHistory;
  const coreValues = siteData?.coreValues;
  const expertTeam = siteData?.expertTeam;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // === Animation for .story-item cards ===
    const cards = gsap.utils.toArray(".story-item");

    cards.forEach((card, index) => {
      let startX = 0;

      switch (index) {
        case 0: // Left card
          startX = -100;
          break;
        case 1: // Right card
          startX = 200;
          break;
        default:
          break;
      }

      gsap.set(card, { x: startX, opacity: 0 });

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
          opacity: 1,
          duration: 2,
          delay: index * 0.1,
          ease: "back.out(1.2)",
        });
    });

    // === Generic reusable animateOnScroll function ===
    function animateOnScroll(
      className,
      animationProps = {},
      scrollTriggerProps = {}
    ) {
      const elements = gsap.utils.toArray(`.${className}`);

      elements.forEach((el) => {
        // set initial state
        gsap.set(el, {
          opacity: 0,
          y: 20,
          ...(animationProps.from || {}),
        });

        // animate
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          ...animationProps,
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            toggleActions: "play none none none",
            ...scrollTriggerProps,
          },
        });
      });
    }

    // Example usage
    animateOnScroll("fade-from-bottom");
    animateOnScroll("fade-from-bottom-p", { from: { y: 50 } });

    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [siteData]);

  return (
    <>
      <section className="banner-section">
        <div className="banner-image">
          <img
            src="images/banner-company.svg"
            alt="About Our Company"
            className="img-fluid w-100"
          />
        </div>
        <div className="banner-overlay">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold text-white mb-4">
                  {siteData?.mainTitle}
                </h1>
                <p className="lead text-white mb-4">{siteData?.subTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="main-content">
        <section id="about" className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 story-item">
                <h2 className="section-title">
                  {siteData?.ourStory?.mainTitle}
                </h2>
                <p className="lead">{siteData?.ourStory?.subTitle}</p>
                <p>{siteData?.storyPara}</p>
              </div>
              <div className="col-lg-6 overflow-hidden">
                <div className="timeline story-item">
                  {companyHistory?.map((item) => {
                    return (
                      <div key={item?.title} className="timeline-item">
                        <div className="timeline-year">{item.year}</div>
                        <div className="timeline-content">
                          <h6>{item.title}</h6>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="py-5 bg-light">
          <div className="container">
            <div className="row fade-from-bottom">
              <div className="col-lg-6 mb-4">
                <div className="mission-card">
                  <div className="mission-icon">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <h3>Our Mission</h3>
                  <p>
                    To provide exceptional immigration and visa consultation
                    services that empower individuals and families to pursue
                    their dreams of living, working, and studying abroad. We are
                    committed to delivering personalized, ethical, and
                    results-driven solutions.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="mission-card">
                  <div className="mission-icon">
                    <i className="fas fa-eye"></i>
                  </div>
                  <h3>Our Vision</h3>
                  <p>
                    To be the world's most trusted immigration consulting firm,
                    known for our integrity, expertise, and unwavering
                    commitment to client success. We envision a world where
                    geographical boundaries don't limit human potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="values" className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Our Core Values</h2>
              <p className="lead">The principles that guide everything we do</p>
            </div>

            <div className="row g-4 fade-from-bottom">
              {coreValues?.map((item) => {
                return (
                  <div className="col-md-6 col-lg-4" key={item?.title}>
                    <div className="value-card">
                      <div className="value-icon">
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
                      </div>
                      <h5>{item?.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="team" className="py-5 bg-light">
          <div className="container fade-from-bottom">
            <div className="text-center mb-5">
              <h2 className="section-title">Meet Our Expert Team</h2>
              <p className="lead">
                Experienced professionals dedicated to your success
              </p>
            </div>

            <div className="row g-4">
              {expertTeam?.map((item) => {
                return (
                  <div className="col-md-6 col-lg-4" key={item?.name}>
                    <div className="team-card">
                      <div className="team-avatar">
                        <i className="fas fa-user-circle"></i>
                      </div>
                      <h5>{item?.name}</h5>
                      <p className="team-role">{item?.position}</p>
                      <p>{item?.description}</p>
                      <div className="team-credentials">
                        <span
                          className="badge me-2"
                          style={{
                            background: item?.labels?.[0]?.color || "#dd1d1d",
                          }}
                        >
                          {item?.labels?.[0]?.label}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="awards" className="py-5">
          <div className="container fade-from-bottom">
            <div className="text-center mb-5">
              <h2 className="section-title">Awards & Recognition</h2>
              <p className="lead">
                Recognized for our excellence in immigration services
              </p>
            </div>

            <div className="row g-4">
              {awards?.map((item) => {
                return (
                  <div className="col-md-6 col-lg-3">
                    <div className="award-card text-center">
                      <div className="award-icon">
                        <i className="fas fa-trophy"></i>
                      </div>
                      <h6>{item?.title}</h6>
                      <p className="text-muted">{item?.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Company;
