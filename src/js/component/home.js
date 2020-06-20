import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./jumbotron";
import Carddeck from "./carddeck.js";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="nav-top">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Carddeck />
			</div>
		</div>
	);
}
