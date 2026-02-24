import React from "react";
import { useSelector } from "react-redux";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  const siteData = useSelector((state) => state.json.siteData.contact);

  return (
    <header className="top-header light">
      <div className="content-container  mx-md-5">
        {/* Left Section */}
        <div className="info-section">
          {/* Address */}

          {/* Phone */}
          <div className="info-item">
            <Phone size={16} className="icon" />
            <a
              href={`tel:+91${siteData?.phoneNumber}`}
              className="highlight"
            >
              {siteData?.phoneNumber}
            </a>

          </div>

          {/* Email */}
          <div className="info-item">
            <Mail size={16} className="icon" />
            <a href={`mailto:${siteData?.emailAddress}`} className="highlight">
              {siteData?.emailAddress}
            </a>
          </div>

          {/* Business Hours */}
          <div className="info-item">
            <Clock size={16} className="icon" />
            <span>{siteData?.BusinessHours}</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="action-section">
          <a
            href={siteData?.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="icon facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
          </a>
          <a
            href={siteData?.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="icon instagram">
              <i class="fa-brands fa-instagram"></i>
            </div>
          </a>
          <a href={siteData?.twitter} target="_blank" rel="noopener noreferrer">
            <div class="icon twitter">
              <i class="fa-brands fa-x-twitter"></i>
            </div>
          </a>
          <a
            href={siteData?.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="icon whatsapp">
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </a>
          <a
            href={siteData?.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="icon linkedin">
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
