// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
// import DocImg from "@/assets/imgs/hero/hero1.png";
import DocImgLarge from "@/assets/imgs/hero/hero1.png";
import DocImgMedium from "@/assets/imgs/hero/hero-md.png";
export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const handleHashLinkClick = (e, link) => {
  //   e.preventDefault();
  //   const targetElement = document.querySelector(link);
  //   if (targetElement) {
  //     const elementPosition =
  //       targetElement.getBoundingClientRect().top + window.pageYOffset;
  //     const offsetPosition = elementPosition - 95;
  //     console.log({ elementPosition, offsetPosition });
  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const handleHashLinkClick = (e, link) => {
    e.preventDefault(); // Prevent the default hash behavior

    const targetElement = document.querySelector(link);

    if (targetElement) {
      // Get the top position of the target element relative to the document
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;

      // Calculate the scroll position with a 5rem (80px) offset
      const offsetPosition = elementPosition - 95; // Adjust 80px based on 5rem

      // Scroll to the calculated position smoothly
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Choose images based on screen width
  const getImageSource = () => {
    if (windowWidth < 992) {
      return DocImgMedium; // Medium screen image (md)
    } else {
      return DocImgLarge; // Large screen image (lg)
    }
  };

  return (
    <section
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#D0E5FF" }}
    >
      <div className="container hero-contain">
        <div className="row mobile-bg">
          {/* Left Section: Center Vertically */}
          <div className="col-lg-6 d-flex justify-content-center flex-column text-center text-lg-start fade-slide left">
            <h1
              className="display-4 fw-bold mb-5 font-poppins heroColor heropad"
              // style={{ marginTop: "6rem" }}
            >
              On Demand Care,{" "}
              <span className="fw-medium heroColorSecoundry">anywhere</span>!
            </h1>
            <p className="lead mb-5 text-dark" style={{ fontWeight: "300" }}>
              Upgrade your health plans with phyber’s on-demand care, designed
              for individuals and businesses. The most seamless solution for
              integrating personalized care into your life.
            </p>
            <div className="d-flex mb-3 justify-content-center justify-content-lg-start gap-3">
              {/* <HashLink smooth  to="/#contactus">
                <button className="btn btn-lg px-4">Get Started</button>
              </HashLink> */}
              <button
                className="btn btn-lg px-4"
                onClick={(e) => handleHashLinkClick(e, "#contactus")}
              >
                Get Started
              </button>

              <button
                // className="btn btn-primary btn-lg hero-btn"
                className="btn btn-primary btn-lg px-4"
                onClick={(e) => handleHashLinkClick(e, "#contactus")}
              >
                Know More
              </button>
            </div>
          </div>

          {/* Right Section: Align at Bottom */}
          <div className="col-lg-6 heroimg d-flex hero-img-pos  align-items-end text-center text-lg-end fade-slide right">
            {/* <img
              src={DocImg} // Replace with the path to your image
              alt="Doctor"
              className="img-fluid"
              style={{ width: "100%" }}
            /> */}
            <img
              src={getImageSource()}
              alt="Doctor"
              className="img-fluid img-responponsive-mac"
              // style={{ marginTop: "6rem" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
