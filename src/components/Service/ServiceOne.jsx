import { serviceOne as data } from "@/data/service";

export default function ServiceOne() {
  return (
    <section className="service__area pt-110 pb-110 overflow-hidden" id="benefits" style={{
  // <section className="service__area pt-110 pb-110 overflow-hidden" id="benefits" style={{height: "100vh",
    backgroundColor: "rgba(225, 237, 255, 0.39)"}}>
      <div>
        <div className="row">
          <div className="col-xl-12">
            <div className="service__title-wrap fade-slide top">
              {data.title && (
                <span
                  className="section-title move-line-3d "
                  style={{
                    fontSize: "2rem",
                    margin: "11px auto",
                    borderRadius: "13px",
                  }}
                >
                  {data.title.sliceOne}
                </span>
              )}
            </div>
          </div>
        </div>
        {data.services && data.services.length && (
          <div
            className="row gy-4 justify-content-center py-5"
            style={{ backgroundColor: "var(--primary)" }}
          >
            {data.services.map((service, index) => (
              <div
                key={index}
                className={`col-xl-2 col-lg-3 col-md-5 col-sm-5 ${service.animation.name}`}
              >
                <div className={`service__item ${service.classNames}`}>
                  <div className="service__icon">
                    {service.icon && <img src={service.icon} alt="Icon" />}
                  </div>
                  <h3 className="service__title">{service.title}</h3>
                  {service.description && <p>{service.description}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
