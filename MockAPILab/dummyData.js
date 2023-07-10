const addDummyData = {
	"borrowers": [
		{
			"paidId": 9,
			"firstName": "John",
			"lastName": "Franklin",
			"phone": "555-555-5555",
		},
		{
			"paidId": 10,
			"firstName": "Jane",
			"lastName": "Franklin",
			"phone": "555-555-5555",
		},
	],
}

const updateDummyData = {
	"loanId": 2,
	"borrowers": [
		{
			"phone": "555-555-5555",
			"paidId": 1,
			"lastName": "Smith",
			"firstName": "John"
		},
	]
}

const deleteBorrowerDummyData = {
	loanId: 17,
	borrowers: [
		{
			"phone": "555-555-5555",
			"paidId": 9,
			"lastName": "Barry",
			"firstName": "John"
		},
		{
			"phone": "555-555-5555",
			"paidId": 10,
			"lastName": "Barry",
			"firstName": "Jane"
		}
	]
}


module.exports = {
	addDummyData,
	updateDummyData,
	deleteBorrowerDummyData
};