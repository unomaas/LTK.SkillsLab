const express = require('express');
const app = express();
const port = 3000;
const isLocal = true;

// ⬇ Separating my PG routes into a different file:
const ltkApiRouter = require('./routes/ltk/index.js');

// ⬇ Using the axios Library to handle the HTTP requests:
const axios = require('axios');
app.use(express.json());


app.get('/ping-all-api', async (req, res) => {

	try {
		const promises = [
			axios.get('http://localhost:3000/ltk/loanData/get-all-loans'),
		];

		const results = await Promise.all(promises);

		const [getAllLoans] = results;


		res.json({
			getAllLoans: getAllLoans.data,

		});

	} catch (error) {
		// res.sendStatus(500);
		console.log('no luck', {error});
	}


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
