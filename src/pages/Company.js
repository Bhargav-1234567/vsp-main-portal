import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Company = () => {
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
  }, []);
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
                  About VSP Visa Consultant
                </h1>
                <p className="lead text-white mb-4">
                  Dedicated to excellence in immigration services since 2008
                </p>
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
                <h2 className="section-title">Our Story</h2>
                <p className="lead">
                  Founded in 2008, VSP Visa Consultant Consultants began with a
                  simple mission: to make immigration accessible, transparent,
                  and successful for everyone.
                </p>
                <p>
                  What started as a small consulting firm has grown into one of
                  the most trusted immigration service providers, helping
                  thousands of individuals and families achieve their dreams of
                  living, working, and studying abroad.
                </p>
                <p>
                  Our founder, Maria Rodriguez, immigrated to Canada herself and
                  understood firsthand the challenges faced by newcomers. This
                  personal experience drives our commitment to providing
                  compassionate, expert guidance at every step of the
                  immigration journey.
                </p>
              </div>
              <div className="col-lg-6 story-item">
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-year">2008</div>
                    <div className="timeline-content">
                      <h6>Company Founded</h6>
                      <p>Started with a vision to simplify immigration</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2012</div>
                    <div className="timeline-content">
                      <h6>1000+ Successful Cases</h6>
                      <p>Reached our first major milestone</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2018</div>
                    <div className="timeline-content">
                      <h6>International Recognition</h6>
                      <p>Awarded Best Immigration Consultant</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2025</div>
                    <div className="timeline-content">
                      <h6>5000+ Happy Clients</h6>
                      <p>Continuing to grow and serve</p>
                    </div>
                  </div>
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
              <div className="col-md-6 col-lg-4">
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h5>Integrity</h5>
                  <p>
                    We maintain the highest ethical standards in all our
                    interactions and never compromise on honesty and
                    transparency.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h5>Excellence</h5>
                  <p>
                    We strive for perfection in every application, staying
                    updated with the latest immigration laws and procedures.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-heart"></i>
                  </div>
                  <h5>Compassion</h5>
                  <p>
                    We understand the emotional journey of immigration and
                    provide supportive, caring guidance throughout the process.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h5>Diversity</h5>
                  <p>
                    We celebrate cultural diversity and believe in creating
                    inclusive opportunities for people from all backgrounds.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h5>Innovation</h5>
                  <p>
                    We continuously improve our services and adopt new
                    technologies to enhance the client experience.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h5>Partnership</h5>
                  <p>
                    We build long-term relationships with our clients,
                    supporting them beyond their initial immigration goals.
                  </p>
                </div>
              </div>
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
              <div className="col-md-6 col-lg-4">
                <div className="team-card">
                  <div className="team-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <h5>Maria Rodriguez</h5>
                  <p className="team-role">Founder & CEO</p>
                  <p>
                    Regulated Canadian Immigration Consultant (RCIC) with over
                    15 years of experience. Specializes in Express Entry and
                    Provincial Nominee Programs.
                  </p>
                  <div className="team-credentials">
                    <span className="badge bg-primary me-2">RCIC</span>
                    <span className="badge bg-secondary">ICCRC Member</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="team-card">
                  <div className="team-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <h5>David Chen</h5>
                  <p className="team-role">Senior Immigration Consultant</p>
                  <p>
                    Expert in student visa applications and study permit
                    renewals. Holds advanced certifications in education
                    consulting and immigration law.
                  </p>
                  <div className="team-credentials">
                    <span className="badge bg-primary me-2">RCIC</span>
                    <span className="badge bg-success">
                      Education Specialist
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="team-card">
                  <div className="team-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <h5>Sarah Johnson</h5>
                  <p className="team-role">Work Permit Specialist</p>
                  <p>
                    Focuses on LMIA applications, work permits, and employer
                    compliance. Former government immigration officer with
                    insider knowledge.
                  </p>
                  <div className="team-credentials">
                    <span className="badge bg-primary me-2">RCIC</span>
                    <span className="badge bg-warning">Ex-Government</span>
                  </div>
                </div>
              </div>
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
              <div className="col-md-6 col-lg-3">
                <div className="award-card text-center">
                  <div className="award-icon">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <h6>Best Immigration Consultant</h6>
                  <p className="text-muted">
                    2023 - Immigration Excellence Awards
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="award-card text-center">
                  <div className="award-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <h6>Client Choice Award</h6>
                  <p className="text-muted">2022 - National Business Awards</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="award-card text-center">
                  <div className="award-icon">
                    <i className="fas fa-medal"></i>
                  </div>
                  <h6>Outstanding Service</h6>
                  <p className="text-muted">
                    2021 - Professional Services Council
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="award-card text-center">
                  <div className="award-icon">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <h6>Certified Excellence</h6>
                  <p className="text-muted">
                    2020 - Immigration Consultants Association
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Company;
