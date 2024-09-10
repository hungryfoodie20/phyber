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
    const isPhoneValid = phone.trim() !== "" && phone.length > 3;
    if (
      !formData.name ||
      !isPhoneValid ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }
    // console.log(formData.name, phone, formData.email, formData.message);

    // Use EmailJS to send the form data
    emailjs
      .send(
        "service_awx83nh", // Replace with your service ID
        "template_k58ieys", // Replace with your template ID
        {
          name: formData.name,
          mobile: phone,
          email: formData.email,
          message: formData.message,
        },
        "CfMJhzl8fzW-AaG5r" // Replace with your public key
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
// name- {{{name}}}

// email- {{{email}}}

// monile no.-{{{mobile}}}

// message- {{{message}}}