import React from 'react';

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw, winner }) => {
	let message;

	if (isDraw) {
		message = "Ничья!";
	} else if (isGameEnded) {
		message = `Победа: ${winner}`;
	} else {
		message = `Ходит: ${currentPlayer}`;
	}

	return (
		<div className="bg-white p-4 rounded shadow-md text-center p-2 border border-green-500 mb-2"> {/* Tailwind CSS классы */}
			<p className="text-lg font-semibold">{message}</p>
		</div>
	);
};

export default InformationLayout;
