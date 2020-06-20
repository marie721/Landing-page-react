import React from "react";

function Jumbotron() {
	return (
		<div className="jumbotron">
			{/* <img src="https://media.istockphoto.com/photos/cat-in-a-red-car-3-picture-id872320170?k=6&m=872320170&s=612x612&w=0&h=xeuIpiUC9qoLeB8ZPPWU7FcwGOb2AiFViJG5RJBCHMQ=" /> */}
			<h1 className="display-4">{"CATS + CARS!"}</h1>
			<p className="lead">
				{"Our adventurous friends are at it again..."}
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				{"Click Me!"}
			</a>
		</div>
	);
}

export default Jumbotron;
