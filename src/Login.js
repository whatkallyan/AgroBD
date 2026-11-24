import React, { useState } from 'react';

function Login({ setCurrentPage }) {
  // Current mode: 'login', 'signup', or 'forgot'
  const [authMode, setAuthMode] = useState('login');
  
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (authMode === 'login') {
      if (!formData.emailOrPhone || !formData.password) {
        alert('Please fill in all fields!');
        return;
      }
      alert(`Login successful for: ${formData.emailOrPhone}`);
      setCurrentPage('home');
    } 
    else if (authMode === 'signup') {
      if (!formData.name || !formData.emailOrPhone || !formData.password) {
        alert('Please fill in all required fields!');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      alert(`Account created for: ${formData.name}! Please sign in.`);
      setAuthMode('login');
    } 
    else if (authMode === 'forgot') {
      if (!formData.emailOrPhone) {
        alert('Please enter your registered email or phone number!');
        return;
      }
      alert(`Password reset link sent to: ${formData.emailOrPhone}`);
      setAuthMode('login');
    }
  };

  return (
    <div className="login-container">
      <div className="overlay"></div>
      <div className="login-card">
        <h2>
          {authMode === 'login' && 'Sign In to AgroBD'}
          {authMode === 'signup' && 'Create AgroBD Account'}
          {authMode === 'forgot' && 'Reset Password'}
        </h2>

        <form onSubmit={handleSubmit}>
          {authMode === 'signup' && (
            <div className="input-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name"
                required 
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="input-group">
            <label>Email or Phone</label>
            <input 
              type="text" 
              name="emailOrPhone"
              required 
              placeholder="Enter your email or phone"
              value={formData.emailOrPhone}
              onChange={handleChange}
            />
          </div>

          {authMode !== 'forgot' && (
            <div className="input-group">
              <label>Password</label>
              <input 
                type="password" 
                name="password"
                required 
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          )}

          {authMode === 'signup' && (
            <div className="input-group">
              <label>Confirm Password</label>
              <input 
                type="password" 
                name="confirmPassword"
                required 
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          )}

          {authMode === 'login' && (
            <div className="extra-links">
              <span className="link-btn" onClick={() => setAuthMode('forgot')}>
                Forgot Password?
              </span>
            </div>
          )}

          <button type="submit" className="login-btn">
            {authMode === 'login' && 'Log In'}
            {authMode === 'signup' && 'Sign Up'}
            {authMode === 'forgot' && 'Send Reset Link'}
          </button>
        </form>

        <div className="auth-footer">
          {authMode === 'login' && (
            <p>
              Don't have an account?{' '}
              <span className="link-btn highlight" onClick={() => setAuthMode('signup')}>
                Sign Up
              </span>
            </p>
          )}

          {authMode === 'signup' && (
            <p>
              Already have an account?{' '}
              <span className="link-btn highlight" onClick={() => setAuthMode('login')}>
                Log In
              </span>
            </p>
          )}

          {authMode === 'forgot' && (
            <p>
              Remember your password?{' '}
              <span className="link-btn highlight" onClick={() => setAuthMode('login')}>
                Log In
              </span>
            </p>
          )}

          <p className="switch-text">
            Back to{' '}
            <span className="highlight" onClick={() => setCurrentPage('home')}>
              Home
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;