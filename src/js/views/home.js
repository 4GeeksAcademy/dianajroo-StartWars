import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const Home = () => {
	//funcion
	const { store } = useContext(Context)

	return (
		<>

			<div className="container">
				<h1 className="text-danger">Characters</h1>
				<div className="carrusel">

					{store.characters.map((item) => {

						return (
							<div className="row" style={{ margin: '4px' }}>
								<div className="card" style={{ width: '18rem', }}>
									<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..."></img>
									<div className="card-body">
										<h5 className="card-title"> {item.properties.name} </h5>
										<p className="card-text"><b>Gender:</b> {item.properties.gender} </p>
										<p className="card-text"><b>Hair Color:</b> {item.properties.hair_color} </p>
										<p className="card-text"><b>Eye-Color:</b> {item.properties.eye_color} </p>


										<div className="botones" style={{ display: 'flex', justifyContent: 'space-between' }}>
											<a href="#" className="btn btn-dark">Learn More!</a>
											<a href="#" className="btn btn-dark"> <i className="fa fa-heart text-warning" /> </a>
										</div>
									</div>
								</div>
							</div>


						)


					})}
				</div>
			</div>

			<div className="container" style={{ marginTop: '50px' }}>
				<h1 className="text-danger">Planets</h1>
				<div className="carrusel">
					{store.planets.map((item) => {

						return (
							<div className="row" style={{ margin: '4px' }}>
								<div className="card" style={{ width: '18rem', }}>
									<img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." style={{ marginRight: '0px', marginLeft: '0px' }}></img>
									<div className="card-body-" >
										<h5 className="card-title">  </h5>
										<p className="card-text"><b>Terrain: {item.properties.terrain} </b>  </p>
										<p className="card-text"><b>Population: {item.properties.population}</b>  </p>

										<div className="botones" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
											<a href="#" className="btn btn-dark">Learn More!</a>
											<a href="#" className="btn btn-dark"> <i className="fa fa-heart text-warning" /> </a>
										</div>
									</div>
								</div>
							</div>


						)


					})}
				</div>
			</div>



		</>
	);
}

