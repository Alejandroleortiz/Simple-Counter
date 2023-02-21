import React from "react";
import ReactDOM from 'react-dom'
import Digits from "./digits";
import Icondigit from "./icon-digit";
import propTypes from "prop-types";

const Counter = (props) => {
	return (
		<>
			<div className="d-flex justify-content-center bg-dark">
				<span className="container row">
					<Icondigit />
					<Digits className="six">{props.digitSix}</Digits>
					<Digits className="five">{props.digitFive}</Digits>
					<Digits className="four">{props.digitFour}</Digits>
					<Digits className="three">{props.digitThree}</Digits>
					<Digits className="two">{props.digitTwo}</Digits>
					<Digits className="one">{props.digitOne}</Digits>
				</span>
			</div>
		</>
	);
};

Counter.propsTypes ={
digitSix: propTypes.number, 
digitFive: propTypes.number, 
digitFour: propTypes.number, 
digitThree: propTypes.number, 
digitTwo: propTypes.number, 
digitOne: propTypes.number, 
}

let counter = 0;

setInterval(function () {
const six = Math.floor(counter/100000)%10; // cada variable esta delimitada hasa 9 segun su posicion
const five = Math.floor(counter/10000)%10;
const four = Math.floor(counter/1000)%10;
const three = Math.floor(counter/100)%10;
const two = Math.floor(counter/10)%10;
const one = Math.floor(counter/1)%10;

counter ++;

ReactDOM.render(
	<Counter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>,
	document.querySelector('#app'));

},1000) // Ejecuta cada 10 segundos 

export default Counter;

