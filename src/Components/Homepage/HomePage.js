import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Navbar/NavBar"; 
import "./HomePage.css";

export default function HomePage() {
	return (
		<>
			<NavBar />
			<div className="homepage-green">
				<div className="home-main-card animate-slide-fade">
					<h1>
						Welcome to <span>AyurDiet</span>
					</h1>
					<p>
						Modern Nutrition Meets Ancient Wisdom.
						<br />
						Get personalized Ayurvedic diet recommendations effortlessly.
					</p>
					<Link to="/get-started" className="cta-btn pulse-anim">
						Get Started
					</Link>
				</div>
				<div className="home-image-card fade-in-right">
					<img
						src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop&w=600&q=80"
						alt="Ayurvedic Diet"
					/>
				</div>
			</div>
		</>
	);
}
