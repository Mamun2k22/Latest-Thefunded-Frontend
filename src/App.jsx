import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Checkout from "./pages/Checkout";
import TradingOverview from "./components/dashboard/TradingOverview";
import Withdraw from "./components/dashboard/Withdraw";
import TopUpReset from "./components/dashboard/TopUpReset";
import NewsCalendar from "./components/dashboard/NewsCalendar";
import Help from "./components/dashboard/Help";
import Profile from "./components/dashboard/Profile";
import DashContact from "./components/dashboard/DashContact";

import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermCondition from "./pages/TermCondition";

// CSS
import "./App.css";

// login

import Billing from "./components/dashboard/Billing";
import RiskDisclosure from "./pages/RiskDisclosure";
import ReportProblem from "./pages/ReportProblem";
import Chart from "./components/dashboard/Chart";
import EmailVerified from "./components/EmailVerified";
import Reset from "./components/Reset";

// export const RecoveryContext = createContext();

function App() { 
  // const [page, setPage] = useState("login");
  // const [email, setEmail] = useState();
  // const [otp, setOTP] = useState();

  function NavigateComponents() {
    // if (page === "login") return <Login />;
    // if (page === "otp") return <OTPInput />;
    // if (page === "reset") return <Reset />;

    // return <Recovered />;
  }

  return (
    <Router> {/* Move the Router here to wrap the entire App component */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/email-verification" element={<EmailVerified/>} />
          <Route path="/change-password" element={<Reset/>} />
          <Route path="/recoverd" element={<Reset/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="faq" element={<Faq />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-condition" element={<TermCondition />} />
          <Route path="risk-disclosure" element={<RiskDisclosure />} />
          <Route path="report-problem" element={<ReportProblem />} />
          <Route path="chart" element={<Chart />} />

          {/* dashboard */}
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="Profile" element={<Profile />} />
            <Route path="billing" element={<Billing />} />
            <Route path="trading-overview" element={<TradingOverview />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="news-calendar" element={<NewsCalendar />} />
            <Route path="top-up-reset" element={<TopUpReset />} />
            <Route path="help" element={<Help />} />
            <Route path="dashboard-contact" element={<DashContact />} />
          </Route>
        </Routes>

        {/* <RecoveryContext.Provider
          value={{ page, setPage, otp, setOTP, setEmail, email }}
        >
          <div className="flex justify-center items-center">
            <NavigateComponents />
          </div>
        </RecoveryContext.Provider> */}
      </div>
    </Router>
  );
}

export default App;
