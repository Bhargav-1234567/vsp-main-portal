import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const siteData = useSelector((state) => state.json.siteData.contact);

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3">
              <i className="fas fa-globe-americas me-2"></i>VSP Visa Consultant
            </h5>
            <p>
              Your trusted partner for immigration and visa consultation
              services. We help make your dreams of studying, working, or living
              abroad a reality.
            </p>
            <div className="social-links">
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white-50">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/company" className="text-white-50">
                  Company
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white-50">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-white-50">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white-50">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white-50">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/services#permanent-residence"
                  className="text-white-50"
                >
                  Permanent Residence
                </Link>
              </li>
              <li>
                <Link to="/services#student-visa" className="text-white-50">
                  Student Visa
                </Link>
              </li>
              <li>
                <Link to="/services#work-permits" className="text-white-50">
                  Work Permits
                </Link>
              </li>
              <li>
                <Link to="/services#visitor-visa" className="text-white-50">
                  Visitor Visa
                </Link>
              </li>
              <li>
                <Link
                  to="/services#family-sponsorship"
                  className="text-white-50"
                >
                  Family Sponsorship
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 mb-4">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <div className="contact-info">
              <p>
                <i className="fas fa-map-marker-alt me-2"></i>
                {siteData?.officeAddress}
              </p>
              <p>
                <i className="fas fa-phone me-2"></i>
                <a
                  className="text-decoration-none text-primary"
                  href={`tel:+91${siteData?.phoneNumber
                    ?.split("-")?.[0]
                    ?.split(" ")
                    .join()}`}
                >
                  {siteData?.phoneNumber?.split("-")?.[0]}
                </a>{" "}
                -{" "}
                <a
                  className="text-decoration-none text-primary"
                  href={`tel:+91${siteData?.phoneNumber
                    ?.split("-")?.[1]
                    ?.split(" ")
                    .join()}`}
                >
                  {siteData?.phoneNumber?.split("-")?.[1]}
                </a>
              </p>
              <p>
                <i className="fas fa-envelope me-2"></i>
                <a
                  className="text-decoration-none text-primary"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteData?.emailAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteData?.emailAddress}
                </a>
              </p>
              <p>
                <i className="fas fa-clock me-2"></i>
                {siteData?.BusinessHours}
              </p>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">
              &copy; 2025 VSP Visa Consultant Consultants. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-white-50 me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-white-50 me-3">
              Terms of Service
            </a>
            <a href="#" className="text-white-50">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
