import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';
import { TextField } from 'formik-mui';
import { useDispatch } from 'react-redux';

// ⬇ An idCounter to simulate a serial database id: 
let idCounter = 1;



export default function BasicForm() {
	const dispatch = useDispatch();

	return (
		<div>

			<h1>ToDo Form</h1>

			<Formik
				initialValues={{
					todo: '',
					completed: false,
				}}
				validate={(values) => {
					let errors = {};
					if (!values.todo) {
						errors.todo = "Required";
					}
					return errors;
				}}
				onSubmit={(values, { resetForm }) => {
					values.id = idCounter;
					idCounter++;
					dispatch({ type: 'ADD_TODO', payload: values });
					resetForm();
				}}
			>
				{({ errors }) => (
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
							color={errors.todo ? "error" : "primary"}
							sx={{
								height: '40px',
								marginLeft: '10px',
							}}
						>
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	)
};

