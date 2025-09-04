import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
const apiBase = process.env.REACT_APP_API_URL;

const Contact = () => {
  const siteData = useSelector((state) => state.json.siteData.contact);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    contactPreference: "email",
  });

  // Load reCAPTCHA script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setRecaptchaLoaded(true);
      console.log("reCAPTCHA loaded");
    };
    document.head.appendChild(script);

    return () => {
      // Clean up
      const existingScript = document.querySelector(
        'script[src^="https://www.google.com/recaptcha/api.js"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const executeRecaptcha = async () => {
    if (!window.grecaptcha || !recaptchaLoaded) {
      console.error("reCAPTCHA not loaded yet");
      return null;
    }

    try {
      const token = await window.grecaptcha.execute(
        process.env.REACT_APP_RECAPTCHA_SITE_KEY,
        { action: "submit" }
      );
      return token;
    } catch (error) {
      console.error("reCAPTCHA execution failed", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Execute reCAPTCHA
    const token = await executeRecaptcha();

    if (!token) {
      toast.warning("Please verify you're not a robot");
      // alert("Please verify you're not a robot");
      return;
    }

    // Add token to form data
    const formDataWithRecaptcha = {
      ...formData,
      recaptchaToken: token,
    };

    try {
      // Show loading state
      setSubmitting(true);

      // Send data to backend
      const response = await fetch(`${apiBase}/create-inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWithRecaptcha),
      });

      const result = await response.json();

      if (response.ok) {
        // Success - show success message and reset form
        toast.success("Thank you for your inquiry! We will contact you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          contactPreference: "email",
        });
      } else {
        // Error from server
        toast.error(`Error: ${result.error || "Failed to submit inquiry"}`);
      }
    } catch (error) {
      // Network error or other issues
      console.error("Submission error:", error);
      toast.error("Failed to submit inquiry. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <section className="banner-section contact-banner-section">
        <div className="banner-image">
          <img
            src="/images/banner-contact.svg"
            alt="Contact Us"
            className="img-fluid w-100"
          />
        </div>
        <div className="banner-overlay">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold text-white mb-4">
                  Contact Us
                </h1>
                <p className="lead text-white mb-4">
                  Get in touch with our immigration experts for personalized
                  guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="container py-5">
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-8 mb-5">
              <div className="consultation-form-card">
                <h3 className="mb-4">Free Consultation Form</h3>
                <form onSubmit={handleSubmit} className="consultation-form">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={submitting}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastName" className="form-label">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={submitting}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={submitting}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={submitting}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="service" className="form-label">
                      Service Required
                    </label>
                    <select
                      className="form-select"
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      disabled={submitting}
                    >
                      <option value="">Select a service</option>
                      <option value="immigration">Immigration Services</option>
                      <option value="study-abroad">Study Abroad</option>
                      <option value="work-permit">Work Permits</option>
                      <option value="visitor-visa">Visitor Visa</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please describe your immigration needs..."
                      disabled={submitting}
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">
                      Preferred Contact Method
                    </label>
                    <div className="contact-preferences">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="contactPreference"
                          id="emailPref"
                          value="email"
                          checked={formData.contactPreference === "email"}
                          onChange={handleChange}
                          disabled={submitting}
                        />
                        <label className="form-check-label" htmlFor="emailPref">
                          Email
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="contactPreference"
                          id="phonePref"
                          value="phone"
                          checked={formData.contactPreference === "phone"}
                          onChange={handleChange}
                          disabled={submitting}
                        />
                        <label className="form-check-label" htmlFor="phonePref">
                          Phone
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* reCAPTCHA v3 - invisible */}
                  {recaptchaLoaded && (
                    <div
                      className="g-recaptcha"
                      data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                      data-size="invisible"
                    ></div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Submitting...
                      </>
                    ) : (
                      "Submit Consultation Request"
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-4">
              <div className="contact-info-section">
                <h3 className="mb-4">Get in Touch</h3>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-item-details">
                    <h6>Office Address</h6>
                    <p>{siteData?.officeAddress}</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-item-details">
                    <h6>Phone Numbers</h6>
                    <p>
                      <a
                        href={`tel:+91${siteData?.phoneNumber
                          ?.split("-")?.[0]
                          ?.split(" ")
                          .join()}`}
                      >
                        {siteData?.phoneNumber?.split("-")?.[0]}
                      </a>{" "}
                      -{" "}
                      <a
                        href={`tel:+91${siteData?.phoneNumber
                          ?.split("-")?.[1]
                          ?.split(" ")
                          .join()}`}
                      >
                        {siteData?.phoneNumber?.split("-")?.[1]}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-item-details">
                    <h6>Email Address</h6>
                    <p>
                      <a href={`mailto:${siteData?.emailAddress}`}>
                        {siteData?.emailAddress}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-item-details">
                    <h6>Business Hours</h6>
                    <p>{siteData?.BusinessHours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
