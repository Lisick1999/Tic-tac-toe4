import React from 'react';
import Game from './components/Game/Game';
import './index.css';

class App extends React.Component {
	render() {
		return (
			<div className="bg-red-800">
				<Game />
			</div>
		);
	}
}

export default App;
