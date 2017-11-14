import React from 'react';
import Square from './Square';
import './Board.css';
import CalculateWinner from './CalculateWinner';

class Board extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true
		}
	}

	renderSquare(i) {
		return <Square 
					value={this.state.squares[i]} 
					onClick={() => this.handleClick(i)}
					/>
	}

	
	handleClick(i) {
		const squares = this.state.squares.slice();
		if(CalculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = this.state.xIsNext? 'X' : 'O';
		this.setState({
				squares: squares,
				xIsNext: !this.state.xIsNext
			});
	}


	render() {
		const winner = CalculateWinner(this.state.squares);
		let status;
		if(winner) {
			status = "You won!" + winner;
		} else {
		status = 'Next Player: ' + (this.state.xIsNext? 'X' : 'O');
	}
		return (
		<div className='container'>
			<h2> {status} </h2>
			<div className='row'>
				{this.renderSquare(0)}
				{this.renderSquare(1)}
				{this.renderSquare(2)}
			</div>
			<div className='row'>
				{this.renderSquare(3)}
				{this.renderSquare(4)}
				{this.renderSquare(5)}
			</div>
			<div className='row'>
				{this.renderSquare(6)}
				{this.renderSquare(7)}
				{this.renderSquare(8)}
			</div>

		</div>

		)
	}
}

export default Board;