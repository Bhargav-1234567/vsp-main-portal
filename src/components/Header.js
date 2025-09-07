import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
const apiBase = process.env.REACT_APP_API_URL;

const Header = ({ isScrolled, currentPath }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false); // Close menu
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // Check if we're in mobile view
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 992);
    };

    checkMobileView();
    window.addEventListener("resize", checkMobileView);

    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close any open dropdowns when mobile menu is toggled
    if (!isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (dropdownName) => {
    if (isMobileView) {
      // For mobile, toggle on click
      if (activeDropdown === dropdownName) {
        setActiveDropdown(null);
      } else {
        setActiveDropdown(dropdownName);
      }
    } else {
      // For desktop, only set on hover (handled by CSS)
      // But we'll keep track of the active dropdown for styling
      setActiveDropdown(dropdownName);
    }
  };

  const handleDropdownHover = (dropdownName) => {
    if (!isMobileView) {
      setActiveDropdown(dropdownName);
    }
  };

  const handleDropdownLeave = () => {
    if (!isMobileView) {
      // Add a small delay to prevent flickering when moving to dropdown
      setTimeout(() => {
        setActiveDropdown(null);
      }, 200);
    }
  };

  const handleLinkClick = () => {
    closeMobileMenu();
    setActiveDropdown(null);
  };

  const isActive = (path) => currentPath === path;

  let temp = {
    home: {
      sliderItems: [{ mainTitle: "", subTitle: "", description: "", link: "" }],
      expertise: {
        subTitle: "",
        items: [
          {
            title: "",
            description: "",
          },
        ],
      },
      whyChoose: [
        {
          title: "",
          description: "",
        },
      ],
      numerics: [{ label: "", count: 0 }],
    },
    company: {
      mainTitle: "",
      subTitle: "",
      ourStory: {
        mainTitle: "",
        subTitle: "",
      },
      companyHistory: [
        {
          year: "",
          title: "",
          description: "",
        },
      ],
      coreValues: [
        {
          title: "",
          description: "",
        },
      ],
      expertTeam: [
        {
          name: "",
          position: "",
          description: "",
          labels: [{ color: "", label: "" }],
        },
      ],
      awards: [
        {
          title: "",
          description: "",
        },
      ],
    },
    services: {
      mainTitle: "",
      subTitle: "",
      services: [{ title: "", description: "", infoPoints: [], price: "0.00" }],
      process: [{ title: "", description: "" }],
    },
    testimonials: {
      numerics: [{ label: "", count: 0 }],
      clientReview: [
        {
          name: "",
          position: "",
          rating: "",
          dateTime: "",
          tag: {
            label: "",
            color: "",
          },
        },
      ],
      moreClientReview: [
        {
          name: "",
          position: "",
          rating: "",
          dateTime: "",
          tag: {
            label: "",
            color: "",
          },
        },
      ],
      videos: [
        {
          urL: "",
          title: "",
          duration: "",
          subTitle: "",
          description: "",
        },
      ],
      reviewByService: [
        {
          title: "",
          rating: "",
          review: "",
          name: "",
        },
      ],
    },
    blog: {},
    contact: {
      officeAddress: "",
      phoneNumber: "",
      emailAddress: "",
      BusinessHours: "",
    },
  };

  return (
    <>
      <style>
        {`
          /* Desktop hover styles */
          @media (min-width: 992px) {
            .nav-item.dropdown:hover .dropdown-menu {
              display: block;
              opacity: 1;
              visibility: visible;
              transform: translateY(0);
            }
            
            .dropdown-menu {
              display: block;
              opacity: 0;
              visibility: hidden;
              transform: translateY(10px);
              transition: all 0.3s ease;
            }
            
            .dropdown-menu.show {
              opacity: 1;
              visibility: visible;
              transform: translateY(0);
            }
            
            .mega-dropdown {
              width: 100%;
              left: 0;
              right: 0;
            }
          }
          
          /* Mobile styles */
          @media (max-width: 991.98px) {
            .dropdown-menu {
              border: none;
              padding-left: 1rem;
            }
            
            .dropdown-menu .container {
              padding: 0;
            }
            
            .dropdown-menu .row {
              margin: 0;
            }
            
            .dropdown-menu .col-md-3,
            .dropdown-menu .col-md-4 {
              padding: 0;
              margin-bottom: 1rem;
            }
            
            .dropdown-header {
              padding-left: 0;
              font-weight: bold;
              color: #333;
              margin-top: 0.5rem;
            }
          }
          
          /* General styles */
          .navbar-nav .nav-link {
            position: relative;
          }
          
          .dropdown-toggle {
            background: none;
            border: none;
            cursor: pointer;
          }
          
          .dropdown-toggle:after {
            display: inline-block;
            margin-left: 0.255em;
            vertical-align: 0.255em;
            content: "";
            border-top: 0.3em solid;
            border-right: 0.3em solid transparent;
            border-bottom: 0;
            border-left: 0.3em solid transparent;
          }
          
          .mega-dropdown {
            padding: 1rem;
            border-radius: 0.375rem;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          }
        `}
      </style>

      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top ${
          isScrolled ? "scrolled" : ""
        }`}
        ref={dropdownRef}
      >
        <div className="align-items-center d-flex justify-content-between mx-md-5 w-100">
          <Link
            className="navbar-brand fw-bold text-primary"
            to="/"
            onClick={handleLinkClick}
          >
            <img
              src={`${apiBase}/images/logo.png`}
              height="45"
              alt="VSP Visa Consultant"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            ref={menuRef}
            className={`collapse navbar-collapse ${
              isMobileMenuOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-close-icon"
            >
              <i className="fa fa-xmark"></i>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                  to="/"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              {/* Services Dropdown */}
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownHover("services")}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  className={`nav-link ${
                    isActive("/services") ? "active" : ""
                  }`}
                  to="/services"
                  onClick={handleLinkClick}
                  aria-expanded={activeDropdown === "services"}
                >
                  Services
                </Link>

                <ul
                  className={`dropdown-menu mega-dropdown ${
                    activeDropdown === "services" ? "show" : ""
                  }`}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <h6 className="dropdown-header">Immigration</h6>
                        <Link
                          className="dropdown-item"
                          to="/services#permanent-residence"
                          onClick={handleLinkClick}
                        >
                          Permanent Residence
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/services#family-sponsorship"
                          onClick={handleLinkClick}
                        >
                          Family Sponsorship
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/services#express-entry"
                          onClick={handleLinkClick}
                        >
                          Express Entry
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/services#pnp"
                          onClick={handleLinkClick}
                        >
                          Provincial Nominee
                        </Link>
                      </div>
                      <div className="col-md-3">
                        <h6 className="dropdown-header">Study Abroad</h6>
                        <Link
                          className="dropdown-item"
                          to="/services#student-visa"
                          onClick={handleLinkClick}
                        >
                          Student Visa
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/services#university-admission"
                          onClick={handleLinkClick}
                        >
                          University Admission
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/services#scholarship"
                          onClick={handleLinkClick}
                        >
                          Scholarship Guidance
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/services#post-graduation"
                          onClick={handleLinkClick}
                        >
                          Post-Graduation Work
                        </Link>
                      </div>
                      <div className="col-md-3">
                        <h6 className="dropdown-header">Work Permits</h6>
                        <Link
                          className="dropdown-item"
                          to="/services#temporary-work"
                          onClick={handleLinkClick}
                        >
                          Temporary Work Permit
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/services#lmia"
                          onClick={handleLinkClick}
                        >
                          LMIA Services
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/services#intra-company"
                          onClick={handleLinkClick}
                        >
                          Intra-Company Transfer
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/services#startup-visa"
                          onClick={handleLinkClick}
                        >
                          Startup Visa
                        </Link>
                      </div>
                      <div className="col-md-3">
                        <h6 className="dropdown-header">Other Services</h6>
                        <Link
                          className="dropdown-item"
                          to="/services#visitor-visa"
                          onClick={handleLinkClick}
                        >
                          Visitor Visa
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/services#citizenship"
                          onClick={handleLinkClick}
                        >
                          Citizenship
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/services#document-preparation"
                          onClick={handleLinkClick}
                        >
                          Document Preparation
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/services#consultation"
                          onClick={handleLinkClick}
                        >
                          Free Consultation
                        </Link>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>

              {/* Company Dropdown */}
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownHover("company")}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  className={`nav-link ${isActive("/company") ? "active" : ""}`}
                  to="/company"
                  onClick={handleLinkClick}
                  aria-expanded={activeDropdown === "company"}
                >
                  Company
                </Link>

                <ul
                  className={`dropdown-menu mega-dropdown ${
                    activeDropdown === "company" ? "show" : ""
                  }`}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <h6 className="dropdown-header">About Us</h6>
                        <Link
                          className="dropdown-item"
                          to="/company#about"
                          onClick={handleLinkClick}
                        >
                          Our Story
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/company#mission"
                          onClick={handleLinkClick}
                        >
                          Mission & Vision
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/company#values"
                          onClick={handleLinkClick}
                        >
                          Our Values
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <h6 className="dropdown-header">Team</h6>
                        <Link
                          className="dropdown-item"
                          to="/company#team"
                          onClick={handleLinkClick}
                        >
                          Our Experts
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/company#advisors"
                          onClick={handleLinkClick}
                        >
                          Advisory Board
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/company#careers"
                          onClick={handleLinkClick}
                        >
                          Careers
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <h6 className="dropdown-header">Recognition</h6>
                        <Link
                          className="dropdown-item"
                          to="/company#awards"
                          onClick={handleLinkClick}
                        >
                          Awards
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/company#certifications"
                          onClick={handleLinkClick}
                        >
                          Certifications
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/company#partnerships"
                          onClick={handleLinkClick}
                        >
                          Partnerships
                        </Link>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    isActive("/testimonials") ? "active" : ""
                  }`}
                  to="/testimonials"
                  onClick={handleLinkClick}
                >
                  Testimonials
                </Link>
              </li>

              {/* Blog Dropdown */}
              {/* <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownHover("blog")}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  className={`nav-link ${isActive("/blog") ? "active" : ""}`}
                  to="/blog"
                  onClick={handleLinkClick}
                  aria-expanded={activeDropdown === "blog"}
                >
                  Blog
                </Link>
                <ul
                  className={`dropdown-menu mega-dropdown ${
                    activeDropdown === "blog" ? "show" : ""
                  }`}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <h6 className="dropdown-header">Immigration News</h6>
                        <Link
                          className="dropdown-item"
                          to="/blog#policy-updates"
                          onClick={handleLinkClick}
                        >
                          Policy Updates
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/blog#new-programs"
                          onClick={handleLinkClick}
                        >
                          New Programs
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/blog#processing-times"
                          onClick={handleLinkClick}
                        >
                          Processing Times
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <h6 className="dropdown-header">Guides & Tips</h6>
                        <Link
                          className="dropdown-item"
                          to="/blog#application-tips"
                          onClick={handleLinkClick}
                        >
                          Application Tips
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/blog#document-checklist"
                          onClick={handleLinkClick}
                        >
                          Document Checklist
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/blog#interview-prep"
                          onClick={handleLinkClick}
                        >
                          Interview Preparation
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <h6 className="dropdown-header">Success Stories</h6>
                        <Link
                          className="dropdown-item"
                          to="/blog#case-studies"
                          onClick={handleLinkClick}
                        >
                          Case Studies
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/blog#client-experiences"
                          onClick={handleLinkClick}
                        >
                          Client Experiences
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/blog#video-testimonials"
                          onClick={handleLinkClick}
                        >
                          Video Testimonials
                        </Link>
                      </div>
                    </div>
                  </div>
                </ul>
              </li> */}

              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                  to="/contact"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
