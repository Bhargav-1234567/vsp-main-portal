import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Testimonials = () => {
  const [clients, setClients] = useState(0);
  const [success, setSuccess] = useState(0);
  const [countries, setCountries] = useState(0);
  const [experience, setExperience] = useState(0);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateCounter = (endValue, setter, trigger) => {
      const obj = { val: 0 }; // dummy object

      gsap.to(obj, {
        val: endValue,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          setter(Math.round(obj.val));
        },
      });
    };

    animateCounter(500, setClients, ".stat-item-white:nth-child(1)");
    animateCounter(98, setSuccess, ".stat-item-white:nth-child(2)");
    animateCounter(50, setCountries, ".stat-item-white:nth-child(3)");
    animateCounter(15, setExperience, ".stat-item-white:nth-child(4)");
  }, []);

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
              <div className="col-md-3">
                <div className="stat-item-white">
                  <h2 className="display-4 fw-bold number-counter">
                    {clients}+
                  </h2>
                  <p className="lead">Happy Clients</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="stat-item-white">
                  <div className="d-flex justify-content-center">
                    <h2 className="display-4 fw-bold number-counter">
                      {success}
                    </h2>
                    <h2 className="display-4 fw-bold">%</h2>
                  </div>
                  <p className="lead">Success Rate</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="stat-item-white">
                  <h2 className="display-4 fw-bold number-counter">
                    {countries}+
                  </h2>
                  <p className="lead">Countries</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="stat-item-white">
                  <h2 className="display-4 fw-bold number-counter">
                    {experience}+
                  </h2>
                  <p className="lead">Years Experience</p>
                </div>
              </div>
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
              <div className="col-lg-4">
                <div className="testimonial-card featured">
                  <div className="testimonial-header">
                    <div className="client-avatar">
                      <i className="fas fa-user-circle"></i>
                    </div>
                    <div className="client-info">
                      <h6>Priya Sharma</h6>
                      <span className="text-muted">Software Engineer</span>
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
                    <p>
                      "VSP Visa Consultant made my dream of moving to Canada a
                      reality. Maria's expertise in Express Entry was
                      exceptional. She guided me through every step, from
                      improving my CRS score to preparing for the application. I
                      received my ITA within 6 months!"
                    </p>
                    <div className="testimonial-meta">
                      <span className="badge bg-success">
                        Express Entry - Approved
                      </span>
                      <span className="text-muted">• January 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="testimonial-card featured">
                  <div className="testimonial-header">
                    <div className="client-avatar">
                      <i className="fas fa-user-circle"></i>
                    </div>
                    <div className="client-info">
                      <h6>James Mitchell</h6>
                      <span className="text-muted">Graduate Student</span>
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
                    <p>
                      "David helped me secure admission to my dream university
                      and navigate the student visa process. The scholarship
                      guidance was invaluable - I received a 50% tuition waiver!
                      The support continued even after I arrived in Canada."
                    </p>
                    <div className="testimonial-meta">
                      <span className="badge bg-info">
                        Student Visa - Approved
                      </span>
                      <span className="text-muted">• September 2023</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="testimonial-card featured">
                  <div className="testimonial-header">
                    <div className="client-avatar">
                      <i className="fas fa-user-circle"></i>
                    </div>
                    <div className="client-info">
                      <h6>Anna & Michael Weber</h6>
                      <span className="text-muted">
                        Couple - Family Sponsorship
                      </span>
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
                    <p>
                      "We thought family sponsorship would be impossible, but
                      Visa Express proved us wrong. They handled the complex
                      paperwork and helped us reunite with Michael's parents in
                      Canada. Professional, compassionate, and results-driven!"
                    </p>
                    <div className="testimonial-meta">
                      <span className="badge bg-warning">
                        Family Sponsorship - Approved
                      </span>
                      <span className="text-muted">• March 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="client-avatar">
                      <i className="fas fa-user-circle"></i>
                    </div>
                    <div className="client-info">
                      <h6>Roberto Silva</h6>
                      <span className="text-muted">Business Owner</span>
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
                    <p>
                      "The startup visa program seemed overwhelming until I
                      found VSP Visa Consultant. They connected me with the
                      right investors and helped craft a compelling business
                      plan. My tech startup is now thriving in Toronto!"
                    </p>
                    <div className="testimonial-meta">
                      <span className="badge bg-purple">
                        Startup Visa - Approved
                      </span>
                      <span className="text-muted">• November 2023</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="client-avatar">
                      <i className="fas fa-user-circle"></i>
                    </div>
                    <div className="client-info">
                      <h6>Li Wei Chen</h6>
                      <span className="text-muted">
                        Healthcare Professional
                      </span>
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
                    <p>
                      "Sarah's expertise in work permits was exactly what I
                      needed. The LMIA process was handled flawlessly, and I'm
                      now working as a registered nurse in Vancouver. The
                      attention to detail was impressive."
                    </p>
                    <div className="testimonial-meta">
                      <span className="badge bg-primary">
                        Work Permit - Approved
                      </span>
                      <span className="text-muted">• December 2023</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="client-avatar">
                      <i className="fas fa-user-circle"></i>
                    </div>
                    <div className="client-info">
                      <h6>Emma Thompson</h6>
                      <span className="text-muted">International Student</span>
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
                    <p>
                      "From study permit to post-graduation work permit, Visa
                      Express was with me every step of the way. They even
                      helped me transition to permanent residence through the
                      Canadian Experience Class. Highly recommended!"
                    </p>
                    <div className="testimonial-meta">
                      <span className="badge bg-secondary">
                        PGWP → PR - Approved
                      </span>
                      <span className="text-muted">• February 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="client-avatar">
                      <i className="fas fa-user-circle"></i>
                    </div>
                    <div className="client-info">
                      <h6>Ahmed Hassan</h6>
                      <span className="text-muted">Engineer</span>
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
                    <p>
                      "The Provincial Nominee Program seemed complex, but Maria
                      made it simple. She identified the best province for my
                      profile and guided me through Ontario's nomination
                      process. I'm now a permanent resident!"
                    </p>
                    <div className="testimonial-meta">
                      <span className="badge bg-success">PNP - Approved</span>
                      <span className="text-muted">• January 2024</span>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="col-lg-4">
                <div className="video-testimonial-card">
                  <div className="video-placeholder">
                    <i className="fas fa-play-circle"></i>
                    <div className="video-overlay">
                      <h6>Priya's Express Entry Success</h6>
                      <p>3:45 minutes</p>
                    </div>
                  </div>
                  <div className="video-info">
                    <h6>From India to Canada: A Software Engineer's Journey</h6>
                    <p className="text-muted">
                      Priya shares how VSP Visa Consultant helped her navigate
                      the Express Entry process and achieve her Canadian dream.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="video-testimonial-card">
                  <div className="video-placeholder">
                    <i className="fas fa-play-circle"></i>
                    <div className="video-overlay">
                      <h6>Family Reunion Success</h6>
                      <p>4:12 minutes</p>
                    </div>
                  </div>
                  <div className="video-info">
                    <h6>Bringing Parents to Canada</h6>
                    <p className="text-muted">
                      The Weber family explains how family sponsorship helped
                      them reunite with elderly parents in Canada.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="video-testimonial-card">
                  <div className="video-placeholder">
                    <i className="fas fa-play-circle"></i>
                    <div className="video-overlay">
                      <h6>Student to Resident</h6>
                      <p>5:23 minutes</p>
                    </div>
                  </div>
                  <div className="video-info">
                    <h6>From Student Visa to Permanent Residence</h6>
                    <p className="text-muted">
                      Emma's complete journey from international student to
                      Canadian permanent resident with continuous support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title">Reviews by Service Category</h2>
            </div>

            <div className="row">
              <div className="col-lg-3 mb-4">
                <div className="category-review-card">
                  <div className="category-header">
                    <i className="fas fa-passport"></i>
                    <h5>Immigration</h5>
                    <div className="rating-large">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span className="rating-number">4.9/5</span>
                    </div>
                  </div>
                  <p className="review-count">Based on 1,250+ reviews</p>
                  <div className="recent-review">
                    <p className="small">
                      "Outstanding service for Express Entry applications.
                      Professional and thorough."
                    </p>
                    <span className="review-author">- Sarah K.</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mb-4">
                <div className="category-review-card">
                  <div className="category-header">
                    <i className="fas fa-graduation-cap"></i>
                    <h5>Study Abroad</h5>
                    <div className="rating-large">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span className="rating-number">4.8/5</span>
                    </div>
                  </div>
                  <p className="review-count">Based on 850+ reviews</p>
                  <div className="recent-review">
                    <p className="small">
                      "Helped me get into my dream university with a
                      scholarship. Amazing support!"
                    </p>
                    <span className="review-author">- Mike R.</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mb-4">
                <div className="category-review-card">
                  <div className="category-header">
                    <i className="fas fa-briefcase"></i>
                    <h5>Work Permits</h5>
                    <div className="rating-large">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span className="rating-number">4.9/5</span>
                    </div>
                  </div>
                  <p className="review-count">Based on 650+ reviews</p>
                  <div className="recent-review">
                    <p className="small">
                      "LMIA process was handled perfectly. Now working in my
                      dream job in Canada."
                    </p>
                    <span className="review-author">- Chen L.</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mb-4">
                <div className="category-review-card">
                  <div className="category-header">
                    <i className="fas fa-users"></i>
                    <h5>Family Sponsorship</h5>
                    <div className="rating-large">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span className="rating-number">4.9/5</span>
                    </div>
                  </div>
                  <p className="review-count">Based on 420+ reviews</p>
                  <div className="recent-review">
                    <p className="small">
                      "Reunited with my family thanks to their expert guidance.
                      Highly emotional and professional service."
                    </p>
                    <span className="review-author">- Ana M.</span>
                  </div>
                </div>
              </div>
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
