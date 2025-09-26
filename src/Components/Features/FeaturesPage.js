import React from "react";
import { Link } from "react-router-dom";
import "./FeaturesPage.css";

const features = [
	{
		title: "AI Diet Generator",
		desc: "Auto-generate Ayurvedic plans by dosha, age, goals.",
		icon: "🧘",
	},
	{
		title: "Nutrient Analysis",
		desc: "Visualize macros & micros for any meal.",
		icon: "🌱",
	},
	{ title: "Weekly Planner", desc: "Plan and track weekly meals.", icon: "🗓" },
	{
		title: "Recipe Library",
		desc: "Browse hundreds of nourishing Ayurvedic recipes.",
		icon: "🥗",
	},
	{
		title: "Seasonal Guide",
		desc: "Tailor your diet to the seasons.",
		icon: "🌦",
	},
	{
		title: "Progress Tracker",
		desc: "Celebrate milestones and wellness progress.",
		icon: "📈",
	},
	{
		title: "Dietitian Dashboard",
		desc: "Manage multiple clients.",
		icon: "🩺",
	},
	{
		title: "Wellness Community",
		desc: "Connect, share, discuss Ayurveda.",
		icon: "👥",
	},
	{
		title: "Mobile Ready",
		desc: "Enjoy all features on any device.",
		icon: "📱",
	},
	{
		title: "Privacy & Security",
		desc: "Encrypted data and anonymity.",
		icon: "🔒",
	},
	{
		title: "Modern UI",
		desc: "A beautiful, intuitive experience.",
		icon: "🎨",
	},
	{
		title: "Live Chat & Help",
		desc: "Fast live support, guides, and tutorials.",
		icon: "💬",
	},
];

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
