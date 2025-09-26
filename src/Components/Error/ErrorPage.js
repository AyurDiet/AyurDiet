import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
	return (
		<div className="errorpage-leaf-bg">
			{/* Rising animated leaves */}
			<ul className="error-leaves-lost">
				{Array.from({ length: 18 }).map((_, idx) => (
					<li key={idx}></li>
				))}
			</ul>
			<div className="error-lost-content">
				<div className="error-lost-illustration">
					<span className="digit-4">4</span>
					<span className="digit-0-getting-lost">
						0{/* SVG leaf cluster rising with the zero */}
						<span className="zero-cover-leaves">
							<svg width="60" height="24" viewBox="0 0 60 24">
								<ellipse
									cx="10"
									cy="15"
									rx="10"
									ry="7"
									fill="#43A047"
									opacity="0.33"
								/>
								<ellipse
									cx="30"
									cy="16"
									rx="13"
									ry="8"
									fill="#A5D6A7"
									opacity="0.23"
								/>
								<ellipse
									cx="50"
									cy="12"
									rx="8"
									ry="6"
									fill="#66bb6a"
									opacity="0.26"
								/>
							</svg>
						</span>
					</span>
					<span className="digit-4">4</span>
				</div>
				<p>
					Uh oh! It seems even our “0” got lost among the Ayur leaves...
					<br />
					<span className="smol">
						Let&apos;s help you go back to the diet path!
					</span>
				</p>
				<Link to="/" className="cta-btn pulse-anim">
					Take me Home!
				</Link>
			</div>
		</div>
	);
}
