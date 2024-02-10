import "./contactForm.css";
import {useState} from "react";

// ********TO BE REFACTORED****

const ContactForm = () => {
  // Get the user inputs
  const [formData, setFormData ] = useState({
    fname: '',
    company: '',
    message: '',
  })
  const handleInputs = (e) => {
    const { name, value } = e.target

    setFormData ({
      ...formData, [ name ] : value
    })
  }

  // ****Getting all error messages
  const [ formErrorMsg, setFormErrorMsg ] = useState({
    fnameErrorMsg: '',
    companyErrorMsg: '',
    messageErrorMsg: ''
  })

  // handle Submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    //************Checking the first name*************
     if (formData.fname === '') {
      setFormErrorMsg(prevError => ({
        ...prevError, fnameErrorMsg : "First name is required"
      }));
    } else {
      setFormErrorMsg(prevError => ({
        ...prevError, fnameErrorMsg: ""
      }))
    }

    // *****Checking the Company********
     if (formData.company === '') {
      setFormErrorMsg(prevError => ({
        ...prevError, companyErrorMsg : "Company is required"
      }));
    } else {
      setFormErrorMsg(prevError => ({
        ...prevError, companyErrorMsg: ""
      }))
    }
    //************* Checking the Message************
     if (formData.message === '') {
      setFormErrorMsg(prevError => ({
        ...prevError, messageErrorMsg : "Message is required"
      }));
    } else {
      setFormErrorMsg(prevError => ({
        ...prevError, messageErrorMsg: ""
      }))
    }
  }


  return (
    <div className="contactForm">
      <h3>SEND US A MESSAGE </h3>
      <form className="contact" onSubmit={handleSubmit}>
        <div className="contact-form-details">
          <label htmlFor="firstName">First Name</label>
          <input 
          type="text" 
          value={formData.fname} 
          onChange={handleInputs}
          placeholder="Enter you First Name" />
          <small style={{color: "red"}}>{formErrorMsg.fnameErrorMsg}</small>
        </div>
        <div className="contact-form-details">
          <label htmlFor="company">Company</label>
          <input 
          type="text" 
          value={formData.company} 
          onChange={handleInputs}
          placeholder="Enter your company" />
          <small style={{color: "red"}}>{formErrorMsg.companyErrorMsg}</small>
        </div>
        <div className="contact-form-details">
          <label htmlFor="message">Message</label>
          <textarea 
          type="text" 
          value={formData.message} 
          onChange={handleInputs}
          placeholder="Write your message" 
          className="contact-message"></textarea>
          <small style={{color: "red"}}>{formErrorMsg.messageErrorMsg}</small>
        </div>
        <div className="contact-end">
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
