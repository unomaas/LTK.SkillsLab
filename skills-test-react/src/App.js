import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountMenu from './AccountMenu';
import BasicForm from './BasicForm'
import { useSelector } from 'react-redux';
import TodoTable from './TodoTable';


export default function App() {

	// ⬇ State management for form display:
	const [openForm, setOpenForm] = React.useState(false);

	// ⬇ Handles opening and closing the form: 
	const handleOnClick = () => setOpenForm(!openForm);

	// ⬇ Array of todo objects, each with an id, todo, and completed property. 
	const todoList = useSelector(state => state.todoReducer);

	
	return (
		<Container maxWidth="sm" sx={{ textAlign: "center" }}>
			<AccountMenu onClick={handleOnClick} openForm={openForm} />

			{openForm &&
				<BasicForm />
			}

			<Box sx={{ my: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					React Skills Test
				</Typography>
			</Box>

			{todoList.length > 0 &&
				<Box sx={{ my: 4 }}>
					<TodoTable />
				</Box>
			}

		</Container>
	);
}
