import { createStore } from 'redux'



const todoReducer = (state = [], action) => {
	return state;
}
		


const store = createStore(todoReducer);

export default store;