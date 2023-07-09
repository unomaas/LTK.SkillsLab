import { createStore, combineReducers } from 'redux'



const todoReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			console.log(`Ryan Here: todoReducer \n `, { payload: action.payload });
			return [...state, action.payload];


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