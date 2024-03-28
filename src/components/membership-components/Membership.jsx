/** @format */

import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Membership.css";

const Membership = () => {
  // ref for form
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const memberRef = useRef();
  const [loading, setLoading] = useState(false);

  // Get the user inputs
  const [formData, setFormData] = useState({
    fname: "",
    company: "",
    message: "",
  });
  const handleInputs = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ****Getting all error messages
  const [formErrorMsg, setFormErrorMsg] = useState({
    fnameErrorMsg: "",
    companyErrorMsg: "",
    messageErrorMsg: "",
  });

  // handle Submit function
  useEffect(() => emailjs.init("2zeK6PBfb_aTdRrdY"), []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if form fields are filled
    if (!formData.fname) {
      setFormErrorMsg((prevError) => ({
        ...prevError,
        fnameErrorMsg: "First name is required",
      }));
      return;
    }

    if (!formData.company) {
      setFormErrorMsg((prevError) => ({
        ...prevError,
        companyErrorMsg: "Company is required",
      }));
      return;
    }

    if (!formData.message) {
      setFormErrorMsg((prevError) => ({
        ...prevError,
        messageErrorMsg: "Message is required",
      }));
      return;
    }

    // Send email using refs
    const serviceId = "service_36z5err";
    const templateId = "lora@2024";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        from_email: emailRef.current.value,
        message: messageRef.current.value,
      });

      alert("Email successfully sent.");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contactForm">
      <h3>SEND US A MESSAGE </h3>
      <form className="contact" onSubmit={handleSubmit}>
        <div className="contact-form-details">
          <label htmlFor="firstName">Name</label>
          <input
            type="text"
            value={formData.fname}
            onChange={handleInputs}
            placeholder="Enter you First Name"
            ref={nameRef}
            name="fname"
          />
          <small style={{ color: "red" }}>{formErrorMsg.fnameErrorMsg}</small>
        </div>
        <div className="contact-form-details">
          <label htmlFor="company">Email</label>
          <input
            type="text"
            value={formData.company}
            onChange={handleInputs}
            placeholder="Enter your Email"
            ref={emailRef}
            name="company"
          />
          <small style={{ color: "red" }}>{formErrorMsg.companyErrorMsg}</small>
        </div>

        <div className="membership-group">
          <label htmlFor="organization" className="membership-label">
            Attachments
          </label>
        </div>

        <div className="contact-form-details">
          <label htmlFor="message">Message</label>
          <textarea
            value={formData.message}
            onChange={handleInputs}
            placeholder="Write your message OR Paste your cover letter"
            ref={messageRef}
            className="contact-message"
            name="message"></textarea>
          <small style={{ color: "red" }}>{formErrorMsg.messageErrorMsg}</small>
        </div>
        <div className="contact-form-details">
          <label htmlFor="attachments">Resume</label>
          <input
            type="file"
            onChange={handleInputs}
            placeholder="Enter your Email"
            ref={memberRef}
          />
        </div>
        <div className="contact-end">
          <button href="/" className="contact-button" disabled={loading}>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Membership;
