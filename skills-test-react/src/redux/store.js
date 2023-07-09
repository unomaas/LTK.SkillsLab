import { createStore, combineReducers } from 'redux'



const todoReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				action.payload
			];

		case 'UPDATE_TODO':
			return state.map(todo => {
				if (todo.id === action.payload) {
					todo.completed = !todo.completed;
				}
				return todo;
			});

		case 'DELETE_TODO':
			return state.filter(todo => todo.id !== action.payload);

		default:
			return state;
	}
}


const store = createStore(
	combineReducers({
		todoReducer,
	}),

);

export default store;