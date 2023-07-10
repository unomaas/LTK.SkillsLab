const express = require('express');
const router = express.Router();
const pool = require('../../pool');


const dummyDataBorrower1 = {
	"loanId": -1,
	"borrowers": [
		{
			"paidId": 1,
			"firstName": "John",
			"lastName": "Doe",
			"phone": "555-555-5555",
		},
		{
			"paidId": 2,
			"firstName": "Jane",
			"lastName": "Doe",
			"phone": "555-555-5555",
		},
	],
	
}

router.get('/get-all-loans', (req, res) => {
	// console.log(`Ryan Here: get-all-loans the server works \n `, {req} );

	res.json(dummyDataBorrower1)
});


module.exports = router;