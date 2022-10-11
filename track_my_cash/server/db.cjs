const { Pool } = require("pg");

const pool = new Pool({
	user: "postgres",
	password: "hussain",
	host: "localhost",
	port: 5432,
	database: "project",
});

module.exports = pool;
