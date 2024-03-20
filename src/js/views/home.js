import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const Home = () => {
	//funcion
	const {store} = useContext(Context)

	return (

		<div className="container">
			<h1 className="text-danger">Characters</h1>
			<div className="carrusel">
				<div className="row">
					<div className="card" style={{ width: '18rem', }}>
						<img src="https://starwars-visualguide.com/assets/img/characters/4.jpg" className="card-img-top" alt="..." style={{ marginRight: '0px', marginLeft: '0px' }}></img>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" className="btn btn-primary">Learn More!</a>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<h1 className="text-danger">Planets</h1>
				<div className="carrusel">
					<div className="row">
						<div className="card" style={{ width: '18rem', }}>
							<img src="https://starwars-visualguide.com/assets/img/characters/4.jpg" className="card-img-top" alt="..." style={{ marginRight: '0px', marginLeft: '0px' }}></img>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="btn btn-primary">Learn More!</a>
							</div>
						</div>
					</div>
				</div>

			</div >
		</div>

	);
}

