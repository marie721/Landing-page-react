import React from "react";

function Navbar() {
	return (
		<div className="container-fluid">
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex flex-row justify-content-between">
				<div className="container">
					<a className="navbar-brand" href="#">
						Kitty Store
					</a>
					<ul className="navbar-nav ">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								My kitty
							</a>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">
									Kitties Available
								</a>
								<a className="dropdown-item" href="#">
									Breed Directory
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									Search for Cats
								</a>
							</div>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="#"
								tabIndex="-1"
								aria-disabled="true">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
export default Navbar;
