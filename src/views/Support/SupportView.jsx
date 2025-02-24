import React, { useState } from "react";
import Background from "../../assets/images/bg11.webp";

const Support = () => {
  const [faqs, setFaqs] = useState([
    { question: "How to book a ticket?", answer: "You can book tickets through our website or mobile app." },
    { question: "How to check PNR status?", answer: "Use the PNR number on our website to check the status." },
    { question: "How to cancel a booking?", answer: "Bookings can be canceled through the 'My Bookings' section." },
    { question: "What payment methods are accepted?", answer: "We accept credit/debit cards, UPI, net banking, and wallets." },
    { question: "Can I modify my booking?", answer: "Yes, modifications can be done from the 'Manage Booking' section." },
    { question: "How can I get a refund?", answer: "Refunds are processed within 7 working days after cancellation." },
    { question: "Is there a mobile app available?", answer: "Yes, our mobile app is available on both Android and iOS platforms." },
    { question: "What should I do if I lose my ticket?", answer: "You can retrieve your ticket by logging into your account and accessing 'My Bookings'." },
    { question: "Are group bookings available?", answer: "Yes, group bookings can be made by contacting our support team." },
    { question: "How can I contact customer support?", answer: "You can reach us via email, phone, or live chat on our website." }
  ]);
  
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="bg-slate-300 py-3 px-5 rounded-lg mt-30">
          <h1 className="md:text-3xl text-2xl font-bold text-green-700 mb-2 text-center">Support</h1>
          <p className="md:text-lg text-sm text-gray-700 text-center max-w-2xl md:p-4 p-2 rounded-lg">
            If you need any help or have any questions, feel free to reach out to our support team. 
            We are here to assist you with your train booking experience.
          </p>
      </div>
    
      <div className="mt-6 bg-slate-300 bg-opacity-80 p-6 rounded-lg shadow-lg w-full max-w-2xl h-96 overflow-y-auto faqs-container">
        <h2 className="md:text-3xl text-2xl font-semibold text-green-700 text-center">FAQs</h2>

        <ul className="mt-2 text-gray-700 md:text-lg text-sm">
          {faqs.map((faq, index) => (
            <li key={index} className="mt-4">
              <div
                className="cursor-pointer font-semibold text-green-600"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
              </div>
              {expanded === index && (
                <div className="mt-2 text-gray-800">{faq.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Support;