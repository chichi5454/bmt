import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Membership.css";

const Membership = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("2zeK6PBfb_aTdRrdY"), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <div className="contact-me">
            <div className="form-page">
        <p>For Membership Inquiries, Send your Personal Details</p>
        <form className="for" onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="">Name</label>
            <input ref={nameRef} placeholder="enter your name" />
          </div>
          <div className="form_group">
            <label htmlFor="">Email</label>
            <input ref={emailRef} type="email" placeholder="enter your email" />
          </div>
          <div className="form_group">
            <label htmlFor="">Message</label>
            <input
              ref={messageRef}
              placeholder="enter your message"
              className="form-message"
            />
          </div>
          <button className="btn" disabled={loading}>
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Membership;

























/** 

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Membership.css";

const Membership = () => {
  const [formData, setFormData] = useState({
    fname: "",
    company: "",
    message: "",
  });

  const [formErrorMsg, setFormErrorMsg] = useState({
    fnameErrorMsg: "",
    companyErrorMsg: "",
    messageErrorMsg: "",
  });

  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const memberRef = useRef();

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fname) {
      setFormErrorMsg((prevError) => ({
        ...prevError,
        fnameErrorMsg: "Name is required",
      }));
      return;
    }

    if (!formData.company) {
      setFormErrorMsg((prevError) => ({
        ...prevError,
        companyErrorMsg: "Email is required",
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

      setFormData({
        fname: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contactForm">
      <h3>SEND US A MESSAGE</h3>
      <form className="contact" onSubmit={handleSubmit}>
        <div className="contact-form-details">
          <label htmlFor="firstName">Name</label>
          <input
            type="text"
            value={formData.fname}
            onChange={handleInputs}
            placeholder="Enter your Name"
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
            placeholder="Write your message or Paste your cover letter"
            ref={messageRef}
            className="contact-message"
            name="message"></textarea>
          <small style={{ color: "red" }}>{formErrorMsg.messageErrorMsg}</small>
        </div>
        <div className="contact-form-details">
          <label htmlFor="attachments">Resume</label>
          <input type="file" onChange={handleInputs} ref={memberRef} />
        </div>
        <div className="contact-end">
          <button className="contact-button" disabled={loading}>
            {loading ? "Sending..." : "SUBMIT"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Membership;
*/