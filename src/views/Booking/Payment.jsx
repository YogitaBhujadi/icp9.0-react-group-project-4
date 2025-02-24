import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import Background from "../../assets/images/bg1.jpg";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const price = location.state?.price || 0; 

  const [formData, setFormData] = useState({
    bookingID: "",
    name: "",
    date: "",
    cardNumber: ""
  });

  useEffect(() => {
    const storedBooking = JSON.parse(localStorage.getItem("bookingDetails"));
    if (storedBooking) {
      setFormData({
        bookingID: storedBooking.bookingID || "",
        name: storedBooking.name || "",
        date: storedBooking.date || "",
        cardNumber: "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Payment Successful.");
    
    setTimeout(() => {
      generateReceipt();
    }, 1000); 

    setTimeout(() => {
      navigate("/"); 
    }, 3000); 
  };

  const generateReceipt = () => {
    const receiptContent = document.getElementById("receipt");

    receiptContent.style.display = "block";
  
    html2canvas(receiptContent, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      logging: false,
      backgroundColor: "#ffffff",
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
  
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 150;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
        pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
        pdf.save(`Receipt_${Date.now()}.pdf`);

        receiptContent.style.display = "none";
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  };  

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="md:w-120 w-80 mx-auto bg-slate-300 p-6 m-10 mt-25 rounded-lg shadow-lg border border-gray-300">
        <h2 className="md:text-3xl text-2xl text-green-700 text-center font-bold mb-4">
          PAYMENT
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-lg font-bold text-green-800 text-center">
            Total Amount: ₹{price.toFixed(2)}
          </p>
          <div>
            <label className="block font-medium text-gray-700">Booking ID</label>
            <input
              type="text"
              name="bookingID"
              value={formData.bookingID}
              readOnly
              className="w-full p-2 border rounded-md bg-gray-100 text-gray-700"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              readOnly
              className="w-full p-2 border rounded-md bg-gray-100 text-gray-700"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              readOnly
              className="w-full p-2 border border-gray-500 rounded-md bg-gray-100 text-gray-700"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded text-gray-700"
            />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
            Pay Now
          </button>
          <Toaster />
        </form>
      </div>

      <div id="receipt" className="hidden bg-white p-6 rounded-lg shadow-lg text-black">
        <h2 className="text-lg font-bold text-center">Payment Receipt</h2>
        <p><strong>Booking ID:</strong> {formData.bookingID}</p>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Date:</strong> {formData.date}</p>
        <p><strong>Amount Paid:</strong> ₹{price.toFixed(2)}</p>
        <p className="text-center mt-4">Thank you for your payment!</p>
      </div>
    </div>
  );
};

export default Payment;