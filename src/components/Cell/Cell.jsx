import React from 'react';
import { connect } from 'react-redux';

class Cell extends React.Component {
	handleClick = () => {
		this.props.onCellClick(this.props.index);
	}

	render() {
		const { value, index } = this.props;
		const ariaLabel = value === '' ? `Ячейка ${index + 1}, пустая` : `Ячейка ${index + 1}, занята: ${value}`;

		return (
			<button
				className="block h-24 text-4xl border border-gray-300 cursor-pointer flex items-center justify-center hover:bg-gray-100"
				onClick={this.handleClick}
				disabled={value !== ''}
				aria-label={ariaLabel}
			>
				{value}
			</button>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		value: state.field[ownProps.index],
		currentPlayer: state.currentPlayer // Получаем currentPlayer из state
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onCellClick: (index) => dispatch({ type: 'SET_FIELD', payload: { index: index, value: ownProps.currentPlayer } }) // Используем currentPlayer из props
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
