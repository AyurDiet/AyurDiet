import React, { useState } from "react";
import { exploreItems } from "../../Lists/exploreitems";
import "./ExplorePage.css";

export default function ExplorePage() {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const goPrev = () => {
		if (selectedIndex > 0) {
			setSelectedIndex(selectedIndex - 1);
		}
	};

	const goNext = () => {
		if (selectedIndex < exploreItems.length - 1) {
			setSelectedIndex(selectedIndex + 1);
		}
	};

	const current = exploreItems[selectedIndex];

	return (
		<div className="ae‑bg">
			<div className="ae‑card">
				<div className="ae‑imageContainer">
					<img src={current.img} alt={current.title} className="ae‑image" />
					<div className="ae‑titleOverlay">
						<h2 className="ae‑titleText">{current.title}</h2>
					</div>

					<button
						className="ae‑navArrow ae‑navLeft"
						onClick={goPrev}
						disabled={selectedIndex === 0}
						aria-label="Previous"
					>
						‹
					</button>
					<button
						className="ae‑navArrow ae‑navRight"
						onClick={goNext}
						disabled={selectedIndex === exploreItems.length - 1}
						aria-label="Next"
					>
						›
					</button>
				</div>

				<div className="ae‑content">
					<p className="ae‑desc">{current.desc}</p>
				</div>

				<div className="ae‑actions">
					<a href="/" className="ae‑homeBtn">
						Back to Home
					</a>
				</div>
			</div>
		</div>
	);
}
