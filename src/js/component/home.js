import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./jumbotron";
import Carddeck from "./carddeck.js";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="nav-top">
			<Navbar />
			<div className="container-fluid">
				<Jumbotron />
				<Carddeck />
			</div>
			<Footer />
		</div>
	);
}
