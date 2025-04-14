import React from 'react';
import Information from '../Information/Information';
import Field from '../Field/Field';

const GameLayout = ({ onRestartGame }) => {
	return (
		<div className="flex flex-col  justify-center min-h-screen bg-gray-100 w-80 mx-auto p-5 border border-blue-500">
			<h1 className="text-4xl font-bold mb-4">Крестики-нолики</h1>
			<Information />
			<Field />
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
				onClick={onRestartGame}
			>
				Начать заново
			</button>
		</div>
	);
};

export default GameLayout;
