import React from "react";
import ReactDOM from 'react-dom'
import Digits from "./digits";
import Icondigit from "./icon-digit";


const Counter = () => {
	return (
		<>
			<div className="d-flex justify-content-center bg-dark">
				<span className="container row">
					<Icondigit />
					<Digits className="six">0</Digits>
					<Digits className="five">0</Digits>
					<Digits className="four">0</Digits>
					<Digits className="three">0</Digits>
					<Digits className="two">0</Digits>
					<Digits className="one">0</Digits>
				</span>
			</div>
		</>
	);
};

export default Counter;
