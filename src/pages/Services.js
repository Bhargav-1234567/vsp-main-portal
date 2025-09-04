import { DynamicIcon } from "lucide-react/dynamic";
import React from "react";
import { useSelector } from "react-redux";

const Services = () => {
  const siteData = useSelector((state) => state.json.siteData.services);

  const process = siteData?.process;
  const services = siteData?.services;

  return (
    <div className="services-page">
      {/* Banner Section */}
      <section className="banner-section services-banner-section">
        <div className="banner-image">
          <img
            src="/images/banner-services.svg"
            alt="Visa Consultation Services"
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
                <div className="banner-buttons">
                  <a href="#services" className="btn btn-primary btn-lg me-3">
                    View Services
                  </a>
                  <a href="/contact" className="btn btn-outline-light btn-lg">
                    Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        {/* Services Overview */}
        <section id="services" className="py-5">
          <div className="container">
            <div className="row text-center mb-5">
              <div className="col-lg-8 mx-auto">
                <h2 className="section-title">Our Services</h2>
                <p className="lead">
                  Comprehensive immigration and visa services tailored to your
                  unique needs
                </p>
              </div>
            </div>

            <div className="row g-4">
              {services?.map((item) => {
                return (
                  <div className="col-lg-6 mb-4">
                    <div className="service-detail-card">
                      <div className="service-icon-lg">
                        <div className="value-icon">
                          <div
                            class="align-items-center d-flex justify-content-center service-icon service-icon mb-3"
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
                      </div>
                      <h3>{item?.title}</h3>
                      <p className="lead mb-4">{item?.description}</p>
                      <ul className="service-features">
                        {item?.infoPoints?.map((item) => {
                          return (
                            <li key={item}>Permanent Residence Applications</li>
                          );
                        })}
                      </ul>
                      <div className="service-pricing">
                        <a href="/contact" className="btn btn-primary">
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row text-center mb-5">
              <div className="col-lg-8 mx-auto">
                <h2 className="section-title">Our Process</h2>
                <p className="lead">
                  Simple, transparent, and efficient service delivery
                </p>
              </div>
            </div>

            <div className="row g-4">
              {process?.map((item) => {
                return (
                  <div className="col-md-3 text-center" key={item?.title}>
                    <div className="process-step">
                      <div className="process-icon">
                        <div class="align-items-center d-flex justify-content-center service-icon service-icon mb-3">
                          <DynamicIcon
                            name={item.icon}
                            height={20}
                            color="rgb(52, 58, 64)"
                            width={20}
                          />
                        </div>
                      </div>
                      <h5> {item?.title}</h5>
                      <p>{item?.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

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
                <a href="/contact" className="btn btn-light btn-lg">
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
