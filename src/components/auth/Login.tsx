import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import '../../assets/css/main.css';

interface LocationState {
  registered?: boolean;
  from?: string;
}

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const locationState = location.state as LocationState || {};

  useEffect(() => {
    if (locationState.registered) {
      setSuccess('Registration successful! Please log in.');
    }
  }, [locationState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    // In a real app, we would validate with the backend
    login(username, password);
    
    // Redirect to the page they came from or to the introduction
    navigate(locationState.from || '/introduction');
  };

  return (
    <section id="container">
      <header id="header">
        <div className="brand">
          <Link to="/" className="logo"><span>Web</span>Goat</Link>
        </div>
      </header>
      <section className="main-content-wrapper">
        <section id="main-content">
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <br/><br/>
          <form onSubmit={handleSubmit} style={{ width: "200px" }}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                autoFocus
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            
            <button type="submit" className="btn btn-primary btn-block">
              Sign in
            </button>
            <div className="text-center" style={{ marginTop: "10px" }}>
              <Link to="/register">Register a new user</Link>
            </div>
          </form>
        </section>
      </section>
    </section>
  );
};

export default Login;
