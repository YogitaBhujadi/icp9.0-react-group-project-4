import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Footer from "./components/Footer"; 
import Navbar from "./components/Navbar"; 
import Home from "./views/Home/Home";
import PNRStatus from './views/Pnrstatus/pnr';
import TrainExplorer from "./views/Train/TrainExplorer";
import TrainSchedule from "./views/Train/TrainSchedule";
import Booking from "./views/Booking/Booking";
import PassengerDetails from "./views/Booking/Booking";
import Payment from "./views/Booking/Payment";
import About from './views/About/About';
import PrintTrainTicketPage from './views/Train/PrintTrainTickit';
import CancelTrainTicketPage from './views/Train/CancelTrainTicket';
import Support from './views/Support/SupportView';
import ContactPage from './views/Contact/Contact';
import Login from './views/Authentication/Login';
import Register from './views/Authentication/Register';
import Forgotpassword from './views/Authentication/Forgotpassword';
import TrainDetails from './views/Train/TrainDetails'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/train-explorer" element={<TrainExplorer />} />
        <Route path="/train-explorer/train-detail/:id" element={<TrainDetails />} />
        <Route path="/pnr-status" element={<PNRStatus />} />
        <Route path="/train-schedules" element={<TrainSchedule />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about" element={<About />} />
        <Route path="/print-train-ticket" element={<PrintTrainTicketPage />} />
        <Route path="/cancel-train-ticket" element={<CancelTrainTicketPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App