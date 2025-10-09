import React from "react";
import { Link } from "react-router-dom";
import "./FeaturesPage.css";
import { features } from "../../Lists/features";



export default function FeaturesPage() {
	return (
		<div className="masonry-bg">
			<h1 className="features-title">AyurDiet Features</h1>
			<div className="masonry-flow-grid">
				{features.map(({ title, desc, icon }, i) => (
					<div
						className="masonry-flow-card"
						key={i}
						style={{ animationDelay: `${i * 0.15}s` }}
					>
						<div className="feature-icon">{icon}</div>
						<div>
							<h2>{title}</h2>
							<p>{desc}</p>
						</div>
					</div>
				))}
			</div>
			<div className="back-btn-wrapper">
				<Link to="/" className="features-home-btn">
					⬅ Back to Home
				</Link>
			</div>
		</div>
	);
}
