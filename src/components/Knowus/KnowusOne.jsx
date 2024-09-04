import { serviceOne as data } from "@/data/knowus";

export default function knowusOne() {
  return (
    <section className="service__area pt-110 pb-110 overflow-hidden" id="about_Us">
      <div className="container knowus__bg">
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
 
          <div className="row gy-4 justify-content-center">
       
            <div
              className={"knowus__text col-xl-8 col-lg-10 col-md-11 position-relative "}
            >
           
              <div className=" d-flex flex-column justify-content-center align-items-center text-center">
                <p className="text-dark mb-4">
                  PHYBER is a cutting-edge wellness platform designed to bridge
                  the gap between individuals and real-time healthcare support.
                </p>
                <p className="text-dark mb-4">
                  Whether it’s connecting employees, families, or individuals
                  with medical professionals, PHYBER ensures immediate access to
                  essential health services, from mental health counseling to
                  on-site nursing.
                </p>
                <p className="text-dark mb-5 pb-4">
                  By integrating comprehensive wellness management with instant
                  medical attention, PHYBER empowers organizations to prioritize
                  their people's health, enhancing productivity and fostering a
                  culture of well-being. With PHYBER, you’re not just managing
                  health—you’re proactively safeguarding it.
                </p>
              </div>
            </div>

            {/* <div className="col-xl-3 col-lg-6 col-md-6 ">
              <div className={` ${data.imgs[0]?.animation?.name}`}>
                <img
                  className="knowus__img2 mb-3"
                  src={data.imgs[0]?.ImgOne}
                  alt="Image 1"
                />
              </div>
              <div className={` ${data.imgs[1]?.animation?.name}`}>
                <img
                  className="knowus__img2"
                  src={data.imgs[1]?.ImgTwo}
                  alt="Image 2"
                />
              </div>
            </div>

            <div
              className={`col-xl-3 col-lg-6 col-md-6 ${data.imgs[2]?.animation?.name}`}
            >
              <img
                className="knowus__img2"
                src={data.imgs[2]?.ImgThree}
                alt="Image 3"
              />
            </div> */}
          </div>
 

        {/* 
        // {data.services && data.services.length && (
        //   <div
        //     className="row gy-4 justify-content-center"
        //     style={{ backgroundColor: "var(--primary)" }}
        //   >
        //     {data.services.map((service, index) => (
        //       <div
        //         key={index}
        //         className={`col-xl-2 col-lg-3 col-md-6 ${service.animation.name}`}
        //       >
        //         <div className={`service__item ${service.classNames}`}>
        //           <div className="service__icon">
        //             {service.icon && <img src={service.icon} alt="Icon" />}
        //           </div>
        //           <h3 className="service__title">{service.title}</h3>
        //           {service.description && <p>{service.description}</p>}
        //         </div>
        //       </div>
        //     ))}
        //   </div>
        // )} */}
      </div>
    </section>
  );
}
