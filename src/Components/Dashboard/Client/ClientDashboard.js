import React from "react";
import "./ClientDashboard.css";

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
					<div className="streak">Streak Content</div>
					<div className="contact">Contact Content</div>
				</div>
			</div>
		</>
	);
};

export default ClientDashboard;
