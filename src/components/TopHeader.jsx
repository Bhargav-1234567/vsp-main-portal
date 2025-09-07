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
          <div className="info-item">
            <MapPin size={16} className="icon" />
            <span>
              {siteData?.officeAddress?.split("-")?.[1]} -
              {siteData?.officeAddress?.split("-")?.[2]}
            </span>
          </div>

          {/* Phone */}
          <div className="info-item">
            <Phone size={16} className="icon" />
            <a
              href={`tel:+91${siteData?.phoneNumber
                ?.split("-")?.[0]
                ?.split(" ")
                .join("")}`}
              className="highlight"
            >
              {siteData?.phoneNumber?.split("-")?.[0]}
            </a>
            <span>/</span>
            <a
              href={`tel:+91${siteData?.phoneNumber
                ?.split("-")?.[1]
                ?.split(" ")
                .join("")}`}
              className="highlight"
            >
              {siteData?.phoneNumber?.split("-")?.[1]}
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
        </div>

        {/* Right Section */}
        <div className="action-section">
          {/* <Link to={"/contact"}>
            <button className="inquiry-btn">Inquiry Now</button>
          </Link> */}
          <div className="info-item">
            <Clock size={16} className="icon" />
            <span>{siteData?.BusinessHours}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
