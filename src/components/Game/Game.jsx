import React from 'react';
import { connect } from 'react-redux';
import GameLayout from './GameLayout';

class Game extends React.Component {
	render() {
		return (
			<GameLayout
				onRestartGame={this.props.restartGame}
			/>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		restartGame: () => dispatch({ type: 'RESTART_GAME' }),
	};
};

export default connect(null, mapDispatchToProps)(Game);
