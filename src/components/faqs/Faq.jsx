import React, { useState } from 'react';
import "./Faq.css";

const Faq = () => {
  const faqData = [
    {
      question: "What is the mission of the Kenya Red Cross Society",
      answer: "Our mission is to facilitate communities to respond to humanitarian emergencies to alleviate human suffering and work with partners to implement innovative community-driven programmes that transform lives and enhance community resilience."
    },
    {
      question: "What is the vision of the Kenya Red Cross Society",
      answer: "Our vision is to be a leading humanitarian organization sustainably promoting the well-being, health, and resilience of communities."
    },
    {
        question: "Who is the current County Coordinator of KRCS Bomet Branch",
        answer: "The current County Coordinator for Bomet Branch is Naomi Cherotich."
      },
      {
        question: "How can i contact KRCS Bomet Branch",
        answer: "Contact Us via Email:bomet@redcross.or Tel:+254708140514 or Visit Our Offices"
      },
      {
        question: "Where KRCS Bomet Branch Offices are Located ",
       answer: "Our Offices are located at the County Assembly Bomet Grounds, Opposite Kipchimatt Supermarket"
      },
    {
      question: "What are the fundamental principles guiding the Kenya Red Cross Society",
      answer: "The Kenya Red Cross Society is guided by these 7 fundamental principles of the Red Cross Red Crescent Movement: Humanity, Impartiality, Neutrality, Independence, Unity, Universality, and Voluntary Service."
    },
    {
      question: "How can I become a member of the Kenya Red Cross Bomet County Branch",
      answer: "You can become a member by visiting our website and filling out the membership form available under the 'Become a Member' section. OR Visit our Offices"
    },
    {
      question: "How can I volunteer with the Kenya Red Cross Bomet County Branch",
      answer: "To become a volunteer, you can sign up through the 'Become a Volunteer' section on our website."
    },
    {
      question: "What types of programs does the Kenya Red Cross Bomet County Branch offer",
      answer: "We offer various programs including Disaster Management, Health, Youth Development, Special Programmes, and Organizational Development."
    },
    {
      question: "How can I donate to support the Kenya Red Cross Bomet County Branch",
      answer: "You can support our cause by donating through the 'Donate' section on our website."
    },
    {
      question: "Where can I read about current projects and events",
      answer: "You can read about our current projects, events, and programs on our blog accessible from the 'Blog' section on our website."
    },
  

  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>
      <div>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question-container" onClick={() => handleClick(index)}>
              <h3 className="faq-question">{faq.question}</h3>
              <span className={`faq-icon ${activeIndex === index ? 'open' : ''}`}>▼</span>
            </div>
            <p className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
