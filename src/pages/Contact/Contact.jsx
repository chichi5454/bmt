/** @format */
import ContactInfo from "../../components/contact-components/ContactInfo";
import ContactForm from "../../components/contact-components/ContactForm";
import Map from "../../components/contact-components/Map";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-page-container">
        <ContactInfo />
        <ContactForm />
        <Map />
      </div>
    </div>
  );
};

export default Contact;
