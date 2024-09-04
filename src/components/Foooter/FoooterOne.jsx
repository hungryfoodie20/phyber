import SocialImg1 from "@/assets/imgs/footer/footerImg1.png";
import SocialImg2 from "@/assets/imgs/footer/footerImg2.png";
import SocialImg3 from "@/assets/imgs/footer/footerImg3.png";
import SocialImg4 from "@/assets/imgs/footer/footerImg4.png";
import Footerlogo from "@/assets/imgs/footer/footerlogo.png";
import Phone from "@/assets/imgs/footer/phone.png";
import Mail from "@/assets/imgs/footer/mail.png";
export default function FooterOne() {
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
                <a href="#categories" className="colorGray">
                  Categories
                </a>
              </li>
              <li className="my-3">
                <a href="#benefits" className="colorGray">
                  Benefits
                </a>
              </li>
              <li className="my-3">
                <a href="#about_Us" className="colorGray">
                  About Us
                </a>
              </li>
              <li className="my-3">
                <a href="#contactus" className="colorGray">
                  Conatct
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
              <li>
                {" "}
                <img className="me-3" src={Mail} style={{display: "flex"}} alt="Mail" />
                marketing@phybercare.com
              </li>
            </ul>
          </div>
        </div>
        <div
          className="text-center footersocial"
          //   style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          <div className="text-white">© 2024 Phyber*Privacy*Terms</div>
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
