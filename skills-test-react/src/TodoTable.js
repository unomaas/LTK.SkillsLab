import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';

export default function TodoTable() {
	const dispatch = useDispatch();

	const todoList = useSelector(state => state.todoReducer);
	const [selectedRow, setSelectedRow] = React.useState(null);

	const columns = [
		{
			field: 'todo',
			headerName: 'To Do',
			type: 'string',
			flex: 1,
		},
		{
			field: 'completed',
			headerName: 'Completed',
			type: 'boolean',
		}
	]; // End columns


	return (
		<Box sx={{ width: '100%' }}>
			<DataGrid
				rows={todoList}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				pageSizeOptions={[5]}
				onRowSelectionModelChange={([selection]) => {
					setSelectedRow(todoList.find(row => row.id === selection));
				}}
			/>

			{selectedRow &&
				<div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
					<Button
						color="error"
						onClick={() => dispatch({ type: 'DELETE_TODO', payload: selectedRow.id })}
						variant="contained"
					>
						Delete
					</Button>
					<Button
						color={selectedRow.completed ? "warning" : "success"}
						onClick={() => dispatch({ type: 'UPDATE_TODO', payload: selectedRow.id })}
						variant="contained"
					>
						Mark {selectedRow.completed ? 'Incomplete' : 'Complete'}
					</Button>
				</div>
			}
		</Box>
	) // End return
} // End TodoTable
