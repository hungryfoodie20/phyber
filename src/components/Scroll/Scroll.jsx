import React, { useEffect, useState } from "react";
// import "./scroll.css";

export default function ScrollButton() {
  const [isVisible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const toggleVisible = () => {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="scrollup" onClick={scrollToTop}>
          <span>&lt;--SCROLL UP&lt;--</span>
        </div>
      )}
    </div>
  );
}
