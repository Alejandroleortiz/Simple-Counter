import React from "react";
import ReactDOM from 'react-dom'
import Digits from "./digits";
import Icondigit from "./icon-digit";


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
digitSix: Prototypes.number, 
digitFive: Prototypes.number, 
digitFour: Prototypes.number, 
digitThree: Prototypes.number, 
digitTwo: Prototypes.number, 
digitOne: Prototypes.number, 
}

let counter = 0;

setInterval(function () {
const six = Math.floor(counter/1000000);
const five = Math.floor(counter/100000);
const four = Math.floor(counter/10000);
const three = Math.floor(counter/1000);
const two = Math.floor(counter/100);
const one = Math.floor(counter/10);
console.log(one, two, three, four, five, one);
	
},1000)
ReactDOM.render(
	<Counter digiOne={counter.indexOf()}/>,
	document.querySelector('#app'));
export default Counter;
