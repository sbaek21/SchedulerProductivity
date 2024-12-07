import React, { useState } from 'react';
import { loginUser } from './api';
import { useNavigate } from 'react-router-dom';
import './Login.css';


interface LoginProps {
  setIsAuthenticated: (value: boolean) => void; // Accept setIsAuthenticated as a prop
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await loginUser(username, password);
      if (response.data.message === 'Login successful') {
        setIsAuthenticated(true); // Update authentication state
        navigate('/task'); // Navigate to the task page
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Log in to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <i className="icon-user"></i>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
          </div>
          <div className="input-container">
            <i className="icon-lock"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {error && <p className="login-error">{error}</p>}
        <p className="login-footer">
          Don’t have an account? <a href="/sign-up">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;