import React from "react";

const Services = () => {
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
                  Our Immigration Services
                </h1>
                <p className="lead text-white mb-4">
                  Comprehensive visa consultation services to help you achieve
                  your immigration dreams with confidence and success.
                </p>
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
              {/* Immigration Services */}
              <div className="col-lg-6 mb-4">
                <div className="service-detail-card">
                  <div className="service-icon-lg">
                    <i className="fas fa-passport"></i>
                  </div>
                  <h3>Immigration Services</h3>
                  <p className="lead mb-4">
                    Expert guidance for permanent residence and family
                    sponsorship
                  </p>
                  <ul className="service-features">
                    <li>Permanent Residence Applications</li>
                    <li>Family Sponsorship Programs</li>
                    <li>Express Entry Processing</li>
                    <li>Provincial Nominee Programs</li>
                  </ul>
                  <div className="service-pricing">
                    <span className="price">Starting from $2,500</span>
                    <a href="/contact" className="btn btn-primary">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              {/* Study Abroad Services */}
              <div className="col-lg-6 mb-4">
                <div className="service-detail-card">
                  <div className="service-icon-lg">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h3>Study Abroad Services</h3>
                  <p className="lead mb-4">
                    Complete support for international education opportunities
                  </p>
                  <ul className="service-features">
                    <li>Student Visa Applications</li>
                    <li>University Admission Guidance</li>
                    <li>Scholarship Applications</li>
                    <li>Post-Graduation Work Permits</li>
                  </ul>
                  <div className="service-pricing">
                    <span className="price">Starting from $1,800</span>
                    <a href="/contact" className="btn btn-primary">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              {/* Work Permit Services */}
              <div className="col-lg-6 mb-4">
                <div className="service-detail-card">
                  <div className="service-icon-lg">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <h3>Work Permit Services</h3>
                  <p className="lead mb-4">
                    Professional assistance for work authorization
                  </p>
                  <ul className="service-features">
                    <li>Temporary Work Permits</li>
                    <li>LMIA Applications</li>
                    <li>Intra-Company Transfers</li>
                    <li>Startup Visa Programs</li>
                  </ul>
                  <div className="service-pricing">
                    <span className="price">Starting from $2,200</span>
                    <a href="/contact" className="btn btn-primary">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              {/* Other Services */}
              <div className="col-lg-6 mb-4">
                <div className="service-detail-card">
                  <div className="service-icon-lg">
                    <i className="fas fa-plane"></i>
                  </div>
                  <h3>Other Services</h3>
                  <p className="lead mb-4">
                    Additional visa and immigration support
                  </p>
                  <ul className="service-features">
                    <li>Visitor Visa Applications</li>
                    <li>Citizenship Applications</li>
                    <li>Document Preparation</li>
                    <li>Free Initial Consultation</li>
                  </ul>
                  <div className="service-pricing">
                    <span className="price">Starting from $1,500</span>
                    <a href="/contact" className="btn btn-primary">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
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
              <div className="col-md-3 text-center">
                <div className="process-step">
                  <div className="process-icon">
                    <i className="fas fa-comments"></i>
                  </div>
                  <h5>1. Consultation</h5>
                  <p>Free initial assessment of your case</p>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="process-step">
                  <div className="process-icon">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <h5>2. Documentation</h5>
                  <p>Complete document preparation and review</p>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="process-step">
                  <div className="process-icon">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                  <h5>3. Submission</h5>
                  <p>Professional application submission</p>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="process-step">
                  <div className="process-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h5>4. Follow-up</h5>
                  <p>Ongoing support and updates</p>
                </div>
              </div>
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
