// import { serviceOne as data } from "@/data/knowus";
// import { useState } from "react";
// // import flagImage from "@/assets/imgs/contactus/indian-flag.png"; // Import the flag image
// import { PhoneInput } from "react-international-phone";
// import "react-international-phone/style.css";
// export default function ContactUs() {
//   const [phone, setPhone] = useState("");
//   return (
//     <section className="service__area pt-110 pb-110 mt-5" id="contactus">
//       <div className="container ">
//         <div className="contact">
//           {/* <div className="contact-form-container"> */}
//           <form className="contact-form row">
//             <div className="col-xl-6">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Name"
//                 />
//               </div>
//               <div
//                 className="row g-3"
//                 // style={{ display: "flex", gap: "1rem" }}
//               >
//                 <div className="form-group col-xl-6 col-md-6">
//                   {/* <img src={flagImage} className="img-fluid" alt="Flag" /> */}
//                   <PhoneInput
//                     defaultCountry="in"
//                     value={phone}
//                     onChange={(phone) => setPhone(phone)}
//                   />
//                 </div>
//                 <div className="form-group col-xl-6 col-md-6">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Email"
//                   />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <textarea
//                   className="form-control"
//                   rows="4"
//                   placeholder="Message"
//                 ></textarea>
//               </div>
//             </div>
//             <div className="col-xl-5 contactsubmit">
//               <button type="submit" className="btn submitbtn btn-block">
//                 Know us better
//               </button>
//               <h1>Get in touch</h1>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Link } from "react-router-dom";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Imageboy from "@/assets/imgs/contactus/imageboy.png";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.name, phone, formData.email, formData.message);

    // Use EmailJS to send the form data
    emailjs
      .send(
        "service_2ix9hvk", // Replace with your service ID
        "template_bid360b", // Replace with your template ID
        {
          name: formData.name,
          mobile: phone,
          email: formData.email,
          message: formData.message,
        },
        "YxeoYNZzXmlUvA4Es" // Replace with your public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setPhone("");
  };

  return (
    <section
      className="service__area pt-110 pb-110 mt-5 overflow-hidden"
      id="contactus"
    >
      <div className="container ">
        <div className="contact">
          <form
            className="contact-form row align-items-center"
            onSubmit={handleSubmit}
          >
            <div className="col-xl-6 fade-slide left">
              <h1 className="text-dark pt-4" style={{ textAlign: "center" }}>
                Get in touch
              </h1>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="row g-3">
                <div className="form-group col-xl-6 col-md-6">
                  <PhoneInput
                    defaultCountry="in"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    required
                  />
                </div>
                <div className="form-group col-xl-6 col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="d-flex justify-content-center pb-4">
                <button type="submit" className="submitBtn ">
                  Submit
                </button>
              </div>
            </div>
            <div className="col-xl-5 contactsubmit fade-slide right">
              <img src={Imageboy} alt="boy image" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
