import React from 'react';
import './Square.css';

//class Square extends React.Component{
	function Square(props) {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		value: null
	// 	};
	// }
	//render() {
		return(
			<button className='square' onClick={() => props.onClick()}>
				{props.value}
			</button>
		)
	
}

export default Square;