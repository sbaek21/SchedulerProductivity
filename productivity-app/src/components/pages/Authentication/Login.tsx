import React, { useState } from 'react';
import { loginUser, AuthenticationProps } from './api';
import { useNavigate } from 'react-router-dom';
import './Login.css';

<<<<<<< HEAD
const Login: React.FC<AuthenticationProps> = ({ setIsAuthenticated }) => {
=======

interface LoginProps {
  setIsAuthenticated: (value: boolean) => void; // Accept setIsAuthenticated as a prop
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
>>>>>>> f848ffe07844998d2b6f1ba3b1fe764bf83c38f3
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await loginUser(username, password);
      if (response.data.message === 'Login successful') {
<<<<<<< HEAD
        setIsAuthenticated(true)
        navigate('/task');
=======
        setIsAuthenticated(true); // Update authentication state
        navigate('/task'); // Navigate to the task page
>>>>>>> f848ffe07844998d2b6f1ba3b1fe764bf83c38f3
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
<<<<<<< HEAD
          <i className="icon-user"></i>
          <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
              />
=======
            <i className="icon-user"></i>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
>>>>>>> f848ffe07844998d2b6f1ba3b1fe764bf83c38f3
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
<<<<<<< HEAD
          </form>
=======
        </form>
>>>>>>> f848ffe07844998d2b6f1ba3b1fe764bf83c38f3
        {error && <p className="login-error">{error}</p>}
        <p className="login-footer">
          Don’t have an account? <a href="/sign-up">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;