import PropTypes from "prop-types";
// import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
// import Offcanvas from "@/components/Menu/Offcanvas";
import AnimationClient from "@/components/Client/AnimationClient";

import "@/assets/scss/home.scss";

LayoutOne.propTypes = {
  children: PropTypes.any,
  options: PropTypes.object,
};
export default function LayoutOne({
  children,
  options = { header: true, animation: true },
  //   options = { header: true, footer: true, offcanvas: true, animation: true },
}) {
  return (
    <>
      {/* <div style={{backgroundColor:"red"}}> */}
        {options.header && <HeaderOne />}
        {/* {options.offcanvas && <Offcanvas />} */}
         {/* {children} */}
         {/* <main className="main-content" style={{paddingTop:"3rem"}}> */}
        {children}
      {/* </main>  */}
      {/* </div> */}
      {options.animation && <AnimationClient />}
      {/* {options.footer && <FooterOne />} */}
    </>
  );
}
