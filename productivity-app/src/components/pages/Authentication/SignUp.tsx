import React, { useState } from 'react';
import { signUpUser, AuthenticationProps } from './api';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';



const SignUp: React.FC<AuthenticationProps> = ({setIsAuthenticated}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      try {
        const response = await signUpUser(username, password, passwordRepeat, email);
        if (response.data.message === 'Sign Up successful') {
            setIsAuthenticated(true);
            navigate('/task');
        }
      } catch (err: any) {
        console.error("Sign Up error:", err);
        setError(err.response?.data?.error || 'Something went wrong in SignUp.tsx');
      }
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    value={passwordRepeat}
                    onChange={(e) => setPasswordRepeat(e.target.value)}
                    className="signup-input"
                    required
                    />
                </div>
                {error && <p className="signup-error">{error}</p>} 
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