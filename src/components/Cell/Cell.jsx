import React from 'react';
import { connect } from 'react-redux';

class Cell extends React.Component {
	handleClick = () => {
		this.props.onCellClick(this.props.index, this.props.currentPlayer);
	}

	render() {
		const { value, index, currentPlayer, isGameEnded } = this.props;
		const ariaLabel = value === '' ? `Ячейка ${index + 1}, пустая` : `Ячейка ${index + 1}, занята: ${value}`;

		return (
			<button
				className="block h-24 text-4xl border border-gray-300 cursor-pointer flex items-center justify-center hover:bg-gray-100 text-black"
				onClick={this.handleClick}
				aria-label={ariaLabel}
				disabled={value !== '' || isGameEnded}
			>
				{value}
			</button>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		value: state.field[ownProps.index],
		currentPlayer: state.currentPlayer,
		isGameEnded: state.isGameEnded,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onCellClick: (index, currentPlayer) => {
			dispatch({ type: 'SET_FIELD', payload: { index: index, value: currentPlayer } });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
