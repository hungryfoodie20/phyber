import HeroOne from "@/components/Hero/HeroOne";
// import HeroFour from "@/components/Hero/HeroFour";
// import PartnerOne from "@/components/Partner/PartnerOne";
// import CourseOne from "@/components/Course/CourseOne";
// import TestimonialOne from "@/components/Testimonial/TestimonialOne";
import OurOffer from "@/components/Ouroffer/OurOffer";
import ServiceOne from "@/components/Service/ServiceOne";
import KnowusOne from "@/components/Knowus/KnowusOne";
import ContactUs from "@/components/Contactus/ContactUs";
import Scroll from "@/components/Scroll/Scroll";
// import InstructorOne from "@/components/Instructor/InstructorOne";
// import CounterOne from "@/components/Counter/CounterOne";
// import BlogOne from "@/components/Blog/BlogOne";
// import CtaOne from "@/components/CTA/CtaOne";
// import AboutOne from "@/components/About/AboutOne";
import LayoutOne from "@/components/Layout/LayoutOne";
import HeaderOne from "@/components/Header/HeaderOne";
import FoooterOne from "@/components/Foooter/FoooterOne";
import DocImg from "@/assets/imgs/hero/hero1.png";
export default function HomePage() {
  return (
    <LayoutOne>
      <main>
        {/* <div style={{ backgroundImage: "linear-gradient(to right, #003173 20%, #000F23 50%, #003173 80%)" }}> */}
        <div className="position-relative" style={{backgroundColor: "#D0E5FF",height: "100vh"}} >
          <HeaderOne />
            <img
              src={DocImg}
              alt="Hero Img"
              className="img-fluid position-absolute fade-slide right"
              style={{ maxWidth: "50%", bottom: "1px", right: "0px"}}
            />
          {/* </div> */}
          <HeroOne />
        </div>
        <OurOffer />
        <ServiceOne />
        <KnowusOne />
        <ContactUs />
        <Scroll />
        <FoooterOne />
      </main>
    </LayoutOne>
  );
}
