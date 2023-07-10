const express = require('express');
const router = express.Router();
const pool = require('../../pool');
const pgFormat = require('pg-format');


// ⬇ Gets all of the Loan Data available in public.loans table:
router.get('/fetch-all-loans', async (req, res) => {
	const sql = `SELECT * FROM loans`;

	try {
		const results = await pool.query(sql);
		res.json(results.rows);
	} catch (error) {
		console.error('Error /get-all-loans', { error });
		res.sendStatus(500);
	}; // End try/catch
}); // End GET all loans


// ⬇ Gets one loan object based off of the loanId:
router.get('/fetch-loan-by-id/:id', async (req, res) => {
	const loanId = req.params.id;
	const sql = `SELECT * FROM loans WHERE loanId = ${pgFormat('%L::int', loanId)}`;

	try {
		const results = await pool.query(sql);
		res.json(results.rows);
	} catch (error) {
		console.error('Error /get-loan-by-id', { error });
		res.sendStatus(500);
	}; // End try/catch
}); // End GET loan by id


// ⬇ Adds a new loan object to the public.loans table:
router.post('/add-loan', async (req, res) => {
	const newLoan = req.body;
	const sql = `INSERT INTO loans(borrowers) VALUES (${pgFormat('%L', newLoan)})`;

	try {
		await pool.query(sql);
		res.sendStatus(201);
	} catch (error) {
		console.error('Error /add-loan', { error });
		res.sendStatus(500);
	}; // End try/catch
}); // End POST add loan


// ⬇ Updates a loan object in the public.loans table:
router.put('/update-loan/:loanId/:paidId', async (req, res) => {
	const { loanId, paidId } = req.params;
	const updatedLoan = req.body;
	updatedLoan.paidId = Math.floor(Math.random() * 1000000);

	const sql = `
		UPDATE loans 
		SET borrowers = ${pgFormat('%L', updatedLoan.borrowers)} 
		WHERE 
			loanId = ${pgFormat('%L::int', loanId)} 
			AND borrowers->>'paidId' = ${pgFormat('%L', paidId)}
	`; // End sql

	try {
		await pool.query(sql);
		res.sendStatus(201);
	} catch (error) {
		console.error('Error /update-loan', { error });
		res.sendStatus(500);
	}; // End try/catch
}); // End PUT update loan


// ⬇ Deletes a borrower from a loan object in the public.loans table:
router.put('/update-loan-delete-borrower/:loanId/:paidId', async (req, res) => {
	const { loanId, paidId } = req.params;
	const sql = `
		UPDATE loans
		SET borrowers = (
			SELECT jsonb_agg(elem)
			FROM jsonb_array_elements(borrowers->'borrowers') AS elem
			WHERE (elem->>'paidId')::int <> ${pgFormat('%L::int', paidId)}
		)
		WHERE loanid = ${pgFormat('%L::int', loanId)}
		AND EXISTS (
			SELECT 1
			FROM jsonb_array_elements(borrowers->'borrowers') AS elem
			WHERE (elem->>'paidId')::int = ${pgFormat('%L::int', paidId)}
		);
	`; // End sql

	try {
		await pool.query(sql);
		res.sendStatus(201);
	} catch (error) {
		console.error('Error /update-loan-delete-borrower', { error });
		res.sendStatus(500);
	}; // End try/catch
}); // End PUT update loan


// ⬇ Deletes a loan object from the public.loans table based on LoanId:
router.delete('/delete-loan/:id', async (req, res) => {
	const loanId = req.params.id;
	const sql = `DELETE FROM loans WHERE loanId = ${pgFormat('%L::int', loanId)}`;

	try {
		await pool.query(sql);
		res.sendStatus(201);
	} catch (error) {
		console.error('Error /delete-loan', { error });
		res.sendStatus(500);
	}; // End try/catch
}); // End DELETE loan by id


module.exports = router;