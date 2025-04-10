import React from 'react';
import Cell from '../Cell/Cell'; // Импорт по умолчанию

const FieldLayout = ({ field, onCellClick }) => {
	return (
		<div className="grid grid-cols-3 gap-1 border border-black">
			{field.map((value, index) => (
				<Cell
					key={index}
					index={index}
					onCellClick={onCellClick}
				/>
			))}
		</div>
	);
};

export default FieldLayout;
