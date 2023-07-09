import { createStore, combineReducers } from 'redux'


// ⬇ Reducer to hold an array of objects, each with an id, todo, and completed property.
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
); // End store

export default store;