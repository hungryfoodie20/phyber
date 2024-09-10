import { serviceOne as data } from "@/data/knowus";

export default function knowusOne() {
  return (
    <section
      className="service__area pt-110 pb-110 overflow-hidden shadow-container"
      id="about_Us"
    >
      <div className=" knowus__bg">
        <div className="row">
          <div className="col-xl-12">
            <div className="knowus__title-wrap">
              {data.title && (
                <h2
                  className="section-title move-line-3d"
                  style={{
                    margin: "11px auto",
                  }}
                >
                  {data.title.sliceOne}
                </h2>
              )}
            </div>
          </div>
        </div>

        <div
          className="row gy-4 justify-content-center"
          style={{ position: "relative", zIndex: 22 }}
        >
          <div
            className={
              "knowus__text col-xl-8 col-lg-10 col-md-11 position-relative "
            }
          >
            <div className=" d-flex flex-column justify-content-center align-items-center text-center">
              <p className="text-dark mb-4 fade-slide right">
                phyber is a cutting-edge wellness platform designed to bridge
                the gap between individuals and real-time healthcare support.
              </p>
              <p className="text-dark mb-4 fade-slide left">
                Whether it’s connecting employees, families, or individuals with
                medical professionals, phyber ensures immediate access to
                essential health services, from mental health counseling to
                on-site nursing.
              </p>
              <p className="text-dark mb-5 pb-4 fade-slide right">
                By integrating comprehensive wellness management with instant
                medical attention, phyber empowers organizations to prioritize
                their people's health, enhancing productivity and fostering a
                culture of well-being. With phyber, you’re not just managing
                health—you’re proactively safeguarding it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="shadowed-element"></div>
    </section>
  );
}
