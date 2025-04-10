import React from 'react';
import { connect } from 'react-redux';
import FieldLayout from './FieldLayout'; // Убедитесь, что эта строка здесь

const Field = ({ field, onCellClick }) => {
	return (
		<FieldLayout field={field} onCellClick={onCellClick} />
	);
};

const mapStateToProps = (state) => {
	return {
		field: state.field,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onCellClick: (index) => {
			dispatch({ type: 'SET_FIELD', payload: { index, value: '' } });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
