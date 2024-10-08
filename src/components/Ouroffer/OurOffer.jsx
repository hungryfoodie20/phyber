import { serviceOne as data } from "@/data/ouroffer";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function OurOffer() {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active category
  const [activeServices, setActiveServices] = useState(
    data.categories[0].services
  );
  const handleButtonClick = (index) => {
    setActiveIndex(index); // Set the active category index
    setActiveServices(data.categories[index].services); // Update the services based on the selected category
  };
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    setActiveServices(data.categories[index].services);
  };

  const handleHashLinkClick = (e, link) => {
    e.preventDefault();
    const targetElement = document.querySelector(link);
    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 95;
      console.log({ elementPosition, offsetPosition });
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      className="service__area overflow-hidden  pt-110 pb-110"
      id="categories"
    >
      <div className="ouroffer__svgs ">
        <h1 className="ouroffer__topheading fade-slide top">
          {" "}
          Extensive array of tailored care categories{" "}
        </h1>
        <div className="row">
          <div className="col-xl-12">
            <div className="service__title-wrap fade-slide top">
              {data.title && (
                <span
                  className="section-title move-line-3d"
                  style={{
                    fontSize: "22px",
                    fontWeight: "500",
                    margin: "11px auto",
                  }}
                >
                  {data.title.sliceOne}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {data.categories && data.categories.length && (
        <div className="container ouroffer_resp">
          <div className="row justify-content-center mt-5 px-5">
            {data.categories.map((category, index) => (
              <div
                key={index}
                className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-3"
              >
                <button
                  className={`ouroffer__btn w-100 ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  {category.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeServices && activeServices.length && (
        <div
          className="row gy-4 justify-content-center mt-4 py-5 ouroffer_resp"
          style={{ backgroundColor: "#e1edff63" }}
        >
          {activeServices.map((service, index) => (
            <div
              key={index}
              // className={`ouroffer__width col-xl-2 col-lg-3 col-md-5 col-sm-4 mt-0  ${service.animation.name}`}
              className={`ouroffer__width  mt-0  ${service.animation.name}`}
            >
              <div className="ouroffer__item my-3">
                <div className="ouroffer__icon">
                  {service.icon && <img src={service.icon} alt="Icon" />}
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ minHeight: "6rem" }}
                >
                  <div className="ouroffer__title">{service.title}</div>
                  <div className="arrow-container">
                    {data.arrow && (
                      <a
                        href={service.link}
                        onClick={(e) => handleHashLinkClick(e, service.link)}
                      >
                        <img src={data.arrow} alt="Arrow" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* <div className="shadow-container">
        <div className="shadowed-element">Content here</div>
      </div> */}

      {data.categories && data.categories.length && (
        <div className="container ouroffer_resp_small">
          {/* Map over categories */}
          {data.categories.map((category, categoryIndex) => (
            <>
              <div className="row justify-content-center mt-5 px-5">
                <div
                  key={categoryIndex}
                  className="col-lg-8 col-md-8 col-sm-8 mb-3"
                >
                  {/* Display category name */}
                  <div
                    className="ouroffer__btn w-100 active"
                    // onClick={() => handleButtonClick(categoryIndex)}
                    // onMouseEnter={() => handleMouseEnter(categoryIndex)}
                  >
                    {category.name}
                  </div>
                </div>
              </div>
              {/* Display services for each category */}
              <div
                className="row gy-4 justify-content-center mt-4 py-5"
                style={{ backgroundColor: "#e1edff63" }}
              >
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className={`ouroffer__width mt-0 ${service.animation.name}`}
                  >
                    <div className="ouroffer__item my-3">
                      <div className="ouroffer__icon">
                        {service.icon && <img src={service.icon} alt="Icon" />}
                      </div>
                      <div
                        className="d-flex align-items-center"
                        style={{ minHeight: "6rem" }}
                      >
                        <div className="ouroffer__title">{service.title}</div>
                        <div className="arrow-container">
                          {data.arrow && (
                            <a
                              href={service.link}
                              onClick={(e) =>
                                handleHashLinkClick(e, service.link)
                              }
                            >
                              <img src={data.arrow} alt="Arrow" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      )}
    </section>
  );
}
