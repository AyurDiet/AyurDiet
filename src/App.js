// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage/HomePage";
import ErrorPage from "./Components/Error/ErrorPage";
import FeaturesPage from "./Components/Features/FeaturesPage";
import ContactPage from "./Components/Contact/ContactPage";
// import other pages here

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/features" element={<FeaturesPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<ErrorPage />} />
				{/* Add additional routes here */}
			</Routes>
		</Router>
	);
}

export default App;
