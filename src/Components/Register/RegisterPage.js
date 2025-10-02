import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

export default function RegisterPage() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="register-bg">
			<div className="register-container">
				<h1 className="register-title">Register</h1>
				<p className="register-subtitle">
					Create your account and start your AyurDiet journey.
				</p>

				<form className="register-form">
					<label>
						Name
						<input type="text" placeholder="Your Name" required />
					</label>

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
							id="showPassReg"
							onChange={() => setShowPassword(!showPassword)}
						/>
						<label htmlFor="showPassReg">Show Password</label>
					</div>

					<button type="submit" className="auth-submit-btn">
						Register
					</button>
				</form>

				<p className="auth-footer">
					Already have an account? <Link to="/login">Login</Link>
				</p>
			</div>
		</div>
	);
}
