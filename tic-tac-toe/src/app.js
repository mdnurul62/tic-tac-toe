import React from 'react';
import Board from './components/Board';


class App extends React.Component{
	render() {
		return (
			<div className="col-md-4 col-md-offset-4">
				<h1> Tic Tac Toe</h1>
				<Board />
			</div>
			)
	}
	
}

export default App;