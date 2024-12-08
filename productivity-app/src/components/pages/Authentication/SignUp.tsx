import React, { useState } from 'react';
import './SignUp.css';

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState(''); // For password mismatch validation

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === 'confirmPassword' || name === 'password') {
            setError(''); // Clear the error as the user types
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match'); // Show error if passwords don't match
            return;
        }
        // Send data to backend
        console.log(formData);
    };

    return (
        <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Your Account</h2>
        <p className="signup-subtitle">Sign up to start managing your tasks</p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <i className="icon-user"></i>
            <input
              type="text"
              name="username"
              placeholder="Username*"
              value={formData.username}
              onChange={handleChange}
              className="signup-input"
              required
            />
          </div>
          <div className="input-container">
            <i className="icon-email"></i>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="signup-input"
              required
            />
          </div>
          <div className="input-container">
            <i className="icon-lock"></i>
            <input
              type="password"
              name="password"
              placeholder="Password*"
              value={formData.password}
              onChange={handleChange}
              className="signup-input"
              required
            />
          </div>
          <div className="input-container">
            <i className="icon-lock"></i> {/* Same icon for confirm password */}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password*"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="signup-input"
              required
            />
          </div>
          {error && <p className="signup-error">{error}</p>} {/* Error message */}
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p className="signup-footer">
          Already have an account? <a href="/log-in">Log In</a>
        </p>
      </div>
    </div>
    );
};

export default SignUp;
