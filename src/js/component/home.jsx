import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center bg-dark">
			<span className="container row">
				<div className="display-1 text-white text-center col-sm"><p className="mt-3 border border-3 rounded">icon</p></div>
				<div className="display-1 text-white text-center col-sm"><p className="mt-3 border border-3 rounded">0</p></div>
				<div className="display-1 text-white text-center col-sm"><p className="mt-3 border border-3 rounded">0</p></div>
				<div className="display-1 text-white text-center col-sm"><p className="mt-3 border border-3 rounded">0</p></div>
				<div className="display-1 text-white text-center col-sm"><p className="mt-3 border border-3 rounded">0</p></div>
				<div className="display-1 text-white text-center col-sm"><p className="mt-3 border border-3 rounded">0</p></div>
				<div className="display-1 text-white text-center col-sm"><p className="mt-3 border border-3 rounded">0</p></div>
			</span>
		</div>
	);
};

export default Home;
