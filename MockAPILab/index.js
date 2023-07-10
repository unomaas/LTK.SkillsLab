const express = require('express');
const app = express();
const port = 3000;
const isLocal = true;

// ⬇ Separating my PG routes into a different file:
const ltkApiRouter = require('./routes/ltk/index.js');

// ⬇ Using the axios Library to handle the HTTP requests:
const axios = require('axios');

// ⬇ Allows express to parse the JSON body of the request:
app.use(express.json());

// ⬇ Contains different sets of dummy data to use in the tests below: 
const { addDummyData, updateDummyData, deleteBorrowerDummyData } = require('./dummyData.js');

// ⬇ URL Route to ping all of the API endpoints created for this demo: 
app.get('/ping-all-api', async (req, res) => {
	try {
		const promises = [
			// ⬇ Step 4: create a GET method that gets all loan objects
			axios.get('http://localhost:3000/ltk/loanData/fetch-all-loans'),
			// ⬇ Step 5: create a GET method that gets one loan object based on loanId
			axios.get(`http://localhost:3000/ltk/loanData/fetch-loan-by-id/${2}`),
			// ⬇ Step 6: create a POST method that adds a new loan object with an array of borrowers
			axios.post('http://localhost:3000/ltk/loanData/add-loan', addDummyData),
			// ⬇ Step 7: create a PATCH method that updates borrower information based on loanId and pairId
			axios.put(`http://localhost:3000/ltk/loanData/update-loan/${updateDummyData.loanId}/${updateDummyData.borrowers[0].paidId}`, updateDummyData),
			// ⬇ Step 8: create a PATCH or DELETE method that deletes a borrower based on loanId and pairId
			axios.put(`http://localhost:3000/ltk/loanData/update-loan-delete-borrower/${deleteBorrowerDummyData.loanId}/${deleteBorrowerDummyData.borrowers[0].paidId}`),
			// ⬇ Step 9: create a DELETE method that deletes a loan object based on loanId
			axios.delete(`http://localhost:3000/ltk/loanData/delete-loan/${Math.floor(Math.random() * 10)}`),
		];

		const results = await Promise.all(promises);

		const [getAllLoans, getLoanById, addLoan, updateLoan, deleteBorrower, deleteLoan] = results;

		res.json({
			getAllLoans: getAllLoans.data,
			getLoanById: getLoanById.data,
			addLoan: addLoan.status,
			updateLoan: updateLoan.status,
			deleteBorrower: deleteBorrower.status,
			deleteLoan: deleteLoan.status
		});
	} catch (error) {
		res.sendStatus(500);
		console.error('Error /ping-all-api', { error });
	}; // End try/catch
});

app.get("/ping", (req, res) => {
	res.json({
		message: "🏓",
	});
});

app.use('/ltk/loanData', ltkApiRouter);

if (isLocal) {
	//local host
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	});
} else {
	//for lambda export
	module.exports = app;
}
