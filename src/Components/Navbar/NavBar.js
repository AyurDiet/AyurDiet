import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
	return (
		<nav className="navbar">
			<div className="nav-logo">AyurDiet</div>
			<div className="nav-links">
				<Link to="/features">Features</Link>
				<Link to="/explore">Explore</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</nav>
	);
}

export default NavBar;
