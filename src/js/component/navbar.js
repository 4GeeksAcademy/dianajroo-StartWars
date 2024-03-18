import React from "react";
import { Link } from "react-router-dom";
import startWarsimg from "../../img/start-wars.jpg";

export const Navbar = () => {
	return (
		<div classNameName="container">
			<nav classNameName="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span classNameName="navbar-brand mb-0 h1"> <img src={startWarsimg} style={{ width: '100px', height: '100px,' }} />  </span>
				</Link>
				<div classNameName="ml-auto">
					<div className="dropdown">
						<a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown link
						</a>

						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);

};
