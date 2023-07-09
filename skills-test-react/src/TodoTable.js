import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';


export default function TodoTable() {
	const dispatch = useDispatch();
	const todoList = useSelector(state => state.todoReducer);



	return (
		<div>
			{JSON.stringify(todoList)}
		</div>
	)
}
