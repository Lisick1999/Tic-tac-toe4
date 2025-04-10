// Пример App.jsx (именованный экспорт, соответствует import { App } from './App';)
import React from 'react';
import Game from './components/Game/Game'; // Убедитесь, что путь верный
import './index.css';

class App extends React.Component {
	render() {
		return (
			<div className="bg-red-500">
				<Game />
			</div>
		);
	}
}

export default App;
