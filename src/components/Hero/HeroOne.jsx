import { Link } from "react-router-dom";
import DocImg from "@/assets/imgs/hero/hero1.png";
export default function Hero() {
  return (
    <section className="text-white pt-5 mt-5 overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 text-center text-lg-start fade-slide left">
            <h1 className="display-4 fw-bold mb-5 font-poppins heroColor">
              On Demand Care,{" "}
              <span className=" fw-medium heroColorSecoundry">anywhere</span>.
            </h1>
            <p className="lead mb-5 text-dark">
              Add on-demand care to your health plans for a highly personalized
              experience. Perfect for individuals and businesses, it provides
              tailored solutions to meet diverse needs.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3">
              <Link to="/get-started">
                <button className="btn btn-lg px-4">Get Started</button>
              </Link>
              <Link to="/know-more">
                <button className="btn btn-primary btn-lg px-4">
                  Know More
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section: Image */}
          {/* <div className="col-lg-6 text-center text-lg-end mt-5 mt-lg-0">
            <img
              src={DocImg} // Replace with the path to your image
              alt="Doctor"
              className="img-fluid "
              style={{paddingRight: "0px", width:"100%"}}
            />
          </div> */}
          {/* <div
            className="col-lg-6 position-relative mt-5 mt-lg-0"
            style={{ height: "100%" }}
          >
            <img
              src={DocImg} // Replace with the path to your image
              alt="Doctor"
              className="img-fluid position-absolute"
              style={{ maxWidth: "100%", bottom: "-180px", right: "-2px"}}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
