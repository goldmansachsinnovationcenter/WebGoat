import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../assets/css/main.css';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [matchingPassword, setMatchingPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!username) {
      newErrors.username = 'Username is required';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    }
    
    if (password !== matchingPassword) {
      newErrors.matchingPassword = 'Passwords do not match';
    }
    
    if (!agree) {
      newErrors.agree = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, would send registration data to the backend
      // For this demo, just redirect to login
      navigate('/login', { state: { registered: true } });
    }
  };

  return (
    <div className="login-container">
      <div className="registration-box">
        <div className="login-logo">
          <h2>WebGoat</h2>
          <p>Please Sign Up</p>
        </div>
        
        <form onSubmit={handleSubmit} className="form-horizontal">
          <div className={`form-group ${errors.username ? 'has-error' : ''}`}>
            <label htmlFor="username" className="control-label">Username</label>
            <div>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
              {errors.username && <span className="error-message">{errors.username}</span>}
            </div>
          </div>
          
          <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
            <label htmlFor="password" className="control-label">Password</label>
            <div>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
          </div>
          
          <div className={`form-group ${errors.matchingPassword ? 'has-error' : ''}`}>
            <label htmlFor="matchingPassword" className="control-label">Confirm Password</label>
            <div>
              <input
                type="password"
                className="form-control"
                id="matchingPassword"
                value={matchingPassword}
                onChange={(e) => setMatchingPassword(e.target.value)}
                placeholder="Confirm password"
              />
              {errors.matchingPassword && <span className="error-message">{errors.matchingPassword}</span>}
            </div>
          </div>
          
          <div className="form-group">
            <label className="control-label">Terms of Use</label>
            <div>
              <div style={{ border: '1px solid #e5e5e5', height: '200px', overflow: 'auto', padding: '10px' }}>
                <p>WebGoat is a deliberately insecure web application maintained by OWASP designed to teach web application security lessons.</p>
                <p>This application is meant to demonstrate common server-side application flaws. The exercises are intended to be used by people to learn about application security and penetration testing techniques.</p>
              </div>
            </div>
          </div>
          
          <div className={`form-group ${errors.agree ? 'has-error' : ''}`}>
            <div>
              <div className="checkbox">
                <label>
                  <input 
                    type="checkbox" 
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                  <span>I agree with the terms and conditions</span>
                </label>
                {errors.agree && <span className="error-message">{errors.agree}</span>}
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <div>
              <button type="submit" className="btn btn-primary">Sign up</button>
            </div>
          </div>
          
          <div className="login-link">
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
