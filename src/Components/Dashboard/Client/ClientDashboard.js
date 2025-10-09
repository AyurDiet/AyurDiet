import React from "react";
import "./ClientDashboard.css";
import { Link } from "react-router-dom";

const ClientDashboard = () => {
	return (
		<>
			<div className="client-dashboard-cont">
				<div className="left-sidebar">
					<div className="wb">Welcome Back</div>
					<div className="profile-pic">
						<img
							src="https://www.w3schools.com/howto/img_avatar.png"
							alt="Avatar"
							className="avatar"
						/>
					</div>
					<div className="btn-cont">
						<button className="btn-dashboard">Create Plan</button>
					</div>
					<div className="divider"></div>
					<div className="tabs">
						<div className="tabs-item">Dashboard</div>
						<div className="tabs-item">Diet Plan</div>
						<div className="tabs-item">Progress</div>
						<div className="tabs-item">Dietitian</div>
						<div className="tabs-item">Report</div>
						<div className="divider"></div>
						<div className="tabs-item">Recipies</div>
						<div className="tabs-item">Templates	</div>
						<div className="tabs-item">Meal Plan Settings</div>
						<div className="tabs-item">Account Settings</div>
						<div className="divider"></div>
					</div>
				</div>
				<div className="right-sidebar">
					<div className="nutrient-plan">Nutrient Plan Content</div>
					<div className="upcoming-meal">Upcoming Meal Content</div>
					<div className="nutriant-ranges">Nutrient Ranges Content</div>
					<div className="snacks">Snacks Content</div>
					<div className="dashboard-cards">
						<div className="streak">Streak Content</div>
						<div className="contact">
							<div className="contact-icon">
								{/* Example SVG icon: */}
								<svg width="32" height="32" fill="none">
									<circle cx="16" cy="16" r="16" fill="#fff" />
									<path
										d="M10 13c0-2.2 1.8-4 4-4s4 1.8 4 4v2.35c1.2.34 2 1.39 2 2.65 0 1.52-1.23 2.75-2.75 2.75s-2.75-1.23-2.75-2.75c0-1.26.8-2.31 2-2.65V13c0-1.1-.9-2-2-2s-2 .9-2 2v2.01c-.59.35-1 .98-1 1.74 0 1.1.9 2 2 2s2-.9 2-2c0-.76-.41-1.39-1-1.74V13z"
										fill="#196654"
									/>
								</svg>
							</div>
							<h3>Contact Support</h3>
							<p className="contact-text">
								Need help or have a question about your plan?
								<br />
								Our team is here to assist you.
							</p>
							<Link to="/contact" className="contact-btn">
								<span>Contact Us</span>
							</Link>
							<Link to="/faq" className="contact-link">
								Visit FAQ
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ClientDashboard;
