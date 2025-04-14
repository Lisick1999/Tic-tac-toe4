const initialState = {
    field: Array(9).fill(''),
    currentPlayer: 'X',
    isGameEnded: false,
    isDraw: false,
    winner: null,
};

const checkWinner = (field) => {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (field[a] && field[a] === field[b] && field[a] === field[c]) {
            return field[a];
        }
    }
    return null;
};

const checkDraw = (field) => {
    return field.every(cell => cell !== '');
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FIELD':
            if (state.isGameEnded) {
                return state;
            }

            const { index, value } = action.payload;
            const newField = [...state.field];

            if (newField[index] === '') {
                newField[index] = value;

                const winner = checkWinner(newField);
                const isDraw = checkDraw(newField);
                let isGameEnded = false;
                let newCurrentPlayer = state.currentPlayer;

                if (winner) {
                    isGameEnded = true;
                } else if (isDraw) {
                    isGameEnded = true;
                } else {
                    newCurrentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
                }

                return {
                    ...state,
                    field: newField,
                    currentPlayer: newCurrentPlayer,
                    isGameEnded: isGameEnded,
                    isDraw: isDraw,
                    winner: winner,
                };
            }
            return state;
        case 'RESTART_GAME':
            return initialState;
        default:
            return state;
    }
};

export default reducer;
