import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RememberMe from "./RememberMe";
import ForgotPassword from "./ForgotPassword";
import TermsPrivacy from "./TermsPrivacy";
import SignInButton from "./Buttons/SignInButton";
import LoginButton from "./Buttons/LoginButton";
import CustomCalendarIcon from "./images/calendar.svg";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: Date | null;
}

const CustomInput = forwardRef<HTMLDivElement, { value: string, onClick: () => void }>(
  ({ value, onClick }, ref) => (
    <div className="input-icon-container" onClick={onClick} ref={ref}>
      <input type="text" value={value} readOnly className="input-with-icon" />
      <img src={CustomCalendarIcon} alt="calendar icon" className="input-icon" />
    </div>
  )
);

const Form: React.FC = () => {
  // State to store form data
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: null,
  });

  // Handler for input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handler for date change
  const handleDateChange = (date: Date | null) => {
    setFormData({
      ...formData,
      dob: date,
    });
  };

  return (
    <form>
      <div className="form-container">
        <div className="first-column">
          <label htmlFor="first-name">First name</label>
          <input type="text" id="firstName" onChange={handleInputChange} />
          <label htmlFor="email-phone">Email or phone number</label>
          <input type="text" id="email" onChange={handleInputChange} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleInputChange} />
        </div>
        <div className="second-column">
          <label htmlFor="last-name">Last name</label>
          <input type="text" id="lastName" onChange={handleInputChange} />
          <label htmlFor="dob">Date of birth (MM/DD/YY)</label>
          <DatePicker
            selected={formData.dob}
            onChange={handleDateChange}
            className="calendar"
            dateFormat="MM/dd/yy"
            customInput={<CustomInput value={formData.dob ? formData.dob.toString() : ''} onClick={() => {}} />}
          />
          <label htmlFor="confirm-password">Confirm password</label>
          <input type="password" id="confirmPassword" onChange={handleInputChange} />
        </div>
      </div>
      <div className="agreement-container">
        <div className="agreement">
          <RememberMe />
          <TermsPrivacy />
        </div>
        <ForgotPassword />
      </div>
      <div className="buttons">
        <div className="login-btn-container">
          <LoginButton formData={formData} />
        </div>
        <div className="sign-btn-container">
          <SignInButton />
        </div>
      </div>
    </form>
  );
};

export default Form;