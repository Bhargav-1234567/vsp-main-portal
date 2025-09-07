import React, { useEffect } from "react";

export default function InfinityRippleButton({}) {
  // merge user style but set the CSS var for size

  return (
    <button className="ripple-button">
      Inquiry Now
      <div className="ripple-outer ripple-outer-1"></div>
      <div className="ripple-outer ripple-outer-2"></div>
      <div className="ripple-outer ripple-outer-3"></div>
    </button>
  );
}
