const pg = require('pg');

config = {
	host: "localhost",
	port: 5432,
	database: "ltk_api",
	max: 10,
	idleTimeoutMillis: 30000
}

const pool = new pg.Pool(config);

module.exports = pool;