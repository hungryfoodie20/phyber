import SocialImg1 from "@/assets/imgs/footer/footerImg1.png";
import SocialImg2 from "@/assets/imgs/footer/footerImg2.png";
import SocialImg3 from "@/assets/imgs/footer/footerImg3.png";
import SocialImg4 from "@/assets/imgs/footer/footerImg4.png";
import Footerlogo from "@/assets/imgs/footer/footerlogo.png";
import Phone from "@/assets/imgs/footer/phone.png";
import Mail from "@/assets/imgs/footer/mail.png";
import { HashLink } from 'react-router-hash-link';
export default function FooterOne() {


const handleHashLinkClick = (e, link) => {
  e.preventDefault(); // Prevent the default hash behavior

  const targetElement = document.querySelector(link);

  if (targetElement) {
    // Get the top position of the target element relative to the document
    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

    // Calculate the scroll position with a 5rem (80px) offset
    const offsetPosition = elementPosition - 80; // Adjust 80px based on 5rem

    // Scroll to the calculated position smoothly
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="footerbg" style={{ backgroundColor: "#000C1C" }}>
        <div className="row footerresponsive">
          <div className="col-lg-4 col-md-12 col-sm-11 mb-4 mb-md-0">
            <a href="/">
              <h1 className="text-uppercase text-white">
                <img src={Footerlogo} className="footerlogo" alt="footerlogo" />
              </h1>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-11 mb-4 mb-md-0">
            <h5 className="text-uppercase text-white">Links</h5>
            <ul className="list-unstyled mb-0">
              <li className="my-3">
                <a href="#categories" className="colorGray" onClick={(e) => handleHashLinkClick(e, "#categories")}>
                  Categories
                </a>
              </li>
              <li className="my-3">
                <a href="#benefits" className="colorGray" onClick={(e) => handleHashLinkClick(e, "#benefits")}>
                  Benefits
                </a>
              </li>
              <li className="my-3">
                <a href="#about_Us" className="colorGray" onClick={(e) => handleHashLinkClick(e, "#about_Us")}>
                  About Us
                </a>
              </li>

              <li className="my-3">
                <a href="#contactus" className="colorGray"  onClick={(e) => handleHashLinkClick(e, "#contactus")} >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-11 mb-4 mb-md-0 overflow-hidden">
            <h5 className="text-uppercase text-white mb-0">Contact</h5>
            <ul className="list-unstyled colorGray">
              <li style={{ margin: "2rem 0rem" }}>
                {" "}
                <img className="me-2" src={Phone} alt="Phone" /> +91 9611077318
              </li>
              <li style={{display: "flex"}}>
                {" "}
                <img className="me-3" src={Mail}  alt="Mail" />
                marketing@phybercare.com
              </li>
            </ul>
          </div>
        </div>
        <div
          className="text-center footersocial"
          //   style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          <div className="text-white">© 2024 phyber All Rights Reserved </div>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <a
              href="https://www.linkedin.com/company/phybercare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="footersocialIcon">
                <img src={SocialImg1} alt="SocialImg1" />
              </div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61556706707414&mibextid=kFxxJD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="footersocialIcon">
                <img src={SocialImg2} alt="SocialImg2" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/phybercare?igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="footersocialIcon">
                <img src={SocialImg3} alt="SocialImg3" />
              </div>
            </a>
            <a
              href="https://twitter.com/phybercare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="footersocialIcon">
                <img src={SocialImg4} alt="SocialImg4" />
              </div>
            </a>
          </div>
          {/* <a className="text-dark" href="https://yourwebsite.com/">
            YourWebsite.com
          </a> */}
        </div>
      </div>
    </footer>
  );
}
