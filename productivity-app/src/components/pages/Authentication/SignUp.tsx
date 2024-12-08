import React, { useState } from 'react';
import { signUpUser } from './api';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
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
          navigate('/task');
        }
      } catch (err: any) {
        console.error("Sign Up error:", err);
        setError(err.response?.data?.error || 'Something went wrong in SignUp.tsx');
      }
    };
  
    return (
      <div>
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <input
            type="password"
            placeholder="Re-enter the password"
            value={passwordRepeat}
            onChange={(e) => setPasswordRepeat(e.target.value)}
          /><br />
           <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          <button type="submit">Sign Up</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  };
  
  export default SignUp;