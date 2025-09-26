import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactPage.css";

export default function ContactPage() {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here you would normally handle form submission (API call)
		setSubmitted(true); // Show "Send another message" button
	};

	const handleReset = () => {
		setSubmitted(false); // Show form again
	};

	return (
		<div className="contact-bg">
			<div className="contact-container">
				<h1 className="contact-title">Contact Us</h1>
				<p className="contact-subtitle">
					We'd love to hear from you! Send us your queries or feedback.
				</p>

				{!submitted ? (
					<form className="contact-form" onSubmit={handleSubmit}>
						<label>
							Name
							<input type="text" placeholder="Your Name" required />
						</label>
						<label>
							Email
							<input type="email" placeholder="Your Email" required />
						</label>
						<label>
							Message
							<textarea placeholder="Your Message" rows="5" required></textarea>
						</label>
						<button type="submit" className="contact-submit-btn">
							Send Message
						</button>
					</form>
				) : (
					<div className="sent-message-container">
						<h2 className="sent-message">✅ Your message has been sent!</h2>
						<button className="contact-submit-btn" onClick={handleReset}>
							Send Another Message
						</button>
					</div>
				)}

				<div className="back-btn-wrapper">
					<Link to="/" className="features-home-btn">
						⬅ Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
}
