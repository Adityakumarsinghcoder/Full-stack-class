import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please enter email and password.");
      return;
    }

    setError("");
    alert("Login Successful!");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo">S</div>

        <h1>Welcome Back</h1>
        <p className="subtitle">Sign in to continue to your account</p>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="forgot">
              Forgot Password?
            </a>
          </div>

          {/* Error */}
          {error && <p className="error">{error}</p>}

          {/* Login Button */}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;