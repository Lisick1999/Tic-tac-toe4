const initialState = {
	field: Array(9).fill(''),
	currentPlayer: 'X',
	winner: null,
	isGameEnded: false,
	isDraw: false,
  };

  export const reducer = (state = initialState, action) => {
	switch (action.type) {
	  case 'SET_FIELD':
		const newField = [...state.field];
		newField[action.payload.index] = action.payload.value;
		return { ...state, field: newField };
	  case 'SET_CURRENT_PLAYER':
		return { ...state, currentPlayer: action.payload };
	  case 'SET_WINNER':
		return { ...state, winner: action.payload };
	  case 'SET_IS_GAME_ENDED':
		return { ...state, isGameEnded: action.payload };
	  case 'SET_IS_DRAW':
		return { ...state, isDraw: action.payload };
	  case 'RESTART_GAME':
		return initialState;
	  default:
		return state;
	}
  };

  export default reducer;
