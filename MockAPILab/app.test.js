const request = require('supertest');
const createApp = require('./index');
const { addDummyData, updateDummyData, deleteBorrowerDummyData } = require('./dummyData');

let app;

beforeAll(() => {
	app = createApp();
	server = app.listen();
});

afterAll((done) => {
	server.close(done);
});

describe('GET /ping', () => {
	test('should return pong', async () => {
		const response = await request(app).get('/ping');
		expect(response.body.message).toBe('🏓');
	});
});

describe('GET /', () => {
	test('should return status 200', async () => {
		const response = await request(app).get('/');
		expect(response.status).toBe(200);
	});
});

describe('GET /ltk/loanData/fetch-all-loans', () => {
	test('should return status 200', async () => {
		const response = await request(app).get('/ltk/loanData/fetch-all-loans');
		expect(response.status).toBe(200);
		expect(response.body).toBeInstanceOf(Array);
	});
});

describe('GET /ltk/loanData/fetch-loan-by-id/:id', () => {
	test('should return status 200', async () => {
		const response = await request(app).get('/ltk/loanData/fetch-loan-by-id/2');
		expect(response.status).toBe(200);
		expect(response.body).toBeInstanceOf(Array);
	});
});

describe('POST /ltk/loanData/add-loan', () => {
	test('should return status 201', async () => {
		const response = await request(app).post('/ltk/loanData/add-loan').send(addDummyData);
		expect(response.status).toBe(201);
	});
});

describe('PUT /ltk/loanData/update-loan/:loanId/:paidId', () => {
	test('should return status 201', async () => {
		const response = await request(app).put(`/ltk/loanData/update-loan/${updateDummyData.loanId}/${updateDummyData.borrowers[0].paidId}`).send(updateDummyData);
		expect(response.status).toBe(201);
	});
});

describe('PUT /ltk/loanData/update-loan-delete-borrower/:loanId/:paidId', () => {
	test('should return status 201', async () => {
		const response = await request(app).put(`/ltk/loanData/update-loan-delete-borrower/${deleteBorrowerDummyData.loanId}/${deleteBorrowerDummyData.borrowers[0].paidId}`);
		expect(response.status).toBe(201);
	});
});

describe('DELETE /ltk/loanData/delete-loan/:loanId', () => {
	test('should return status 201', async () => {
		const response = await request(app).delete(`/ltk/loanData/delete-loan/${Math.floor(Math.random() * 10)}`);
		expect(response.status).toBe(201);
	});
});