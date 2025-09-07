import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function InfinityRippleButton({}) {
  // merge user style but set the CSS var for size

  return (
    <Link to={"/contact"}>
      <button className="ripple-button">
        Inquiry Now
        <div className="ripple-outer ripple-outer-1"></div>
        <div className="ripple-outer ripple-outer-2"></div>
        <div className="ripple-outer ripple-outer-3"></div>
      </button>
    </Link>
  );
}
