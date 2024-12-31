import { Lock } from 'lucide-react';
import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import './styles.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

export default function PasswordReset() {
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password update logic here
    console.log('Updating password...');

    // After password update logic, redirect to login
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="window-container"> {/* Apply the custom class */}
      <Card className="w-full max-w-4xl overflow-hidden">
        <div className="split-layout">
          {/* Left side with background and lock icon */}
          <div className="image-side p-6 text-white flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-sm" />
            
          </div>

          {/* Right side with form */}
          <div className="form-side p-6">
            <div className="max-w-sm mx-auto">
              <h1 className="text-2xl font-bold mb-2">Create a New Password</h1>
              <p className="text-gray-500 mb-6">
                Your new password must be different from previously used passwords
              </p>

              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="password"
                    placeholder="New Password"
                    className="form-input"
                    value={passwords.newPassword}
                    onChange={(e) => setPasswords({
                      ...passwords,
                      newPassword: e.target.value
                    })}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-input"
                    value={passwords.confirmPassword}
                    onChange={(e) => setPasswords({
                      ...passwords,
                      confirmPassword: e.target.value
                    })}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="primary-button"
                >
                  Update your password
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
