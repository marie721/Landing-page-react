import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container">
			<Navbar />
			<Jumbotron />
			<Footer />
		</div>
	);
}
