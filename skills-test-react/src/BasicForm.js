import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';
// import { TextField } from '@mui/material';
import { TextField } from 'formik-mui';
import { useDispatch } from 'react-redux';

let idCounter = 1;

export default function BasicForm() {
	const dispatch = useDispatch();

	return (
		<div>
			<h1>TODO</h1>
			<Formik
				initialValues={{
					todo: '',
					completed: false,
				}}
				onSubmit={(values, { resetForm }) => {
					if (!values.todo) return;

					values.id = idCounter;
					idCounter++;

					dispatch({ type: 'ADD_TODO', payload: values });

					resetForm();
				}}
			>
				<Form>

					<Field
						id="todo"
						name="todo"
						label="Add To Do"
						variant='outlined'
						size="small"
						component={TextField}
						sx={{
							width: '80%',
						}}
					/>
					<Button
						type="submit"
						variant="contained"
						sx={{
							height: '40px',
							marginLeft: '10px',
						}}
					>
						Submit
					</Button>
				</Form>
			</Formik>
		</div>
	)
};

