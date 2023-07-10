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
			"paidId": 4,
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

const jsonDefaultData = [
	{
		"loanId": 1,
		"borrowers": [
			{
				"phone": "555-555-5555",
				"paidId": 1,
				"lastName": "Smith",
				"firstName": "John"
			},
			{
				"phone": "555-555-5555",
				"paidId": 2,
				"lastName": "Smith",
				"firstName": "Jane"
			}
		]
	},
	{
		"loanId": 2,
		"borrowers": [
			{
				"phone": "555-555-5555",
				"paidId": 4,
				"lastName": "Smith",
				"firstName": "John"
			},
			{
				"phone": "555-555-5555",
				"paidId": 3,
				"lastName": "Smith",
				"firstName": "Jane"
			}
		]
	},
	{
		"loanId": 3,
		"borrowers": [
			{
				"phone": "555-555-5555",
				"paidId": 5,
				"lastName": "Smith",
				"firstName": "John"
			},
			{
				"phone": "555-555-5555",
				"paidId": 6,
				"lastName": "Smith",
				"firstName": "Jane"
			}
		]
	},
	{
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
	},
]; // End jsonDefaultData




	module.exports = {
		addDummyData,
		updateDummyData,
		deleteBorrowerDummyData,
		jsonDefaultData, 
	};