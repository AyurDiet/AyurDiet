import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="login-bg">
			<div className="login-container">
				<h1 className="login-title">Login</h1>
				<p className="login-subtitle">Welcome back! Enter your credentials.</p>

				<form className="login-form">
					<label>
						Email
						<input type="email" placeholder="Your Email" required />
					</label>

					<label>
						Password
						<input
							type={showPassword ? "text" : "password"}
							placeholder="Your Password"
							required
						/>
					</label>

					<div className="show-password">
						<input
							type="checkbox"
							id="showPass"
							onChange={() => setShowPassword(!showPassword)}
						/>
						<label htmlFor="showPass">Show Password</label>
					</div>

					<button type="submit" className="auth-submit-btn">
						Login
					</button>
				</form>

				<p className="auth-footer">
					Don't have an account? <Link to="/register">Register</Link>
				</p>
			</div>
		</div>
	);
}
