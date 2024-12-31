import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { GrInstagram } from "react-icons/gr";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(''); // State to hold error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError(''); // Clear error message on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for hardcoded credentials
    if (formData.email === 'prakash@gmail.com' && formData.password === 'prakash123') {
      alert('Login successful!');
      navigate('/TaskDashboard'); // Redirect to Task Dashboard page
      return;
    }

    // POST request using fetch
    fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Convert formData to JSON
    })
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          alert(data.message || 'Login successful!');
          navigate('/TaskManager'); // Redirect to Task Manager page
        } else {
          const errorData = await response.json();
          console.error('Login failed:', errorData);
          setError(errorData.message || 'Invalid email or password.'); // Set error message
        }
      })
      .catch((error) => {
        console.error('An error occurred:', error);
        setError('An unexpected error occurred. Please try again.'); // Set error message
      });
  };

  const forgot = () => {
    navigate('/ForgotPassword');
  };

  return (
    <div className="window-container">
      <div className="split-layout">
        <div className="image-side">
          <div className="blue-overlay"></div>
        </div>
        <div className="form-side">
          <div className="form-container">
            <h1 className="title">Log In</h1>
            <p className="subtitle">Welcome Back</p>
            
            {error && <p className="error-message">{error}</p>} {/* Display error message */}

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  className="form-input"
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  className="form-input"
                  onChange={handleChange}
                />
                <div className="forgot-link">
                  <a href="/ForgotPassword" onClick={forgot}>FORGOT PASSWORD?</a>
                </div>
              </div>
              <button type="submit" className="primary-button">
                Log In
                <span className="arrow">→</span>
              </button>
            </form>

            <div className="social-section">
              <p className="social-divider">OR CONNECT WITH SOCIAL MEDIA</p>
              <button className="social-button instagram"><GrInstagram />SIGN UP WITH INSTAGRAM</button>
              <button className="social-button facebook">SIGN UP WITH FACEBOOK</button>
              <button className="social-button google">SIGN UP WITH GOOGLE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;