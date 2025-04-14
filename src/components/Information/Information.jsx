import React from 'react';
import { connect } from 'react-redux';
import InformationLayout from './InformationLayout';

class Information extends React.Component {
	render() {
		return (
			<InformationLayout
				currentPlayer={this.props.currentPlayer}
				isGameEnded={this.props.isGameEnded}
				isDraw={this.props.isDraw}
				winner={this.props.winner}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentPlayer: state.currentPlayer,
		isGameEnded: state.isGameEnded,
		isDraw: state.isDraw,
		winner: state.winner,
	};
};

export default connect(mapStateToProps)(Information);
