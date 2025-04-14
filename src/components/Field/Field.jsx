import React from 'react';
import { connect } from 'react-redux';
import FieldLayout from './FieldLayout';

const Field = ({ field, onCellClick, currentPlayer }) => {
	return (
		<FieldLayout field={field} onCellClick={onCellClick} currentPlayer={currentPlayer} />
	);
};

const mapStateToProps = (state) => {
	return {
		field: state.field,
		currentPlayer: state.currentPlayer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onCellClick: (index) => {
			dispatch({ type: 'SET_FIELD', payload: { index } });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
