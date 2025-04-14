import React from 'react';
import Cell from '../Cell/Cell';

const FieldLayout = ({ field, onCellClick, currentPlayer }) => {
	return (
		<div className="grid grid-cols-3 gap-1 border border-black">
			{field.map((value, index) => (
				<Cell
					key={index}
					index={index}
					onCellClick={onCellClick}
					currentPlayer={currentPlayer}
				/>
			))}
		</div>
	);
};

export default FieldLayout;
