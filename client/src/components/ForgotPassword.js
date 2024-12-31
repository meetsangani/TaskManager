import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (email) {
      // Optionally, you can add validation or API logic here
      navigate('/OTPVerification'); // Redirect to the OTP Verification page
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="window-container">
      <div className="split-layout">
        <div className="form-side">
          <div className="form-container">
            <h1 className="title">FORGOT</h1>
            <p className="subtitle">PASSWORD?</p>
            
            <p className="reset-text">
              Enter your email and we'll send you a link to reset your password
            </p>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <button type="submit" className="primary-button" onClick={handleSubmit}>
                Send
                <span className="arrow">→</span>
              </button>
            </form>
          </div>
        </div>
        <div className="image-side2">
          <div className="blue-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
