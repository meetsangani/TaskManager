import React, { useState, useRef } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const otpfile = require('./otpfile.png');

function OTPVerification() {
  const navigate = useNavigate();  // Moved inside the component
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const otpsend = (e) => {
    navigate('/CreatePassword'); 
  };

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="window-container">
      <div className="split-layout">
        <div className="image-side3">
          <div className="blue-overlay"></div>
        </div>
        <div className="form-side">
          <div className="form-container">
            <h1 className="title">OTP</h1>
            <div className="image-container">
              <img src={otpfile} height={150} />
            </div>
            <h2 className="verification-title">Verification Code</h2>
            <p className="verification-text">
              We have sent a Verification code<br />
              to your Mobile number
            </p>

            <div className="otp-container">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  ref={(el) => inputRefs.current[index] = el}
                  className="otp-input"
                />
              ))}
            </div>

            <button type="submit" className="primary-button" onClick={otpsend}>
              Verify OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPVerification;
